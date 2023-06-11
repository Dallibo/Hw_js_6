let numb = +prompt("Введите начальное число число:")
let numb1 = +prompt("Введите введите конечное число :")
let sum = 0;
for (let number = numb; number <= numb1; number++) {
  sum += number;
}
alert("Сумма всех чисел: " + sum)


let numb2 = +prompt("Введите первое число:");
let numb3 = +prompt("Введите второе число:");
while (numb3 !== 0) {
  let remainder = numb2 % numb3;
  numb2 = numb3;
  numb3 = remainder;
}
let numb4 = numb2;
alert("Наибольший общий делитель: " + numb4);


let numb5 = +prompt("Введите число что бы узнать делители:")
for (let i = 1; i <= numb5; i++) {
  if (numb5 % i === 0) {
    console.log(i);
  }
}
console.log("Делители числа " + numb5 + ":");


let numb6 = +prompt("Введите число:");
let numbString = String(numb6);
let numb7 = numbString.length;
 console.log("Количество цифр в числе:", + numb7 );


let numb8 = 0;
let numb9 = 0;
let numb10 = 0;
let numb11 = 0;
let numb12 = 0;
for (let i = 0; i < 10; i++) {
  let number = +prompt("Введите число:");
  
  if (number > 0) {
    numb8++;
  } else if (number < 0) {
    numb9++;
  } else {
    numb10++;
  }
  
  if (number % 2 === 0) {
    numb11++;
  } else {
    numb12++;
  }
}
console.log("Количество положительных чисел:", numb8);
console.log("Количество отрицательных чисел:", numb9);
console.log("Количество нулей:", numb10);
console.log("Количество четных чисел:", numb11);
console.log("Количество нечетных чисел:", numb12);


do {
  let numb13 = +prompt("Введите первое число:");
  let numb14 = +prompt("Введите второе число:");
  let numb15 = prompt("Введите действие (+, -, /, *):");
  let result;

  switch (numb15) {
    case "+":
      result = numb13 + numb14;
      break;
    case "-":
      result = numb13 - numb14;
      break;
    case "*":
      result = numb13 * numb14;
      break;
    case "/":
      result = numb13 / numb14;
      break;
    default:
      console.log("Неверный оператор!");
      continue;
  }

  alert("Результат: " + result);

  let answer = prompt("Хотите решить еще один пример? (Да или Нет)");
  if (answer.toLowerCase() !== "да") {
    break;
  }
} while (true);


let numb16 = prompt("Введіть число:");
let numb17 = +prompt("На скільки цифр його змістити:");
let numb18 = parseInt(numb16.slice(numb17) + numb16.slice(0, numb17));
console.log("Результат:", numb18);


let daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let dayIndex = 0;
while (confirm("День недели: " + daysOfWeek[dayIndex] + ". Хотите увидеть название следующего дня недели?")) {
  dayIndex = (dayIndex + 1) % daysOfWeek.length;
}


for (let i = 2; i <= 9; i++) {
  console.log("Таблица умножения для числа", i);
  for (let j = 1; j <= 10; j++) {
    let result = i * j;
    console.log(i + " * " + j + " = " + result);
  }
}

let min = 0;
let max = 100;
let guessed = false;
while (!guessed) {
  let guess = Math.floor((min + max) / 2);
  let answer = prompt(`Ваше число > ${guess}, < ${guess} або == ${guess}? Введіть '>', '<' або '='`);

  if (answer === '>') {
    min = guess + 1;
  } else if (answer === '<') {
    max = guess - 1;
  } else if (answer === '=') {
    guessed = true;
    console.log(`Ви вгадали! Загадане число: ${guess}`);
  } else {
    console.log("Невірна відповідь. Будь ласка, введіть '>', '<' або '='");
  }
}


