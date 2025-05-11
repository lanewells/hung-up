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




  const orangeShorts = await Clothing.findOne({
    name: "Orange drawstring shorts"
  })
  const whiteTee = await Clothing.findOne({ name: "White graphic tee" })
  const whiteSneakers = await Clothing.findOne({
    name: "White low-top sneakers"
  })
  const jeanShorts = await Clothing.findOne({ name: "Light wash jean shorts" })
  const redTee = await Clothing.findOne({ name: "Red v-neck tee" })
  const redSneakers = await Clothing.findOne({ name: "Red slip-on sneakers" })
  const spandexShorts = await Clothing.findOne({ name: "Black spandex shorts" })
  const blackRacerback = await Clothing.findOne({
    name: "Black racerback tank"
  })
  const blueVisor = await Clothing.findOne({ name: "Blue visor" })
  const blueShorts = await Clothing.findOne({
    name: "Blue running shorts"
  })



  const khakiChinos = await Clothing.findOne({ name: "Khaki chinos" })
  const whiteBlouse = await Clothing.findOne({
    name: "White button-down blouse"
  })
  const navyBlazer = await Clothing.findOne({ name: "Navy blazer" })
  const blackDress = await Clothing.findOne({ name: "Little black dress" })
  const blackBoots = await Clothing.findOne({ name: "Black knee-high boots" })
  const olivePants = await Clothing.findOne({ name: "Olive cargo pants" })
  const pinkSkirt = await Clothing.findOne({ name: "Pink mini skirt" })
  const purpleBlouse = await Clothing.findOne({ name: "Purple peplum blouse" })
  const pinkPlatforms = await Clothing.findOne({ name: "Hot pink platforms" })
  const leatherJacket = await Clothing.findOne({ name: "Brown leather jacket" })
  const tealTee = await Clothing.findOne({ name: "Teal crew neck tee" })
  const tanBirks = await Clothing.findOne({ name: "Tan birks" })
  const oliveVest = await Clothing.findOne({ name: "Olive utility vest" })
  const greyJoggers = await Clothing.findOne({ name: "Grey joggers" })
  const greySneakers = await Clothing.findOne({ name: "Grey running sneakers" })
  const purpleWindbreaker = await Clothing.findOne({
    name: "Purple windbreaker"
  })
  const burgundyDress = await Clothing.findOne({ name: "Burgundy shift dress" })
  const blushHeels = await Clothing.findOne({ name: "Blush heels" })
  const nudeCoat = await Clothing.findOne({ name: "Nude trench coat" })
  const greyLeggings = await Clothing.findOne({ name: "Grey leggings" })

  const blueBoots = await Clothing.findOne({ name: "Blue snow boots" })
  const sageCoat = await Clothing.findOne({ name: "Sage green snow coat" })

  const outfits = [
    {
      imageUrl: "https://hung-up.onrender.com/client/assets/outfit-backroads.png",
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
      imageUrl: "https://hung-up.onrender.com/client/assets/outfit-beach-day.png",
      occasion: "Beach Day",
      weather: "Sunny, Warm",
      favorite: false,
      clothing: [yellowHat._id, blackTank._id, yellowSandals._id, yellowSkort._id]
    },
    {
      imageUrl: "https://hung-up.onrender.com/client/assets/outfit-casual.jpg",
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
      imageUrl: "https://hung-up.onrender.com/client/assets/outfit-country.jpg",
      occasion: "Weekend in the Country",
      weather: "Varied, Cloudy",
      favorite: true,
      clothing: [buckleBelt._id, blueTee._id, cowboyBoots._id, blueJeans._id, bomberJacket._id]
    },
    {
      imageUrl: "https://hung-up.onrender.com/client/assets/outfit-date-night.png",
      occasion: "Date Night",
      weather: "Cool, Indoors",
      favorite: false,
      clothing: [
        khakiChinos._id,
        whiteBlouse._id,
        greyOxfords._id,
        navyBlazer._id
      ]
    },
    {
      imageUrl: "https://hung-up.onrender.com/client/assets/",
      occasion: "Date Night",
      weather: "Cool Evening",
      favorite: true,
      clothing: [blackDress._id, blackBoots._id, leatherJacket._id]
    },
    {
      imageUrl: "https://hung-up.onrender.com/client/assets/",
      occasion: "Rainy Day Errands",
      weather: "Rainy",
      favorite: false,
      clothing: [olivePants._id, tealTee._id, tanBoots._id, bomberJacket._id]
    },
    {
      imageUrl: "https://hung-up.onrender.com/client/assets/",
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
      imageUrl: "https://hung-up.onrender.com/client/assets/",
      occasion: "Picnic in the Park",
      weather: "Sunny",
      favorite: false,
      clothing: [yellowSkort._id, tealTee._id, tanBirks._id, oliveVest._id]
    },
    {
      imageUrl: "https://hung-up.onrender.com/client/assets/",
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
      imageUrl: "https://hung-up.onrender.com/client/assets/",
      occasion: "Formal Dinner",
      weather: "Cool",
      favorite: true,
      clothing: [burgundyDress._id, blushHeels._id, nudeCoat._id]
    },
    {
      imageUrl: "https://hung-up.onrender.com/client/assets/",
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
