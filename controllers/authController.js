const bcrypt = require("bcryptjs");
const db = require("../db/queries");
const passport = require("passport");

// GET /sign-up
async function signUpGet(req, res) {
  res.render("sign-up-form");
}

// POST /sign-up
async function signUpPost(req, res, next) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await db.createUser(req.body.username, hashedPassword);

    // Auto-login the new user
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect("/"); // home now shows logged-in user
    });
  } catch (err) {
    next(err);
  }
}

// POST /log-in
function loginPost(req, res, next) {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })(req, res, next);
}

// GET /log-out
function logout(req, res, next) {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
}

module.exports = { signUpGet, signUpPost, loginPost, logout };