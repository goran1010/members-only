import { Router } from "express";
const indexRouter = Router();
import indexController from "../controllers/indexController.js";
import usersRouter from "./usersRouter.js";
import becomeMemberController from "../controllers/becomeMemberController.js";
import becomeMemberPost from "../controllers/becomeMemberPost.js";

indexRouter.get("/", indexController);

indexRouter.get("/become-member", becomeMemberController);

indexRouter.post("/become-member", becomeMemberPost);

indexRouter.use("/users", usersRouter);

export default indexRouter;
