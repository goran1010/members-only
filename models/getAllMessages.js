import pool from "../db/pool.js";

export default async function getAllMessages() {
  const { rows } = await pool.query(
    "SELECT messages.id AS message_id, title, text,author,date_created, users.id AS user_id, full_name, is_member, is_admin FROM messages JOIN users ON messages.author = users.id ORDER BY messages.id DESC"
  );
  return rows;
}
