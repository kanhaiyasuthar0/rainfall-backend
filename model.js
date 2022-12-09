const mongoose = require("mongoose");
const rainSchema = mongoose.Schema(
    {
        username: String,
        projectname: String,
        area: {
            value: String,
            unit: Number
        },
        catchment: {
            value: Number
        },
        totalnoofyeardata: Number,
        dependability: [{ value: Number, status: Boolean, at: String }]
        ,
        userEntered: [{
            year: { type: Number },
            rainfall: { type: Number }
        }],
        data: [{
            year: { type: Number },
            rainfall: { type: Number },
            sortedrainfall: { type: Number },
            runoff: { type: Number },
            yield: { type: Number },
            dependabilty: { type: Number }
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

const Rain = mongoose.model("rain", rainSchema);
module.exports = Rain;