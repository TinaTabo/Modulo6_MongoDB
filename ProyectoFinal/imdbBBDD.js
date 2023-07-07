//-- Uso del modelo
let mongoose = require("mongoose");

let Professional = require('./apiRest/src/model/professionalSchema');

mongoose.connect('mongodb+srv://cris_taboada:MySecur3Mongo@codenotch.i0gbn5t.mongodb.net/imdb',
                {useNewUrlParser: false, useUnifiedTopology: false});

//-- Datos de profesionales del cine para añadir a la BBDD de MongoDB
const pro1 = {
    name: "Tom Hanks",
    age: 65,
    weight: 77.1,
    height: 1.83,
    isRetired: false,
    nationality: "Estadounidense",
    oscarsNumber: 2,
    profession: "Actor",
    photo: "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_FMjpg_UX1000_.jpg"
};

const pro2 = {
    name: "Meryl Streep",
    age: 72,
    weight: 59.0,
    height: 1.68,
    isRetired: false,
    nationality: "Estadounidense",
    oscarsNumber: 3,
    profession: "Actriz",
    photo: "https://es.web.img3.acsta.net/pictures/17/01/10/13/53/476324.jpg"
};

const pro3 = {
    name: "Leonardo DiCaprio",
    age: 46,
    weight: 75.4,
    height: 1.83,
    isRetired: false,
    nationality: "Estadounidense",
    oscarsNumber: 1,
    profession: "Actor",
    photo: "https://static.wikia.nocookie.net/doblaje/images/1/14/LeonardoDiCaprio.jpg/revision/latest?cb=20220909040044&path-prefix=es"
};

const pro4 = {
    name: "Penélope Cruz",
    age: 47,
    weight: 56.7,
    height: 1.68,
    isRetired: false,
    nationality: "Española",
    oscarsNumber: 1,
    profession: "Actriz",
    photo: "https://media.vogue.mx/photos/64075107c0cefc687fd2bf3c/2:3/w_2560%2Cc_limit/GettyImages-1429986040.jpg"
};

const pro5 = {
    name: "Denzel Washington",
    age: 67,
    weight: 89.5,
    height: 1.85,
    isRetired: false,
    nationality: "Estadounidense",
    oscarsNumber: 2,
    profession: "Actor",
    photo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Denzel_Washington_2018.jpg"
};

const pro6 = {
    name: "Cate Blanchett",
    age: 52,
    weight: 59.8,
    height: 1.74,
    isRetired: false,
    nationality: "Australiana",
    oscarsNumber: 2,
    profession: "Actriz",
    photo: "https://phantom-telva.unidadeditorial.es/7582ad84bf51b4d6745198c7efed34b5/resize/828/f/jpg/assets/multimedia/imagenes/2023/01/25/16746443406596.jpg"
};

const pro7 = {
    name: "Joaquin Phoenix",
    age: 47,
    weight: 76.2,
    height: 1.73,
    isRetired: false,
    nationality: "Estadounidense",
    oscarsNumber: 1,
    profession: "Actor",
    photo: "https://www.lahiguera.net/cinemania/actores/joaquin_phoenix/fotos/27812/joaquin_phoenix.jpg"
};

const pro8 = {
    name: "Natalie Portman",
    age: 40,
    weight: 55.0,
    height: 1.60,
    isRetired: false,
    nationality: "Israelí",
    oscarsNumber: 1,
    profession: "Actriz",
    photo: "https://cdn.semana.es/wp-content/uploads/2021/05/natalie-portman-min.jpg"
};

// Professional.insertMany([pro1,pro2,pro3,pro4,pro5,pro6,pro7,pro8])
//     .then((data) => {
//         console.log(`Se han añadido ${data.length} professionals.`);
//         // mongoose.disconnect();
//     })
//     .catch((err) => {
//         console.log("Error: " + err);
//     });