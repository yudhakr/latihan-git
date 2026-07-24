import { useEffect, useState } from "react";
import baseURL from "../../config/utility";
import axios from "axios";
import { useNavigate } from "react-router";

const TableCategory = () => {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [input, setInput] = useState({ nameCategory: "", descCategory: "" });
  const [editId, setEditId] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

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
          title: input.movieTitle,
          year: input.movieYear,
        });
      } else {
        await axios.post(`${baseURL}/api/category/`, {
          title: input.movieTitle,
          year: input.movieYear,
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
    navigate(`/category/${id}/edit`);
  };

  const addCategory = () => {
    navigate("create");
  };

  return (
    <>
      <h1>Tabel Kategori</h1>
      <button className="createButton" onClick={addCategory}>
        Create category
      </button>
      <div className="div-table-movie">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{indexOfFirstRow + index + 1}</td>
                  <td>{item.name_tb_category}</td>
                  <td>{item.desc_tb_category}</td>
                  <td>
                    <button
                      className="bt-del"
                      onClick={() => {
                        if (confirm("Apa Anda Yakin Menghapus File Ini ?")) {
                          handleDelete(item.id_tb_category);
                        }
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="bt-edit"
                      onClick={() => {
                        handleEdit(item.id_tb_category);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages || 1}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Next
        </button>
      </div>
    </>
  );
};
export default TableCategory;