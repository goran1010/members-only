import becomeMember from "../models/becomeMember.js";

export default async function becomeMemberPost(req, res, next) {
  if (req.user) {
    await becomeMember(req.user);
  }
  res.redirect("/");
}
