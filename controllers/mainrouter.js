//////////////////////
// Importing Deps
//////////////////////

const express = require("express")
const router = express.Router()
const budgets = require('../models/budgets.js')
let bankAccountTotal = 0

//////////////////////
// Register Routes
//////////////////////
// Index Route
router.get("/", (req, res) => {
    bankAccountTotal = 0
    for (let entry of budgets) {
        if (parseInt(entry.amount) !== 'NaN')
        bankAccountTotal = bankAccountTotal + parseInt(entry.amount)
    }
    res.render("index.ejs", {
        budget: budgets, 
        total: bankAccountTotal, 
        balanceColor: function () {
            if (bankAccountTotal <= 0) {
                return 'red'
            } else {
                return 'green'
            }
        }
    })
})
// New Route
router.get("/new", (req, res) => {
    res.render("new.ejs")
})
// Show Route
router.get("/:id", (req, res) => {
    res.render("show.ejs", {budget: budgets[req.params.id]})
})
// Create Route
router.post("/", (req, res) => {
    if (req.body.amount === "") {req.body.amount = "0"}
    req.body.tags = req.body.tags.split(',') 
    budgets.unshift(req.body)
    res.redirect('/budgets')
})
//////////////////////
// Export Router
//////////////////////

module.exports = router