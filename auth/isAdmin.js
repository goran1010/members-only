export default function isAdmin(req, res, next) {
  if (req.user && req.user.is_admin) return next();
  res.status(403).send("Access denied.");
}
