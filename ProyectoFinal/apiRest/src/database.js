let mongoose = require("mongoose");

mongoose.connect('mongodb+srv://cris_taboada:MySecur3Mongo@codenotch.i0gbn5t.mongodb.net/imdb',
                {useNewUrlParser: true, useUnifiedTopology: true})
                .then((db) => {
                    console.log("database connected on " + db.connection.host);
                })
                .catch((error) => {
                    console.log(error);
                })