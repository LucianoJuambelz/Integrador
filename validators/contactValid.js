const { body, validationResult } = require("express-validator");

const validacionContact = [
    body("nombre")
        .notEmpty().withMessage("El nombre es obligatorio"),
    body("apellido")
        .notEmpty().withMessage("El apellido es obligatorio"),
    body("email")
        .notEmpty().withMessage("El email es obligatorio").isEmail().withMessage("Debe ser un email válido"),
    body("motivo")
        .notEmpty().withMessage("Ingrese su motivo"),
    body("mensaje")
        .notEmpty().withMessage("Debe escribir un mensaje").isLength({min:10, max:300}).withMessage("El mensaje debe tener entre 10 y 300 caracteres"),

    (req, res, next) =>{
        const error = validationResult(req);

        if(!error.isEmpty()){
            const formDataContact = req.body
            const arrContactWarming = error.array()
            res.render("contacto", { arrContactWarming, formDataContact})
        } else return next();
    }
]

module.exports= validacionContact