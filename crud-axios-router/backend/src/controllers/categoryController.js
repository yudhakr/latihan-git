const connectionPool = require("../config/db.js");

const readCategory = async (req, res) => {
  try {
    const [result] = await connectionPool.query("SELECT * FROM tb_katagori");
    res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Database error", error: err.message });
  }
}

const readCategoryid = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await connectionPool.query("SELECT * FROM tb_katagori WHERE id_tb_katagori = ?", [id]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Kategori tidak ditemukan" });
    }
    res.json(result[0]);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Database error", error: err.message });
  }
}

const createCategory = async (req, res) => {
  const { names, des } = req.body;
  if (!names || !des) {
    return res.status(400).json({ message: "Nama dan deskripsi wajib diisi" });
  }
  try {
    await connectionPool.query("INSERT INTO tb_katagori (nama_tb_katagori, des_tb_katagori) VALUES (?, ?)", [names, des]);
    res.json({ message: "Data berhasil ditambahkan" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Database error", error: err.message });
  }
};

const updateCategory = async (req, res) => {
  const { names, des } = req.body;
  const { id } = req.params;
  if (!names || !des) {
    return res.status(400).json({ message: "Nama dan deskripsi wajib diisi" });
  }
  try {
    await connectionPool.query("UPDATE tb_katagori SET nama_tb_katagori = ?, des_tb_katagori = ? WHERE id_tb_katagori = ?", [names, des, id]);
    res.json({ message: "Data berhasil diupdate" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Database error", error: err.message });
  }
}

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await connectionPool.query("DELETE FROM tb_katagori WHERE id_tb_katagori = ?", [id]);
    res.json({ message: "Data berhasil dihapus" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Database error", error: err.message });
  }
}

module.exports = {
  readCategory,
  readCategoryid,
  createCategory,
  updateCategory,
  deleteCategory
};
