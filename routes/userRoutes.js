const express = require('express')
const userRoutes = express.Router()
const getConnection = require('./getConnection.js')

// Displays all users in database
userRoutes.get('/users', (req, res) => {
  getConnection().query("SELECT * FROM users", (err, rows, fields) => { 
    res.json(rows) 
  })
})

// Displays an specific user in database
userRoutes.get('/users/:id', (req, res) => {
  console.log(`Fetching user with id: ${req.params.id}`);
  const queryString = "SELECT * FROM users WHERE id = ?" // whatever we type inside [ ] is going to be the id
  const userId = req.params.id
  getConnection().query(queryString, [userId], (err, rows, fields) => {
    if(err) {
      console.log(`Failed to query for users: ${err}`)
      res.sendStatus(500)
      return
    }
    console.log('I think we fetched users correctly');
    res.json(rows)
  })
}) 

// Insert new user into Database
userRoutes.post('/userCreated', (req,res) => {
  console.log(`First name is: ${req.body.createFirstName}`)
  
  const firstName = req.body.createFirstName
  const lastName = req.body.createLastName

  const queryString = "INSERT INTO users (firstName, lastName) VALUES (?, ?)"
  getConnection().query(queryString, [firstName, lastName], (err, results, fields) => {
    if (err) {
      console.log(`Failed to insert new user: ${err}`);
      res.sendStatus(500)
      return
    }
    console.log(`Inserted new user with ID: ${results.insertId}`);
    res.redirect('/')
  })
})
// create a way to delete users DELETE FROM users WHERE id=22
userRoutes.get('/userDeleted', (req, res) => {
  console.log(`First name is: ${req.query.deleteFirstName}`)
  console.log(`Last name is: ${req.query.deleteLastName}`)

  const firstName = req.query.deleteFirstName
  const lastName = req.query.deleteLastName

  const queryString = "DELETE FROM users WHERE (firstName, lastName) = (?, ?)"
  getConnection().query(queryString, [firstName, lastName] , (err, results, fields) => {
    if (err) {
      console.log(`Failed to delete new user: ${err}`);
      res.sendStatus(500)
      return
    }
    console.log(`Deleted user: ${firstName} ${lastName}`);
    res.redirect('/')
  })
})

module.exports = userRoutes