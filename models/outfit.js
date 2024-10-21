const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const OutfitSchema = new Schema(
  {
    imageUrl: { type: String, required: true },
    occasion: { type: String, required: true },
    weather: { type: String, required: true },
    favorite: { type: Boolean, required: false },
    clothing: [{ type: Schema.Types.ObjectId, ref: "Clothing" }]
  },
  { timestamps: true }
)

const Outfit = mongoose.model("Outfit", OutfitSchema)
module.exports = Outfit
