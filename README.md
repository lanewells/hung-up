![Icon](/client/assets/readme/hung-up-icon.png)
# Hung Up

An application I designed to help beat decision fatigue while getting dressed.

## User Stories

Focused on database building and backend connection, I created this project with the vision of an application that lets users:

- Populate a database with their own existing articles of clothing
- Create outfits based on those clothing items
- Enter details, values, and images for their clothing pieces and outfits
- View and sort their clothing by type

## Current Stage of Development 

I designed the interface with scalability in mind, implementing front-end logic in JavaScript. The current layout provides a flexible foundation for connecting full CRUD functionality as additional UI components roll out.

##### Index page:
![Index Page](/client/assets/readme/index-page.png)

##### Clothes page:
![Clothes Page](/client/assets/readme/clothes-page.png)

##### Outfits page:
![Outfits Page](/client/assets/readme/outfit-page-4.png)
![Outfits Page](/client/assets/readme/outfit-page-3.png)

##### Clothes detail page:
![Clothes Page](/client/assets/readme/detail-page.png)

##### Drawers page:
![Drawers Page](/client/assets/readme/drawers-page.png)

## Early Stages of Development

### ERD

![ERD Chart](/client/assets/readme/ERD.png)

### Wireframing

![Clothes Page](/client/assets/readme/Clothing1.png)

![Clothing Details Page](/client/assets/readme/Clothing2.png)

![Outfits Page](/client/assets/readme/Outfits1.png)

![Outfit Details Page](/client/assets/readme/Outfit2.png)

![User CRUD Page - Outfit](/client/assets/readme/CRUD.png)

![User CRUD Page - Clothing](/client/assets/readme/CRUDClothing.png)

## Goals:

*The remaining content in this document was created in 2024 to fulfill educational curricula requirements.*

## Learning 

I had my own idea of what _placeholder_ meant. I implemented this in my clothes.html page for each clothing item I wanted to display. It made working with a dynamic size ranging dataset complicated and tedious.

### clothes.html

```html
<!-- clothing item -->
<div class="wardrobe-item">
  <img src="/assets/image-placeholder.png" alt="Clothing item" />
  <div class="wardrobe-details">
    <p class="name-text"><strong>clothing item name</strong></p>
    <p class="type-text"><strong>type</strong></p>
    <p class="subtype-text"><strong>subtype</strong></p>
    <p class="color-text"><strong>color</strong></p>
  </div>
</div>
```

By the time I got to populating the outfits.html page, I was TIRED and researched different methods of populating elements with a dynamic dataset. I learned how to use cloneNode and used it instead here.
_See citations at end of document_

### outfits.html

This resulted in a denser script, but smoother connection between front end and back end during data population. There's also less room for tiny typing errors to hide.

```html
<!-- ***** outfit item - template ***** -->
<div class="outfit-item">
  <img src="" alt="" class="outfit-image" />
  <div class="outfit-details">
    <p class="outfit-text"><strong></strong></p>
    <p class="occasion-text"><strong></strong></p>
    <div class="outfit-clothing-images">
      <img src="" alt="" class="clothing-image" />
      <img src="" alt="" class="clothing-image" />
      <img src="" alt="" class="clothing-image" />
    </div>
  </div>
</div>
```

Below is a small snippet of my javascript function containing cloneNode.

```js
    outfits.forEach(async (outfit) => {
      // outfit template to clone - from html with placeholders
      const outfitTemplate = document
        .querySelector(".outfit-item")
        .cloneNode(true)
```

## MVPs Met

1.  Create 3 models each with full CRUD functionality on back end.
2.  Design an intuitive user interface.
3.  Have working Read functionality on all 3 models on the front end.

## Stretch Goals Met

1.  Make my site beautiful.
2.  Display my "type" model according to its categories.
3.  Create "My Closet" to function as a homepage.
4.  Add dresser drawer-opening effect to my types model page.

## Did Not Meet/Next Goals

1.  Making every single page friendly across mobile devices. A couple of things just aren't very friendly.
2.  One model with C_UD on front end.
3.  Outfit details page.

## Technologies Used

- Axios
- Nodemon
- MongoDB
- Mongoose
- Express
- Cors
- Body-parser
- Morgan

## Citations

[Javascript.info](https://javascript.info/regexp-introduction) for the understanding and use of the i flag to ignore casing

[Developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) for the understanding and use of regular expressions and the regex operator to identify parts in a string

[Stackoverflow.com](https://stackoverflow.com/questions/2835140/how-do-i-link-to-part-of-a-page-hash) to understand how to link to a specific part of a page

[W3schools.com](https://www.w3schools.com/icons/fontawesome_icons_intro.asp#:~:text=You%20place%20Font%20Awesome%20icons,fa%20and%20the%20icon's%20name.) to learn about font awesome for css styling and icons

[Developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/WebKit_Extensions) for specific webkit extension syntax

[Developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode) to learn about clone node!
