import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home'
import Shop from './Shop';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Furniture from './Furniture';
import Sale from './Sale';
import Contact from './Contact';
import Login from './Login';
import Ragi from './Ragi';
import User from './User';
import Insert from './admin/Insert';
import Singleproduct from './Singleproduct';
import Productview from './admin/Productview';
import Admin from './admin/Admin';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      <Route path="/Furniture" element={<Furniture/>}/>
      <Route path="/Sale" element={<Sale/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Ragi" element={<Ragi/>}/>
      <Route path="/User" element={<User/>}/>
      <Route path="/insert" element={<Insert/>}/>
      <Route path="/single/:id" element={<Singleproduct/>}/>
      <Route path="/productview" element={<Productview/>}/>
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  {/* <Admin/> */}
  </>
);


