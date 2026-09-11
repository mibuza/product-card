import { products } from "./products.js";

const productDescription = products.reduce((result, product) => {
  result.push({
    [product.name]: product.description,
  });

  return result;
}, []);

console.log(productDescription);

function showHint() {
  return +prompt("Введите число от 1 до 5");
}
// function checkNumber(number) {
//   const numbers = [1, 2, 3, 4, 5];

//   if (numbers.includes(number)) {
//     console.log(`Вы ввели: ${number}`);
//   } else {
//     console.log(`Число ${number} не находится в диапазоне выбора`);
//   }
// }

// const number = showHint();
// checkNumber(number);

function checkNumber(number) {

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
const number = showHint();
checkNumber(number);
