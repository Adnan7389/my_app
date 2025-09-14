// controllers/userController.js
const db = require("../db/queries");

async function getUsernames(req, res) {
  res.render("index", { user: req.user });
}

async function createUsernameGet(req, res) {
  res.send(`
    <form action="/new" method="POST">
      <input type="text" name="username" placeholder="Enter username" required>
      <button type="submit">Submit</button>
    </form>
  `);
}

async function createUsernamePost(req, res) {
  try {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error inserting user");
  }
}

async function deleteUsernames(req, res) {
  try {
    await db.deleteAllUsernames();
    res.send("All usernames deleted!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting users");
  }
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteUsernames,
};
