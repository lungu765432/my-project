import { Link } from "react-router-dom";

function Facade() {
  return (
    <>
      <h1>Fațade</h1>
      <p>Aici sunt detaliile despre fațade.</p>

      <h2>Alte categorii</h2>
      <ul>
        <li><Link to="/elements">Elemente Decorative</Link></li>
        <li><Link to="/panels">3D Panouri</Link></li>
        <li><Link to="/contacts">Cărămidă Decorativă</Link></li>
      </ul>
    </>
  );
}

export default Facade;
