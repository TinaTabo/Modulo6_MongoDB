//-- Schema mongoose de Credentials
const mongoose = require("mongoose");

const PhotosSchema = new mongoose.Schema({
    userName: String,
    url: String,
    title: String,
    description: String
})

module.exports = mongoose.model("Photo", PhotosSchema, "photos");