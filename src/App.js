import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import Nav from './components/Navbar';

import {
  Home,
  SingleProductPage,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
} from './pages';

//SingleProductPage için children={} olarak denenmesi gerekiyor.

function App() {
  return (
    <Router>
      <Navbar />

      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/products/:id" element={<SingleProductPage />} />
        <Route exact path="/checkout" element={<Checkout />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
