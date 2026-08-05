const title = document.querySelector(".title");

const cards = document.querySelectorAll(".card");

const buttonForCards = document.querySelector("#button-for-cards");
console.log(buttonForCards);
title.addEventListener("mouseenter", () => {
  cards.forEach((card) => {
    console.log(card.textContent);
  });
});

title.addEventListener("click", () => {
  console.clear();
});

// поменять цвет всех карточек

buttonForCards.addEventListener("click", () => {
  cards.forEach((card) => {
    card.classList.toggle("active");
  });
});

// поменять цвет первой карточки в синий цвет

const blueColorCardHash = "#add8e6";
const card = document.querySelector(".card");

const changeColorCardButton = document.querySelector(
  "#change-color-card-button",
);

changeColorCardButton.addEventListener("click", () => {
  card.style.backgroundColor = blueColorCardHash;
});

// открыть страницу Google

const buttonOpenGoogle = document.querySelector("#button-open-google");

buttonOpenGoogle.addEventListener("click", openGoogle);

function openGoogle() {
  const shouldOpen = confirm("Вы хотите открыть страницу Google?");
  if (shouldOpen === true) {
    window.open("https://www.google.com");
  } else {
    return;
  }
}

// вывести сообщение в консоль

const buttonOutputConsoleLog = document.querySelector(
  "#button-output-console-log",
);

buttonOutputConsoleLog.addEventListener("click", () =>
  outputConsoleLog("дз №6"),
);

function outputConsoleLog(message) {
  alert("Вывод сообщения в консоль: " + message);
  console.log(message);
}
