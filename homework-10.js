import { products } from "./products.js";

const productDescription = products.reduce((result, product) => {
  result.push({
    [product.name]: product.description,
  });

  return result;
}, []);

console.log(productDescription);

function getCardsCount() {
  const number = Number(prompt("Введите число от 1 до 5"));

  const cards = document.querySelectorAll("#products-container .card");

  if (number >= 1 && number <= 5) {
    console.log(`Вы ввели: ${number}`);

    cards.forEach((card, index) => {
      if (index < number) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  } else {
    console.log(`Число ${number} не находится в диапазоне выбора`);

    cards.forEach((card) => {
      card.style.display = "none";
    });
  }
}
getCardsCount();

// function checkNumber(number) {

//   const cards = document.querySelectorAll("#products-container .card");

//   if (number >= 1 && number <= 5) {
//     console.log(`Вы ввели: ${number}`);

//     cards.forEach((card, index) => {
//       if (index < number) {
//         card.style.display = "";
//       } else {
//         card.style.display = "none";
//       }
//     });
//   } else {
//     console.log(`Число ${number} не находится в диапазоне выбора`);

//     cards.forEach((card) => {
//       card.style.display = "none";
//     });
//   }
// }
const number = getCardsCount();
getCardsCount(number);

const productTemplate = document.getElementById("product-template");
const productsContainer = document.getElementById("products-container");

products.forEach((product) => {
  const productClone = productTemplate.content.cloneNode(true);

  productClone.querySelector(".card__product-name").textContent = product.name;
  productClone.querySelector(".card__price-value").textContent =
    `${product.price} ₽`;
  productClone.querySelector(".card__description").textContent =
    product.description;
  productClone.querySelector(".card__purpose").textContent = product.purpose;
  productClone.querySelector(".compound__item1").textContent =
    product.compound[0];
  productClone.querySelector(".compound__item2").textContent =
    product.compound[1];
  productClone.querySelector(".compound__item3").textContent =
    product.compound[2];
  // productClone.querySelector('.card__price-label').textContent = product.label
  // productClone.querySelector('.card__img').src = 'images/' + product.img
  // productClone.querySelector('.card__img').alt = product.name

  productsContainer.appendChild(productClone);
  console.log(productsContainer);
});