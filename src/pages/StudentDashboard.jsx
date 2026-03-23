import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Bus, History, Navigation } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const StudentDashboard = () => {
  const { user } = useAuth();

  // Get the first name for a more personal greeting
  const firstName = user?.fullName?.split(' ')[0] || 'Student';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-lg text-gray-600 mt-1">Welcome back, {firstName}!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Quick Actions */}
        <Link to="/book" className="bg-blue-600 p-6 rounded-xl shadow-md text-white hover:bg-blue-700 transition-colors">
          <Bus className="h-8 w-8 mb-4" />
          <h3 className="text-lg font-semibold">Book a Ride</h3>
          <p className="text-blue-100 text-sm mt-1">Schedule your next trip</p>
        </Link>
        
        <Link to="/tracking" className="bg-green-600 p-6 rounded-xl shadow-md text-white hover:bg-green-700 transition-colors">
          <Navigation className="h-8 w-8 mb-4" />
          <h3 className="text-lg font-semibold">Track Shuttle</h3>
          <p className="text-green-100 text-sm mt-1">View live location</p>
        </Link>

        <Link to="/history" className="bg-purple-600 p-6 rounded-xl shadow-md text-white hover:bg-purple-700 transition-colors">
          <History className="h-8 w-8 mb-4" />
          <h3 className="text-lg font-semibold">Ride History</h3>
          <p className="text-purple-100 text-sm mt-1">View past trips</p>
        </Link>
      </div>

      {/* Active/Upcoming Ride */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-4 border-blue-500">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Upcoming Ride</h3>
            <div className="flex items-center text-gray-600 mb-1">
              <Clock className="h-4 w-4 mr-2" />
              <span>08:30 AM - Today</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Main Gate Drop-off</span>
            </div>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Confirmed</span>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;