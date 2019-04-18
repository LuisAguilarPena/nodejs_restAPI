//Details to connect to mysql
const mysql = require('mysql')

getConnection = () =>  {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'lbta_mysql'
  })
}

module.exports = getConnection