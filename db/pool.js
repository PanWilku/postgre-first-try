const { Pool } = require("pg");
require("dotenv").config();
// All of the following properties should be read from environment variables
module.exports = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT
});
