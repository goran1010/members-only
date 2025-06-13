import pool from "../db/pool.js";
import dotenv from "dotenv";
dotenv.config();

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export default async function createNewUser(req, res, next, hashedPassword) {
  const full_name = `${req.body.first_name} ${req.body.last_name}`;
  let is_admin = false;
  if (req.body.password_admin === ADMIN_PASSWORD && req.body.admin)
    is_admin = true;
  await pool.query(
    "INSERT INTO users (username, password,full_name,is_member,is_admin) VALUES ($1, $2, $3, $4, $5)",
    [req.body.username, hashedPassword, full_name, false, is_admin]
  );
}
