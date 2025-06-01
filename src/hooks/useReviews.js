
import { useContext } from 'react';
import { useReviewContext } from '../context/ReviewContext';

export const useReviews = () => {
  return useReviewContext(); // reutiliza internamente tu hook personalizado
};
