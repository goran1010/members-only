import pool from "../db/pool.js";

export default async function createNewMessage(message) {
  await pool.query(
    "INSERT INTO messages (title, text, date_created, author) VALUES ($1, $2, NOW(), $3)",
    [message.title, message.text, message.author]
  );
}
