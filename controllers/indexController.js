import getAllMessages from "../models/getAllMessages.js";

export default async function indexController(req, res) {
  const allMessages = await getAllMessages();
  if (req.user && req.user.is_admin) {
    res.render("index-admin", { allMessages });
  } else if (req.user && req.user.is_member) {
    res.render("index-member", { allMessages });
  } else
    res.render("index", {
      allMessages,
      errors: req.flash("errors"),
      error: req.flash("error"),
    });
}
