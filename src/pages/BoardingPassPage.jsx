import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Download, Share2, Loader } from 'lucide-react';
import { useAuth } from './AuthContext';
//  Note: Professional implementation uses qrcode.react for dynamic QR generation
import { QRCodeSVG } from 'qrcode.react';

const BoardingPassPage = () => {
  const { user, loading, isAuthenticated } = useAuth();

  if (loading) return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center">
      <Loader className="h-8 w-8 text-white animate-spin" />
    </div>
  );

  if (!isAuthenticated && !loading) return <Navigate to="/login" />;
  
  // Mock booking data (In a full app, this would be fetched from your TripContext)
  const ticket = {
    id: "TKT-" + Date.now().toString().slice(-6),
    time: "08:30 AM",
    date: new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short' }),
    pickup: "Soka Junction",
    dropoff: "Main Gate",
  };

  return (
    <div className="min-h-screen bg-blue-600 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Link to="/dashboard" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium">
          <ArrowLeft className="h-5 w-5 mr-2" /> Back to Dashboard
        </Link>

        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
          {/* Ticket Header */}
          <div className="bg-blue-700 p-6 text-white text-center">
            <h2 className="text-xl font-bold uppercase tracking-widest">Boarding Pass</h2>
            <p className="text-blue-200 text-sm mt-1">Lead City University Shuttle</p>
          </div>

          {/* Ticket Body */}
          <div className="p-8">
            {/* QR Code Section */}
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="p-4 bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl mb-4">
                {/* Placeholder for QR Code */}
                <div className="w-48 h-48 bg-white flex items-center justify-center border border-gray-100 relative">
                   <div className="grid grid-cols-4 grid-rows-4 gap-1 opacity-10">
                      {[...Array(16)].map((_, i) => <div key={i} className="w-8 h-8 bg-black"></div>)}
                   </div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      { <QRCodeSVG value={JSON.stringify({id: ticket.id, user: user?.matricNo})} size={180} /> }
                      <p className="text-[10px] font-mono text-gray-400 text-center px-4 italic">QRCodeSVG Component Value: {ticket.id}</p>
                   </div>
                </div>
              </div>
              <p className="text-xs font-mono text-gray-400 uppercase tracking-tighter">Ticket Reference: {ticket.id}</p>
            </div>

            {/* Passenger & Trip Details */}
            <div className="space-y-6">
              <div className="flex justify-between border-b border-gray-100 pb-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Passenger</p>
                  <p className="font-bold text-gray-900">{user?.fullName || 'Student Name'}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 uppercase font-bold">Matric No</p>
                  <p className="font-bold text-gray-900">{user?.matricNo || 'LCU-XXXX'}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-600 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Departure</p>
                    <p className="text-sm font-bold text-gray-900">{ticket.time}</p>
                    <p className="text-[10px] text-gray-400">{ticket.date}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Route</p>
                    <p className="text-sm font-bold text-gray-900">{ticket.pickup}</p>
                    <p className="text-[10px] text-gray-400">to {ticket.dropoff}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-3">
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95">
                <Download className="h-4 w-4" /> Save
              </button>
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95">
                <Share2 className="h-4 w-4" /> Share
              </button>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 border-t border-dashed border-gray-200 text-center">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">Verified Boarding Pass • Lead City Shuttle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardingPassPage;