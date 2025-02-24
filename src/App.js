import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeMain from './Homepage/HomeMain.jsx';
import AboutusMain from './Aboutus/AboutusMain.jsx';
import ContactusMain from './Contactus/ContactusMain.jsx';
import ProductsMain from './Products/ProductsMain.jsx';
import ServicesMain from './Services/ServicesMain.jsx';
import Services1 from './Services/Services1.jsx';
import Product1 from './Products/Product1.jsx';


function App() {
  return (

    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomeMain} />
          <Route path='/aboutus' Component={AboutusMain} />
          <Route path='/contactus' Component={ContactusMain} />
          <Route path='/product' Component={ProductsMain} />
          <Route path='/service' Component={ServicesMain} />
          <Route path="/product/:tab" element={<Product1 />} />
          <Route path="/service/:tab" element={<Services1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
