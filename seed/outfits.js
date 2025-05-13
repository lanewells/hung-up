const db = require("../db")
const Outfit = require("../models/outfit.js")
const Clothing = require("../models/clothing.js")

// run clothings.js before this file
const seeding = async () => {
  const creamSweater = await Clothing.findOne({
    name: "Cream turtleneck sweater"
  })
  const greenHat = await Clothing.findOne({ name: "Green baseball hat" })
  const camelCoveralls = await Clothing.findOne({ name: "Camel corduroy overalls" })
  const greyOxfords = await Clothing.findOne({ name: "Grey oxfords" })

  const yellowHat = await Clothing.findOne({ name: "Yellow bucket hat" })
  const blackTank = await Clothing.findOne({
    name: "Black spaghetti strap tank"
  })
  const yellowSandals = await Clothing.findOne({ name: "Yellow flip-flops" })
  const yellowSkort = await Clothing.findOne({ name: "Yellow skort" })

  const whiteVest = await Clothing.findOne({ name: "White denim vest" })
  const tanBoots = await Clothing.findOne({ name: "Tan steel-toed boots" })
  const greenJumpsuit = await Clothing.findOne({ name: "Forest green utility jumpsuit" })

  const bomberJacket = await Clothing.findOne({ name: "Brown bomber jacket" })
  const blueJeans = await Clothing.findOne({ name: "Blue jeans" })
  const buckleBelt = await Clothing.findOne({ name: "Brown buckled belt" })
  const cowboyBoots = await Clothing.findOne({ name: "Brown cowboy boots" })
  const blueTee = await Clothing.findOne({ name: "Blue long sleeve tee" })

  const turquoiseDress = await Clothing.findOne({ name: "Turquoise bodycon dress" })
  const blackBoots = await Clothing.findOne({ name: "Black knee-high boots" })
  const blackBelt = await Clothing.findOne({ name: "Black leather belt" })
  const blackGloves = await Clothing.findOne({ name: "Black leather gloves" })

  const burgundyDress = await Clothing.findOne({ name: "Burgundy shift dress" })
  const blushHeels = await Clothing.findOne({ name: "Blush heels" })
  const nudeCoat = await Clothing.findOne({ name: "Nude trench coat" })

  const jeanJacket = await Clothing.findOne({ name: "Blue jean jacket" })
  const redShirt = await Clothing.findOne({ name: "Red v-neck tee" })
  const jeanShorts = await Clothing.findOne({ name: "Light wash jean shorts" })
  const whiteLowtops = await Clothing.findOne({ name: "White low-top sneakers" })

  const whiteTee = await Clothing.findOne({ name: "White graphic tee" })
  const blueShorts = await Clothing.findOne({
    name: "Blue running shorts"
  })
  const greySneakers = await Clothing.findOne({ name: "Grey running sneakers" })

  const redHalter = await Clothing.findOne({ name: "Red halter tank" })
  const pinkSkirt = await Clothing.findOne({ name: "Pink mini skirt" })
  const pinkPlatforms = await Clothing.findOne({ name: "Hot pink platforms" })
  const whiteBlouse = await Clothing.findOne({ name: "White button-down blouse" })

  const redBeanie = await Clothing.findOne({ name: "Red beanie" })
  const snowGloves = await Clothing.findOne({ name: "White snow gloves" })
  const blueBoots = await Clothing.findOne({ name: "Blue snow boots" })
  const sageCoat = await Clothing.findOne({ name: "Sage green snow coat" })
  const greyJoggers = await Clothing.findOne({ name: "Grey joggers" })


  const blueVisor = await Clothing.findOne({ name: "Blue visor" })
  const greySweater = await Clothing.findOne({ name: "Grey crewneck sweater" })
  const purpleWindbreaker = await Clothing.findOne({
    name: "Purple windbreaker"
  })  
  const greyLeggings = await Clothing.findOne({ name: "Grey leggings" })

  const canvasBelt = await Clothing.findOne({ name: "Off-white canvas belt" })
  const nudeEspadrilles = await Clothing.findOne({ name: "Nude espadrilles" })
  const marineJumpsuit = await Clothing.findOne({ name: "Marine professional jumpsuit" })
  const navyBlazer = await Clothing.findOne({ name: "Navy blazer" })



  const outfits = [
    {
      imageUrl: "https://hung-up.onrender.com/assets/outfit-backroads.png",
      occasion: "Outdoor Bonfire",
      weather: "Starry, Cool, Evening",
      favorite: true,
      clothing: [
        creamSweater._id,
        greenHat._id,
        camelCoveralls._id,
        greyOxfords._id
      ]
    },
    {
      imageUrl: "https://hung-up.onrender.com/assets/outfit-beach-day.png",
      occasion: "Beach Day",
      weather: "Sunny, Warm",
      favorite: false,
      clothing: [yellowHat._id, blackTank._id, yellowSandals._id, yellowSkort._id]
    },
    {
      imageUrl: "https://hung-up.onrender.com/assets/outfit-casual.png",
      occasion: "Casual",
      weather: "Mild",
      favorite: true,
      clothing: [
        whiteVest._id,
        tanBoots._id,
        greenJumpsuit._id
      ]
    },
    {
      imageUrl: "https://hung-up.onrender.com/assets/outfit-country.png",
      occasion: "Weekend in the Country",
      weather: "Varied, Cloudy",
      favorite: true,
      clothing: [buckleBelt._id, blueTee._id, cowboyBoots._id, blueJeans._id, bomberJacket._id]
    },
    {
      imageUrl: "https://hung-up.onrender.com/assets/outfit-formal-dinner.png",
      occasion: "Formal Event",
      weather: "Cool, Indoors",
      favorite: true,
      clothing: [
        turquoiseDress._id,
        blackGloves._id,
        blackBoots._id,
        blackBelt._id
      ]
    },
    {
      imageUrl: "https://hung-up.onrender.com/assets/outfit-date-night.png",
      occasion: "Date Night",
      weather: "Cool Evening",
      favorite: false,
      clothing: [burgundyDress._id, blushHeels._id, nudeCoat._id]
    },
    {
      imageUrl: "https://hung-up.onrender.com/assets/outfit-hanging-out.jpg",
      occasion: "Casual Hanging Out",
      weather: "Sunny",
      favorite: false,
      clothing: [jeanJacket._id, redShirt._id, whiteLowtops._id, jeanShorts._id]
    },
    {
      imageUrl: "https://hung-up.onrender.com/assets/outfit-jogging.png",
      occasion: "Jogging",
      weather: "Warm",
      favorite: true,
      clothing: [
        blueShorts._id,
        whiteTee._id,
        greySneakers._id
      ]
    },
    {
      imageUrl: "https://hung-up.onrender.com/assets/outfit-picnic.png",
      occasion: "Picnic in the Park",
      weather: "Sunny",
      favorite: false,
      clothing: [pinkSkirt._id, redHalter._id, pinkPlatforms._id, whiteBlouse._id]
    },
    {
      imageUrl: "https://hung-up.onrender.com/assets/outfit-snow.png",
      occasion: "Snow Day",
      weather: "Snowy, Cold",
      favorite: false,
      clothing: [
        redBeanie._id,
        snowGloves._id,
        sageCoat._id,
        blueBoots._id,
        greyJoggers._id
      ]
    },
    {
      imageUrl: "https://hung-up.onrender.com/assets/outfit-sporty-casual.png",
      occasion: "Rainy Day",
      weather: "Rainy, Cool, Cloudy",
      favorite: true,
      clothing: [purpleWindbreaker._id, whiteLowtops._id, blueVisor._id, greyLeggings._id, greySweater._id]
    },
    {
      imageUrl: "https://hung-up.onrender.com/assets/outfit-work.jpg",
      occasion: "Work",
      weather: "Mild, Indoors",
      favorite: false,
      clothing: [
        canvasBelt._id,
        nudeEspadrilles._id,
        navyBlazer._id,
        marineJumpsuit._id
      ]
    }
  ]
  await Outfit.deleteMany()
  console.log(
    `Outfits cleared. Current count = ${await Outfit.countDocuments()}`
  )
  await Outfit.insertMany(outfits)
  console.log(`Outfits added. Current count = ${outfits.length}`)
}
const runSeeding = async () => {
  await seeding()
  await db.close()
  console.log("MongoDB connection closed.")
  process.exit()
}

runSeeding()
