const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const TypeSchema = new Schema(
  {
    type: { type: String, required: true },
    subtypes: [{ type: String, required: true }],
    category: { type: String, required: true },
    sufficient: { type: Boolean, required: true },
    necessity: { type: Number, required: false, min: 1, max: 3 },
    clothing: [{ type: Schema.Types.ObjectId, ref: "Clothing" }]
  },
  { timestamps: true }
)

const Type = mongoose.model("Type", TypeSchema)
module.exports = Type
