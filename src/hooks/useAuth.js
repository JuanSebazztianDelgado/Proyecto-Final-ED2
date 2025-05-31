
import { useState } from 'react';
import { registerUser, loginUser, resetPassword as firebaseResetPassword } from '../firebase/auth';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (email, password, displayName) => {
    setLoading(true);
    setError(null);
    try {
      const user = await registerUser(email, password, displayName);
      return user;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const result = await loginUser(email, password);
      return result.user;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email) => {
    setLoading(true);
    setError(null);
    try {
      await firebaseResetPassword(email);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return { 
    register, 
    login, 
    resetPassword, 
    loading, 
    error,
    clearError 
  };
};