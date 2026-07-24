import { Link } from "react-router";

function NoMatch() {
  return (
    <div className="page-container nomatch-container">
      <div className="nomatch-content">
        <h2>404</h2>
        <p>Halaman tidak ditemukan</p>
        <Link to="/" className="nomatch-link">Kembali ke Home</Link>
      </div>
    </div>
  );
}

export default NoMatch;
