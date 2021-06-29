import "./Home.css";
import { Link } from "react-router-dom";

import React from "react";

export default function Home() {
  return (
    <div className="home-container">
      <div className="introduction">
        <p>welcome to</p>
        <h1>HELLO</h1>
        <h1>
          <span>the</span>sound<span>off</span>.
        </h1>
        <p>
          a place where you can let the world know how you really feel about
          your favorite <em>(and not-so-favorite)</em> songs and artists.
        </p>
        <Link to="/login" className="get-started">Get Started</Link>
      </div>
    </div>
  );
}
