const express = require('express')
const testRoutes = express.Router()

testRoutes.get('/testRoute1', (req, res) => {
  res.send('Nodemon autoupdates when I save this file, I still need to refresh tho, only updates server so I dont have to run server again')
})

testRoutes.get('/usersTest', (req, res) => {
  let user1 = {firstName: 'Giannis', lastName: 'Antetokounmpo'}
  let user2 = {firstName: 'Scottie', lastName: 'Pippen'}
  let user3 = {firstName: 'Dennis', lastName: 'Rodman'}
  // res.json(user1) // this is how you display only one
  res.json([user1, user2, user3])
})

testRoutes.get('/bullsRosterTest', (req, res) => {
  let user1 = {userName: 'Alex', tasks: ['sweep patio', 'clean bathroom']}
  let user2 = {firstName: 'Scottie', lastName: 'Pippen'}
  let user3 = {firstName: 'Dennis', lastName: 'Rodman'}
  let x = user1.tasks[0]  
  res.json([user1, user2, user3, x])
})

module.exports = testRoutes