//-- Uso del modelo
let mongoose = require("mongoose");

let Photo = require('./photosSchema');

//-- Importar photos de prueba
let myPhotos = require('./photosTest');
let photo1 = myPhotos.photo1;
let photo2 = myPhotos.photo2;
let photo3 = myPhotos.photo3;
let photo4 = myPhotos.photo4;

mongoose.connect('mongodb+srv://cris_taboada:MySecur3Mongo@codenotch.i0gbn5t.mongodb.net/codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false});

//-- Funciones
//-- Subida de fotos
function addPhoto(usuario,url,titulo,descripcion){
    let photo = new Photo({
        userName: usuario,
        url: url,
        title: titulo,
        description: descripcion
    });
    Photo.create(photo)
        .then((data) => {
            console.log("Documento guardado correctamente");
            console.log(data);
            mongoose.disconnect();
        })
        .catch((err) => {
            console.log("Error: " + err);
        });
}
//-- Prueba de la función
// addPhoto(photo1.userName,photo1.url,photo1.title, photo1.description);
// addPhoto(photo1.userName,photo2.url,photo2.title, photo2.description);
// addPhoto(photo1.userName,photo3.url,photo3.title, photo3.description);
// addPhoto(photo1.userName,photo4.url,photo4.title, photo4.description);
// addPhoto(photo2.userName,photo2.url,photo2.title, photo2.description);
// addPhoto(photo3.userName,photo3.url,photo3.title, photo3.description);
// addPhoto(photo3.userName,photo4.url,photo4.title, photo4.description);


//-- Obtener fotos
function getPhotos(usuario){
    Photo.find({userName: usuario})
        .then((data) => {
            console.log(data);
            mongoose.disconnect();
        })
        .catch((err) => {
            console.log("Error: " + err);
        });
}
//-- Prueba de la funcion
// getPhotos(photo3.userName);
// getPhotos(photo2.userName);


//-- Modificar fotos
function modifyPhotos(titulo,descripcion){
    Photo.updateMany({title: titulo}, {description: descripcion})
        .then((data) => {
            console.log('Foto actualizada correctamente.');
            console.log(data);
            mongoose.disconnect();
        })
        .catch((err) => {
            console.log("Error: " + err);
        });
}

//-- Prueba de la funcion
// modifyPhotos('Playa tropical','Paisaje de aguas cristalinas y arena blanca, simplemente un paraiso.');


//-- Eliminar foto
function delPhoto(usuario, titulo) {
    Photo.deleteOne({"$and": [{userName: usuario}, {title: titulo}]})
        .then(function(data) {
            console.log("Foto correctamente eliminada");
            console.log(data);
            mongoose.disconnect();
        })
        .catch(function() {
            console.log("Error al eliminar la foto");
        });
}
//-- Prueba de la funcion
// delPhoto(photo1.userName, photo1.title);


//-- Eliminar todas las fotos
function delAllPhotos(usuario){
    Photo.deleteMany({userName: usuario})
        .then(function(data) {
            console.log("Foto correctamente eliminada");
            console.log(data);
            mongoose.disconnect();
        })
        .catch(function() {
            console.log("Error al eliminar la foto");
        });
}
//-- Prueba de la funcion
// delAllPhotos(photo3.userName);