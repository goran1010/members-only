import { Router } from "express";
const indexRouter = Router();
import indexController from "../controllers/indexController.js";
import usersRouter from "./usersRouter.js";
import becomeMemberController from "../controllers/becomeMemberController.js";
import becomeMemberPost from "../controllers/becomeMemberPost.js";
import createMessageController from "../controllers/createMessageController.js";
import deleteMessageController from "../controllers/deleteMessageController.js";
import isAdmin from "../auth/isAdmin.js";
import isLoggedIn from "../auth/isLoggedIn.js";

indexRouter.get("/", indexController);

indexRouter.get("/delete-message", isAdmin, deleteMessageController);

indexRouter.get("/become-member", isLoggedIn, becomeMemberController);

indexRouter.post("/become-member", isLoggedIn, becomeMemberPost);

indexRouter.post("/create-message", isLoggedIn, createMessageController);

indexRouter.use("/users", usersRouter);

export default indexRouter;
