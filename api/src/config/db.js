require('dotenv').config();

const mysql = require('mysql2/promise');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
// console.log(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
const db = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

db.getConnection()
// .then(console.log)
.catch((err) => {
  console.warn('Warning: Cannot reach database');
  console.error(err)
});

module.exports = db;

