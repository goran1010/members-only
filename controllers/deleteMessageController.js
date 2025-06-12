import deleteMessage from "../models/deleteMessage.js";

export default async function deleteMessageController(req, res, next) {
  const { message_id } = req.query;
  await deleteMessage(message_id);
  res.redirect("/");
}
