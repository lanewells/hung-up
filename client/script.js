const baseURL = "http://localhost:3001"

console.log("hello")

// populate clothes page
async function populateClothes() {
  try {
    const response = await axios.get(`${baseURL}/clothes`)
    // const clothingItems = document.querySelectorAll(".clothes-item")
    const clothes = response.data

    // clothes template to clone - from html with placeholders
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
      } else {
        console.warn("Missing _id for clothing item:", clothing)
      }

      clothesGrid.appendChild(clonedClothing)
    })
  } catch (error) {
    console.error("Error fetching clothes:", error.message)
  }
}

// set star ratings feature
let userRatings = JSON.parse(localStorage.getItem("userRatings")) || {}

function setStarRatings(clothingId) {
  const categories = ["comfort", "confidence", "warmth"];

  if (!userRatings[clothingId]) {
    userRatings[clothingId] = {
      comfort: 0,
      confidence: 0,
      warmth: 0
    };
  }

  categories.forEach((category) => {
    const starContainer = document.getElementById(`${category}-stars`);
    const stars = starContainer.querySelectorAll("i");
    const savedRating = userRatings[clothingId][category];

    // render the saved rating
    stars.forEach((s, index) => {
      if (index < savedRating) {
        s.classList.add("rated");
      } else {
        s.classList.remove("rated");
      }
    });

    // set up the click behavior
    stars.forEach((star) => {
      star.addEventListener("click", () => {
        const rating = parseInt(star.dataset.rating);
        userRatings[clothingId][category] = rating;
        localStorage.setItem("userRatings", JSON.stringify(userRatings));

        // update visual state
        stars.forEach((s, index) => {
          if (index < rating) {
            s.classList.add("rated");
          } else {
            s.classList.remove("rated");
          }
        });

        console.log(userRatings);
      });
    });
  });
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


// types page - delay closing and expanding of submenus
document.querySelectorAll(".drawer-item").forEach((item) => {
  let timeUp
  item.addEventListener("mouseenter", () => {
    clearTimeout(timeUp)
    item.querySelector(".drawer-types").style.display = "block"
    item.style.transform = "translateY(-10px)"
  })

  item.addEventListener("mouseleave", () => {
    timeUp = setTimeout(() => {
      item.querySelector(".drawer-types").style.display = "none"
      item.style.transform = "translateY(0)"
    }, 300)
  })
})

// populate types page
async function populateTypes() {
  try {
    const response = await axios.get(`${baseURL}/types`)
    const typeButtons = document.querySelectorAll(".drawer-types p")

    typeButtons.forEach((typeButton, index) => {
      const type = response.data.find(
        (item) => item.type === typeButton.textContent.trim()
      )
      if (type) {
        typeButton.setAttribute("data-type-name", type.type)

        typeButton.addEventListener("click", () => {
          window.location.href = `clothes.html?type=${type.type}`
        })
      }
    })
  } catch (error) {
    console.error("Error getting types:", error.message)
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
    if (window.location.search.includes("type")) {
      // clothes page filtered by singular type
      populateSingularType()
    } else {
      // general clothes page
      populateClothes()
    }
  } else if (path.includes("types.html")) {
    // types page
    populateTypes()
  } else if (path.includes("outfits.html")) {
    // outfits page
    populateOutfits()
  }
}
