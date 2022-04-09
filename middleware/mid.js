///////////////////////
// Import Dependencies
///////////////////////
const express = require('express')
const morgan = require('morgan')
require('dotenv').config()

///////////////////////
// Export MIDDLEWARE as a function
///////////////////////

module.exports = function (app) {

    app.use(express.static("public")) // serve static files from the public folder
    app.use(express.urlencoded({extended: true})) // parses application/x-www-form-urlencoded
    app.use(morgan("tiny")) // logging middleware

}