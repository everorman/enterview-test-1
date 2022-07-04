
const mysql = require('mysql');

const { config } = require('../config/config');

const pool = mysql.createPool({
  connectionLimit: 7,
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword, 
  database: config.dbName,
  table: 'user'
});


module.exports = pool;