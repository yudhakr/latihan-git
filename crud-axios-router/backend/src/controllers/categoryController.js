const connectionPool = require("../config/db.js");

const readCategory = (req, res) => {
  let query = "SELECT * FROM tb_katagori";

  connectionPool.query(query, (err, result) => {
    if(err) {
      console.log(err)
      return res.status(500).json({ message: "Database error", error: err })
    }
    res.json(result)
  })
}

const readCategoryid = (req, res) => {
  let {id}  = req.params;
  let querytext = `SELECT * FROM tb_katagori WHERE id_tb_katagori = ?`

  connectionPool.query(querytext, [id], (err, result) => {
    if(err) {
      console.log(err)
      return res.status(500).json({ message: "Database error", error: err })
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "Kategori tidak ditemukan" })
    }
    res.json(result[0])
})
}

const createCategory = (req, res) => {
  let { names, des } = req.body;
  let querytext = `INSERT INTO tb_katagori (nama_tb_katagori, des_tb_katagori) VALUES (?, ?)`

  connectionPool.query(querytext, [names, des], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.json({ message: "Data berhasil ditambahkan" });
  });
};
  
const updateCategory = (req,res) => {
  let {names, des} = req.body
  let {id} = req.params
  let querytext = `UPDATE tb_katagori SET nama_tb_katagori = ?, des_tb_katagori = ? WHERE id_tb_katagori = ?`

  connectionPool.query(querytext, [names, des, id], (err,data) =>{
    if(err){
      console.log(err)
      return res.status(500).json({ message: "Database error", error: err })
    }
    res.json({message: "Data berhasil diupdate"})

  })
}

const deleteCategory = (req,res) => {
  let {id} = req.params
  let querytext = `DELETE FROM tb_katagori WHERE id_tb_katagori = ?`

  connectionPool.query(querytext, [id], (err,data) =>{
    if(err){
      console.log(err)
      return res.status(500).json({ message: "Database error", error: err })
    }
    res.json({message: "Data berhasil dihapus"})

  })
}


module.exports = {
  readCategory,
  readCategoryid,
  createCategory,
  updateCategory,
  deleteCategory
};