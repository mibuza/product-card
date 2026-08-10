//3
function sayHello(city, temperature) {
    console.log(`Сейчас в ${city} температура -- ${temperature} градусов по Цельсию!`);
}

sayHello("Логоутаун", 25);
//4
const SPEED_LIGHT = 299.792458;

if (SPEED_LIGHT > 299.792458) {
  console.log('Сверхсветовая скорость')
} else if (SPEED_LIGHT === 299.792458) {
  console.log('Скорость света')
} else {
  console.log('Субсветовая скорость')
}

//5
const product = "Мертвые души";
const price = 2.50;

function buyProduct (budget) {
  if (budget >= price) {
    console.log(`${product} приобретен. Спасибо за покупку!`);
  } else {
    const difference = price - budget;
    console.log(`Вам не хватает ${difference} рублей. Пополните баланс.`);
  }
}

buyProduct(5); // Вы купили Мертвые души за 2.5 dollars

//6-7
function shop() {
  const product = {
    buy() {
      console.log("Вы купили Мертвые души");
    },
    sell() {
      console.log("Мертвые души проданы");
    },
    showInfo() {
      console.log("Информация о товаре: Мертвые души, цена: 2.50 dollars");
    }
  };
  product.buy();
  product.sell();
  product.showInfo();
}
shop();