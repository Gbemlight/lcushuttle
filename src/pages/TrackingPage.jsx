import React from 'react';
import { MapPin } from 'lucide-react';

const TrackingPage = () => {
  return (
    <div className="h-[calc(100vh-64px)] relative bg-gray-200">
      {/* Mock Map Background */}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
        <div className="text-center text-gray-400">
          <MapPin className="h-16 w-16 mx-auto mb-2 opacity-50" />
          <p className="text-xl font-semibold">Map View Placeholder</p>
          <p>Google Maps / Leaflet Integration</p>
        </div>
        
        {/* Mock Bus Marker */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="h-4 w-4 bg-blue-600 rounded-full animate-ping absolute opacity-75"></div>
            <div className="h-4 w-4 bg-blue-600 rounded-full border-2 border-white shadow-lg relative z-10"></div>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs font-bold whitespace-nowrap">
              Shuttle 1 (5 mins away)
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Info */}
      <div className="absolute bottom-8 left-4 right-4 md:left-8 md:w-96 bg-white p-4 rounded-xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">Live Tracking</h3>
          <span className="flex items-center text-green-600 text-sm font-medium">
            <span className="h-2 w-2 bg-green-600 rounded-full mr-2 animate-pulse"></span>
            Live
          </span>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="shrink-0 mt-1">
              <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">Current Location</p>
              <p className="text-sm text-gray-500">Admin Block</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="shrink-0 mt-1">
              <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">Next Stop</p>
              <p className="text-sm text-gray-500">Main Gate (ETA: 5 mins)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;