const mongoose = require("mongoose");

const connect = () => {
    mongoose
        .connect(
            // "mongodb+srv://kanhaiya:kanhaiya@cluster0.vg1rcnh.mongodb.net/test"
            "mongodb+srv://kanhaiya:kanhaiya@cluster0.ubl4rud.mongodb.net/rain?retryWrites=true&w=majority"
        )
        .then(() => {
            console.log("Connected to database successfully!");
        })
        .catch((err) => {
            console.log(err);
        });
};
module.exports = connect;