require("./config/mongo")
const { log } = require("console")
const express = require("express");
const path = require("path")
const session = require("express-session")
const auth = require("./helpers/auth")

const hbs= require("express-handlebars")
const app = express()

app.use(session({
  secret: "Hola",
  resave: false,
  saveUninitialized: true,
}));


app.engine("hbs", hbs.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
res.render("home", {user:req.session.user});
})

app.get("/secret", auth, (req, res) => {
  res.render("secret", { user: `${req.session.user.name} ${req.session.user.lastName}`, id: req.session.user.id })
})

app.get("/noauth", (req, res) => {
  res.render("noAuth")
})

app.get("/contacto", (req, res) => {
  res.render("contacto", {user:req.session.user});
  })

app.use("/users", require("./routes/usersRt"))

app.get("*", (req, res)=>{
  res.render("notFound")
});

app.listen(3020, err => {
    !err ? log('srver running on http://localhost:3020') : log('server running on http://localhost:3000')
  })