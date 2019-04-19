//Details to connect to mysql
const mysql = require('mysql')
// create a connection pool in order to avoid fail connections to mysql
// in order to make it work deployed ill use ClearDB
// $ heroku addons:create cleardb:ignite
// $ heroku config
// get mysql info from the CLEARDB DATABSE URL
// connect to cleardb through mysql and access db given an create table
// $ mysql --host=host --user=user --password=pass (edited) 
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
