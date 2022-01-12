import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/components/Nav/Nav';
import Slide from './pages/Slide/Slide';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Slide />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
