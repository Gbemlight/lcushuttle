import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TripProvider } from './context/TripContext';
import Layout from './components/Layout';

// Pages
import LandingPage from './pages/Landingpage';
import BookingPage from './pages/Bookingpage';
import AdminPage from './pages/Adminpage';
import LoginPage from './pages/LoginPage';
import AuthenticationPage from './pages/AuthenticationPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import StudentDashboard from './pages/StudentDashboard';
import TrackingPage from './pages/TrackingPage';
import HistoryPage from './pages/HistoryPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <AuthProvider>
      <TripProvider>
        <Router>
          <Routes>
            {/* Layout Routes - These pages will have the Navbar and Footer */}
            <Route element={<Layout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<StudentDashboard />} />
              <Route path="/tracking" element={<TrackingPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>

            {/* Standalone Routes - No Layout */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/auth" element={<AuthenticationPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </Router>
      </TripProvider>
    </AuthProvider>
  );
};

export default App;