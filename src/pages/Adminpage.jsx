import React from 'react';
import { useTrips } from '../context/TripContext';
import { Users, AlertCircle, TrendingUp, Bus, MapPin, Clock, BarChart3 } from 'lucide-react';

// Operator/Admin dashboard to view trip details, occupancy, and passenger info
const AdminPage = () => {
  const { trips } = useTrips();

  // Calculate total stats for all trips
  const totalBooked = trips.reduce((acc, trip) => acc + trip.booked, 0);
  const totalCapacity = trips.reduce((acc, trip) => acc + trip.capacity, 0);
  const occupancyRate = Math.round((totalBooked / totalCapacity) * 100);
  const totalAvailable = totalCapacity - totalBooked;

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Operator Dashboard</h1>
          <p className="text-lg text-gray-600">Live view of today's shuttle operations and bookings</p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Total Passengers Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Total Passengers</h3>
              <Users className="h-6 w-6 text-brand-600" />
            </div>
            <p className="text-4xl font-bold text-gray-900">{totalBooked}</p>
            <p className="text-sm text-gray-500 mt-2">Out of {totalCapacity} total capacity</p>
          </div>

          {/* Occupancy Rate Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Occupancy Rate</h3>
              <BarChart3 className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-4xl font-bold text-gray-900">{occupancyRate}%</p>
            <p className="text-sm text-gray-500 mt-2">Fleet capacity used</p>
          </div>

          {/* Available Seats Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Available Seats</h3>
              <AlertCircle className="h-6 w-6 text-amber-600" />
            </div>
            <p className="text-4xl font-bold text-gray-900">{totalAvailable}</p>
            <p className="text-sm text-gray-500 mt-2">Remaining across all trips</p>
          </div>

          {/* Active Trips Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Active Trips</h3>
              <Bus className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-4xl font-bold text-gray-900">{trips.length}</p>
            <p className="text-sm text-gray-500 mt-2">Scheduled for today</p>
          </div>
        </div>

        {/* Sponsor-Facing Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 p-6">
            <h3 className="text-sm font-semibold text-purple-900 uppercase tracking-wide mb-3">📊 Business Metrics</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-purple-800 font-medium">Average Daily Occupancy</span>
                <span className="text-2xl font-bold text-purple-600">{occupancyRate}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-purple-800 font-medium">Projected Monthly Riders</span>
                <span className="text-2xl font-bold text-purple-600">1.2K</span>
              </div>
              <p className="text-xs text-purple-700 mt-3 italic">Strong engagement metrics for sponsors</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200 p-6">
            <h3 className="text-sm font-semibold text-amber-900 uppercase tracking-wide mb-3">💡 Sponsor Insights</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-amber-800 font-medium">Daily Impressions</span>
                <span className="text-2xl font-bold text-amber-600">50+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-amber-800 font-medium">Target Demographics</span>
                <span className="text-2xl font-bold text-amber-600">18-25</span>
              </div>
              <p className="text-xs text-amber-700 mt-3 italic">Premium student audience reach</p>
            </div>
          </div>
        </div>

        {/* Trip Details Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Trip Manifest</h2>

          {/* Trip List */}
          <div className="space-y-4">
            {trips.map((trip) => {
              const occupancy = Math.round((trip.booked / trip.capacity) * 100);
              const isFull = trip.booked >= trip.capacity;
              const isAlmostFull = trip.booked >= trip.capacity * 0.9;

              return (
                <div
                  key={trip.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
                >
                  {/* Trip Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      {/* Time Badge */}
                      <div className="bg-brand-100 text-brand-700 rounded-lg p-4 min-w-max">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="h-5 w-5" />
                          <span className="text-sm font-semibold">{trip.time}</span>
                        </div>
                      </div>

                      {/* Trip Info */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-5 w-5 text-gray-400" />
                          <p className="text-lg font-semibold text-gray-900">{trip.route}</p>
                        </div>
                        <p className="text-sm text-gray-600">
                          {trip.booked} of {trip.capacity} seats booked
                        </p>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div>
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold inline-block ${
                          isFull
                            ? 'bg-red-100 text-red-800'
                            : isAlmostFull
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {isFull ? 'FULL' : isAlmostFull ? 'ALMOST FULL' : 'FILLING'}
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-gray-600 uppercase">Occupancy</span>
                      <span className="text-sm font-bold text-gray-900">{occupancy}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${
                          isFull ? 'bg-red-600' : isAlmostFull ? 'bg-amber-500' : 'bg-green-600'
                        }`}
                        style={{ width: `${occupancy}%` }}
                      />
                    </div>
                  </div>

                  {/* Capacity Info */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 uppercase font-semibold tracking-wide mb-1">
                        Booked
                      </p>
                      <p className="text-2xl font-bold text-gray-900">{trip.booked}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 uppercase font-semibold tracking-wide mb-1">
                        Available
                      </p>
                      <p className="text-2xl font-bold text-green-600">
                        {trip.capacity - trip.booked}
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 uppercase font-semibold tracking-wide mb-1">
                        Capacity
                      </p>
                      <p className="text-2xl font-bold text-gray-900">{trip.capacity}</p>
                    </div>
                  </div>

                  {/* Passenger List */}
                  {trip.passengers && trip.passengers.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm font-semibold text-gray-900 mb-3">
                        Passengers ({trip.passengers.length})
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                        {trip.passengers.map((passenger, idx) => (
                          <div
                            key={idx}
                            className="bg-brand-50 text-brand-900 text-xs font-medium px-3 py-2 rounded-lg"
                          >
                            {passenger}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <p className="text-sm text-blue-900">
            <span className="font-semibold">Daily Summary:</span> {totalBooked} students booked across {trips.length} trips.
            Average occupancy is {occupancyRate}%. All trips operational and running on schedule.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
