const express = require('express')
const router = express.Router()
const doSignup = require('../controller/userController')

router.get('/',doSignup)




module.exports = router