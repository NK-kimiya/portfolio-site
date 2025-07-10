import React, { useState } from "react";
import "./Header.css";
import { Routes, Route, Link } from "react-router-dom";
const Header = () => {
  const [responsiveDisplay, setResponsiveDisplay] = useState(false);
  return (
    <div>
      <header>
        <h1>
          <Link to="/">
            <img src="portfolio-logo.png"></img>
          </Link>
        </h1>
        <nav className="none-responsive-nav">
          <ul>
            <li>
              <a href="#project-area">Project</a>
            </li>
            <li>
              <a href="#about-area">About</a>
            </li>
            <li>
              <a href="#contact-area">Contact</a>
            </li>
          </ul>
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
              <ul>
                <li>
                  <a href="#project-area">Project</a>
                </li>
                <li>
                  <a href="#about-area">About</a>
                </li>
                <li>
                  <a href="#contact-area">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
