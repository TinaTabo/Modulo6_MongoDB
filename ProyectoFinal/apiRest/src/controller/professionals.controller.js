const ProModel = require('../model/professionalSchema');

function getPro(req, res){
    let answer;
    let name = req.query.firstName;
    let lastname = req.query.lastName;
    if (name != undefined && lastname != undefined) {
        ProModel.find({"$and": [{"name": name},{"lastname": lastname}]})
            .then((pro) => {
                if (pro[0] != undefined) {
                    answer = {error: false, code: 200, message: "Professional found", result: pro};
                }else{
                    answer = {error: true, code: 404, message: "Professional not found", result: pro};
                }
                res.send(answer);
            })
    }else if (name == undefined && lastname == undefined) {
        ProModel.find({})
            .then((pro) => {
                answer = {error: true, code: 200, message: "Professionals found", result: pro};
                res.send(answer);
            })
    }
}

function postPro(req, res){
    let answer;
    let profesional = new ProModel({
        name: req.body.name,
        lastname: req.body.lastname,
        weight: req.body.weight,
        height: req.body.height,
        isRetired: req.body.isRetired,
        nationality: req.body.nationality,
        oscarsNumber: req.body.oscarsNumber,
        profession: req.body.profesional,
        photo: req.body.photo
    });
    ProModel.create(profesional)
        .then((pro) => {
            answer = {error: false, code: 200, message: "Professional correctly stored", result: pro};
            res.send(answer);
        })
}

function putPro(req, res){
    let answer;
    const {name, lastname, weight, height, isRetired, nationality, oscarsNumber, profession, photo, id} = req.body;
    ProModel.findByIdAndUpdate(id, {name: name, lastname: lastname, weight: weight, height: height, isRetired: isRetired, nationality: nationality, oscarsNumber: oscarsNumber, profession: profession, photo: photo})
        .then((pro) => {
            answer = {error: false, code: 200, message: "Professional correctly updated", result: pro};
            res.send(answer);
        })
}

function delPro(req, res){
    let answer;
    const id = req.body.id;
    ProModel.findByIdAndDelete(id)
        .then(function(pro) {
            answer = {error: false, code: 200, message: "Professional correctly deleted", result: pro};
            res.send(answer);
        })
}

module.exports = {getPro, postPro, putPro, delPro};