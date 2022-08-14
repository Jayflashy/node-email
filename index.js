const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config()
const {port = 3000} = process.env

const app = express()
var path = require('path');