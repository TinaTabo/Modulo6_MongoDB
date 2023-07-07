//-- Schema mongoose de Credentials
const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
    userName: String,
    url: String,
    title: String,
    description: String
})

module.exports = mongoose.model("Photo", PhotoSchema, "photos");