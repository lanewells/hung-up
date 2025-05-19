const baseURL = "https://hung-up.onrender.com"

console.log("hello")

// populate clothes page

async function populateClothes() {
  const params = new URLSearchParams(window.location.search)
  const category = params.get("category")
  let response

  if (category) {
    console.log("Category filter:", category)
    
    const typeRes = await axios.get(`${baseURL}/types/category/${category}`)
    console.log("Types in category:", typeRes.data)
    
    const allClothingIds = typeRes.data.flatMap((type) => type.clothing)
    console.log("Clothing IDs:", allClothingIds)

    const clothingRes = await axios.post(`${baseURL}/clothes/many`, {
      ids: allClothingIds
    })

    response = { data: clothingRes.data }
  } else {
    response = await axios.get(`${baseURL}/clothes`)
  }

  const clothes = response.data

  const clothesTemplate = document.querySelector(".clothes-item")
  if (!clothesTemplate) {
    console.error("Clothes template not found.")
    return
  }

  const clothesGrid = document.querySelector(".clothes-grid")
  clothesGrid.innerHTML = ""

  clothes.forEach((clothing) => {
    const clonedClothing = clothesTemplate.cloneNode(true)
    clonedClothing.style.display = "block"

    clonedClothing.querySelector(".clothes-image").src = clothing.imageUrl
    clonedClothing.querySelector(".clothes-image").alt = clothing.name || "Clothing Item"

    clonedClothing.querySelector(".name-text strong").textContent = clothing.name || "Unnamed"
    clonedClothing.querySelector(".type-text strong").textContent = `Type: ${clothing.type}` || "Unknown"
    clonedClothing.querySelector(".subtype-text strong").textContent = `Style: ${clothing.subtype}` || "Unknown"
    clonedClothing.querySelector(".color-text strong").textContent = `Color: ${clothing.colors}` || "No Color"

    if (clothing._id) {
      clonedClothing.setAttribute("data-id", clothing._id)
      clonedClothing.addEventListener("click", () => {
        window.location.href = `single-clothing.html?id=${clothing._id}`
      })
    }

    clothesGrid.appendChild(clonedClothing)
  })
}


// set star ratings feature
let userRatings = JSON.parse(localStorage.getItem("userRatings")) || {}

function setStarRatings(clothingId) {
  const categories = ["comfort", "confidence", "warmth"]

  if (!userRatings[clothingId]) {
    userRatings[clothingId] = {
      comfort: 0,
      confidence: 0,
      warmth: 0
    }
  }

  categories.forEach((category) => {
    const starContainer = document.getElementById(`${category}-stars`)
    const stars = starContainer.querySelectorAll("i")
    const savedRating = userRatings[clothingId][category]

    stars.forEach((s, index) => {
      if (index < savedRating) {
        s.classList.add("rated")
      } else {
        s.classList.remove("rated")
      }
    })

    stars.forEach((star) => {
      star.addEventListener("click", () => {
        const rating = parseInt(star.dataset.rating)
        userRatings[clothingId][category] = rating;
        localStorage.setItem("userRatings", JSON.stringify(userRatings))

        stars.forEach((s, index) => {
          if (index < rating) {
            s.classList.add("rated")
          } else {
            s.classList.remove("rated")
          }
        })

        console.log(userRatings)
      })
    })
  })
}



// populate clothing details page
async function populateClothingDetails() {
  const params = new URLSearchParams(window.location.search)
  const clothingId = params.get("id")

  if (clothingId) {
    try {
      const response = await axios.get(`${baseURL}/clothes/${clothingId}`)
      const clothing = response.data

      document.querySelector(".item-name").textContent = clothing.name
      document.querySelector(".image-container img").src = clothing.imageUrl
      document.querySelector("#subtype-text").textContent = clothing.subtype
      document.querySelector("#type-text").textContent = clothing.type
      document.querySelector("#color-text").textContent = clothing.colors
      document.querySelector("#size-text").textContent = clothing.size

      setStarRatings(clothingId)
    } catch (error) {
      console.error("Error getting clothing item details:", error.message)
    }
  } else {
    console.error("No clothing ID found in URL")
  }
}


