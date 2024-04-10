
const auth = (req, res, next) => {
  if (req.session.user) {
    next()
  } else res.redirect("/noauth")
}
module.exports = auth