const db = require("../db")
const Type = require("../models/type.js")
const Clothing = require("../models/clothing.js")

const seeding = async () => {
  const shorts = (await Clothing.find({ type: "Shorts" })).map(
    (item) => item._id
  )
  const pants = (await Clothing.find({ type: "Pants" })).map((item) => item._id)
  const skirts = (await Clothing.find({ type: "Skirts" })).map(
    (item) => item._id
  )
  const tees = (await Clothing.find({ type: "Tees" })).map((item) => item._id)
  const blouses = (await Clothing.find({ type: "Blouses" })).map(
    (item) => item._id
  )
  const tanks = (await Clothing.find({ type: "Tanks" })).map((item) => item._id)
  const sweaters = (await Clothing.find({ type: "Sweaters" })).map(
    (item) => item._id
  )
  const dresses = (await Clothing.find({ type: "Dresses" })).map(
    (item) => item._id
  )
  const jumpsuits = (await Clothing.find({ type: "Jumpsuits" })).map(
    (item) => item._id
  )
  const overalls = (await Clothing.find({ type: "Overalls" })).map(
    (item) => item._id
  )
  const sneakers = (await Clothing.find({ type: "Sneakers" })).map(
    (item) => item._id
  )
  const boots = (await Clothing.find({ type: "Boots" })).map((item) => item._id)
  const specialtyShoes = (await Clothing.find({ type: "Specialty Shoes" })).map(
    (item) => item._id
  )
  const sandals = (await Clothing.find({ type: "Sandals" })).map(
    (item) => item._id
  )
  const hats = (await Clothing.find({ type: "Hats" })).map((item) => item._id)
  const belts = (await Clothing.find({ type: "Belts" })).map((item) => item._id)
  const coats = (await Clothing.find({ type: "Coats" })).map((item) => item._id)
  const jackets = (await Clothing.find({ type: "Jackets" })).map(
    (item) => item._id
  )
  const gloves = (await Clothing.find({ type: "Gloves" })).map(
    (item) => item._id
  )
  const vests = (await Clothing.find({ type: "Vests" })).map((item) => item._id)

  const types = [
    {
      type: "Shorts",
      subtypes: [
        "Bermuda",
        "Denim",
        "Athletic",
        "Spandex",
        "High-waisted",
        "Low-rise"
      ],
      category: "Bottoms",
      sufficient: false,
      necessity: 1,
      clothing: shorts
    },
    {
      type: "Pants",
      subtypes: ["Jeans", "Chinos", "Cargo", "Joggers", "Leggings"],
      category: "Bottoms",
      sufficient: false,
      necessity: 1,
      clothing: pants
    },
    {
      type: "Skirts",
      subtypes: ["Mini", "Tennis", "Maxi", "Skort", "A-line"],
      category: "Bottoms",
      sufficient: false,
      necessity: 1,
      clothing: skirts
    },
    {
      type: "Tees",
      subtypes: ["Graphic", "V-neck", "Crewneck", "Long sleeve", "Crop"],
      category: "Tops",
      sufficient: false,
      necessity: 1,
      clothing: tees
    },
    {
      type: "Blouses",
      subtypes: ["Button-down", "Peplum", "Wrap", "Sleeveless", "Ruffle"],
      category: "Tops",
      sufficient: false,
      necessity: 1,
      clothing: blouses
    },
    {
      type: "Tanks",
      subtypes: ["Halter", "Racerback", "Muscle", "Spaghetti strap"],
      category: "Tops",
      sufficient: false,
      necessity: 1,
      clothing: tanks
    },
    {
      type: "Sweaters",
      subtypes: ["Cardigan", "Pullover", "Turtleneck", "Crewneck"],
      category: "Tops",
      sufficient: false,
      necessity: 2,
      clothing: sweaters
    },
    {
      type: "Dresses",
      subtypes: ["Shift", "Ruffle", "Little black", "Bodycon", "Slip"],
      category: "One-pieces",
      sufficient: true,
      necessity: 1,
      clothing: dresses
    },
    {
      type: "Jumpsuits",
      subtypes: ["Romper", "Professional", "Utility", "Wide leg"],
      category: "One-pieces",
      sufficient: true,
      necessity: 1,
      clothing: jumpsuits
    },
    {
      type: "Overalls",
      subtypes: ["Denim", "Corduroy", "Shortalls"],
      category: "One-pieces",
      sufficient: true,
      necessity: 2,
      clothing: overalls
    },
    {
      type: "Sneakers",
      subtypes: ["Low-top", "High-top", "Slip-on", "Running"],
      category: "Shoes",
      sufficient: false,
      necessity: 1,
      clothing: sneakers
    },
    {
      type: "Boots",
      subtypes: ["Snow", "Knee-high", "Steel-toed", "Cowboy"],
      category: "Shoes",
      sufficient: false,
      necessity: 1,
      clothing: boots
    },
    {
      type: "Specialty Shoes",
      subtypes: ["Crocs", "Platforms", "Heels", "Oxfords"],
      category: "Shoes",
      sufficient: false,
      necessity: 1,
      clothing: specialtyShoes
    },
    {
      type: "Sandals",
      subtypes: ["Slides", "Birks", "Flip-flops", "Espadrilles"],
      category: "Shoes",
      sufficient: false,
      necessity: 1,
      clothing: sandals
    },
    {
      type: "Hats",
      subtypes: ["Baseball", "Beanie", "Visor", "Bucket"],
      category: "Accessories",
      sufficient: false,
      necessity: 3,
      clothing: hats
    },
    {
      type: "Belts",
      subtypes: ["Leather", "Canvas", "Braided", "Buckled"],
      category: "Accessories",
      sufficient: false,
      necessity: 3,
      clothing: belts
    },
    {
      type: "Coats",
      subtypes: ["Trench", "Puffer", "Peacoat", "Parka"],
      category: "Outerwear",
      sufficient: false,
      necessity: 3,
      clothing: coats
    },
    {
      type: "Jackets",
      subtypes: ["Bomber", "Jean", "Blazer", "Windbreaker", "Leather"],
      category: "Outerwear",
      sufficient: false,
      necessity: 3,
      clothing: jackets
    },
    {
      type: "Gloves",
      subtypes: ["Leather", "Wool", "Work", "Snow"],
      category: "Outerwear",
      sufficient: false,
      necessity: 3,
      clothing: gloves
    },
    {
      type: "Vests",
      subtypes: ["Puffer", "Denim", "Utility", "Quilted"],
      category: "Outerwear",
      sufficient: false,
      necessity: 3,
      clothing: vests
    }
  ]
  await Type.deleteMany()
  console.log(`Types cleared. Current count = ${await Type.countDocuments()}`)
  await Type.insertMany(types)
  console.log(`Types added. Current count = ${types.length}`)
}

const runSeeding = async () => {
  await seeding()
  await db.close()
  console.log("MongoDB connection closed.")
  process.exit()
}

runSeeding()
