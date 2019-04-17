// load our app server using express
// 1. import express library
const express = require('express');
// 2. assign a variable to a new instance of express
const app = express()
// 4. app.get and / to especify the root, cb funct to especify how you wanna handle the request with 2 parameters the actual request that comes from your browser and the response you want to give to this particular get request 
app.get('/', (req, res) => { // so this is localhost:3003
  console.log('Responding to root route');
  res.send("'Hello from root :3")
})
// 6. create another route to test
app.get('/users', (req, res) => {
  res.send('Nodemon autoupdates when I save this file')
}) 
// 3. listen to an especific port and espcify a cb funct
app.listen(3003, () => {
  console.log('Server listening on port 3003 :D');
})
// if you run node app.js and go to localhost:3003 you will get a Cannot GET / that is because we have not especified any root route, do that above the listen

// 5. lets add nodemon to avoid having to refresh our server (run node app.js again and again...) everytime we make changes, $ sudo npm i -g nodemon