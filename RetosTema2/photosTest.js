//-- Uso del modelo
let mongoose = require("mongoose");

let Photo = require('./photosSchema');

mongoose.connect('mongodb+srv://cris_taboada:MySecur3Mongo@codenotch.i0gbn5t.mongodb.net/codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false});

//-- Definir photos de prueba.
let photo1 = new Photo(
    {
        userName: "john_doe",
        url: "https://static.diariofemenino.com/uploads/psicologia/214120-sonar-montana.jpg",
        title: "Paisaje montañoso",
        description: "Una hermosa vista de las montañas cubiertas de nieve."
    }
);

let photo2 = new Photo(
    {
        userName: "jane_smith",
        url: "https://img.freepik.com/foto-gratis/hermosa-isla-paradisiaca-playa-mar_74190-6637.jpg?w=2000",
        title: "Playa tropical",
        description: "Una imagen paradisíaca de una playa de aguas cristalinas y arena blanca."
    }
);

let photo3 = new Photo(
    {
        userName: "mike_jones",
        url: "https://spanish.korea.net/upload/content/image/eef6084166384cf1827fc8a3ffaba694_20220411175802.jpg",
        title: "Ciudad nocturna",
        description: "Una fotografía impresionante de una ciudad iluminada por las luces de la noche."
    }
);

let photo4 = new Photo(
    {
        userName: "laura_williams",
        url: "https://centrodejardineriagorbeia.com/wp-content/uploads/2018/03/primaveraenflor-cerezo.jpeg",
        title: "Flor de primavera",
        description: "Una hermosa flor de colores vibrantes que florece en primavera."
    }
);

//-- Añadir photos a la base de datos
// photo1.save()
// .then((data) => {
//     console.log("Documento guardado correctamente");
//     console.log(data);
// })
// .catch((err) => {
//     console.log("Error: " + err);
// });

// photo2.save()
// .then((data) => {
//     console.log("Documento guardado correctamente");
//     console.log(data);
// })
// .catch((err) => {
//     console.log("Error: " + err);
// });

// photo3.save()
// .then((data) => {
//     console.log("Documento guardado correctamente");
//     console.log(data);
// })
// .catch((err) => {
//     console.log("Error: " + err);
// });

// photo4.save()
// .then((data) => {
//     console.log("Documento guardado correctamente");
//     console.log(data);
// })
// .catch((err) => {
//     console.log("Error: " + err);
// });

module.exports = {photo1,photo2,photo3,photo4};