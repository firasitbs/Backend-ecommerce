const router = require('express').Router()
const sig = require('../Controller/auth.controller')
const login=require('../Controller/register.controller')
const {validateUser} = require('../Middleware/validation');


router.post("/login",login.signin)

router.post('/signup',validateUser,sig.signup)

module.exports = router
