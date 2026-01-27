import React, { createContext, useState, useContext } from 'react';

const TripContext = createContext();

// Mock Data: Daily scheduled trips from Soka Junction to Lead City University
const INITIAL_TRIPS = [
  {
    id: 1,
    route: 'Soka Junction → Lead City University',
    shortRoute: 'Soka → LCU',
    time: '07:30 AM',
    duration: '~25 mins',
    capacity: 30,
    booked: 18,
    passengers: ['Chioma', 'Bimbo', 'Adekunle', 'Zainab', 'Obinna', 'Fatima', 'Tunde', 'Amara', 'Kayode', 'Blessing', 'Chukwu', 'Adanna', 'Segun', 'Folake', 'Ikechukwu', 'Nia', 'Marcus', 'Zara'],
    status: 'Filling',
    isPopular: false
  },
  {
    id: 2,
    route: 'Soka Junction → Lead City University',
    shortRoute: 'Soka → LCU',
    time: '08:30 AM',
    duration: '~25 mins',
    capacity: 30,
    booked: 28,
    passengers: ['David', 'Funke', 'Emeka', 'Aisha', 'Taiwo', 'Damilola', 'Kemi', 'Samuel', 'Blessing', 'Tobias', 'Chidinma', 'Ibrahim', 'Gloria', 'Iniobong', 'Jude', 'Atanda', 'Vivian', 'Pascal', 'Afolabi', 'Rotimi', 'Chinyere', 'Yusuf', 'Olamide', 'Tayo', 'Ifeanyi', 'Temitope', 'Adewale', 'Chinelo'],
    status: 'Filling',
    isPopular: true
  },
  {
    id: 3,
    route: 'Soka Junction → Lead City University',
    shortRoute: 'Soka → LCU',
    time: '04:30 PM',
    duration: '~25 mins',
    capacity: 35,
    booked: 5,
    passengers: ['Leah', 'Amobi', 'Hauwa', 'Prosper', 'Ruth'],
    status: 'Filling',
    isPopular: false
  },
];

// Mock booking history (for demo purposes)
const MOCK_BOOKING_HISTORY = [
  { id: 1, time: '08:30 AM', date: 'Today', dropoff: 'Gate', status: 'Upcoming' },
  { id: 2, time: '08:30 AM', date: 'Yesterday', dropoff: 'Car Park', status: 'Completed' },
  { id: 3, time: '07:30 AM', date: '2 days ago', dropoff: 'Gate', status: 'Completed' },
];

// Available dropoff locations
const DROPOFF_LOCATIONS = [
  { id: 'gate', name: 'School Gate (Main Entrance)', description: 'Drop-off at main gate' },
  { id: 'carpark', name: 'School Car Park', description: 'Drop-off at student parking area' }
];

export const TripProvider = ({ children }) => {
  const [trips, setTrips] = useState(INITIAL_TRIPS);
  const [bookings, setBookings] = useState([]);
  const [userBookingHistory] = useState(MOCK_BOOKING_HISTORY);
  const bookSeat = (tripId, dropoffLocation, passengerName = 'Anonymous Passenger') => {
    let bookingSuccessful = false;

    setTrips(prevTrips => prevTrips.map(trip => {
      if (trip.id === tripId) {
        // Prevent booking if full
        if (trip.booked >= trip.capacity) return trip;

        const newBooked = trip.booked + 1;
        bookingSuccessful = true;

        return {
          ...trip,
          booked: newBooked,
          passengers: [...trip.passengers, passengerName],
          status: newBooked >= trip.capacity ? 'Full' : 'Filling'
        };
      }
      return trip;
    }));

    // Log the booking
    if (bookingSuccessful) {
      const trip = trips.find(t => t.id === tripId);
      const booking = {
        id: Date.now(),
        tripId,
        time: trip.time,
        dropoff: dropoffLocation,
        passengerName,
        bookingDate: new Date().toLocaleString()
      };
      setBookings(prev => [booking, ...prev]);
      return booking;
    }

    return null;
  };

  // Get trip by ID
  const getTripById = (tripId) => trips.find(t => t.id === tripId);

  // Get available seats for a trip
  const getAvailableSeats = (tripId) => {
    const trip = getTripById(tripId);
    return trip ? trip.capacity - trip.booked : 0;
  };

  return (
    <TripContext.Provider value={{
      trips,
      bookings,
      userBookingHistory,
      bookSeat,
      getTripById,
      getAvailableSeats,
      dropoffLocations: DROPOFF_LOCATIONS
    }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTrips = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTrips must be used within TripProvider');
  }
  return context;
};
