import createNewMessage from "../models/createNewMessage.js";

export default async function createMessageController(req, res, next) {
  const message = req.body;
  await createNewMessage(message);
  res.redirect("/");
}
