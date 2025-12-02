import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products'; // Keep this for the full product list page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* This remains a separate page for when users click "View Details" */}
          <Route path="products" element={<Products />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;