// require the necessary libraries and routes
const express = require('express')
const morgan = require('morgan') 
const bodyparser = require('body-parser')
const userRoutes = require('./routes/userRoutes.js')
const testRoutes = require('./routes/testRoutes.js')
// create a new express instance
const app = express()

app.use(bodyparser.urlencoded({extended: false}))
app.use(express.static('./public')) // what static file we are going to serve
app.use(morgan('short')) // gives us info about reqs
app.use(userRoutes)
app.use(testRoutes)

// Root route
app.get('/', (req, res) => {
  console.log('Responding to root route');
  res.send("'Hello from root :3")
})

const PORT = process.env.PORT || 3003 
// listening on port 3003
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} :D`);
})