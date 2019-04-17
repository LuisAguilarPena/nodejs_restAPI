// load our app server using express
// 1. import express library
const express = require('express');
// 2. assign a variable to a new instance of express
const app = express()
// 3. listen to an especific port and espcify a cb funct
app.listen(3003, () => {
  console.log('Server listening on port 3003 :D');
})
// if you run node app.js and go to localhost:3003 you will get a Cannot GET /