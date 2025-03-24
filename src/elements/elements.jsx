import { Link } from "react-router-dom";

function Elements() {
  return (
    <>
      <h1>Elemente</h1>
      <p>Aici sunt detaliile despre Elemente.</p>

      <h2>Alte categorii</h2>
      <ul>
        <li><Link to="/caramida">Caramida</Link></li>
        <li><Link to="/panels">3D Panouri</Link></li>
        <li><Link to="/facade">Facade</Link></li>
      </ul>
    </>
  );
}

export default Elements;
