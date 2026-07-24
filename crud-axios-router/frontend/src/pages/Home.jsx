import { Link } from "react-router";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>CrudApp</h1>
        <p>Aplikasi CRUD sederhana menggunakan React, Axios, dan Express.js</p>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h3>Movie</h3>
          <p>Kelola data film - tambah, edit, hapus, dan lihat semua data movie.</p>
          <Link to="/crud-axios" className="feature-link">Buka Movie &rarr;</Link>
        </div>
        <div className="feature-card">
          <h3>Category</h3>
          <p>Kelola data kategori film - tambah, edit, hapus, dan lihat semua kategori.</p>
          <Link to="/Category" className="feature-link">Buka Category &rarr;</Link>
        </div>
      </section>

      <section className="tech-section">
        <h2>Tech Stack</h2>
        <div className="tech-grid">
          <div className="tech-item">React + Vite</div>
          <div className="tech-item">Express.js</div>
          <div className="tech-item">MySQL</div>
          <div className="tech-item">Axios</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
