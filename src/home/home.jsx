import React from "react";
import NavBar from "../navbar/NavBar.jsx";
import Footer from "../footer/Footer.jsx";
import "../assets/style.css"; // Подключаем стили

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="hero">
        <img src="/images/33.png" alt="Grand Fațade" className="logo" />
        <h2>Украшаем Ваш мир</h2>
      </div>
      <div className="products">
        <div className="product">
          <img src="/images/33.png" alt="Фасадный кирпич" />
          <p>Фасадный кирпич</p>
        </div>
        <div className="product">
          <img src="/images/33.png" alt="3D панели" />
          <p>3D панели</p>
        </div>
        <div className="product">
          <img src="/images/112.png" alt="Декоративные элементы" />
          <p>Декоративные элементы</p>
        </div>
        <div className="product">
          <img src="/images/111.jpg" alt="Декоративный кирпич" />
          <p>Декоративный кирпич</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
