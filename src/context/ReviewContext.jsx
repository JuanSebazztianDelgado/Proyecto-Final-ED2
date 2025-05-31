
import { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, query, onSnapshot, addDoc, Timestamp } from 'firebase/firestore';
import { useAuthContext } from './AuthContext';

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'reviews'));
    
    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ 
          id: doc.id, 
          ...doc.data() 
        }));
        setReviews(data);
        setLoading(false);
      },
      (error) => {
        console.error('Error cargando reseñas:', error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const addReview = async (movieId, content, rating) => {
    if (!user) {
      console.error('Usuario no autenticado');
      return;
    }

    try {
      await addDoc(collection(db, 'reviews'), {
        movieId: parseInt(movieId),
        content,
        rating,
        userId: user.uid,
        userEmail: user.email,
        createdAt: Timestamp.now(),
      });
    } catch (error) {
      console.error('Error agregando reseña:', error);
      throw error;
    }
  };

  const getReviewsByMovie = (movieId) => {
    return reviews.filter((review) => review.movieId === parseInt(movieId));
  };

  const myReviews = user ? 
    reviews.filter((review) => review.userId === user.uid) : 
    [];

  const value = {
    reviews,
    loading,
    addReview,
    getReviewsByMovie,
    myReviews
  };

  return (
    <ReviewContext.Provider value={value}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviewContext = () => {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error('useReviewContext debe usarse dentro de ReviewProvider');
  }
  return context;
};