import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "../src/CartContext";
import Home from "./Components/Home";
import Product from "./Product";
import Cart from "./Cart";
import Login from "./Components/Login";
import SignUp from "./Components/Registration";
import { ToastContainer } from "react-toastify";

export const SampleContext = createContext(); 

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <SampleContext.Provider value={{ product, setProduct }}>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
        <ToastContainer />
      </CartProvider>
    </SampleContext.Provider>
  );
}

export default App;
