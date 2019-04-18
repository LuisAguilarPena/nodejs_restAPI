//Details to connect to mysql
const mysql = require('mysql')
// create a connection pool in order to avoid fail connections to mysql
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'lbta_mysql'
})

getConnection = () =>  {
  return pool
}

module.exports = getConnection