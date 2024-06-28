import './App.css';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './Component/Caterory';
import { Route, Routes } from 'react-router-dom';
import Data from './Component/Product';
import { useEffect, useState } from 'react';
import Cart from './Component/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Product from './Component/Product';

function App() {

  // const [Alldata, setAlldata] = useState('');


  // useEffect(() => {
  //   fetch('https://dummyjson.com/products/')
  //     .then(response => response.json())
  //     .then(data => setAlldata(data.products));
  // }, []);

  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Product  />} />
        <Route path='/data/:id' element={<Categories />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;