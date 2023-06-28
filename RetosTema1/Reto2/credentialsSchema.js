//-- Schema mongoose de Credentials
const mongoose = require("mongoose");

const CredentialsSchema = new mongoose.Schema({
    address: String,
    phone: Number,
    email: String
})

module.exports = mongoose.model("Credential", CredentialsSchema);