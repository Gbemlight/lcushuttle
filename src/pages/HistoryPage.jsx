import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const HistoryPage = () => {
  const history = [
    { id: 1, date: 'Oct 24, 2023', time: '08:30 AM', route: 'Campus -> Main Gate', status: 'Completed' },
    { id: 2, date: 'Oct 23, 2023', time: '04:30 PM', route: 'Main Gate -> Campus', status: 'Completed' },
    { id: 3, date: 'Oct 22, 2023', time: '08:30 AM', route: 'Campus -> Hostel A', status: 'Cancelled' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Ride History</h1>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {history.map((ride) => (
            <li key={ride.id}>
              <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-blue-600 truncate">{ride.route}</p>
                  <div className="ml-2 shrink-0 flex">
                    <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      ride.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {ride.status}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <Calendar className="shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      {ride.date}
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <Clock className="shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      {ride.time}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HistoryPage;