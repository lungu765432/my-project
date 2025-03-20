import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Link to="/contacts">Контакты</Link>
      <Link to="/elements">Элементы</Link>
      <Link to="/facade">Фасад</Link>
      <Link to="/panels">Панели</Link>
    </nav>
  );
}
