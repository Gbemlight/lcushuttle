import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './pages/AuthContext';
import { TripProvider } from './context/TripContext';
import Layout from './Layout';

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
import BoardingPassPage from './pages/BoardingPassPage';

// Protected Route Component to restrict access to authenticated users
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <AuthProvider>
      <TripProvider>
        <Router>
          <Routes>
            {/* Layout Routes - These pages will have the Navbar and Footer */}
            <Route element={<Layout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />
              <Route path="/tracking" element={<ProtectedRoute><TrackingPage /></ProtectedRoute>} />
              <Route path="/history" element={<ProtectedRoute><HistoryPage /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
              <Route path="/boarding-pass" element={<ProtectedRoute><BoardingPassPage /></ProtectedRoute>} />
            </Route>

            {/* Standalone Routes - No Layout */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/auth" element={<AuthenticationPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/book" element={<ProtectedRoute><BookingPage /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
          </Routes>
        </Router>
      </TripProvider>
    </AuthProvider>
  );
};

export default App;