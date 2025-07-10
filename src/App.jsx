import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Top from "./Top";
import WebConpe from "./WebConpe";
import Hack from "./Hack";
import CodeBridge from "./CodeBridge";
import Cancer from "./Cancer";
function App() {
  return (
    <div>
      {/* --- ルーティング --- */}
      <Routes>
        <Route path="" element={<Top />} />
        <Route path="/web-conpe" element={<WebConpe />} />
        <Route path="/hack" element={<Hack />} />
        <Route path="/code-bridge" element={<CodeBridge />} />
        <Route path="/cancer-system" element={<Cancer />} />
        {/* 404 用 */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
