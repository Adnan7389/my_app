// controllers/userController.js
const db = require("../db/queries");

async function getUsernames(req, res) {
  try {
    const search = req.query.search || null;
    const usernames = await db.getAllUsernames(search);
    
    console.log("Usernames:", usernames);
    if (usernames.length === 0) {
     return res.send(`<p> No usernames found in the database.</p>`);
    }

    res.send(
      "Usernames: " + usernames.map(user => user.username).join(", ")
    );
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching users");
  }
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
