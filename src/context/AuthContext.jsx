import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

// Mock School Database - Replace with actual API call later
const SCHOOL_DATABASE = [
  {
    matricNo: 'LCU2024001',
    email: 'chioma.okoro@lcu.edu.ng',
    fullName: 'Chioma Okoro',
    department: 'Computer Science',
    level: '200'
  },
  {
    matricNo: 'LCU2024002',
    email: 'bimbo.williams@lcu.edu.ng',
    fullName: 'Bimbo Williams',
    department: 'Business Administration',
    level: '200'
  },
  {
    matricNo: 'LCU2024003',
    email: 'adekunle.smith@lcu.edu.ng',
    fullName: 'Adekunle Smith',
    department: 'Engineering',
    level: '300'
  },
  {
    matricNo: 'LCU2024004',
    email: 'zainab.ahmed@lcu.edu.ng',
    fullName: 'Zainab Ahmed',
    department: 'Medicine',
    level: '100'
  },
  {
    matricNo: 'LCU2024005',
    email: 'obinna.nwankwo@lcu.edu.ng',
    fullName: 'Obinna Nwankwo',
    department: 'Law',
    level: '200'
  },
  {
    matricNo: 'LCU2024006',
    email: 'fatima.hassan@lcu.edu.ng',
    fullName: 'Fatima Hassan',
    department: 'Education',
    level: '400'
  },
  {
    matricNo: 'LCU2024007',
    email: 'david.johnson@lcu.edu.ng',
    fullName: 'David Johnson',
    department: 'Architecture',
    level: '300'
  },
  {
    matricNo: 'LCU2024008',
    email: 'funke.okafor@lcu.edu.ng',
    fullName: 'Funke Okafor',
    department: 'Pharmacy',
    level: '200'
  },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Validate student credentials against school database
   * @param {string} matricNo - Student's matric number
   * @param {string} email - Student's email
   * @param {string} fullName - Student's full name
   * @returns {object|null} - Returns student data if valid, null if invalid
   */
  const validateStudentCredentials = (matricNo, email, fullName) => {
    const student = SCHOOL_DATABASE.find(
      (record) =>
        record.matricNo.toUpperCase() === matricNo.toUpperCase() &&
        record.email.toLowerCase() === email.toLowerCase() &&
        record.fullName.toLowerCase() === fullName.toLowerCase()
    );

    return student || null;
  };

  /**
   * Login function - Authenticates student against school database
   * @param {object} credentials - { matricNo, email, fullName, department }
   */
  const login = async (credentials) => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const { matricNo, email, fullName, department } = credentials;

      // Validate credentials against school database
      const validatedStudent = validateStudentCredentials(matricNo, email, fullName);

      if (!validatedStudent) {
        throw new Error(
          'Invalid credentials. Please ensure your matric number, email, and full name match our records.'
        );
      }

      // Additional verification: Check if department matches
      if (validatedStudent.department.toLowerCase() !== department.toLowerCase()) {
        throw new Error(
          'Department mismatch. The department you entered does not match our records.'
        );
      }

      // Set authenticated user
      const userData = {
        ...validatedStudent,
        loginTime: new Date().toISOString(),
      };

      setUser(userData);
      setIsAuthenticated(true);

      // Store in localStorage for persistence
      localStorage.setItem('authUser', JSON.stringify(userData));

      return { success: true, user: userData };
    } catch (err) {
      setError(err.message);
      setIsAuthenticated(false);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  /**
   * Logout function - Clears authentication state
   */
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('authUser');
  };

  /**
   * Check if user is authenticated on app load
   */
  const checkAuth = () => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        setIsAuthenticated(true);
      } catch (err) {
        console.error('Error parsing stored auth data:', err);
        localStorage.removeItem('authUser');
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        error,
        login,
        logout,
        checkAuth,
        validateStudentCredentials,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
