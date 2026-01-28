import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TripProvider } from './context/TripContext'
import { AuthProvider, useAuth } from './context/AuthContext'
import Layout from './components/Layout.jsx'
import ProtectedRoute from './components/ProtectedRoute'
import LandingPage from './pages/Landingpage.jsx'
import BookingPage from './pages/Bookingpage.jsx'
import AdminPage from './pages/Adminpage.jsx'
import AuthenticationPage from './pages/AuthenticationPage'
import './App.css'

function AppContent() {
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route
            path="book"
            element={
              <ProtectedRoute>
                <BookingPage />
              </ProtectedRoute>
            }
          />
          <Route path="admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <TripProvider>
        <AppContent />
      </TripProvider>
    </AuthProvider>
  )
}

export default App
