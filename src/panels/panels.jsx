import { Link } from "react-router-dom";

function Panels() {
  return (
    <>
      <h1>3D Panouri</h1>
      <p>Aici sunt detaliile despre panourile 3D.</p>

      <ul>
        <li><Link to="/facade">Fațade</Link></li>
        <li><Link to="/elements">Elemente Decorative</Link></li>
        <li><Link to="/contacts">Cărămidă Decorativă</Link></li>
      </ul>
    </>
  );
}

export default Panels;
