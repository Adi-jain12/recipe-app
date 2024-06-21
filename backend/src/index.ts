import express from "express";
import cors from "cors";
import pool from "./database.ts";

const app = express();

app.use(express.json());
app.use(cors());

const getUsers = async () => {
  try {
    const res = await pool.query("SELECT * FROM users"); // replace 'users' with your table name
    console.log(res.rows);
  } catch (err) {
    console.error("Error executing query", err.stack);
  }
};

getUsers();

app.listen(5000, () => {
  console.log("Server running on Port 5000");
});
