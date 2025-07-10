import React, { useState } from "react";
import { Link } from "react-router-dom";
const ProjectHeader = () => {
  return (
    <header>
      <h1>
        <Link to="/">
          <img src="portfolio-logo.png"></img>
        </Link>
      </h1>
    </header>
  );
};

export default ProjectHeader;
