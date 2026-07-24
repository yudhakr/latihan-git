import { useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../config/utils.js";

const API_URL = `${baseUrl}/api/Category`;

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [nama, setNama] = useState("");
  const [des, setDes] = useState("");
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(API_URL);
      setCategories(res.data);
    } catch (err) {
      setError("Gagal memuat data kategori");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nama.trim() || !des.trim()) return;

    const payload = { names: nama, des };

    try {
      if (editId) {
        await axios.put(`${API_URL}/${editId}`, payload);
      } else {
        await axios.post(API_URL, payload);
      }
      resetForm();
      fetchCategories();
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan data");
    }
  };

  const handleEdit = (cat) => {
    setNama(cat.nama_tb_katagori);
    setDes(cat.des_tb_katagori);
    setEditId(cat.id_tb_katagori);
  };

  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus data ini?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchCategories();
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus data");
    }
  };

  const resetForm = () => {
    setNama("");
    setDes("");
    setEditId(null);
  };

  return (
    <div className="crud-container">
      <h1>Category</h1>
      {error && <p className="crud-error">{error}</p>}
      <div className="div-input">
        <form onSubmit={handleSubmit}>
          <label htmlFor="categoryname">Nama Kategori</label>
          <input
            type="text"
            id="categoryname"
            placeholder="Nama kategori"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />

          <label htmlFor="categorydesc">Deskripsi</label>
          <input
            type="text"
            id="categorydesc"
            placeholder="Deskripsi kategori"
            value={des}
            onChange={(e) => setDes(e.target.value)}
            required
          />

          <div className="form-buttons">
            <input
              type="submit"
              value={editId ? "Update" : "Submit"}
              className={editId ? "btn-update" : "btn-submit"}
            />
            {editId && (
              <button type="button" className="btn-cancel" onClick={resetForm}>
                Batal
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="table-movie">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Deskripsi</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={4}>Loading...</td>
              </tr>
            ) : categories.length > 0 ? (
              categories.map((item) => (
                <tr key={item.id_tb_katagori}>
                  <td>{item.id_tb_katagori}</td>
                  <td>{item.nama_tb_katagori}</td>
                  <td>{item.des_tb_katagori}</td>
                  <td>
                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(item.id_tb_katagori)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>Tidak ada data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryPage;
