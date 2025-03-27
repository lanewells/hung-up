const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT || 3001
const db = require("./db")
const bodyParser = require("body-parser")
const logger = require("morgan")
const app = express()
const clothingController = require("./controllers/clothingController")
const outfitController = require("./controllers/outfitController")
const typeController = require("./controllers/typeController")

app.use(express.json())
app.use(logger("dev"))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('client'));

app.get("/", async (req, res) => {
  res.send("Welcome to your wardrobe.")
})

// index routes
app.get("/clothes", clothingController.getAllClothes)
app.get("/outfits", outfitController.getAllOutfits)
app.get("/types", typeController.getAllTypes)

app.get("/outfits/favorite", outfitController.getFavoriteOutfits)
app.get("/outfits/casual", outfitController.getCasualOutfits)
app.get("/outfits/daytime", outfitController.getDaytimeOutfits)
app.get("/outfits/nighttime", outfitController.getNighttimeOutfits)
app.get("/outfits/work", outfitController.getWorkOutfits)

// show routes
app.get("/clothes/:id", clothingController.getClothingById)
app.get("/outfits/:id", outfitController.getOutfitById)
app.get("/types/:id", typeController.getTypeById)

app.get("/clothes/type/:type", clothingController.getClothesByType)
app.get("/clothes/color/:color", clothingController.getClothesByColor)
app.get("/types/category/:category", typeController.getTypeByCategory)

// crud routes
app.post("/clothes", clothingController.createClothing)
app.post("/outfits", outfitController.createOutfit)
app.post("/types", typeController.createType)
app.put("/clothes/:id", clothingController.updateClothing)
app.put("/outfits/:id", outfitController.updateOutfit)
app.put("/types/:id", typeController.updateType)
app.delete("/clothes/:id", clothingController.deleteClothing)
app.delete("/outfits/:id", outfitController.deleteOutfit)
app.delete("/types/:id", typeController.deleteType)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
