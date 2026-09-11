export const products = [
  {
    name: "Увлажняющий мусс",
    description: "Глубоко увложняют кожу лица,остовляя её мягкой и гладкой.",
    compound: [
      "активные натуральные комплексы",
      "витамины C,A,PP,B И E",
      "солнцезащитные компоненты",
    ],
    price: 2750,
    purpose: "ДЛЯ НОРМАЛЬНОЙ КОЖИ",
  },
  {
    name: "Увлажняющая маска",
    description: "Способствует удерживанию влаги в верхних слоях кожи.",
    compound: ["воски", "минералы", "масла"],
    price: 3500,
    purpose: "ДЛЯ НОРМАЛЬНОЙ КОЖИ",
  },
  {
    name: "Гель для умывания",
    description: "Интенсивно очищает, не повреждает защитный барьер кожи.",
    compound: [
      "минералы",
      "масла",
      "витамины C,A,PP,B И E",
      "солнцезащитные компоненты",
    ],
    price: 1650,
    purpose: "ДЛЯ НОРМАЛЬНОЙ КОЖИ",
  },
  {
    name: "Подарочный набор №1",
    description: "Набор, состоящий из увлажняющего крема и маски.",
    compound: ["воски", "минералы", "масла"],
    price: 4750,
    purpose: "ДЛЯ НОРМАЛЬНОЙ КОЖИ",
  },
  {
    name: "Подарочный набор №5",
    description:
      "Весь набор средств Invisible symphony, крем, маска, мусс и гель для умывания.",
    compound: ["воски", "минералы", "масла"],
    price: 7520,
    purpose: "ДЛЯ НОРМАЛЬНОЙ КОЖИ",
  },
];

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
