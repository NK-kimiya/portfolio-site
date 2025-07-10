import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Header from "./Header";
import "./App.css";
import Top from "./Top";
function App() {
  return (
    <div>
      <Header />
      {/* --- ルーティング --- */}
      <Routes>
        <Route path="" element={<Top />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        {/* 404 用 */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
