import pool from "../db/pool.js";

export default async function deleteMessage(message_id) {
  await pool.query("DELETE FROM messages WHERE messages.id = $1;", [
    message_id,
  ]);
}
