const connectionPool = require("../config/db.js");

const readmovie = (req, res) => {
  let query = "SELECT * FROM tb_movie";

  connectionPool.query(query, (err, result) => {
    if(err) {
      console.log(err)
      return res.status(500).json({ message: "Database error", error: err })
    }
    res.json(result)
  })
}

const readmovieid = (req, res) => {
  let {id}  = req.params;
  let querytext = `SELECT * FROM tb_movie WHERE id_tb_movie = ?`

  connectionPool.query(querytext, [id], (err, result) => {
    if(err) {
      console.log(err)
      return res.status(500).json({ message: "Database error", error: err })
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "Film tidak ditemukan" })
    }
    res.json(result[0])
})
}

const createmovie = (req, res) => {
  let { title, year } = req.body;
  let querytext = `INSERT INTO tb_movie (title_tb_movie, year_tb_movie) VALUES (?, ?)`

  connectionPool.query(querytext, [title, year], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.json({ message: "Data berhasil ditambahkan" });
  });
};
  
const updatemovie = (req,res) => {
  let {title,year} = req.body
  let {id} = req.params
  let querytext = `UPDATE tb_movie SET title_tb_movie = ?, year_tb_movie = ? WHERE id_tb_movie = ?`

  connectionPool.query(querytext, [title, year, id], (err,data) =>{
    if(err){
      console.log(err)
      return res.status(500).json({ message: "Database error", error: err })
    }
    res.json({message: "Data berhasil diupdate"})
  
  })
}

const deletemovie = (req,res) => {
  let {id} = req.params
  let querytext = `DELETE FROM tb_movie WHERE id_tb_movie = ?`

  connectionPool.query(querytext, [id], (err,data) =>{
    if(err){
      console.log(err)
      return res.status(500).json({ message: "Database error", error: err })
    }
    res.json({message: "Data berhasil dihapus"})
  
  })
}


module.exports = {
  readmovie,
  readmovieid,
  createmovie,
  updatemovie,
  deletemovie
};