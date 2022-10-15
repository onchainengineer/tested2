
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./login/login.js"
import { useEffect,useState } from 'react';
import ProductView from "./component/productview.js"
import ProductPage from "./component/productdetail.js"
import ProductAdd from "./component/addproduct.js"
import Navbar from "./navbar/navbar.js"
import Main from "./mainpage/main.js"
import axios from 'axios';

const API_URL = "http://localhost:3000";

function App() {

  return (
    <>
    <Navbar fixed />
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/add" element={<ProductAdd />} />
        <Route path="/products" element={<ProductView />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/" element={<Navigate replace to="/main" />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;