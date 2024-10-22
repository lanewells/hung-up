const Outfit = require("../models/outfit.js")

// get all outfits
const getAllOutfits = async (req, res) => {
  try {
    const outfits = await Outfit.find()
    if (!outfits || outfits.length === 0) {
      return res.status(404).json({
        message: "No outfits found!"
      })
    }
    res.json(outfits)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get single outfit by id
const getOutfitById = async (req, res) => {
  try {
    const outfit = await Outfit.findById(req.params.id)
    if (!outfit) {
      return res.status(404).json({ message: "No outfits found!" })
    }
    res.json(outfit)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get favorite outfits
const getFavoriteOutfits = async (req, res) => {
  try {
    const outfits = await Outfit.find({ favorite: true })
    if (!outfits || outfits.length === 0) {
      return res.status(404).json({
        message: "No outfits found! Womp, womp."
      })
    }
    return res.json(outfits)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get casual outfits
const getCasualOutfits = async (req, res) => {
  try {
    const outfits = await Outfit.find({
      occasion: { $regex: "casual", $options: "i" }
    })
    if (!outfits || outfits.length === 0) {
      return res.status(404).json({
        message: "No outfits found! Womp, womp."
      })
    }
    return res.json(outfits)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get daytime outfits
const getDaytimeOutfits = async (req, res) => {
  try {
    const outfits = await Outfit.find({
      $or: [
        { occasion: { $regex: "day", $options: "i" } },
        { occasion: { $regex: "lunch", $options: "i" } }
      ]
    })
    if (!outfits || outfits.length === 0) {
      return res.status(404).json({
        message: "No outfits found! Womp, womp."
      })
    }
    return res.json(outfits)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get nighttime outfits
const getNighttimeOutfits = async (req, res) => {
  try {
    const outfits = await Outfit.find({
      $or: [
        { occasion: { $regex: "night", $options: "i" } },
        { occasion: { $regex: "evening", $options: "i" } },
        { occasion: { $regex: "dinner", $options: "i" } }
      ]
    })
    if (!outfits || outfits.length === 0) {
      return res.status(404).json({
        message: "No outfits found! Womp, womp."
      })
    }
    return res.json(outfits)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getWorkOutfits = async (req, res) => {
  try {
    const outfits = await Outfit.find({
      occasion: { $regex: "work ", $options: "i" }
    })
    if (!outfits || outfits.length === 0) {
      return res.status(404).json({
        message: "No outfits found! Womp, womp."
      })
    }
    return res.json(outfits)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// create an outfit
const createOutfit = async (req, res) => {
  try {
    const outfit = new Outfit(req.body)
    await outfit.save()
    return res.status(201).json(outfit)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

// update an outfit using id
const updateOutfit = async (req, res) => {
  try {
    let { id } = req.params
    let outfit = await Outfit.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    })
    if (outfit) {
      return res.status(200).json(outfit)
    }
    throw new Error("No outfit found!")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// delete an outfit using id
const deleteOutfit = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Outfit.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Outfit deleted! :(")
    }
    throw new Error("No outfit found!")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllOutfits,
  getOutfitById,
  getFavoriteOutfits,
  getCasualOutfits,
  getDaytimeOutfits,
  getNighttimeOutfits,
  getWorkOutfits,
  createOutfit,
  updateOutfit,
  deleteOutfit
}
