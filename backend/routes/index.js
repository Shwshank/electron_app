const express = require('express')
const router = express.Router()

var users = require('../controllers/user')

router.post('/login', users.login)

router.post('/user', users.post)

router.get('/user', users.get)

router.delete('/user', users.delete)

module.exports = router
