export default function isLoggedIn(req, res, next) {
  if (req.user) return next();
  res.status(403).send("Access denied.");
}
