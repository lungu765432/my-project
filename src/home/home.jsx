// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles.css";
import bg4 from "../images/bg4.jpg";
import fatada from "../images/photo11.png";
import elemente from "../images/photo7.png";
import panouri from "../images/photo4.png";
import caramida from "../images/photos6.webp";

export default function Home() {
  return (
    <>
      <div className="products">
        <Link to="/fatada" className="product">
          <img src={fatada} alt="Fațadă" />
          <p>Fațadă</p>
        </Link>
        <Link to="/elemente" className="product">
          <img src={elemente} alt="Elemente Decorative" />
          <p>Elemente Decorative</p>
        </Link>
        <Link to="/panouri" className="product">
          <img src={panouri} alt="3D Panouri" />
          <p>3D Panouri</p>
        </Link>
        <Link to="/caramida" className="product">
          <img src={caramida} alt="Cărămidă Decorativă" />
          <p>Cărămidă Decorativă</p>
        </Link>
      </div>
      </>
  );
}
