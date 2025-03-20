import { Link } from "react-router-dom";

function Panels() {
  return (
    <div>
      <h1>3D Panouri</h1>
      <p>Aici sunt detaliile despre panourile 3D.</p>

      <h2>Alte categorii</h2>
      <ul>
        <li><Link to="/facade">Fațade</Link></li>
        <li><Link to="/elements">Elemente Decorative</Link></li>
        <li><Link to="/contacts">Cărămidă Decorativă</Link></li>
      </ul>
    </div>
  );
}

export default Panels;
