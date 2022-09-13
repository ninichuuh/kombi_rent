import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import CarListing from "../views/CarListing";
import CarDetails from "../views/CarDetails";
import NotFound from "../views/NotFound";
import Contact from "../views/Contact";
import PrivacyPolicy from "../views/PrivacyPolicy";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
