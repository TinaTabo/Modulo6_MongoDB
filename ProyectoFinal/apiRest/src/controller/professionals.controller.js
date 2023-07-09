const ProModel = require('../model/professionalSchema');
const mongoose = require('mongoose');

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
        age: req.body.age,
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
    let id = req.body.id;
    let name = req.body.name;
    let lastname = req.body.lastname;
    let age = req.body.age;
    let weight = req.body.weight;
    let height = req.body.height;
    let isRetired = req.body.isRetired;
    let nationality = req.body.nationality;
    let oscarsNumber = req.body.oscarsNumber;
    let profession = req.body.profession;
    let photo = req.body.photo;
    let proParams = {};

    if (name != undefined) {
        proParams.name = name;
    }
    if (lastname != undefined) {
        proParams.lastname = lastname;
    }
    if (age != undefined) {
        proParams.age = age;
    }
    if (weight != undefined) {
        proParams.weight = weight;
    }
    if (height != undefined) {
        proParams.height = height;
    }
    if (isRetired != undefined) {
        proParams.isRetired = isRetired;
    }
    if (nationality != undefined) {
        proParams.nationality = nationality;
    }
    if (oscarsNumber != undefined) {
        proParams.oscarsNumber = oscarsNumber;
    }
    if (profession != undefined) {
        proParams.profession = profession;
    }
    if (photo != undefined) {
        proParams.photo = photo;
    }

    console.log(proParams);

    let answer;
    console.log(id);
    ProModel.findByIdAndUpdate(id, {"$set": proParams}, {new: true})
        .then((data) => {
            answer = {error: false, code: 200, message: "Professional correctly updated", result: data};
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