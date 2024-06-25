import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import { Routes, Route } from "react-router-dom"
import Product from './Component/Product';
import Caterory from './Component/Caterory';
import { useEffect, useState } from 'react';
import Cart from './Component/Cart';

function App() {

  const[Alldata,setAlldata]=useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => setAlldata(data.products))
  })

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={ <Product data={Alldata}/> } />
        <Route path="/caterory/:id" element={ <Caterory/> } />
        <Route path="/cart" element={ <Cart /> } />
      </Routes>
    </>
  );
}

export default App;
