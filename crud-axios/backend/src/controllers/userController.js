require('dotenv').config()
const connectionPool = require("../config/db.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const login = (req, res) => {
    let { email, pass } = req.body
    let querytext = `SELECT * FROM tb_user WHERE email_tb_user = "${email}"`

    connectionPool.query(querytext, [email], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ status: "Database error", error: err.message })
        }
        if (result.length === 0) {
            return res.status(401).json({ status: "Email tidak ditemukan" })
        }
        bcrypt.compare(pass, result[0].pass_tb_user, (err, isMatch) => {
            if (err) {
                console.log(err)
                return res.status(500).json({ status: "Database error", error: err.message })
            }
            if (!isMatch) {
                return res.status(401).json({ status: "Password salah" })
            }
            const accestoken = jwt.sign({ email: result[0].email_tb_user }, process.env.JWT_SECRET, { expiresIn: '1h' })
            res.json({ status: "Login berhasil", token: accestoken })
        })
    })
}

const register = (req, res) => {
    let { email, nama, pass } = req.body
    let querytext = `SELECT * FROM tb_user WHERE email_tb_user = "${email}"`

    connectionPool.query(querytext, [email], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ status: "Database error", error: err.message })
        }
        if (result.length > 0) {
            return res.status(400).json({ status: "Email sudah terdaftar" })
        }
        bcrypt.hash(pass, 10, (err, hashedPassword) => {
            if (err) {
                console.log(err)
                return res.status(500).json({ status: "Database error", error: err.message })
            }
            let insertQuery = `INSERT INTO tb_user (email_tb_user, nama_tb_user, pass_tb_user) VALUES ("${email}", "${nama}", "${hashedPassword}")`
            connectionPool.query(insertQuery, [email, nama, hashedPassword], (err, data) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json({ status: "Database error", error: err.message })
                }
                const accestoken = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: '1h' })
                res.json({ status: "Register berhasil", token: accestoken })
            })
        })
    })
}

module.exports = { login, register }