import express from "express";
import session from "express-session";
import passport from "./auth/passport.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

import indexRouter from "./routes/indexRouter.js";

app.use(
  session({ secret: "78902507", resave: false, saveUninitialized: false })
);
app.use(passport.session());
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message || "500 Internal server error");
});

app.listen(PORT, () => {
  console.log(`App started at port: ${PORT}`);
});
