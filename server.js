////////////////////////
// Setup - Import deps and create app object
////////////////////////
const express = require('express')
const middleware = require('./middleware/mid.js')
const MainRouter = require('./controllers/mainrouter.js')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3001

//////////////////////
// Declare Middleware
//////////////////////
middleware(app)
///////////////////////
// Declare Routes and Routers 
///////////////////////
app.use("/budgets", MainRouter)
///////////////////////////
// Server Listener
///////////////////////////
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})