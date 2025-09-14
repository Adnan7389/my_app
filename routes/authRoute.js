// routes/authRoute.js
const { Router } = require("express");
const controller = require("../controllers/authController");
const passport = require("passport");

const router = Router();

router.get("/sign-up", controller.signUpGet);
router.post("/sign-up", controller.signUpPost);

// login goes through Passport
router.post("/log-in", controller.loginPost);

router.get("/log-out", controller.logout);

module.exports = router;