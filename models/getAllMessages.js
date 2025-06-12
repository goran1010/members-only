import pool from "../db/pool.js";

export default async function getAllMessages() {
  const { rows } = await pool.query(
    "SELECT * FROM messages JOIN users ON messages.author = users.id"
  );
  return rows;
}
