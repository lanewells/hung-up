const db = require("../db")
const Outfit = require("../models/outfit.js")
const Clothing = require("../models/clothing.js")

// run clothings.js before this file
const seeding = async () => {
  const orangeShorts = await Clothing.findOne({
    name: "Orange drawstring shorts"
  })
  const whiteTee = await Clothing.findOne({ name: "White graphic tee" })
  const whiteSneakers = await Clothing.findOne({
    name: "White low-top sneakers"
  })
  const greenHat = await Clothing.findOne({ name: "Green baseball hat" })
  const jeanShorts = await Clothing.findOne({ name: "Light wash jean shorts" })
  const redTee = await Clothing.findOne({ name: "Red v-neck tee" })
  const redSneakers = await Clothing.findOne({ name: "Red slip-on sneakers" })
  const yellowHat = await Clothing.findOne({ name: "Yellow bucket hat" })
  const spandexShorts = await Clothing.findOne({ name: "Black spandex shorts" })
  const blackRacerback = await Clothing.findOne({
    name: "Black racerback tank"
  })
  const yellowSandals = await Clothing.findOne({ name: "Yellow flip-flops" })
  const blueVisor = await Clothing.findOne({ name: "Blue visor" })
  const blueShorts = await Clothing.findOne({
    name: "Blue running shorts"
  })
  const blackTank = await Clothing.findOne({
    name: "Black spaghetti strap tank"
  })
  const khakiChinos = await Clothing.findOne({ name: "Khaki chinos" })
  const whiteBlouse = await Clothing.findOne({
    name: "White button-down blouse"
  })
  const greyOxfords = await Clothing.findOne({ name: "Grey oxfords" })
  const navyBlazer = await Clothing.findOne({ name: "Navy blazer" })
  const blackDress = await Clothing.findOne({ name: "Little black dress" })
  const blackBoots = await Clothing.findOne({ name: "Black knee-high boots" })
  const olivePants = await Clothing.findOne({ name: "Olive cargo pants" })
  const tanBoots = await Clothing.findOne({ name: "Tan steel-toed boots" })
  const bomberJacket = await Clothing.findOne({ name: "Brown bomber jacket" })
  const pinkSkirt = await Clothing.findOne({ name: "Pink mini skirt" })
  const purpleBlouse = await Clothing.findOne({ name: "Purple peplum blouse" })
  const pinkPlatforms = await Clothing.findOne({ name: "Hot pink platforms" })
  const leatherJacket = await Clothing.findOne({ name: "Brown leather jacket" })
  const yellowSkort = await Clothing.findOne({ name: "Yellow skort" })
  const tealTee = await Clothing.findOne({ name: "Teal crew neck tee" })
  const tanBirks = await Clothing.findOne({ name: "Tan birks" })
  const oliveVest = await Clothing.findOne({ name: "Olive utility vest" })
  const greyJoggers = await Clothing.findOne({ name: "Grey joggers" })
  const blueTee = await Clothing.findOne({ name: "Blue long sleeve tee" })
  const greySneakers = await Clothing.findOne({ name: "Grey running sneakers" })
  const purpleWindbreaker = await Clothing.findOne({
    name: "Purple windbreaker"
  })
  const burgundyDress = await Clothing.findOne({ name: "Burgundy shift dress" })
  const blushHeels = await Clothing.findOne({ name: "Blush heels" })
  const nudeCoat = await Clothing.findOne({ name: "Nude trench coat" })
  const greyLeggings = await Clothing.findOne({ name: "Grey leggings" })
  const creamSweater = await Clothing.findOne({
    name: "Cream turtleneck sweater"
  })
  const blueBoots = await Clothing.findOne({ name: "Blue snow boots" })
  const sageCoat = await Clothing.findOne({ name: "Sage green snow coat" })

  const outfits = [
    {
      imageUrl: "url_to_image",
      occasion: "Casual Day Out",
      weather: "Sunny",
      favorite: true,
      clothing: [
        orangeShorts._id,
        whiteTee._id,
        whiteSneakers._id,
        greenHat._id
      ]
    },
    {
      imageUrl: "url_to_image",
      occasion: "Lunch with Friends",
      weather: "Warm and Breezy",
      favorite: false,
      clothing: [jeanShorts._id, redTee._id, redSneakers._id, yellowHat._id]
    },
    {
      imageUrl: "url_to_image",
      occasion: "Beach Day",
      weather: "Hot",
      favorite: true,
      clothing: [
        spandexShorts._id,
        blackRacerback._id,
        yellowSandals._id,
        blueVisor._id
      ]
    },
    {
      imageUrl: "url_to_image",
      occasion: "Gym Workout",
      weather: "Warm Indoors",
      favorite: true,
      clothing: [blueShorts._id, blackTank._id, greySneakers._id]
    },
    {
      imageUrl: "url_to_image",
      occasion: "Work Presentation",
      weather: "Mild",
      favorite: false,
      clothing: [
        khakiChinos._id,
        whiteBlouse._id,
        greyOxfords._id,
        navyBlazer._id
      ]
    },
    {
      imageUrl: "url_to_image",
      occasion: "Date Night",
      weather: "Cool Evening",
      favorite: true,
      clothing: [blackDress._id, blackBoots._id, leatherJacket._id]
    },
    {
      imageUrl: "url_to_image",
      occasion: "Rainy Day Errands",
      weather: "Rainy",
      favorite: false,
      clothing: [olivePants._id, tealTee._id, tanBoots._id, bomberJacket._id]
    },
    {
      imageUrl: "url_to_image",
      occasion: "Concert Night",
      weather: "Cool",
      favorite: true,
      clothing: [
        pinkSkirt._id,
        purpleBlouse._id,
        pinkPlatforms._id,
        leatherJacket._id
      ]
    },
    {
      imageUrl: "url_to_image",
      occasion: "Picnic in the Park",
      weather: "Sunny",
      favorite: false,
      clothing: [yellowSkort._id, tealTee._id, tanBirks._id, oliveVest._id]
    },
    {
      imageUrl: "url_to_image",
      occasion: "Hiking Trip",
      weather: "Cloudy and Cool",
      favorite: false,
      clothing: [
        greyJoggers._id,
        blueTee._id,
        greySneakers._id,
        purpleWindbreaker._id
      ]
    },
    {
      imageUrl: "url_to_image",
      occasion: "Formal Dinner",
      weather: "Cool",
      favorite: true,
      clothing: [burgundyDress._id, blushHeels._id, nudeCoat._id]
    },
    {
      imageUrl: "url_to_image",
      occasion: "Snowy Day Out",
      weather: "Snowy",
      favorite: false,
      clothing: [
        greyLeggings._id,
        creamSweater._id,
        blueBoots._id,
        sageCoat._id
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
  db.close()
}

runSeeding()
