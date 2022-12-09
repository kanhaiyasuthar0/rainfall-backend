const mongoose = require("mongoose");
const StrangeTableSchema = mongoose.Schema(
    {
        name: String,
        data: [{
            value: Number,
            good: { type: String },
            average: { type: String },
            bad: { type: String },
        }]
    },
    { timestamps: true }
);

const StrangeModel = mongoose.model("strangetable", StrangeTableSchema);
module.exports = StrangeModel;