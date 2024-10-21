const Clothing = require("../models/clothing.js")

// get all clothes
const getAllClothes = async (req, res) => {
  try {
    const clothes = await Clothing.find()
    if (!clothes || clothes.length === 0) {
      return res.status(404).json({
        message: "No clothes found!"
      })
    }
    res.json(clothes)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get single clothing by id
const getClothingById = async (req, res) => {
  try {
    const clothing = await Clothing.findById(req.params.id)
    if (!clothing) {
      return res.status(404).json({ message: "No clothes found!" })
    }
    res.json(clothing)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get clothes by type
const getClothesByType = async (req, res) => {
  try {
    const { type } = req.params
    const clothes = await Clothing.find({ type: type })
    if (!clothes || clothes.length === 0) {
      return res.status(404).json({ message: "No clothes found! Womp womp." })
    }
    res.json(clothes)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// create a clothing
const createClothing = async (req, res) => {
  try {
    const clothing = new Clothing(req.body)
    await clothing.save()
    return res.status(201).json(clothing)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

// update a clothing using id
const updateClothing = async (req, res) => {
  try {
    let { id } = req.params
    let clothing = await Clothing.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    })
    if (clothing) {
      return res.status(200).json(clothing)
    }
    throw new Error("No clothing found!")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// delete a clothing using id
const deleteClothing = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Clothing.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Clothing deleted! :(")
    }
    throw new Error("No clothing found!")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllClothes,
  getClothingById,
  getClothesByType,
  createClothing,
  updateClothing,
  deleteClothing
}
