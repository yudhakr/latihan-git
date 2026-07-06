const mysql = require("mysql")

const connectionPool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'db_movie'
});

connectionPool.getConnection(function(err) {
    if (err) {
        throw err
    }
});

module.exports = {
    connectionPool
}