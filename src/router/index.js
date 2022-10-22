import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactGA from 'react-ga';

// pages
import Home from '../components/pages/Home';
import Game from '../components/pages/Game';

const TRACKING_ID = 'UA-246583589-1';
ReactGA.initialize(TRACKING_ID);

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
