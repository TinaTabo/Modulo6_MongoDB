const PhotoModel = require('../model/photo');

function getPhotos(req, res){
    let usuario = req.query.userName;
    if (usuario != undefined) {
        PhotoModel.find({"userName": usuario})
            .then((photo) => {
                console.log(photo);
                res.send(photo)
            })
            .catch((err) => {
                res.send("Error: " + err);
            });
    }
}

function postPhotos(req, res){
    let photo = new PhotoModel({
        userName: req.body.userName,
        url: req.body.url,
        title: req.body.title,
        description: req.body.description
    });
    PhotoModel.create(photo)
        .then((data) => {
            res.send("Documento guardado correctamente");
            console.log(data);
        })
        .catch((err) => {
            res.send("Error: " + err);
        });
}

function putPhotos(req, res){
    let titulo = req.body.title;
    let descripcion = req.body.description;
    PhotoModel.updateOne({title: titulo}, {description: descripcion})
        .then((data) => {
            res.send('Foto actualizada correctamente.');
            console.log(data);
        })
        .catch((err) => {
            res.send("Error: " + err);
        });
}

function delPhotos(req, res){
    let usuario = req.body.userName;
    let titulo = req.body.title;
    if (usuario != undefined && titulo != undefined) {
        PhotoModel.deleteOne({"$and": [{userName: usuario}, {title: titulo}]})
        .then(function(data) {
            res.send("Foto correctamente eliminada");
            console.log(data);
        })
        .catch(function() {
            res.send("Error al eliminar la foto");
        });
    }else{
        PhotoModel.deleteMany({userName: usuario})
        .then(function(data) {
            res.send(`Todas las fotos del usuario ${usuario} han sido eliminadas.`);
            console.log(data);
        })
        .catch(function() {
            res.send("Error al eliminar la foto");
        });
    }
}

module.exports = {getPhotos, postPhotos, putPhotos, delPhotos};