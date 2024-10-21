const db = require("../db")
const Clothing = require("../models/clothing.js")

// run this file first before outfits.js or types.js
const seeding = async () => {
  const clothes = [
    {
      name: "Orange drawstring shorts",
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      name: "Gray crewneck sweater",
      imageUrl: "url_to_image",
      type: "Sweaters",
      subtype: "Crewneck",
      colors: ["Gray"],
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
      imageUrl: "url_to_image",
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
