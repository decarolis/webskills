import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

// pages
import Home from '../components/pages/Home';
import Game from '../components/pages/Game';
import Profile from '../components/pages/Profile';
import Records from '../components/pages/Records';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:level" element={<Game />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
