const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
await pool.query("CREATE TABLE IF NOT EXISTS usernames (id SERIAL PRIMARY KEY, username VARCHAR(255))");
await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteEveryUser() {
    await pool.query("DROP TABLE IF EXISTS usernames");
}

async function getSearchUsernames(search) {
    const { rows } = await pool.query("SELECT * FROM usernames WHERE username ILIKE $1", [`%${search}%`]);
    return rows;
}

module.exports = {
  getAllUsernames,
  insertUsername,
  deleteEveryUser,
  getSearchUsernames
};
