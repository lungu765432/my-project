import { Link } from "react-router-dom";

function Elements() {
  return (
    <>
      <h1>Elemente Decorative</h1>
      <p>Aici sunt elementele decorative</p>

      <h2>Alte categorii</h2>
      <ul>
        <li><Link to="/facade">Fațade</Link></li>
        <li><Link to="/panels">3D Panouri</Link></li>
        <li><Link to="/contacts">Cărămidă Decorativă</Link></li>
      </ul>
    </>
  );
}

export default Elements;
