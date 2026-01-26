import React, { useState } from 'react';
import { useTrips } from '../context/TripContext';
import { CheckCircle, Clock, MapPin, Users, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Booking page component - allows students to select trips, dropoff, and reserve seats
const BookingPage = () => {
  const { trips, bookSeat, getAvailableSeats, dropoffLocations } = useTrips();
  const [selectedTripId, setSelectedTripId] = useState(null);
  const [selectedDropoff, setSelectedDropoff] = useState('gate');
  const [showModal, setShowModal] = useState(false);
  const [bookedTrip, setBookedTrip] = useState(null);

  // Handle booking confirmation
  const handleBook = () => {
    if (!selectedTripId || !selectedDropoff) return;

    const trip = trips.find(t => t.id === selectedTripId);
    const dropoff = dropoffLocations.find(d => d.id === selectedDropoff);

    // Book the seat
    const booking = bookSeat(selectedTripId, selectedDropoff, `Student_${Date.now()}`);

    if (booking) {
      setBookedTrip({ ...trip, dropoff: dropoff.name });
      setShowModal(true);
    }
  };

  const selectedTripDetails = trips.find(t => t.id === selectedTripId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="mb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium mb-6">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Book Your Ride</h1>
          <p className="text-lg text-gray-600">Select your preferred departure time from Soka Junction to Lead City University</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Trip Selection */}
          <div className="lg:col-span-2">
            {/* Info Alert */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-900">Route Information</p>
                <p className="text-sm text-blue-800 mt-1">All trips depart from Soka Junction and arrive at Lead City University</p>
              </div>
            </div>

            {/* Trip Selection */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Trips</h2>
            <div className="space-y-4 mb-8">
              {trips.map((trip) => {
                const availableSeats = trip.capacity - trip.booked;
                const isFull = availableSeats <= 0;
                const isSelected = selectedTripId === trip.id;
                const isAlmostFull = availableSeats <= 3;

                return (
                  <div
                    key={trip.id}
                    onClick={() => !isFull && setSelectedTripId(trip.id)}
                    className={`
                      rounded-xl border-2 p-6 cursor-pointer transition-all shadow-sm
                      ${isSelected
                        ? 'border-brand-600 ring-2 ring-brand-600 bg-brand-50'
                        : 'border-gray-200 hover:border-brand-300 hover:shadow-md'
                      }
                      ${isFull ? 'opacity-50 cursor-not-allowed bg-gray-100' : 'bg-white'}
                    `}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        {/* Trip Time Icon */}
                        <div
                          className={`p-3 rounded-lg shrink-0 ${
                            isSelected ? 'bg-brand-200 text-brand-700' : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          <Clock size={24} />
                        </div>

                        {/* Trip Details */}
                        <div className="flex-1">
                          <p className="text-2xl font-bold text-gray-900">{trip.time}</p>
                          <p className="text-gray-600 flex items-center gap-2 mt-1">
                            <MapPin size={16} className="shrink-0" />
                            {trip.route}
                          </p>
                          <div className="flex items-center gap-4 mt-3">
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Users size={16} />
                              <span>{trip.booked} booked out of {trip.capacity}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Seat Status */}
                      <div className="text-right ml-4 shrink-0">
                        <div
                          className={`text-2xl font-bold ${
                            isFull
                              ? 'text-red-600'
                              : isAlmostFull
                                ? 'text-amber-600'
                                : 'text-green-600'
                          }`}
                        >
                          {isFull ? 'FULL' : `${availableSeats}`}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {isFull ? 'No seats available' : 'seats available'}
                        </p>
                        {isAlmostFull && !isFull && (
                          <p className="text-xs text-amber-600 font-semibold mt-1">Filling up!</p>
                        )}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            isFull
                              ? 'bg-red-600'
                              : isAlmostFull
                                ? 'bg-amber-500'
                                : 'bg-green-600'
                          }`}
                          style={{ width: `${(trip.booked / trip.capacity) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-24 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Booking Summary</h3>

              {/* Selected Trip Summary */}
              {selectedTripDetails ? (
                <div className="space-y-6">
                  {/* Trip Info */}
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Selected Trip</p>
                    <div className="bg-brand-50 rounded-lg p-4">
                      <p className="text-2xl font-bold text-brand-600">{selectedTripDetails.time}</p>
                      <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
                        <MapPin size={14} />
                        Soka → LCU
                      </p>
                    </div>
                  </div>

                  {/* Drop-off Selection */}
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Drop-off Location</p>
                    <div className="space-y-2">
                      {dropoffLocations.map((location) => (
                        <button
                          key={location.id}
                          onClick={() => setSelectedDropoff(location.id)}
                          className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                            selectedDropoff === location.id
                              ? 'border-brand-600 bg-brand-50'
                              : 'border-gray-200 bg-white hover:border-gray-300'
                          }`}
                        >
                          <p className="font-medium text-gray-900 text-sm">{location.name}</p>
                          <p className="text-xs text-gray-600 mt-1">{location.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <p className="text-xs font-semibold text-green-900 uppercase tracking-wide mb-2">Availability</p>
                    <p className="text-lg font-bold text-green-700">
                      {getAvailableSeats(selectedTripDetails.id)} seats left
                    </p>
                  </div>

                  {/* Book Button */}
                  <button
                    onClick={handleBook}
                    disabled={!selectedDropoff}
                    className="w-full bg-brand-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
                  >
                    Reserve Seat
                  </button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Clock className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Select a trip to begin</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && bookedTrip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-sm w-full p-8 text-center shadow-2xl">
            {/* Success Icon */}
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>

            {/* Success Message */}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600 text-sm mb-6">Your seat has been reserved.</p>

            {/* Booking Details */}
            <div className="bg-gray-50 rounded-lg p-5 mb-6 text-left space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Departure Time</span>
                <span className="font-semibold text-gray-900">{bookedTrip.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Route</span>
                <span className="font-semibold text-gray-900">Soka → LCU</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Drop-off</span>
                <span className="font-semibold text-gray-900">{bookedTrip.dropoff}</span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => {
                setShowModal(false);
                setSelectedTripId(null);
              }}
              className="w-full bg-brand-600 text-white py-3 rounded-lg font-semibold hover:bg-brand-700 transition-all"
            >
              Back to Bookings
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
