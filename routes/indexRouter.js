import { Router } from "express";
const indexRouter = Router();
import indexController from "../controllers/indexController.js";
import usersRouter from "./usersRouter.js";
import becomeMemberController from "../controllers/becomeMemberController.js";
import becomeMemberPost from "../controllers/becomeMemberPost.js";
import createMessageController from "../controllers/createMessageController.js";
import deleteMessageController from "../controllers/deleteMessageController.js";
import isAdmin from "../auth/isAdmin.js";

indexRouter.get("/", indexController);

indexRouter.get("/delete-message", isAdmin, deleteMessageController);

indexRouter.get("/become-member", becomeMemberController);

indexRouter.post("/become-member", becomeMemberPost);

indexRouter.post("/create-message", createMessageController);

indexRouter.use("/users", usersRouter);

export default indexRouter;
