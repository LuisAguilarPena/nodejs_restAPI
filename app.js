// load our app server using express
// 1. import express library
const express = require('express')
// 2. assign a variable to a new instance of express
const app = express()
// 11. require mysql
const mysql = require('mysql')
// 9. added morgan to get detailed info for get reqs, so everytime I refresh a route in the browser some info will be given to use in the terminal
const morgan = require('morgan')
// 14. bodyparser will be required to process requests easier
const bodyparser = require('body-parser')
// 14. middleware to do the before mention
app.use(bodyparser.urlencoded({extended: false}))
// 12. Created static file in the form of file.html and serve it with:
app.use(express.static('./public'))
// 9. ...
app.use(morgan('short')) // type of req, route, time
//app.use(morgan('combined')) // more detailed info
// 13. getConnection to reuse easier
getConnection = () =>  {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'lbta_mysql'
  })
}
// 14. create the post request  
app.post('/users', (req,res) => {
  console.log(`First name is: ${req.body.createFirstName}`)
  res.end();
})
// 4. app.get and / to specify the root, cb funct to specify how you wanna handle the request with 2 parameters the actual request that comes from your browser and the response you want to give to this particular get request 
app.get('/', (req, res) => { // so this is localhost:3003
  console.log('Responding to root route');
  res.send("'Hello from root :3")
})
// 6. create another route to test
app.get('/testRoute1', (req, res) => {
  res.send('Nodemon autoupdates when I save this file, I still need to refresh tho, only updates server so I dont have to run server again')
})
// 7. create another route to test, now it will return some json
app.get('/usersTest', (req, res) => {
  let user1 = {firstName: 'Giannis', lastName: 'Antetokounmpo'}
  let user2 = {firstName: 'Scottie', lastName: 'Pippen'}
  let user3 = {firstName: 'Dennis', lastName: 'Rodman'}
  // res.json(user1)
  res.json([user1, user2, user3])
})
// 8. create another route to test, now it will return some json
app.get('/bullsRosterTest', (req, res) => {
  let user1 = {userName: 'Alex', tasks: ['sweep patio', 'clean bathroom']}
  let user2 = {firstName: 'Scottie', lastName: 'Pippen'}
  let user3 = {firstName: 'Dennis', lastName: 'Rodman'}
  let x = user1.tasks[0]  
  res.json([user1, user2, user3, x])
})
// 10. specify a new route that is going to be connected to our database, the route is going to catch the id using the wildcard syntax
app.get('/users/:id', (req, res) => {
  console.log(`Fetching user with id: ${req.params.id}`);
  // create a variable that will refer to a mysql property/method, in this case CreateConnection this will establish a connection with the database
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'lbta_mysql'
  })
  // execute a sql query to pull down  some data from my data base with the query method that is now attached to connection
  // query takes 2 params the actual query and a cb to execute when query is done, the cb has 3 param err, results, fields 
  // connection.query("SELECT * FROM users", (err, rows, fields) => { res.json(rows) }) will render all contents from db
  const queryString = "SELECT * FROM users WHERE id = ?" // whatever we type inside [ ] is going to be the id
  const userId = req.params.id
  
  connection.query(queryString, [userId], (err, rows, fields) => {
    // if bad query
    if(err) {
      console.log(`Failed to query for users: ${err}`)
      res.sendStatus(500)
      // throw err
      return
    }
    console.log('I think we fetched users correctly');
  // 11. custom formatting for the json output
  /*const users = rows.map(row => {
    return {abc: '123'} // will return a json like -> [{abc: "123"}]
  })    
    res.json(users)*/
  /*const users = rows.map(row => {
      return {primerNombre: row.firstName, segundoNombre: row.lastName}
    })    
      res.json(users)*/
    res.json(rows)
  })
  // res.end() we dont want to inmediately end res due to the query
  //console.log(req, '(-_-)');
}) 
// route to get all users from database
app.get('/users', (req, res) => {
  const connection = getConnection()
  connection.query("SELECT * FROM users", (err, rows, fields) => { res.json(rows) })
})
// 3. listen to an especific port and espcify a cb funct
app.listen(3003, () => {
  console.log('Server listening on port 3003 :D');
})
// if you run node app.js and go to localhost:3003 you will get a Cannot GET / that is because we have not especified any root route, do that above the listen

// 5. lets add nodemon to avoid having to refresh our server (run node app.js again and again...) everytime we make changes, $ sudo npm i -g nodemon
// When creating stuff often times is done with a post req handler