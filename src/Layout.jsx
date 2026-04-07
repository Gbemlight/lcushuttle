import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './pages/AuthContext';
import { Menu, X, Bus, User, LogOut, Home, MapPin, Calendar, LayoutDashboard } from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogoutClick = () => {
    setIsMenuOpen(false);
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    if (logout) logout();
    navigate('/login');
    setShowLogoutModal(false);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" />, public: true },
    { name: 'Book a Ride', path: '/book', icon: <Bus className="w-5 h-5" /> },
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'Tracking', path: '/tracking', icon: <MapPin className="w-5 h-5" /> },
    { name: 'History', path: '/history', icon: <Calendar className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" onClick={closeMenu} className="flex items-center gap-2 group">
                <div className="bg-blue-600 p-2 rounded-xl group-hover:bg-blue-700 transition-colors shadow-blue-200 shadow-md">
                  <Bus className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900 tracking-tight">
                  LeadCity<span className="text-blue-600">Shuttle</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                (link.public || isAuthenticated) && (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                      location.pathname === link.path
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-500 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}

              <div className="h-6 w-px bg-gray-200 mx-2"></div>

              {isAuthenticated ? (
                <div className="flex items-center gap-4">
                  <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-blue-600 transition-colors relative group">
                    <User className="h-5 w-5" />
                    <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                  </Link>
                  <button
                    onClick={handleLogoutClick}
                    className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-red-100 transition-all active:scale-95"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link
                    to="/login"
                    className="text-gray-600 font-medium hover:text-gray-900 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/auth"
                    className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-blue-200 shadow-md"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="relative inline-flex items-center justify-center p-2 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-6 overflow-hidden">
                  <span 
                    className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                      isMenuOpen ? 'rotate-45 translate-y-3' : 'translate-y-1'
                    }`}
                  />
                  <span 
                    className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                      isMenuOpen ? 'opacity-0 translate-x-3' : 'translate-y-3'
                    }`}
                  />
                  <span 
                    className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                      isMenuOpen ? '-rotate-45 translate-y-3' : 'translate-y-5'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                (link.public || isAuthenticated) && (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      location.pathname === link.path
                        ? 'bg-blue-50 text-blue-600 translate-x-1'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            <div className="h-px bg-gray-100 my-2"></div>

            <div className="space-y-3">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/profile"
                    onClick={closeMenu}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  >
                    <User className="w-5 h-5" />
                    My Profile
                  </Link>
                  <button
                    onClick={handleLogoutClick}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-red-600 hover:bg-red-50 transition-colors text-left"
                  >
                    <LogOut className="w-5 h-5" />
                    Sign Out
                  </button>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-4 px-2">
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="flex justify-center items-center py-3 border border-gray-200 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/auth"
                    onClick={closeMenu}
                    className="flex justify-center items-center py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="grow">
        <Outlet />
      </main>
      
      {/* Footer */}
       <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} LeadCity Shuttle. Built for students.
            </p>
        </div>
      </footer>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl scale-100 animate-in zoom-in-95 duration-200">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <LogOut className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sign Out?</h3>
              <p className="text-sm text-gray-500 mb-6">
                Are you sure you want to sign out? You will need to log in again to access your dashboard.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmLogout}
                  className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;