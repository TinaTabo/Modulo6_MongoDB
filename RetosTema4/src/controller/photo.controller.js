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
    console.log(req.query.userName);
}

function putPhotos(req, res){
    console.log(req.query.userName);
}

function delPhotos(req, res){
    console.log(req.query.userName);
}

module.exports = {getPhotos, postPhotos, putPhotos, delPhotos};