import { Link } from "react-router-dom";

function Facade() {
  return (
    <>
      <h1>Facade</h1>
      <p>Aici sunt detaliile despre Caramida.</p>

      <h2>Alte categorii</h2>
      <ul>
        <li><Link to="/elements">Elemente Decorative</Link></li>
        <li><Link to="/panels">3D Panouri</Link></li>
        <li><Link to="/caramida">Caramida</Link></li>
      </ul>
    </>
  );
}

export default Facade;
