import React, { useState } from "react";
import "./Header.css";
import { Routes, Route, Link } from "react-router-dom";
const Header = () => {
  const [responsiveDisplay, setResponsiveDisplay] = useState(false);
  return (
    <div>
      <header>
        <h1>Kimiyasu</h1>
        <nav className="none-responsive-nav">
          <Link to="/about">About</Link>
          <Link to="/project">Project</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* ▼ ハンバーガーアイコン（スマホ） */}
        <button
          className="burger"
          onClick={() => setResponsiveDisplay((prev) => !prev)}
          aria-label="toggle navigation"
        >
          ☰
        </button>
        {/* ▼ スマホ用ナビ（フラグが true のときのみ表示） */}
        {responsiveDisplay && (
          <div className="responsive-nav">
            <button
              className="burger"
              onClick={() => setResponsiveDisplay((prev) => !prev)}
              aria-label="toggle navigation"
            >
              ×
            </button>
            <nav>
              <Link to="/about" onClick={() => setResponsiveDisplay(false)}>
                About
              </Link>
              <Link to="/project" onClick={() => setResponsiveDisplay(false)}>
                Project
              </Link>
              <Link to="/contact" onClick={() => setResponsiveDisplay(false)}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
