import pool from "../db/pool.js";

export default async function becomeMember(currentUser) {
  await pool.query("UPDATE users SET is_member = true WHERE id = $1", [
    currentUser.id,
  ]);
}
