import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Bus, Github } from 'lucide-react';

// Main layout component with persistent navigation and footer
const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
      {/* Sticky Navigation Bar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-linear-to-r from-blue-600 to-blue-500 shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo / Branding */}
            <div className="flex items-center">
              <Link
                to="/"
                className={`flex flex-col items-start font-bold transition duration-200 ${
                  isScrolled ? 'text-blue-700' : 'text-white hover:text-blue-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Bus className="h-8 w-8" />
                  <span className="text-lg hidden sm:inline">LeadCity Shuttle</span>
                </div>
                <span className="text-xs hidden sm:inline">Safe rides. Shared smart.</span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <Link
                to="/"
                className={`font-medium transition duration-200 text-sm md:text-base ${
                  isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link
                to="/book"
                className={`font-medium transition duration-200 text-sm md:text-base ${
                  isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
                }`}
              >
                Book
              </Link>
              <Link
                to="/admin"
                className={`inline-flex items-center gap-1 text-sm font-semibold px-4 py-2 rounded-full transition duration-200 ${
                  isScrolled 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                Operator
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area - grows to fill space */}
      <main className="grow w-full bg-gray-50">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12 mt-auto border-t-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bus className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-bold">LCU Shuttle</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Safe, affordable group transport for Lead City University students.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-300 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/book" className="text-gray-400 hover:text-white transition">
                    Book a Ride
                  </Link>
                </li>
                <li>
                  <Link to="/admin" className="text-gray-400 hover:text-white transition text-xs font-medium px-2 py-1 rounded bg-gray-800 inline-block">
                    Operator View
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Info Section */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-300 mb-4">
                Route Info
              </h4>
              <p className="text-sm text-gray-400 mb-2">
                <strong>From:</strong> Soka Junction
              </p>
              <p className="text-sm text-gray-400">
                <strong>To:</strong> Lead City University (Gate & Car Park)
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            {/* Bottom Bar */}
            <div className="flex items-center">
              <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
                © 2026 Lead City Shuttle Pilot. Built for Demo & Presentation.
              </p>
              {/* <p className="text-gray-500 text-xs">
                Created with React + Vite + Tailwind CSS
              </p> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
