//-- Uso del modelo
let mongoose = require("mongoose");

let User = require("./userSchema");
let Profile = require("./profileSchema");
let Credential = require("./credentialsSchema");

mongoose.connect('mongodb+srv://cris_taboada:MySecur3Mongo@codenotch.i0gbn5t.mongodb.net/codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false});

let userDocument = new User({
    login: "john_doe",
    password: "mysecretpassword123"
})
userDocument.save()
.then((data) => {
    console.log("Documento guardado correctamente");
    console.log(data);
})
.catch((err) => {
    console.log("Error: " + err);
})

let profileDocument = new Profile({
    name: "John",
    surname: "Doe",
    dateOfBirth: "1990-05-15",
    comments: "This user is very active and engaged.",
    rol: "admin"
})
profileDocument.save()
.then((data) => {
    console.log("Documento guardado correctamente");
    console.log(data);
})
.catch((err) => {
    console.log("Error: " + err);
})

let credentialDocument = new Credential({
    address: "123 Main Street, City",
    phone: 1234567890,
    email: "johndoe@example.com"
})
credentialDocument.save()
.then((data) => {
    console.log("Documento guardado correctamente");
    console.log(data);
})
.catch((err) => {
    console.log("Error: " + err);
})
