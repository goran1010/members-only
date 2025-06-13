export default function becomeMemberController(req, res, next) {
  res.render("becomeAMember", { errors: req.flash("errors") });
}
