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
                console.log("Error: " + err);
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
            console.log("Error: " + err);
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
            console.log("Error: " + err);
        });
}

function delPhotos(req, res){
    console.log(req.query.userName);
}

module.exports = {getPhotos, postPhotos, putPhotos, delPhotos};