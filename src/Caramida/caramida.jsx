import { Link } from "react-router-dom";

function Caramida() {
  return (
    <>
      <h1>Caramida</h1>
      <p>Aici sunt detaliile despre Caramida.</p>

      <h2>Alte categorii</h2>
      <ul>
        <li><Link to="/elements">Elemente Decorative</Link></li>
        <li><Link to="/panels">3D Panouri</Link></li>
        <li><Link to="/facade">Facade</Link></li>
      </ul>
    </>
  );
}

export default Caramida;
