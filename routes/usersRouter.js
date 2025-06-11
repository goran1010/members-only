import { Router } from "express";
const usersRouter = Router();
import createNewUserController from "../controllers/createNewUserController.js";
import passport from "../auth/passport.js";

usersRouter.post("/create", createNewUserController);

usersRouter.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
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
