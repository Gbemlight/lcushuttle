import React, { useState } from 'react';
import { Mail, Phone, MapPin, Plus, Trash2 } from 'lucide-react';

const ProfilePage = () => {
  const [addresses, setAddresses] = useState([
    { id: 1, label: 'Home', location: 'Block C, Room 12' },
    { id: 2, label: 'Library', location: 'Main Library Entrance' },
  ]);
  const [newAddress, setNewAddress] = useState('');

  const addAddress = () => {
    if (newAddress) {
      setAddresses([...addresses, { id: Date.now(), label: 'Custom', location: newAddress }]);
      setNewAddress('');
    }
  };

  const removeAddress = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile & Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Personal Info */}
        <div className="md:col-span-1">
          <div className="bg-white shadow rounded-xl p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold">
                JD
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
                <p className="text-gray-500">Student</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-3" />
                <span>john.doe@leadcity.edu.ng</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-3" />
                <span>+234 801 234 5678</span>
              </div>
            </div>
          </div>
        </div>

        {/* Addresses */}
        <div className="md:col-span-2">
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Saved Addresses</h3>
            
            <div className="space-y-4 mb-6">
              {addresses.map((addr) => (
                <div key={addr.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">{addr.label}</p>
                      <p className="text-sm text-gray-500">{addr.location}</p>
                    </div>
                  </div>
                  <button onClick={() => removeAddress(addr.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add new location..."
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
              />
              <button 
                onClick={addAddress}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
              >
                <Plus className="h-5 w-5 mr-1" /> Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;