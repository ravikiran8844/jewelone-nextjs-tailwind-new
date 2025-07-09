// lib/db.js
import mysql from 'mysql2/promise';

const db = await mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'jewelone', // change to your DB name
});

export default db;
