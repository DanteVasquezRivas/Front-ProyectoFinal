// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarPlantiv from "./components/Navbar.jsx";
import Home from "./views/Home.jsx";
import Login from "./views/Login.jsx";
import Register from "./views/Register.jsx";
import Products from "./views/Products.jsx";
import Profile from "./views/Profile.jsx";
import Cart from "./views/Cart.jsx";
import MyProducts from "./views/MyProducts.jsx";
import Orders from "./views/Orders.jsx";
import Publish from "./views/Publish.jsx";
import NotFound from './views/NotFound'
import Footer from './views/Footer.jsx'
import ProductDetails from "./views/ProductDetails.jsx";
import "./App.css";

//Tratar de sacar todos los archivos que contengan mi carrito y mi cuenta

const App = () => {
  return (
    <div>
      <NavbarPlantiv />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-products" element={<MyProducts />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
