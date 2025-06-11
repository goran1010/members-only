import { Router } from "express";
const indexRouter = Router();
import indexController from "../controllers/indexController.js";
import usersRouter from "./usersRouter.js";
import becomeMemberController from "../controllers/becomeMemberController.js";

indexRouter.get("/", indexController);

indexRouter.get("/become-member", becomeMemberController);

indexRouter.use("/users", usersRouter);

export default indexRouter;
