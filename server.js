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

app.get("/", async (req, res) => {
  res.send("Welcome to your wardrobe.")
})

// index routes
app.get("/clothes", clothingController.getAllClothes)
// app.get("/outfits", outfitController.getAllOutfits)
// app.get("/types", typeController.getAllTypes)

// app.get("/outfits/favorite", outfitController.getFavoriteOutfits)

// app.get("/clothes/type/shorts")

// show routes
app.get("/clothes/:id", clothingController.getClothingById)
// app.get("/outfits/id", outfitController.getOutfitById)
// app.get("/types/:id", typeController.getTypeById)

app.get("/clothes/type", clothingController.getClothingById)
// app.get("/outfits/id", userController.getOutfitById)
// app.get("/types/:id", typeController.getTypeById)

// crud routes
app.post("/clothes", clothingController.createClothing)
// app.post("/outfit", outfitController.createOutfit)
app.put("/clothes/:id", clothingController.updateClothing)
// app.put("/outfit/:id", outfitController.updateOutfit)
app.delete("/clothes/:id", clothingController.deleteClothing)
// app.delete("/outfit/:id", outfitController.deleteOutfit)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
