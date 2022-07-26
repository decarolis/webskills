import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

// pages
import Home from '../components/pages/Home';
import Game from '../components/pages/Game';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:level" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
