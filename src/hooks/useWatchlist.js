
import { useState } from 'react';
import { Queue } from '../utils/dataStructures/Queue';

const initialQueue = new Queue();

export const useWatchlist = () => {
  const [queue, setQueue] = useState(initialQueue);

  const addToWatchlist = (movie) => {
    if (!movie) return;
    
    const newQueue = queue.clone();
    newQueue.enqueue(movie);
    setQueue(newQueue);
  };

  const removeFromWatchlist = () => {
    if (queue.isEmpty()) return null;
    
    const newQueue = queue.clone();
    const removedMovie = newQueue.dequeue();
    setQueue(newQueue);
    return removedMovie;
  };

  const clearWatchlist = () => {
    setQueue(new Queue());
  };

  const getNextMovie = () => {
    return queue.peek();
  };

  return {
    watchlist: queue.items,
    addToWatchlist,
    removeFromWatchlist,
    clearWatchlist,
    getNextMovie,
    isEmpty: queue.isEmpty(),
    size: queue.size(),
  };
};