import { NavLink, Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="app-layout">
      <nav className="navbar">
        <div className="nav-brand">CrudApp</div>
        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/crud-axios">Movie</NavLink></li>
          <li><NavLink to="/Category">Category</NavLink></li>
        </ul>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
