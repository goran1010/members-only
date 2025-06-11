import bcrypt from "bcryptjs";
import createNewUser from "../models/createNewUser.js";

export default async function createNewUserController(req, res, next) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await createNewUser(req, res, next, hashedPassword);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    next(error);
  }
}
