import { Routes, Route, BrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import CrudAxios from "./pages/CrudAxios.jsx";
import Home from "./pages/Home.jsx";
import NoMatch from "./pages/NoMatch.jsx";

function About() {
  return (
    <div className="page-container">
      <h2>About</h2>
      <p>Aplikasi CRUD sederhana menggunakan React, Axios, dan React Router.</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="page-container">
      <h2>Dashboard</h2>
      <p>Halaman dashboard untuk melihat ringkasan data.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="crud-axios" element={<CrudAxios />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
