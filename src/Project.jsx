import React, { useState } from "react";
import "./Project.css";
const Project = () => {
  return (
    <div className="project-area">
      <h2>Project Portfolio</h2>
      <div className="projecu-wrap">
        <div className="project-item">
          <img src="web-conpe.jpg"></img>
          <p>第24回全国高校Webコンテスト</p>
        </div>
        <div className="project-item">
          <img src="hack-u.jpg"></img>
          <p>OPEN HUCK U 2023 ONLINE</p>
        </div>
        <div className="project-item">
          <img src="codebridge.jpg"></img>
          <p>OPEN HUCK U 2023 ONLINE</p>
        </div>
        <div className="project-item">
          <img src="cancer.jpg"></img>
          <p>診断システム</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
