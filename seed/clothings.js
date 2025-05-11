const db = require("../db")
const Clothing = require("../models/clothing.js")

// run this file first before outfits.js or types.js
const seeding = async () => {
  const clothes = [
    {
      name: "Orange drawstring shorts",
      imageUrl: "https://hung-up.onrender.com/client/assets/orange-shorts.jpg",
      type: "Shorts",
      subtype: "Bermuda",
      colors: ["Orange"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 5,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Light wash jean shorts",
      imageUrl: "https://hung-up.onrender.com/client/assets/light-wash-jean-shorts.jpg",
      type: "Shorts",
      subtype: "Denim",
      colors: ["Blue"],
      size: "S",
      ratings: {
        comfort: 2,
        confidence: 4,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Blue running shorts",
      imageUrl: "https://hung-up.onrender.com/client/assets/blue_running_shorts.jpg",
      type: "Shorts",
      subtype: "Athletic",
      colors: ["Blue"],
      size: "M",
      ratings: {
        comfort: 3,
        confidence: 5,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Black spandex shorts",
      imageUrl: "https://hung-up.onrender.com/client/assets/black-spandex-shorts.jpg",
      type: "Shorts",
      subtype: "Spandex",
      colors: ["Black"],
      size: "S",
      ratings: {
        comfort: 4,
        confidence: 5,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Low-rise blue shorts",
      imageUrl: "https://hung-up.onrender.com/client/assets/low-rise-jean-shorts.jpg",
      type: "Shorts",
      subtype: "Low-rise",
      colors: ["Blue"],
      size: "S",
      ratings: {
        comfort: 2,
        confidence: 3,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "High-waisted white shorts",
      imageUrl: "https://hung-up.onrender.com/client/assets/white-shorts.jpg",
      type: "Shorts",
      subtype: "High-waisted",
      colors: ["White"],
      size: "M",
      ratings: {
        comfort: 3,
        confidence: 4,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Blue jeans",
      imageUrl: "https://hung-up.onrender.com/client/assets/blue-jeans.jpg",
      type: "Pants",
      subtype: "Jeans",
      colors: ["Blue"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 2,
        warmth: 3
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Khaki chinos",
      imageUrl: "https://hung-up.onrender.com/client/assets/khaki-chinos.jpg",
      type: "Pants",
      subtype: "Chinos",
      colors: ["Khaki"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 3,
        warmth: 3
      },
      waterproof: false,
      workAppropriate: true
    },
    {
      name: "Olive cargo pants",
      imageUrl: "https://hung-up.onrender.com/client/assets/olive-cargo-pants.jpg",
      type: "Pants",
      subtype: "Cargo",
      colors: ["Olive"],
      size: "L",
      ratings: {
        comfort: 2,
        confidence: 5,
        warmth: 3
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Grey joggers",
      imageUrl: "https://hung-up.onrender.com/client/assets/grey-joggers.jpg",
      type: "Pants",
      subtype: "Joggers",
      colors: ["Grey"],
      size: "L",
      ratings: {
        comfort: 5,
        confidence: 4,
        warmth: 3
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Grey leggings",
      imageUrl: "https://hung-up.onrender.com/client/assets/grey-leggings.jpg",
      type: "Pants",
      subtype: "Leggings",
      colors: ["Grey"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 3,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Pink mini skirt",
      imageUrl: "https://hung-up.onrender.com/client/assets/pink-skirt.jpg",
      type: "Skirts",
      subtype: "Mini",
      colors: ["Pink"],
      size: "S",
      ratings: {
        comfort: 3,
        confidence: 3,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Black tennis skirt",
      imageUrl: "https://hung-up.onrender.com/client/assets/tennis-skirt.jpg",
      type: "Skirts",
      subtype: "Tennis",
      colors: ["Black"],
      size: "S",
      ratings: {
        comfort: 4,
        confidence: 3,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Brown maxi skirt",
      imageUrl: "https://hung-up.onrender.com/client/assets/maxi-skirt.jpg",
      type: "Skirts",
      subtype: "Maxi",
      colors: ["Brown"],
      size: "M",
      ratings: {
        comfort: 3,
        confidence: 4,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: true
    },
    {
      name: "Blue A-line skirt",
      imageUrl: "https://hung-up.onrender.com/client/assets/blue-skirt.jpg",
      type: "Skirts",
      subtype: "A-line",
      colors: ["Blue"],
      size: "M",
      ratings: {
        comfort: 3,
        confidence: 4,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: true
    },
    {
      name: "Yellow skort",
      imageUrl: "https://hung-up.onrender.com/client/assets/yellow-skort.jpg",
      type: "Skirts",
      subtype: "Skort",
      colors: ["Yellow"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 4,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "White graphic tee",
      imageUrl: "https://hung-up.onrender.com/client/assets/white-tee.jpg",
      type: "Tees",
      subtype: "Graphic",
      colors: ["White"],
      size: "M",
      ratings: {
        comfort: 2,
        confidence: 4,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Red v-neck tee",
      imageUrl: "https://hung-up.onrender.com/client/assets/red-v-neck.jpg",
      type: "Tees",
      subtype: "V-Neck",
      colors: ["Red"],
      size: "M",
      ratings: {
        comfort: 5,
        confidence: 4,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Teal crew neck tee",
      imageUrl: "https://hung-up.onrender.com/client/assets/teal-crew-neck.jpg",
      type: "Tees",
      subtype: "Crew neck",
      colors: ["Teal"],
      size: "M",
      ratings: {
        comfort: 5,
        confidence: 4,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Blue long sleeve tee",
      imageUrl: "https://hung-up.onrender.com/client/assets/blue-long-sleeve.jpg",
      type: "Tees",
      subtype: "Long sleeve",
      colors: ["Blue"],
      size: "M",
      ratings: {
        comfort: 5,
        confidence: 4,
        warmth: 3
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "White button-down blouse",
      imageUrl: "https://hung-up.onrender.com/client/assets/white-button-down.jpg",
      type: "Blouses",
      subtype: "Button-down",
      colors: ["White"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 5,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: true
    },
    {
      name: "Purple peplum blouse",
      imageUrl: "https://hung-up.onrender.com/client/assets/purple-peplum.jpg",
      type: "Blouses",
      subtype: "Peplum",
      colors: ["Purple"],
      size: "M",
      ratings: {
        comfort: 1,
        confidence: 3,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Mauve wrap blouse",
      imageUrl: "https://hung-up.onrender.com/client/assets/mauve-wrap-blouse.jpg",
      type: "Blouses",
      subtype: "Wrap",
      colors: ["Mauve"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 3,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: true
    },
    {
      name: "Pink sleeveless blouse",
      imageUrl: "https://hung-up.onrender.com/client/assets/pink-sleeveless.jpg",
      type: "Blouses",
      subtype: "Sleeveless",
      colors: ["Pink"],
      size: "M",
      ratings: {
        comfort: 2,
        confidence: 4,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Red halter tank",
      imageUrl: "https://hung-up.onrender.com/client/assets/red-halter.jpg",
      type: "Tanks",
      subtype: "Halter",
      colors: ["Red"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 4,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Black racerback tank",
      imageUrl: "https://hung-up.onrender.com/client/assets/black-racerback.jpg",
      type: "Tanks",
      subtype: "Racerback",
      colors: ["Black"],
      size: "M",
      ratings: {
        comfort: 3,
        confidence: 5,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Taupe muscle tank",
      imageUrl: "https://hung-up.onrender.com/client/assets/taupe-muscle-tank.jpg",
      type: "Tanks",
      subtype: "Muscle",
      colors: ["Taupe"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 3,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Black spaghetti strap tank",
      imageUrl: "https://hung-up.onrender.com/client/assets/black-tank.jpg",
      type: "Tanks",
      subtype: "Spaghetti strap",
      colors: ["Black"],
      size: "S",
      ratings: {
        comfort: 5,
        confidence: 4,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Rainbow cardigan sweater",
      imageUrl: "https://hung-up.onrender.com/client/assets/rainbow-cardigan.jpg",
      type: "Sweaters",
      subtype: "Cardigan",
      colors: ["Rainbow"],
      size: "M",
      ratings: {
        comfort: 5,
        confidence: 4,
        warmth: 3
      },
      waterproof: false,
      workAppropriate: true
    },
    {
      name: "Teal pullover sweater",
      imageUrl: "https://hung-up.onrender.com/client/assets/teal-pullover.jpg",
      type: "Sweaters",
      subtype: "Pullover",
      colors: ["Teal"],
      size: "M",
      ratings: {
        comfort: 5,
        confidence: 5,
        warmth: 3
      },
      waterproof: false,
      workAppropriate: true
    },
    {
      name: "Cream turtleneck sweater",
      imageUrl: "https://hung-up.onrender.com/client/assets/cream-turtleneck.jpg",
      type: "Sweaters",
      subtype: "Turtleneck",
      colors: ["Cream"],
      size: "M",
      ratings: {
        comfort: 3,
        confidence: 5,
        warmth: 3
      },
      waterproof: false,
      workAppropriate: true
    },
    {
      name: "Grey crewneck sweater",
      imageUrl: "https://hung-up.onrender.com/client/assets/grey-crewneck.jpg",
      type: "Sweaters",
      subtype: "Crewneck",
      colors: ["Grey"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 4,
        warmth: 3
      },
      waterproof: false,
      workAppropriate: true
    },
    {
      name: "Burgundy shift dress",
      imageUrl: "https://hung-up.onrender.com/client/assets/red-dress.jpg",
      type: "Dresses",
      subtype: "Shift",
      colors: ["Burgundy"],
      size: "M",
      ratings: {
        comfort: 2,
        confidence: 4,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Little black dress",
      imageUrl: "https://hung-up.onrender.com/client/assets/little-black-dress.jpg",
      type: "Dresses",
      subtype: "Little black",
      colors: ["Black"],
      size: "S",
      ratings: {
        comfort: 5,
        confidence: 3,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "White slip dress",
      imageUrl: "https://hung-up.onrender.com/client/assets/white-slip-dress.jpg",
      type: "Dresses",
      subtype: "Slip",
      colors: ["White"],
      size: "M",
      ratings: {
        comfort: 3,
        confidence: 5,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Turquoise bodycon dress",
      imageUrl: "https://hung-up.onrender.com/client/assets/turquoise-bodycon.jpg",
      type: "Dresses",
      subtype: "Bodycon",
      colors: ["Turquoise"],
      size: "S",
      ratings: {
        comfort: 3,
        confidence: 5,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Blush ruffle dress",
      imageUrl: "https://hung-up.onrender.com/client/assets/blush-ruffle-dress.jpg",
      type: "Dresses",
      subtype: "Ruffle",
      colors: ["Blush"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 3,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Navy romper jumpsuit",
      imageUrl: "https://hung-up.onrender.com/client/assets/navy-romper.jpg",
      type: "Jumpsuits",
      subtype: "Romper",
      colors: ["Navy"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 3,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Black wide leg jumpsuit",
      imageUrl: "https://hung-up.onrender.com/client/assets/black-jumpsuit.jpg",
      type: "Jumpsuits",
      subtype: "Wide leg",
      colors: ["Black"],
      size: "M",
      ratings: {
        comfort: 5,
        confidence: 5,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Marine professional jumpsuit",
      imageUrl: "https://hung-up.onrender.com/client/assets/marine-business-jumpsuit.jpg",
      type: "Jumpsuits",
      subtype: "Professional",
      colors: ["Marine"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 4,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: true
    },
    {
      name: "Forest green utility jumpsuit",
      imageUrl: "https://hung-up.onrender.com/client/assets/utility-jumpsuit.jpg",
      type: "Jumpsuits",
      subtype: "Utility",
      colors: ["Forest green"],
      size: "M",
      ratings: {
        comfort: 5,
        confidence: 5,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Denim overalls",
      imageUrl: "https://hung-up.onrender.com/client/assets/denim-overalls.jpg",
      type: "Overalls",
      subtype: "Denim",
      colors: ["Blue"],
      size: "M",
      ratings: {
        comfort: 5,
        confidence: 4,
        warmth: 3
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Camel corduroy overalls",
      imageUrl: "https://hung-up.onrender.com/client/assets/camel-corduroy-coveralls.jpg",
      type: "Overalls",
      subtype: "Corduroy",
      colors: ["Camel"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 3,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Black shortalls",
      imageUrl: "https://hung-up.onrender.com/client/assets/black-shortalls.jpg",
      type: "Overalls",
      subtype: "Shortalls",
      colors: ["Black"],
      size: "S",
      ratings: {
        comfort: 4,
        confidence: 3,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "White low-top sneakers",
      imageUrl: "https://hung-up.onrender.com/client/assets/white-low-top-sneakers.jpg",
      type: "Sneakers",
      subtype: "Low-top",
      colors: ["White"],
      size: "8",
      ratings: {
        comfort: 2,
        confidence: 4,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "White high-top sneakers",
      imageUrl: "https://hung-up.onrender.com/client/assets/white-high-tops.jpg",
      type: "Sneakers",
      subtype: "High-top",
      colors: ["White"],
      size: "8",
      ratings: {
        comfort: 3,
        confidence: 5,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Red slip-on sneakers",
      imageUrl: "https://hung-up.onrender.com/client/assets/red-slip-ons.jpg",
      type: "Sneakers",
      subtype: "Slip-on",
      colors: ["Red"],
      size: "8",
      ratings: {
        comfort: 4,
        confidence: 5,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Grey running sneakers",
      imageUrl: "https://hung-up.onrender.com/client/assets/grey-sneakers.jpg",
      type: "Sneakers",
      subtype: "Running",
      colors: ["Grey"],
      size: "8",
      ratings: {
        comfort: 5,
        confidence: 2,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Brown cowboy boots",
      imageUrl: "https://hung-up.onrender.com/client/assets/brown-cowboy.jpg",
      type: "Boots",
      subtype: "Cowboy",
      colors: ["Brown"],
      size: "8",
      ratings: {
        comfort: 3,
        confidence: 3,
        warmth: 2
      },
      waterproof: true,
      workAppropriate: false
    },
    {
      name: "Black knee-high boots",
      imageUrl: "https://hung-up.onrender.com/client/assets/black-knee-highs.jpg",
      type: "Boots",
      subtype: "Knee-high",
      colors: ["Black"],
      size: "8",
      ratings: {
        comfort: 3,
        confidence: 4,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Tan steel-toed boots",
      imageUrl: "https://hung-up.onrender.com/client/assets/steel-toed-boots.jpg",
      type: "Boots",
      subtype: "Steel-toed",
      colors: ["Tan"],
      size: "8",
      ratings: {
        comfort: 4,
        confidence: 3,
        warmth: 2
      },
      waterproof: true,
      workAppropriate: true
    },
    {
      name: "Blue snow boots",
      imageUrl: "https://hung-up.onrender.com/client/assets/blue-snow-boots.jpg",
      type: "Boots",
      subtype: "Snow",
      colors: ["Blue"],
      size: "8",
      ratings: {
        comfort: 3,
        confidence: 3,
        warmth: 5
      },
      waterproof: true,
      workAppropriate: false
    },
    {
      name: "Grey oxfords",
      imageUrl: "https://hung-up.onrender.com/client/assets/grey-oxfords.jpg",
      type: "Specialty Shoes",
      subtype: "Oxfords",
      colors: ["Grey"],
      size: "8",
      ratings: {
        comfort: 4,
        confidence: 3,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: true
    },
    {
      name: "Blush heels",
      imageUrl: "https://hung-up.onrender.com/client/assets/blush-heels.jpg",
      type: "Specialty Shoes",
      subtype: "Heels",
      colors: ["Blush"],
      size: "8",
      ratings: {
        comfort: 5,
        confidence: 4,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Hot pink platforms",
      imageUrl: "https://hung-up.onrender.com/client/assets/pink-platforms.jpg",
      type: "Specialty Shoes",
      subtype: "Platforms",
      colors: ["Hot pink"],
      size: "8",
      ratings: {
        comfort: 4,
        confidence: 4,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Red crocs",
      imageUrl: "https://hung-up.onrender.com/client/assets/red-crocs.jpg",
      type: "Specialty Shoes",
      subtype: "Crocs",
      colors: ["Red"],
      size: "8",
      ratings: {
        comfort: 3,
        confidence: 3,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Tan birks",
      imageUrl: "https://hung-up.onrender.com/client/assets/tan-birks.jpg",
      type: "Sandals",
      subtype: "Birks",
      colors: ["Tan"],
      size: "8",
      ratings: {
        comfort: 3,
        confidence: 3,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Nude espadrilles",
      imageUrl: "https://hung-up.onrender.com/client/assets/nude-espadrilles.jpg",
      type: "Sandals",
      subtype: "Espadrilles",
      colors: ["Nude"],
      size: "8",
      ratings: {
        comfort: 0,
        confidence: 2,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Yellow flip-flops",
      imageUrl: "https://hung-up.onrender.com/client/assets/yellow-flip-flops.jpg",
      type: "Sandals",
      subtype: "Flip-flops",
      colors: ["Yellow"],
      size: "8",
      ratings: {
        comfort: 1,
        confidence: 3,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Charcoal slides",
      imageUrl: "https://hung-up.onrender.com/client/assets/charcoal-slides.jpg",
      type: "Sandals",
      subtype: "Slides",
      colors: ["Charcoal"],
      size: "8",
      ratings: {
        comfort: 4,
        confidence: 3,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Green baseball hat",
      imageUrl: "https://hung-up.onrender.com/client/assets/green-baseball-cap.jpg",
      type: "Hats",
      subtype: "Baseball",
      colors: ["Green"],
      size: "M",
      ratings: {
        comfort: 5,
        confidence: 4,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Yellow bucket hat",
      imageUrl: "https://hung-up.onrender.com/client/assets/yellow-bucket-hat.jpg",
      type: "Hats",
      subtype: "Bucket",
      colors: ["Yellow"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 1,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Red beanie",
      imageUrl: "https://hung-up.onrender.com/client/assets/red-beanie.jpg",
      type: "Hats",
      subtype: "Beanie",
      colors: ["Red"],
      size: "M",
      ratings: {
        comfort: 3,
        confidence: 5,
        warmth: 3
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Blue visor",
      imageUrl: "https://hung-up.onrender.com/client/assets/blue-visor.jpg",
      type: "Hats",
      subtype: "Visor",
      colors: ["Blue"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 5,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Black leather belt",
      imageUrl: "https://hung-up.onrender.com/client/assets/black-leather-belt.jpg",
      type: "Belts",
      subtype: "Leather",
      colors: ["Black"],
      size: "M",
      ratings: {
        comfort: 0,
        confidence: 5,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: true
    },
    {
      name: "Off-white canvas belt",
      imageUrl: "https://hung-up.onrender.com/client/assets/canvas-belt.jpg",
      type: "Belts",
      subtype: "Canvas",
      colors: ["Off-white"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 5,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: true
    },
    {
      name: "Tan braided belt",
      imageUrl: "https://hung-up.onrender.com/client/assets/braided-belt.jpg",
      type: "Belts",
      subtype: "Braided",
      colors: ["Tan"],
      size: "M",
      ratings: {
        comfort: 5,
        confidence: 3,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: true
    },
    {
      name: "Brown buckled belt",
      imageUrl: "https://hung-up.onrender.com/client/assets/brown-buckle-belt.jpg",
      type: "Belts",
      subtype: "Buckled",
      colors: ["Brown"],
      size: "M",
      ratings: {
        comfort: 3,
        confidence: 5,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: true
    },
    {
      name: "Nude trench coat",
      imageUrl: "https://hung-up.onrender.com/client/assets/trench-coat.jpg",
      type: "Coats",
      subtype: "Trench",
      colors: ["Nude"],
      size: "M",
      ratings: {
        comfort: 2,
        confidence: 4,
        warmth: 4
      },
      waterproof: false,
      workAppropriate: true
    },
    {
      name: "Black puffer coat",
      imageUrl: "https://hung-up.onrender.com/client/assets/black-puffer-jacket.jpg",
      type: "Coats",
      subtype: "Puffer",
      colors: ["Black"],
      size: "M",
      ratings: {
        comfort: 3,
        confidence: 3,
        warmth: 4
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Sage green snow coat",
      imageUrl: "https://hung-up.onrender.com/client/assets/sage-green-snow-jacket.jpg",
      type: "Coats",
      subtype: "Snow",
      colors: ["Sage green"],
      size: "M",
      ratings: {
        comfort: 3,
        confidence: 5,
        warmth: 5
      },
      waterproof: true,
      workAppropriate: false
    },
    {
      name: "Red parka",
      imageUrl: "https://hung-up.onrender.com/client/assets/red-parka.jpg",
      type: "Coats",
      subtype: "Parka",
      colors: ["Red"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 4,
        warmth: 5
      },
      waterproof: true,
      workAppropriate: false
    },
    {
      name: "Brown bomber jacket",
      imageUrl: "https://hung-up.onrender.com/client/assets/bomber-jacket.jpg",
      type: "Jackets",
      subtype: "Bomber",
      colors: ["Brown"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 4,
        warmth: 4
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Brown leather jacket",
      imageUrl: "https://hung-up.onrender.com/client/assets/brown-leather-jacket.jpg",
      type: "Jackets",
      subtype: "Leather",
      colors: ["Brown"],
      size: "M",
      ratings: {
        comfort: 3,
        confidence: 5,
        warmth: 4
      },
      waterproof: true,
      workAppropriate: false
    },
    {
      name: "Navy blazer",
      imageUrl: "https://hung-up.onrender.com/client/assets/navy-blazer.jpg",
      type: "Jackets",
      subtype: "Blazer",
      colors: ["Navy"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 4,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: true
    },
    {
      name: "Blue jean jacket",
      imageUrl: "https://hung-up.onrender.com/client/assets/jean-jacket.jpg",
      type: "Jackets",
      subtype: "Jean",
      colors: ["Blue"],
      size: "M",
      ratings: {
        comfort: 3,
        confidence: 3,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Purple windbreaker",
      imageUrl: "https://hung-up.onrender.com/client/assets/purple-windbreaker.jpg",
      type: "Jackets",
      subtype: "Windbreaker",
      colors: ["Purple"],
      size: "M",
      ratings: {
        comfort: 5,
        confidence: 4,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Black leather gloves",
      imageUrl: "https://hung-up.onrender.com/client/assets/black-leather-gloves.jpg",
      type: "Gloves",
      subtype: "Leather",
      colors: ["Black"],
      size: "M",
      ratings: {
        comfort: 3,
        confidence: 5,
        warmth: 3
      },
      waterproof: true,
      workAppropriate: false
    },
    {
      name: "Grey wool gloves",
      imageUrl: "https://hung-up.onrender.com/client/assets/grey-wool-gloves.jpg",
      type: "Gloves",
      subtype: "Wool",
      colors: ["Grey"],
      size: "M",
      ratings: {
        comfort: 5,
        confidence: 4,
        warmth: 3
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "White snow gloves",
      imageUrl: "https://hung-up.onrender.com/client/assets/white-snow-mittens.jpg",
      type: "Gloves",
      subtype: "Snow",
      colors: ["White"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 2,
        warmth: 5
      },
      waterproof: true,
      workAppropriate: false
    },
    {
      name: "Black work gloves",
      imageUrl: "https://hung-up.onrender.com/client/assets/black-working-gloves.jpg",
      type: "Gloves",
      subtype: "Work",
      colors: ["Black"],
      size: "M",
      ratings: {
        comfort: 3,
        confidence: 3,
        warmth: 4
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Red puffer vest",
      imageUrl: "https://hung-up.onrender.com/client/assets/red-puffer-vest.jpg",
      type: "Vests",
      subtype: "Puffer",
      colors: ["Red"],
      size: "M",
      ratings: {
        comfort: 4,
        confidence: 4,
        warmth: 2
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "White denim vest",
      imageUrl: "https://hung-up.onrender.com/client/assets/white-denim-vest.jpg",
      type: "Vests",
      subtype: "Denim",
      colors: ["White"],
      size: "M",
      ratings: {
        comfort: 5,
        confidence: 5,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Olive utility vest",
      imageUrl: "https://hung-up.onrender.com/client/assets/olive-utility-vest.jpg",
      type: "Vests",
      subtype: "Utility",
      colors: ["Olive"],
      size: "M",
      ratings: {
        comfort: 5,
        confidence: 3,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    },
    {
      name: "Green quilted vest",
      imageUrl: "https://hung-up.onrender.com/client/assets/green-quilted-vest.jpg",
      type: "Vests",
      subtype: "Quilted",
      colors: ["Green"],
      size: "M",
      ratings: {
        comfort: 5,
        confidence: 3,
        warmth: 1
      },
      waterproof: false,
      workAppropriate: false
    }
  ]
  await Clothing.deleteMany()
  console.log(
    `Clothes cleared. Current count = ${await Clothing.countDocuments()}`
  )
  await Clothing.insertMany(clothes)
  console.log(`Clothes added. Current count = ${clothes.length}`)
}
const runSeeding = async () => {
  await seeding()
  db.close()
}

runSeeding()
