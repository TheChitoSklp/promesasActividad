function getProducto() {
  //FETCH
  let promesa = fetch("https://fakestoreapi.com/products", { metod: "GET" });
  promesa
    .then(
      (response) => {
        response
          .json()
          .then(
            (prods) => {
              //crear cards (prods)
              console.log("prods=>json()");
              console.log(prods);
              crearProductos(prods); //creo la funcion para usar prods una vez tengo la peticion
            } //prods
          ) //then json
          .catch((err) => {
            console.error("error en el formato de la respuesta:" + err.message);
          });
      } //response
    ) //then;
    .catch((error) => {
      console.error("error en el formato de la respuesta:" + error.message);
    });
} //getProducto
getProducto();

//la wea destructuradora
function crearProductos(prods) {
  const $cardContainer = document.createElement("section");

  prods.forEach(({ title, price, description, category, image }) => {
    const $article = document.createElement("article");
    const $card = `
    <img src="${image}" class="img">
    <div class="infoCard">
      <h4 class="titulo">${title}</h4>
      <span class="precio">$${price}</span>
      <div class="paragraphContainer">
        <p class="descripcion">${description}</p>
    </div>
      <span class="categoria">${category}</span>
    </div>`;

    $article.innerHTML = $card;
    $cardContainer.insertAdjacentElement("beforeend", $article);
  });
  document.body.insertAdjacentElement("beforeend", $cardContainer);
}

// const cardsContainer = document.querySelector(".cards-container");
// const cardTemplate = document.querySelector("#card-template");

// producto.forEach((item) => {
//   const cardClone = cardTemplate.content.cloneNode(true);

//   cardClone.querySelector(".card-image").setAttribute("src", item.image);
//   cardClone.querySelector(".card-title").textContent = item.title;
//   cardClone.querySelector(".card-price").textContent = `$${item.price}`;
//   cardClone.querySelector(".card-description").textContent = item.description;
//   cardClone.querySelector(".card-category").textContent = item.category;

//   const rating = cardClone.querySelector(".card-rating");
//   for (let i = 1; i <= 5; i++) {
//     const star = document.createElement("i");
//     star.classList.add("fas", "fa-star");
//     if (i <= item.rating.rate) {
//       star.classList.add("active");
//     }
//     rating.appendChild(star);
//   }

//   cardsContainer.appendChild(cardClone);
// });
// VERSION CHAFA
