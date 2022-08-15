const  express = require('express')
const router = express.Router()
const HomeController = require('./controller.js')

router.use((req, res, next) => {
    req.app.set('layout', 'layouts/master')
    next()
})

router.get('/', HomeController.index)

router.get('/index', HomeController.index)

router.get('/settings', HomeController.settings)

router.post('/setting', HomeController.saveSetting)

router.get('/email', HomeController.email)

router.post('/sendemail', HomeController.sendemail)

module.exports = router