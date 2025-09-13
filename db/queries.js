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

module.exports = {
  getAllUsernames,
  insertUsername,
  deleteAllUsernames,
};
