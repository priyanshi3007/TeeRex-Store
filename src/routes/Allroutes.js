
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// import Product from '../components/Product';
import Cart from '../components/Cart';
import ProductFilter from '../components/ProductFilter';



const AllRoutes = () => {
  return (
    <Router>
    <Routes>
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="/" element={<Product />} /> */}
      <Route path="/" element={<ProductFilter/>} />
   
    </Routes>
  </Router>
  );
};

export default AllRoutes;