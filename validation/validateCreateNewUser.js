import { body } from "express-validator";
import getUser from "../models/getUser.js";
import dotenv from "dotenv";
dotenv.config();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

const validateCreateNewUser = [
  body("username")
    .trim()
    .isLength({ min: 5, max: 30 })
    .withMessage(`Username has to be between 5 and 30 characters long.`)
    .custom(async (value) => {
      const usernameList = await getUser(value);
      if (usernameList.length > 0) {
        throw new Error("Username already exists");
      }
      return true;
    }),
  body("first_name").trim().notEmpty(),
  body("last_name").trim().notEmpty(),
  body("password").trim().notEmpty(),
  body("confirm-password")
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords need to match");
      }
      return true;
    }),
  body("password_admin")
    .trim()
    .custom((value, { req }) => {
      if (req.body.admin && value !== ADMIN_PASSWORD) {
        throw new Error("Incorrect Admin password");
      }
      return true;
    }),
];
export default validateCreateNewUser;
