require('dotenv').config()
const connectionPool = require("../config/db.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    const { email, pass } = req.body
    if (!email || !pass) {
        return res.status(400).json({ status: "Email dan password wajib diisi" })
    }
    try {
        const [result] = await connectionPool.query("SELECT * FROM tb_user WHERE email_tb_user = ?", [email])
        if (result.length === 0) {
            return res.status(401).json({ status: "Email tidak ditemukan" })
        }
        const isMatch = await bcrypt.compare(pass, result[0].pass_tb_user)
        if (!isMatch) {
            return res.status(401).json({ status: "Password salah" })
        }
        const accestoken = jwt.sign({ email: result[0].email_tb_user }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.json({ status: "Login berhasil", token: accestoken })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: "Database error", error: err.message })
    }
}

const register = async (req, res) => {
    const { email, nama, pass } = req.body
    if (!email || !nama || !pass) {
        return res.status(400).json({ status: "Email, nama, dan password wajib diisi" })
    }
    try {
        const [result] = await connectionPool.query("SELECT * FROM tb_user WHERE email_tb_user = ?", [email])
        if (result.length > 0) {
            return res.status(400).json({ status: "Email sudah terdaftar" })
        }
        const hashedPassword = await bcrypt.hash(pass, 10)
        await connectionPool.query("INSERT INTO tb_user (email_tb_user, nama_tb_user, pass_tb_user) VALUES (?, ?, ?)", [email, nama, hashedPassword])
        const accestoken = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.json({ status: "Register berhasil", token: accestoken })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: "Database error", error: err.message })
    }
}

module.exports = { login, register }
