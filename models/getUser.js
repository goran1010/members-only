import pool from "../db/pool.js";

export default async function getUser(value) {
  const { rows } = await pool.query(
    "SELECT username FROM users WHERE username = $1",
    [value]
  );
  return rows;
}
