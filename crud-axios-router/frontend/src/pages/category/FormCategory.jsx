import axios from "axios";
import { useEffect, useState } from "react";
import baseURL from "../../config/utility";
import { Link } from "react-router";

const FormCategory = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({ nameCategory: "", descCategory: "" });
  const [editId, setEditId] = useState(null);

  const fetchData = () => {
    axios.get(`${baseURL}/api/category`).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const resetForm = () => {
    setInput({ nameCategory: "", descCategory: "" });
    setEditId(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editId) {
        await axios.put(`${baseURL}/api/category/${editId}`, {
          name: input.nameCategory,
          desc: input.descCategory,
        });
      } else {
        await axios.post(`${baseURL}/api/category/`, {
          name: input.nameCategory,
          desc: input.descCategory,
        });
      }
      resetForm();
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    let { value, name } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/api/category/${id}`);
      fetchData();
    } catch (err) {
      alert(err);
    }
  };

  const handleEdit = async (id) => {
    try {
      const respond = await axios.get(`${baseURL}/api/category/${id}`);
      const movie = respond.data[0];
      setInput({
        nameCategory: movie.name_tb_category,
        descCategory: movie.desc_tb_category,
      });
      setEditId(id);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <h1>Edit Category</h1>
      <div className="div-input-movie">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nameCategory">Category Name</label>
          <input
            type="text"
            id="nameCategory"
            name="nameCategory"
            placeholder="Input Category of the movies..."
            value={input.nameCategory}
            onChange={handleChange}
            required
          />

          <label htmlFor="descCategory">Description</label>
          <textarea
            name="descCategory"
            id="descCategory"
            placeholder="Input Description of the movies..."
            value={input.descCategory}
            onChange={handleChange}
          />

          <input type="submit" value={editId ? "Update" : "Submit"} />
          <Link to="/category">Cancel</Link>
          {editId && <input type="button" value="Cancel" onClick={resetForm} />}
        </form>
      </div>
    </>
  );
};
export default FormCategory;