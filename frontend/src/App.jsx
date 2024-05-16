import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Layout from "./pages/Dashbaord/Layout";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/dashbaord/*" element={<Layout />} />
      </Routes>
    </div>
  );
};

export default App;
