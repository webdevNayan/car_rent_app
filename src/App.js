import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarPage from './pages/CarPage';

export default function App() {
  return (
    <>

    
    
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<CarPage/>} />

        </Routes>

      </BrowserRouter>

    </>
  )
}
