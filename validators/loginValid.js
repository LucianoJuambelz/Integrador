const { body, validationResult } = require("express-validator");

const validationLogin = [
    body("email")
        .notEmpty().withMessage("El email es obligatorio")
        .isEmail().withMessage("Debe escribir un email válido"),
    body("pass")
        .notEmpty().withMessage("Debe escribir su contraseña"),

    (req, res, next) =>{
        const error = validationResult(req)

        if (!error.isEmpty()){
            const formDataLog = req.body
            const arrLogWarming = error.array()
            res.render("loginForm", { arrLogWarming, formDataLog })
        } else return next()
    }
]


module.exports = validationLogin