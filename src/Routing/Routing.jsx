import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Layout from "./Layout";
import Login from "../pages/Login";
import Product from "../pages/Product";

const Routing = () => {
  const isToken = window.localStorage.getItem('token');

  console.log('isToken:', isToken);  // Debugging the token value

  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={isToken ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        
        {/* Login route when no token */}
        {!isToken && (
          <Route path="/login" element={<Login />} />
        )}

        {/* Protected routes for authenticated users */}
        {isToken && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/layout" element={<Layout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
          </>
        )}
        
        {/* Catch-all for undefined routes */}
        <Route path="*" element={<Navigate to={isToken ? "/home" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
