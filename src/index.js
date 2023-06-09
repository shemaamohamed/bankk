import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './pages/shared/header';
import Home from './pages/home';
import Footer from './pages/shared/footer';
import Viewcustomer from './pages/viewcustomer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Home/>
    <Viewcustomer></Viewcustomer>
    <Footer></Footer>
  </>
);


