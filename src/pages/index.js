//kolay bir şekilde import ve export yapabilmek için genellikle component ve pages'ların içnide index.js kullanıyoruz.

import Home from './HomePage';
import Products from './ProductsPage';
import SingleProductPage from './SingleProductPage';
import About from './AboutPage';
import Cart from './CartPage';
import Error from './ErrorPage';
import Checkout from './CheckoutPage';
import PrivateRoute from './PrivateRoute';

export {
  Home,
  Products,
  SingleProductPage,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
};
