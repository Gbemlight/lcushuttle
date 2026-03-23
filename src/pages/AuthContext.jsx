import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';

const AuthContext = createContext(null);

// Helper to get users from localStorage
const getUserDatabase = () => {
  try {
    const users = localStorage.getItem('lcu-shuttle-users');
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error("Failed to parse user database from localStorage", error);
    return [];
  }
};

// Helper to save users to localStorage
const setUserDatabase = (users) => {
  localStorage.setItem('lcu-shuttle-users', JSON.stringify(users));
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Helper to finalize login state
  const finalizeLogin = (userData) => {
    const userWithTime = { ...userData, loginTime: new Date().toISOString() };
    setUser(userWithTime);
    setIsAuthenticated(true);
    // Use sessionStorage for the currently logged-in user for session-only persistence
    sessionStorage.setItem('lcu-shuttle-active-user', JSON.stringify(userWithTime));
    return { success: true, user: userWithTime };
  };

  // 1. Register a new user
  const register = async (newUserData) => {
    setLoading(true);
    setError(null);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

    try {
      const users = getUserDatabase();
      
      // Check if email or matric number already exists
      const emailExists = users.some(u => u.email.toLowerCase() === newUserData.email.toLowerCase());
      if (emailExists) {
        throw new Error('An account with this email already exists.');
      }
      const matricExists = users.some(u => u.matricNo.toLowerCase() === newUserData.matricNo.toLowerCase());
      if (matricExists) {
        throw new Error('An account with this matriculation number already exists.');
      }

      // Add new user to our "database"
      users.push(newUserData);
      setUserDatabase(users);

      // Automatically log in the new user
      return finalizeLogin(newUserData);

    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // 2. Login an existing user
  const login = async ({ email, password }) => {
    setLoading(true);
    setError(null);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

    try {
      const users = getUserDatabase();
      const foundUser = users.find(u => u.email.toLowerCase() === email?.toLowerCase());

      if (!foundUser) {
        throw new Error('No account found with this email.');
      }

      if (foundUser.password !== password) {
        throw new Error('Incorrect password. Please try again.');
      }

      return finalizeLogin(foundUser);

    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    sessionStorage.removeItem('lcu-shuttle-active-user');
  };

  const checkAuth = useCallback(async () => {
    const storedUser = sessionStorage.getItem('lcu-shuttle-active-user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        setIsAuthenticated(true);
      } catch (err) {
        console.error('Error parsing stored auth data:', err);
        sessionStorage.removeItem('lcu-shuttle-active-user');
      }
    }
  }, []);

  const value = { user, isAuthenticated, loading, error, login, register, logout, checkAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};