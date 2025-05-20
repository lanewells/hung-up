const Type = require("../models/type.js")

// get all types
const getAllTypes = async (req, res) => {
  try {
    const types = await Type.find().populate("clothing")
    res.json(types)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


// get single type by id
const getTypeById = async (req, res) => {
  try {
    const type = await Type.findById(req.params.id)
    if (!type) {
      return res.status(404).json({ message: "No types found!" })
    }
    res.json(type)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get type by category
const getTypeByCategory = async (req, res) => {
  try {
    const { category } = req.params
    const types = await Type.find({
      category: { $regex: category, $options: "i" }
    })
    if (!types || types.length === 0) {
      return res.status(404).json({ message: "No types found! Womp womp." })
    }
    res.json(types)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// create a type
const createType = async (req, res) => {
  try {
    const type = new Type(req.body)
    await type.save()
    return res.status(201).json(type)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

// update a type using id
const updateType = async (req, res) => {
  try {
    let { id } = req.params
    let type = await Type.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    })
    if (type) {
      return res.status(200).json(type)
    }
    throw new Error("No type found!")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// delete a type using id
const deleteType = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Type.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Type deleted! :(")
    }
    throw new Error("No type found!")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllTypes,
  getTypeById,
  getTypeByCategory,
  createType,
  updateType,
  deleteType
}
