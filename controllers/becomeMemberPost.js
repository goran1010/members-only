import becomeMember from "../models/becomeMember.js";
import dotenv from "dotenv";
dotenv.config();
const SECRET_PHRASE = process.env.SECRET_PHRASE;

export default async function becomeMemberPost(req, res, next) {
  console.log(req.body.phrase, SECRET_PHRASE);
  if (req.body.phrase === SECRET_PHRASE) {
    await becomeMember(req.user);
    res.redirect("/");
  } else {
    req.flash("errors", "Incorrect secret phrase!");
    res.redirect("/become-member");
  }
}
