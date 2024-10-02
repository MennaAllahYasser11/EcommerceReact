
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'; 
import Login from './components/Login';
import Cart from './components/Cart';
import Navbar from './components/Navbar'; 
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"element={ <> <Header /> <Home /> </> } />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
           <Route path="/search" element={<SearchResults  />} />
           <Route path="/product/:id" element={<ProductDetails  />} /> 
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;


