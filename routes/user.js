const express = require('express')
const wrapAsync = require('../utils/wrapAsync')
const router = express.Router()
const userController = require("../controllers/user")

//Show page
router.get("/signup", userController.showSignupPage)

//Post the data to the database and to passportjs
router.post("/signup", wrapAsync(userController.sendSignupData));

//show login page
router.get("/login", userController.showLoginPage)

//Post login data
router.post("/login", userController.postLoginData)

//logout
router.get("/logout", userController.logout)
module.exports = router;