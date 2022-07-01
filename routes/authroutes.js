const { Router } = require("express");


const authcontrollers = require("../controllers/authcontrollers")

const router = Router() // creating the instance of router

router.get("/signup",authcontrollers.signup_get); // here we will import handler function that are made in ../controllers/authcontrollers

router.get("/signin",authcontrollers.signin_get);

router.post("/signup",authcontrollers.signup_post);

router.post("/signin",authcontrollers.signin_post);

router.post("/contact",authcontrollers.contact_post);

module.exports = router;