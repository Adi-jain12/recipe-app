import { Pool } from "pg";

const pool = new Pool({
  user: "postgres", // replace with your database user
  host: "localhost", // replace with your database host
  database: "recipe-app", // replace with your database name
  password: "adityadb", // replace with your database password
  port: 5432, // replace with your database port
});

pool.connect((err, client, release) => {
  if (err) {
    console.error("Error acquiring client", err.stack);
    return;
  }
  client.query("SELECT NOW()", (err, result) => {
    release();
    if (err) {
      console.error("Error executing query", err.stack);
      return;
    }
    console.log("Connection successful, current time:", result.rows);
  });
});

export default pool;
