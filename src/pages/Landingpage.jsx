import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Clock, ArrowRight, CheckCircle, Zap, Shield, Heart, Lock, Route, Users2, Phone, Award, Mail, X } from 'lucide-react';

const LandingPage = () => {
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [showImpactModal, setShowImpactModal] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white text-gray-900 py-24 md:py-32">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-200 blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-blue-100 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-blue-50 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Brand Section */}
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">LeadCity Shuttle</h2>
              <p className="text-lg md:text-xl text-gray-600 italic">Safe rides. Shared smart.</p>
            </div>

            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-medium text-sm animate-pulse-slow">
              ✨ Reliable Campus Transport
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight text-gray-900">
              Seamless Commute to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mt-2">Lead City University</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 font-light">
              Experience safe, comfortable, and punctual shuttle services from Soka Junction directly to campus. The smart choice for every student.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link
                to="/book"
                className="group relative inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book a Ride
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => setShowPartnerModal(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-gray-700 border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="mb-6 inline-block p-4 rounded-2xl bg-brand-100 text-brand-600">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Direct Route</h3>
              <p className="text-gray-600 leading-relaxed">
                Non-stop service from Soka Junction straight to Lead City University Gate & Car Park. No delays.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="mb-6 inline-block p-4 rounded-2xl bg-accent-100 text-accent-600">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Premium Comfort</h3>
              <p className="text-gray-600 leading-relaxed">
                Spacious seating in our modern fleet. Enjoy a comfortable ride with AC and plenty of legroom.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="mb-6 inline-block p-4 rounded-2xl bg-brand-100 text-brand-600">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Punctual Schedule</h3>
              <p className="text-gray-600 leading-relaxed">
                Reliable departures at 7:30 AM, 8:30 AM, and 4:30 PM. We value your time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Built on Trust & Safety</h2>
            <p className="text-xl text-gray-500">Your security is our top priority</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Verified Drivers */}
            <div className="text-center p-6">
              <div className="inline-block p-4 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Verified Drivers</h3>
              <p className="text-gray-600 text-sm">Background checked & licensed professionals</p>
            </div>

            {/* Fixed Routes */}
            <div className="text-center p-6">
              <div className="inline-block p-4 rounded-full bg-green-100 text-green-600 mb-4">
                <Route className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fixed Routes</h3>
              <p className="text-gray-600 text-sm">No detours or unexpected changes</p>
            </div>

            {/* Student-Only */}
            <div className="text-center p-6">
              <div className="inline-block p-4 rounded-full bg-purple-100 text-purple-600 mb-4">
                <Users2 className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Student-Only Rides</h3>
              <p className="text-gray-600 text-sm">Safe, verified peer community</p>
            </div>

            {/* 24/7 Support */}
            <div className="text-center p-6">
              <div className="inline-block p-4 rounded-full bg-red-100 text-red-600 mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Emergency contact always available</p>
            </div>

            {/* School Partner */}
            <div className="text-center p-6">
              <div className="inline-block p-4 rounded-full bg-amber-100 text-amber-600 mb-4">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">School Partner</h3>
              <p className="text-gray-600 text-sm">Approved by Lead City University</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Who This Is For</h2>
            <p className="text-xl text-gray-500">Built for students, schools, and forward-thinking sponsors</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Students Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">For Students</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Affordable, stress-free transport</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Book in seconds, travel with ease</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Verified peers & safe community</span>
                </li>
              </ul>
            </div>

            {/* Schools Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-green-600">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">For Schools</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Safer student movement & tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Real-time occupancy data insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Reduce campus parking & congestion</span>
                </li>
              </ul>
            </div>

            {/* Sponsors Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-purple-600">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">For Sponsors</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Direct access to student audience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Brand visibility 3 times daily</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Revenue share & partnership models</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Today's Schedule</h2>
            <p className="text-xl text-gray-500">Real-time availability for upcoming trips</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Trip 1 */}
            <div className="group bg-gradient-to-b from-white to-gray-50 rounded-2xl p-1 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-white rounded-xl p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-gray-900">7:30 <span className="text-lg text-gray-500 font-medium">AM</span></h3>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    Available
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-brand-500 mr-2"></div>
                    <p className="text-gray-600 font-medium">Soka Junction</p>
                  </div>
                  <div className="h-8 border-l-2 border-dashed border-gray-200 ml-1 mb-0"></div>
                  <div className="flex items-center mt-0">
                    <div className="w-2 h-2 rounded-full bg-accent-500 mr-2"></div>
                    <p className="text-gray-600 font-medium">LCU Campus</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Availability</span>
                    <span className="text-sm font-bold text-brand-600">12 seats left</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 mb-6">
                    <div className="bg-brand-500 h-2.5 rounded-full w-[60%]"></div>
                  </div>
                  <Link to="/book" className="block w-full py-3 rounded-xl bg-gray-900 text-white text-center font-semibold group-hover:bg-brand-600 transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Trip 2 */}
            <div className="group bg-gradient-to-b from-white to-gray-50 rounded-2xl p-1 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-white rounded-xl p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-gray-900">8:30 <span className="text-lg text-gray-500 font-medium">AM</span></h3>
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    Filling Fast
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-brand-500 mr-2"></div>
                    <p className="text-gray-600 font-medium">Soka Junction</p>
                  </div>
                  <div className="h-8 border-l-2 border-dashed border-gray-200 ml-1 mb-0"></div>
                  <div className="flex items-center mt-0">
                    <div className="w-2 h-2 rounded-full bg-accent-500 mr-2"></div>
                    <p className="text-gray-600 font-medium">LCU Campus</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Availability</span>
                    <span className="text-sm font-bold text-amber-600">Only 2 seats!</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 mb-6">
                    <div className="bg-amber-500 h-2.5 rounded-full w-[90%]"></div>
                  </div>
                  <Link to="/book" className="block w-full py-3 rounded-xl bg-gray-900 text-white text-center font-semibold group-hover:bg-brand-600 transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Trip 3 */}
            <div className="group bg-gradient-to-b from-white to-gray-50 rounded-2xl p-1 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-white rounded-xl p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-gray-900">4:30 <span className="text-lg text-gray-500 font-medium">PM</span></h3>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    Available
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-brand-500 mr-2"></div>
                    <p className="text-gray-600 font-medium">Soka Junction</p>
                  </div>
                  <div className="h-8 border-l-2 border-dashed border-gray-200 ml-1 mb-0"></div>
                  <div className="flex items-center mt-0">
                    <div className="w-2 h-2 rounded-full bg-accent-500 mr-2"></div>
                    <p className="text-gray-600 font-medium">LCU Campus</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Availability</span>
                    <span className="text-sm font-bold text-brand-600">30 seats left</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 mb-6">
                    <div className="bg-brand-500 h-2.5 rounded-full w-[10%]"></div>
                  </div>
                  <Link to="/book" className="block w-full py-3 rounded-xl bg-gray-900 text-white text-center font-semibold group-hover:bg-brand-600 transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Students Love Us</h2>
            <div className="w-24 h-1.5 bg-brand-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-6 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Shield className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Safe & Reliable</h3>
                <p className="text-gray-600">
                  Professional drivers, regular maintenance, and insurance coverage. Your safety is our top priority.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                  <Users className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable Rates</h3>
                <p className="text-gray-600">
                  Group pricing makes it significantly cheaper than personal transport options or hailing rides.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center text-accent-600">
                  <Zap className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Booking</h3>
                <p className="text-gray-600">
                  Simple online booking in seconds. No hidden fees, no waiting in lines.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                  <Heart className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Community Driven</h3>
                <p className="text-gray-600">
                  Supporting students on campus and local transportation. We are part of the LCU family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact Section - For Investors & Sponsors */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for Growth & Impact</h2>
            <p className="text-xl text-blue-100">See the numbers that matter to schools and sponsors</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-white border border-white/20">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-blue-100 text-sm">Daily student riders</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-white border border-white/20">
              <div className="text-4xl font-bold mb-2">1.2K</div>
              <p className="text-blue-100 text-sm">Projected monthly riders</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-white border border-white/20">
              <div className="text-4xl font-bold mb-2">3x</div>
              <p className="text-blue-100 text-sm">Brand visibility per day</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-white border border-white/20">
              <div className="text-4xl font-bold mb-2">18-25</div>
              <p className="text-blue-100 text-sm">Target demographic age</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowImpactModal(true)}
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg"
            >
              View Full Business Case
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Book Your Ride?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Don't wait until the last minute. Secure your comfortable seat now and travel stress-free.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl transform hover:-translate-y-1"
          >
            Book Now
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </section>

      {/* Partner Modal */}
      {showPartnerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowPartnerModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Partner With Us</h3>
              <p className="text-gray-600">We work with schools & brands to create impact.</p>
            </div>

            {/* Partnership Info */}
            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-medium text-blue-900 mb-1">📊 Sponsorship Slots Available</p>
                <p className="text-xs text-blue-700">Direct visibility to 50+ daily student riders</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm font-medium text-green-900 mb-1">💰 Revenue Share Model</p>
                <p className="text-xs text-green-700">Join us in building sustainable student transport</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                <input
                  type="text"
                  placeholder="Your company or school"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="contact@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="+234 (0)701 234 5678"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
              <p className="text-sm font-medium text-gray-700 mb-3">📧 Direct Contact</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  partnerships@leadcityshuttle.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +234 (0)701 234 5678
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-2">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Get in Touch
              </button>
              <button
                onClick={() => setShowPartnerModal(false)}
                className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Impact & Revenue Modal */}
      {showImpactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl my-8">
            {/* Close Button */}
            <button
              onClick={() => setShowImpactModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>

            {/* Modal Header */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">LeadCity Shuttle</h3>
              <p className="text-xl text-blue-600 font-semibold">Business Impact & Opportunity</p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-sm text-gray-700">Daily student riders</p>
              </div>
              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">1.2K</div>
                <p className="text-sm text-gray-700">Projected monthly riders</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">18-25</div>
                <p className="text-sm text-gray-700">Student demographic age</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-5 border border-amber-200">
                <div className="text-3xl font-bold text-amber-600 mb-2">3x</div>
                <p className="text-sm text-gray-700">Brand touchpoints daily</p>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">💼 Revenue Opportunities</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Per-ride commission: Small fee per booking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Sponsorship slots: Brand visibility on every trip</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Data partnership: Anonymized rider insights</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">🎯 Sponsor Benefits</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Direct access to 50+ engaged students daily</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>3 exposures per day (morning, midday, evening)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Premium student demographic (university enrolled)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Cost per impression beats traditional media</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">🏫 School Partnership Value</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Safer student movement with tracking & support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Real-time occupancy & analytics dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Reduces campus congestion & parking issues</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-2">
              <button
                onClick={() => {
                  setShowImpactModal(false);
                  setShowPartnerModal(true);
                }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                Ready to Partner
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => setShowImpactModal(false)}
                className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
