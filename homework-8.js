//3. обьект с информацией о пользователе

const user = {
  name: "Зайнаб",
  age: 16,
  city: "Каир",
  country: "Египет",
  mail: "mehanik.zero@gmail.com",
};

//4. обьект с информацией о машине

const car = {
  brand: "mercedes",
  model: "s-class",
  year: 2020,
  color: "black",
  transmission: "9G-TRONIC",
  engine: "3.0L V6",
  fuelType: "diesel",
  mileage: 15000,
  price: 80000,
  owner: user,
};

//5. функция которая добавляет свойство maxSpeed в обьект car, если его нет

function addMaxSpeed(car) {
  if (!car.maxSpeed) {
    car.maxSpeed = 300;
  }
}
addMaxSpeed(car);
console.log(car);

//6. функция которая выводит цвет машины

function showColorCar(car, color) {
  console.log(car[color]);
}
showColorCar(car, "color");

//7. Массив содержащий названия продуктов, просто строки

const products = ["Молоко", "Хлеб", "Яйца", "Сыр", "Масло"];

//8. Массив из книг
const books = [
  {
    title: "Институт",
    author: "Стивен Кинг",
    year: 2019,
    coverColor: "черный",
    genre: "ужасы",
  },
  {
    title: "Шестерка воров",
    author: "Ли Бадруго",
    year: 2015,
    coverColor: "синий",
    genre: "фэнтези",
  },
  {
    title: "Песнь сорокопута",
    author: "Френсис Кель",
    year: 2020,
    coverColor: "зеленый",
    genre: "фэнтези",
  },
  {
    title: "Мертвые души",
    author: "Николай Гоголь",
    year: 1842,
    coverColor: "коричневый",
    genre: "сатира",
  },
  {
    title: "451 градус по Фаренгейту",
    author: "Рэй Bradbury",
    year: 1953,
    coverColor: "красный",
    genre: "научная фантастика",
  },
];

books.push({
  title: "Убийство в Восточном экспрессе",
  author: "Агата Кристи",
  year: 1934,
  coverColor: "серый",
  genre: "детектив",
});

console.log(books);

//9.обединить 2 массива в одном
const books2 = [
  {
    title: "оно",
    author: "Стивен Кинг",
    year: 1986,
    coverColor: "красный",
    genre: "ужасы",
  },
  {
    title: "сияние",
    author: "Стивен Кинг",
    year: 1977,
    coverColor: "синий",
    genre: "ужасы",
  },
  {
    title: "кэрри",
    author: "Стивен Кинг",
    year: 1974,
    coverColor: "зеленый",
    genre: "ужасы",
  },
  {
    title: "кладбище домашних животных",
    author: "Стивен Кинг",
    year: 1983,
    coverColor: "серый",
    genre: "ужасы",
  },
  {
    title: "зеленая миля",
    author: "Стивен Кинг",
    year: 1996,
    coverColor: "черный",
    genre: "ужасы",
  },
];

const allBooks = [...books, ...books2];
console.log(allBooks);

//10.добавила свойство редкости

function addRareProperty(books) {
  return books.map((book) => {
    return {
      ...book,
      isRare: book.year > 2000,
    };
  });
}

const newBooks = addRareProperty(books);

console.log(newBooks);
