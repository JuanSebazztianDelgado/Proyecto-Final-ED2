
import { useContext } from 'react';
import { ReviewContext } from '../context/ReviewContext';

export const useReviews = () => {
  const context = useContext(ReviewContext);
  
  if (!context) {
    throw new Error('useReviews debe usarse dentro de ReviewProvider');
  }
  
  return context;
};