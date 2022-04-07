////////////////////////
// Setup - Import deps and create app object
////////////////////////
require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const budgets = require('./models/budgets.js')
//////////////////////
// Declare Middleware
//////////////////////
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
///////////////////////
// Declare Routes and Routers 
///////////////////////
app.get("/budgets", (req, res) => {
    res.render("index.ejs", {budget: budgets})
})
app.get("/budgets/new", (req, res) => {
    res.render("new.ejs")
})
app.get("/budgets/:id", (req, res) => {
    res.render("show.ejs", {budget: budgets[req.params.id]})
})
app.post("/budgets", (req, res) => {
    console.log('Create route accessed!')
    console.log('req body is', req.body)
    res.send('This route works')
})
///////////////////////////
// Server Listener
///////////////////////////
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})