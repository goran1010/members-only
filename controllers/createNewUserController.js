import bcrypt from "bcryptjs";
import createNewUser from "../models/createNewUser.js";
import { validationResult } from "express-validator";
import validateCreateNewUser from "../validation/validateCreateNewUser.js";

const createNewUserController = [
  validateCreateNewUser,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        req.flash("errors", errors.array());
        return res.redirect("/");
      }
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      await createNewUser(req, res, next, hashedPassword);
      res.redirect("/");
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
];
export default createNewUserController;
