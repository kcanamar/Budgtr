////////////////////////
// Setup - Import deps and create app object
////////////////////////
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT || 3001
const budgets = require('./models/budgets.js')
//////////////////////
// Declare Middleware
//////////////////////
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(morgan('tiny'))
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
    req.body.tags = req.body.tags.split(',') 
    budgets.unshift(req.body)
    res.redirect('/budgets')
})
///////////////////////////
// Server Listener
///////////////////////////
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})