import { Router } from "express";
const usersRouter = Router();
import createNewUserController from "../controllers/createNewUserController.js";
import passport from "../auth/passport.js";
import { body, validationResult } from "express-validator";

usersRouter.post("/create", createNewUserController);

usersRouter.post(
  "/log-in",
  [
    body("username").trim().notEmpty().withMessage("username empty"),
    body("password").trim().notEmpty().withMessage("password empty"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      req.flash("errors", errors.array());
      return res.redirect("/");
    }
    next();
  },
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
    failureFlash: "Invalid credentials",
    successFlash: "Logged in successfully",
  })
);

usersRouter.post("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

export default usersRouter;
