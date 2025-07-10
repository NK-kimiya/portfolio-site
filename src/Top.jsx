import React, { useState } from "react";
import "./Top.css";
import "./About.css";
import "./Project.css";
import Contact from "./Contact";
import Footer from "./Footer";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";

const Top = () => {
  return (
    <div>
      <Header />
      <div className="main-visual">
        <div className="catch-title">
          <h1>Kimiyasu's Portfolio</h1>
        </div>
        <div className="catch-img">
          <img src="main-img-visual.png"></img>
        </div>
      </div>

      <div id="project-area">
        <h2>Project Portfolio</h2>
        <div className="projecu-wrap">
          <Link to="/web-conpe">
            <div className="project-item">
              <img src="web-conpe.jpg"></img>
              <p>第24回全国高校Webコンテスト</p>
            </div>
          </Link>

          <Link to="/hack">
            <div className="project-item">
              <img src="hack-u.jpg"></img>
              <p>OPEN HUCK U 2023 ONLINE</p>
            </div>
          </Link>

          <Link to="/code-bridge">
            <div className="project-item">
              <img src="codebridge.jpg"></img>
              <p>Code Bridge</p>
            </div>
          </Link>
          <Link to="/cancer-system">
            <div className="project-item">
              <img src="cancer.jpg"></img>
              <p>白血病癌の診断システム</p>
            </div>
          </Link>
        </div>
      </div>

      <div id="about-area">
        <h2>About Me</h2>
        <p>
          幼少期に小児がんを経験し、完治することができましたが、副作用の影響により、高校時代に劣等感を感じ、孤独を味わい、挫折を経験しました。そんな中、プログラミングに出会い、全国高校Webコンテストに出場。ITを使ってコンテンツを作り、情報を共有する楽しさを知り、プログラミングを学び始めました。大学では、OPEN
          HACK U 2023
          ONLINEのハッカソンに出場し、福祉サポートの思いから目の見えない方々を支援する盲導犬アプリを制作。この経験を通じて、ITを用いて病気や障がいを抱えた方々をサポートすることが私の目標であることを再確認しました。現在はプロトタイピングの制作、自身の小児がんの経験から得られた挫折などの経験を発信しています。また、プログラミングとの出会いが私にとって支えになったことから、プログラミングを教えることにもチャレンジしたいと考えています。
        </p>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Top;
