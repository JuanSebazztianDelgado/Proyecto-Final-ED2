import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ReviewProvider } from './context/ReviewContext';

import Header from './components/Common/Header';
import Home from './pages/Home';
import MyReviews from './pages/MyReviews';
import MovieDetail from './pages/MovieDetail';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

import './App.scss';

const App = () => {
  return (
    <AuthProvider>
      <ReviewProvider>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/my-reviews" element={<MyReviews />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
          </div>
        </Router>
      </ReviewProvider>
    </AuthProvider>
  );
};

export default App;
