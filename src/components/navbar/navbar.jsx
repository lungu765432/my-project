
// src/components/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/fatada">Fațadă</Link></li>
        <li><Link to="/elemente">Elemente Decorative</Link></li>
        <li><Link to="/panouri">3D Panouri</Link></li>
        <li><Link to="/caramida">Cărămidă Decorativă</Link></li>
      </ul>
    </nav>
  );
}
