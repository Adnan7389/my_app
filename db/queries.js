// db/queries.js
const pool = require("./pool");

async function getAllUsernames(searchTerm) {
  if (searchTerm) {
    // Use ILIKE for case-insensitive search
    const { rows } = await pool.query(
      "SELECT * FROM usernames WHERE username ILIKE $1",
      [`%${searchTerm}%`]
    );
    return rows;
  }

  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteAllUsernames() {
  await pool.query("DELETE FROM usernames");
}

// ---------functions for authentication ---------
async function findUserByUsername(username) {
  const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return rows[0];
}

async function findUserById(id) {
  const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return rows[0];
}

async function createUser(username, hashedPassword) {
  const { rows } = await pool.query(
    "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
    [username, hashedPassword]
  );
  return rows[0]; // return the new user
}


module.exports = {
  getAllUsernames,
  insertUsername,
  deleteAllUsernames,
  // new
  findUserByUsername,
  findUserById,
  createUser,
};
