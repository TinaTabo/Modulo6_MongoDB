//-- Schema mongoose de Credentials
const mongoose = require("mongoose");

const ProfessionalSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    age: Number,
    weight: Number,
    height: Number,
    isRetired: Boolean,
    nationality: String,
    oscarsNumber: Number,
    profession: String,
    photo: String
})

module.exports = mongoose.model("Professional", ProfessionalSchema, "professionals");