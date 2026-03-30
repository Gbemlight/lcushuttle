import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { AlertCircle, CheckCircle, Loader, Lock, Mail, User, Book, Building2 } from 'lucide-react';

const AuthenticationPage = () => {
  const navigate = useNavigate();
  const { register, loading, isAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    matricNo: '',
    email: '',
    fullName: '',
    department: '',
    password: '',
    confirmPassword: '',
  });

  const [formError, setFormError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  // Departments in Lead City University
  const departments = [
    'Computer Science',
    'Business Administration',
    'Engineering',
    'Medicine',
    'Law',
    'Education',
    'Architecture',
    'Pharmacy',
    'Nursing',
    'Accountancy',
    'Mass Communication',
    'Agriculture',
  ];

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const validateForm = () => {
    const errors = {};

    if (!formData.matricNo.trim()) {
      errors.matricNo = 'Matric number is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Invalid email format';
    }

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 3) {
      errors.fullName = 'Full name must be at least 3 characters';
    }

    if (!formData.department) {
      errors.department = 'Department is required';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    if (!validateForm()) {
      return;
    }

    // Exclude confirmPassword from the data sent to the backend/context
    const { confirmPassword, ...registrationData } = formData;
    const result = await register(registrationData);

    if (result.success) {
      navigate('/dashboard');
    } else {
      setFormError(result.error || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-200 blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-100 blur-3xl opacity-30"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-linear-to-r from-blue-600 to-blue-700 px-8 py-10">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-white bg-opacity-20 rounded-full">
                <User className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white text-center mb-2">Create Account</h1>
            <p className="text-blue-100 text-center text-sm">Join the shuttle community</p>
          </div>

          {/* Form Content */}
          <div className="px-8 py-10">
            {/* Info Alert */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex gap-3 items-center">
              <AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-medium">Already have an account? <Link to="/login" className="font-bold hover:underline">Sign In</Link></p>
              </div>
            </div>

            {/* Error Alert */}
            {formError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-800">Authentication Failed</p>
                  <p className="text-sm text-red-700 mt-1">{formError}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Matric Number */}
              <div>
                <label htmlFor="matricNo" className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Book className="h-4 w-4 text-blue-600" />
                    Matric Number
                  </div>
                </label>
                <input
                  type="text"
                  id="matricNo"
                  name="matricNo"
                  placeholder="e.g., LCU2024001"
                  value={formData.matricNo}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase text-black ${
                    validationErrors.matricNo
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 bg-gray-50 focus:border-blue-500'
                  }`}
                />
                {validationErrors.matricNo && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <span className="text-xs">•</span> {validationErrors.matricNo}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    Email Address
                  </div>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g., name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 text-black ${
                    validationErrors.email
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 bg-gray-50 focus:border-blue-500'
                  }`}
                />
                {validationErrors.email && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <span className="text-xs">•</span> {validationErrors.email}
                  </p>
                )}
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-blue-600" />
                    Full Name
                  </div>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="e.g., Chioma Okoro"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 text-black ${
                    validationErrors.fullName
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 bg-gray-50 focus:border-blue-500'
                  }`}
                />
                {validationErrors.fullName && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <span className="text-xs">•</span> {validationErrors.fullName}
                  </p>
                )}
              </div>

              {/* Department */}
              <div>
                <label htmlFor="department" className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-blue-600" />
                    Department
                  </div>
                </label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 text-black ${
                    validationErrors.department
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 bg-gray-50 focus:border-blue-500'
                  }`}
                >
                  <option value="">Select your department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
                {validationErrors.department && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <span className="text-xs">•</span> {validationErrors.department}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-blue-600" />
                    Password
                  </div>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="6+ characters"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 text-black ${
                    validationErrors.password
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 bg-gray-50 focus:border-blue-500'
                  }`}
                />
                {validationErrors.password && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <span className="text-xs">•</span> {validationErrors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-blue-600" />
                    Confirm Password
                  </div>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 text-black ${
                    validationErrors.confirmPassword
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 bg-gray-50 focus:border-blue-500'
                  }`}
                />
                {validationErrors.confirmPassword && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <span className="text-xs">•</span> {validationErrors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 shadow-lg"
              >
                {loading ? (
                  <>
                    <Loader className="h-5 w-5 animate-spin" /> 
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>Sign Up</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Your credentials are verified against Lead City University's official database.
        </p>
      </div>
    </div>
  );
};

export default AuthenticationPage;