// populate types page
async function populateDrawers() {
  try {
    const response = await axios.get(`${baseURL}/types`)
    const types = response.data

    const drawers = document.querySelectorAll('.drawer')

    drawers.forEach((drawer) => {
      const category = drawer.dataset.category
      const drawerPreview = drawer.querySelector('.drawer-preview')

      // find matching types for this category
      const categoryTypes = types.filter((type) => type.category === category)

      // flatten all clothing items
      const allClothing = categoryTypes.flatMap((type) => type.clothing)

      // pick 4-5 to preview
      const previewClothing = allClothing.slice(0, 5)

      previewClothing.forEach((clothingItem) => {
        const img = document.createElement('img')
        img.src = clothingItem.imageUrl
        img.alt = clothingItem.name || 'Clothing item'
        img.classList.add('drawer-thumbnail')
        drawerPreview.appendChild(img)
      })

      // click to go to clothes.html?category=X
  drawer.addEventListener("click", () => {
    const category = drawer.dataset.category;
    window.location.href = `clothes.html?category=${encodeURIComponent(category)}`
  })
    })
  } catch (error) {
    console.error('Error populating drawers:', error)
  }
}



// populate clothes page with singular type
async function populateSingularType() {
  try {
    const params = new URLSearchParams(window.location.search)
    const typeName = params.get("type")

    const response = await axios.get(`${baseURL}/clothes/type/${typeName}`)

    const wardrobeItems = document.querySelectorAll(".clothes-item")

    response.data.forEach((clothing, index) => {
      if (wardrobeItems[index]) {
        const wardrobeItem = wardrobeItems[index]

        wardrobeItem.setAttribute("data-id", clothing._id)

        const image = wardrobeItem.querySelector("img")
        image.src = clothing.imageUrl
        image.alt = clothing.name

        const name = wardrobeItem.querySelector(".name-text")
        name.textContent = clothing.name

        const type = wardrobeItem.querySelector(".type-text")
        type.textContent = clothing.type

        const subtype = wardrobeItem.querySelector(".subtype-text")
        subtype.textContent = clothing.subtype

        const color = wardrobeItem.querySelector(".color-text")
        color.textContent = clothing.colors[0]
      }
    })
  } catch (error) {
    console.error("Error getting clothes by type:", error.message)
  }
}

// populate outfits page
async function populateOutfits() {
  try {
    const response = await axios.get(`${baseURL}/outfits`)
    const outfits = response.data

    // outfit template to clone - from html with placeholders
    const outfitTemplate = document.querySelector(".outfit-item")
    if (!outfitTemplate) {
      console.error("Outfit template not found.")
      return
    }

    const outfitGrid = document.querySelector(".outfit-grid")
    outfitGrid.innerHTML = ""

    outfits.forEach(async (outfit) => {
      const clonedOutfit = outfitTemplate.cloneNode(true)
      clonedOutfit.style.display = "block"
      clonedOutfit.querySelector(".outfit-image").src = outfit.imageUrl
      clonedOutfit.querySelector(".outfit-text strong").textContent =
        outfit.occasion
      clonedOutfit.querySelector(".occasion-text strong").textContent =
        `${outfit.weather} weather`

      const clothingImagesContainer = clonedOutfit.querySelector(
        ".outfit-clothing-images"
      )
      clothingImagesContainer.innerHTML = ""

      for (let clothingId of outfit.clothing) {
        const clothingResponse = await axios.get(
          `${baseURL}/clothes/${clothingId}`
        )
        const clothing = clothingResponse.data

        const clothingImage = document.createElement("img")
        clothingImage.src = clothing.imageUrl
        clothingImage.alt = clothing.name
        clothingImagesContainer.appendChild(clothingImage)
      }

      outfitGrid.appendChild(clonedOutfit)
    })
  } catch (error) {
    console.error("Error fetching outfits:", error.message)
  }
}

// upon window loading - call functions
window.onload = () => {
  const path = window.location.pathname

  if (path.includes("single-clothing.html")) {
    // clothing details page
    populateClothingDetails()
  } else if (path.includes("clothes.html")) {
    // clothes page

    const searchParams = new URLSearchParams(window.location.search)
if (searchParams.has("type")) {
  populateSingularType()
} else if (searchParams.has("category")) {
  populateClothes() // handles category filtering
} else {
  populateClothes() // default to all clothes
}



  } else if (path.includes("types.html")) {
    // types page
    populateDrawers()
  } else if (path.includes("outfits.html")) {
    // outfits page
    populateOutfits()
  }
}
