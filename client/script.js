const baseURL = "http://localhost:3001"

console.log("hello")

// clothes page thumbnails
async function populateClothes() {
  try {
    const response = await axios.get(`${baseURL}/clothes`)
    const clothingItems = document.querySelectorAll(".wardrobe-item")

    response.data.forEach((clothing, index) => {
      if (clothingItems[index]) {
        const clothingItem = clothingItems[index]

        const image = clothingItem.querySelector("img")
        image.src = clothing.imageUrl
        image.alt = clothing.name

        const name = clothingItem.querySelector(".name-text")
        name.textContent = clothing.name

        const type = clothingItem.querySelector(".type-text")
        type.textContent = clothing.type

        const subtype = clothingItem.querySelector(".subtype-text")
        subtype.textContent = clothing.subtype

        const color = clothingItem.querySelector(".color-text")
        color.textContent = clothing.colors[0]

        clothingItem.setAttribute("data-id", clothing._id)

        clothingItem.addEventListener("click", () => {
          window.location.href = `single-clothing.html?id=${clothing._id}`
        })
      }
    })
  } catch (error) {
    console.error("Error getting products:", error.message)
  }
}

populateClothes()

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
    } catch (error) {
      console.error("Error getting clothing item details:", error.message)
    }
  } else {
    console.error("No clothing ID found in URL")
  }
}

populateClothingDetails()

if (window.location.pathname.includes("single-clothing.html")) {
  // clothing details page
  window.onload = populateClothingDetails
} else if (window.location.pathname.includes("clothes.html")) {
  // clothes page
  window.onload = populateClothes
}
