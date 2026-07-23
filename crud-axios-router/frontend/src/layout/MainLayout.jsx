import { Link, Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="app-layout">
      <nav className="navbar">
        <div className="nav-brand">CrudApp</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/crud-axios">CRUD AXIOS</Link></li>
        </ul>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;