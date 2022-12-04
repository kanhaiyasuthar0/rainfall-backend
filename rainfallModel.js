const mongoose = require("mongoose");
const rainFall = mongoose.Schema(
    {
        name: String,
        data: [{
            year: { type: Number },
            rainfall: { type: Number },
        }]
        // id: { type: Number, required: true },
        // title: { type: String, required: true },
        // author: { type: String, required: true },
        // description: {
        //     type: String,
        //     required: true,
        // },
        // labels: [{ type: String }],

        // likes: { type: Number },
    },
    { timestamps: true }
);

const Rainfall = mongoose.model("rainfall", rainFall);
module.exports = Rainfall;