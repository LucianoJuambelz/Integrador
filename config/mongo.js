const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://luchojuambelz98:hKpqhzcMsDHmNw8J@cluster0.zwqb7cb.mongodb.net/?retryWrites=true&w=majority", (err => {
    err? console.log("Pasaron cosas") : console.log("TODO CONECTADO, REY");
}))
