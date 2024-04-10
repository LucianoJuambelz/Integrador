const router = require('express').Router()
const users = require("../controllers/usersCt")
const auth = require("../helpers/auth")
const nodemailer = require("nodemailer")
const validations = require ("../config/validationRules")
const validacionContact = require("../validators/contactValid.js");
const validacionReg = require("../validators/registerValid.js");
const validacionLog = require("../validators/loginValid");

router.get("/login", users.getLoginForm)
router.post("/login", validacionLog, users.sendLoginForm)
router.get("/register", users.getRegisterForm)
router.post("/register", validacionReg, users.sendRegisterForm)
router.get("/Out", users.logout)
router.get("/setting", auth, users.getSettings)
router.post("/setting", auth, users.sendSettings)
router.get("/validation", auth, users.validateEmail)
router.get("/delete", auth, users.deleteUser)
router.get("/contacto", users.getContacto)
router.post("/contacto", validacionContact, users.sendContacto)

module.exports = router;