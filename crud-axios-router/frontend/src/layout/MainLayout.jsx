import { useState } from "react";
import { NavLink, Outlet } from "react-router";

function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-layout">
      <nav className="navbar">
        <div className="nav-brand">CrudApp</div>
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/crud-axios" onClick={() => setMenuOpen(false)}>Movie</NavLink></li>
          <li><NavLink to="/Category" onClick={() => setMenuOpen(false)}>Category</NavLink></li>
        </ul>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
