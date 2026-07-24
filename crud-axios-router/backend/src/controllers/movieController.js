const connectionPool = require("../config/db.js");

const readmovie = async (req, res) => {
  try {
    const [result] = await connectionPool.query("SELECT * FROM tb_movie");
    res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Database error", error: err.message });
  }
}

const readmovieid = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await connectionPool.query("SELECT * FROM tb_movie WHERE id_tb_movie = ?", [id]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Film tidak ditemukan" });
    }
    res.json(result[0]);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Database error", error: err.message });
  }
}

const createmovie = async (req, res) => {
  const { title, year } = req.body;
  if (!title || !year) {
    return res.status(400).json({ message: "Title dan year wajib diisi" });
  }
  try {
    await connectionPool.query("INSERT INTO tb_movie (title_tb_movie, year_tb_movie) VALUES (?, ?)", [title, year]);
    res.json({ message: "Data berhasil ditambahkan" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Database error", error: err.message });
  }
};

const updatemovie = async (req, res) => {
  const { title, year } = req.body;
  const { id } = req.params;
  if (!title || !year) {
    return res.status(400).json({ message: "Title dan year wajib diisi" });
  }
  try {
    await connectionPool.query("UPDATE tb_movie SET title_tb_movie = ?, year_tb_movie = ? WHERE id_tb_movie = ?", [title, year, id]);
    res.json({ message: "Data berhasil diupdate" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Database error", error: err.message });
  }
}

const deletemovie = async (req, res) => {
  const { id } = req.params;
  try {
    await connectionPool.query("DELETE FROM tb_movie WHERE id_tb_movie = ?", [id]);
    res.json({ message: "Data berhasil dihapus" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Database error", error: err.message });
  }
}

module.exports = {
  readmovie,
  readmovieid,
  createmovie,
  updatemovie,
  deletemovie
};
