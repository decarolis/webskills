import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

// pages
import Home from '../components/pages/Home';
import Game from '../components/pages/Game';
import Victory from '../components/pages/Victory';
import GameOver from '../components/pages/GameOver';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:level" element={<Game />} />
        <Route path="/victory" element={<Victory />} />
        <Route path="/gameover" element={<GameOver />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
