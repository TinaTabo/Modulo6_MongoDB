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
    let answer = {error: false, code: 200, message: "User successfullly registered", result:result};
    res.send(answer);
}

function putPro(req, res){
    let answer = {error: false, code: 200, message: "User successfullly registered", result:result};
    res.send(answer);
}

function delPro(req, res){
    let answer = {error: false, code: 200, message: "User successfullly registered", result:result};
    res.send(answer);
}

module.exports = {getPro, postPro, putPro, delPro};