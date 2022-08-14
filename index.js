const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config()
const {port = 3000} = process.env
const cors = require("cors") // import cors
const expressLayouts = require('express-ejs-layouts');

const app = express()
var path = require('path');
app.set('view engine', 'ejs')

// ROutes
const Routes = require('./src/routes.js')

// GLOBAL MIDDLEWARE
app.use(cors()) // add cors headers
app.use(morgan("dev")) // log the request for debugging
app.use(express.json()) // parse json bodies
app.use(express.static(__dirname + '/public'));
app.use(expressLayouts);

// routes
app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`)
)

app.use(Routes)

// 404 error
app.use((req, res) => 
    // console.log("Error 404"),
    res.status(404).send('404 Error Page')
)
// 501 error
app.use((req, res) => 
    // console.log("Error 501"),
    res.status(501).send('501 Error 501 Page')
)
// 500 error
app.use((req, res) => 
    // console.log("Error 500"),
    res.status(500).send('500 Error 500 Page')
)