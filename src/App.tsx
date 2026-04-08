import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { RustProject } from './pages/RustProject';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/rustdetector" element={<RustProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
