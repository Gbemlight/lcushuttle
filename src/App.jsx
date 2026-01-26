import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TripProvider } from './context/TripContext'
import Layout from './components/Layout.jsx'
import LandingPage from './pages/Landingpage.jsx'
import BookingPage from './pages/Bookingpage.jsx'
import AdminPage from './pages/Adminpage.jsx'
import './App.css'

function App() {
  return (
    <TripProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="book" element={<BookingPage />} />
            <Route path="admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TripProvider>
  )
}

export default App
