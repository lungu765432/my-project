import { Link } from "react-router-dom";

function Panels() {
  return (
    <>
      <h1>Panels</h1>
      <p>Aici sunt detaliile despre Panels.</p>

      <h2>Alte categorii</h2>
      <ul>
        <li><Link to="/elements">Elemente Decorative</Link></li>
        <li><Link to="/panels">3D Panouri</Link></li>
        <li><Link to="/facade">Facade</Link></li>
      </ul>
    </>
  );
}

export default Panels;
