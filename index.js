// Homework 04


// EXERCISE-1
/* 
Перепишите функцию, используя оператор '?' или '||'
Следующая функция возвращает `true`, если параметр `age` больше `18`.
В ином случае она задаёт вопрос `confirm` и возвращает его результат.
Исходник: 
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }

*/


/* SOLUTION-1 */
// Переписанная функция
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?')
// }

//   console.log(checkAge(16));
//   console.log(checkAge(22));





// EXERCISE-2
  /* Функция pow(x,n)
  Напишите функцию `pow(x,n)`, которая возвращает `x` в степени `n`. 
  Иначе говоря, умножает `x` на себя `n` раз и возвращает результат.
    pow(3, 2) = 3*3 = 9
    pow(3, 3) = 3*3*3 = 27
    pow(1, 100) = 1*1 * ...* 1 = 1
  */

/* SOLUTION-2 */
// function pow(x, n) {
//     let res = x;
//     for (let cnt = 1; cnt < n; cnt++) {
//         res *= x;
//     }
//     return res;
// }

// console.log(pow(3, 2)); // 9
// console.log(pow(3, 3)); // 27
// console.log(pow(3, 4)); // 81





// EXERCISE-3
/*
Перепишите с использованием функции-стрелки
Замените код Function Expression стрелочной функцией:
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/


/* SOLUTION-3 */
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );




  // EXERCISE-4
/*
Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];
// ... ваш код для сортировки по убыванию
alert( arr ); // 8, 5, 2, 1, -10

*/


/* SOLUTION-4 */
// let arr = [5, 2, 1, -10, 8];
// arr.sort(function(a,b) {return b - a})
// alert( arr ); // 8, 5, 2, 1, -10



  // EXERCISE-5
/*
Трансформировать в массив имён
У вас есть массив объектов `user`, и в каждом из них есть `user.name`. 
Напишите код, который преобразует их в массив имён.
*/


/* SOLUTION-5 */
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(element => element.name)

// alert( names ); // Вася, Петя, Маша



  // EXERCISE-6
/*
Трансформировать в объекты
У вас есть массив объектов `user`, 
и у каждого из объектов есть `name`, `surname` и `id`.
Напишите код, который создаст ещё один массив объектов 
с параметрами `id` и `fullName`, где `fullName` – состоит из `name` и `surname`.
Пример:
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
Итак, на самом деле вам нужно трансформировать один массив объектов 
в другой. Попробуйте использовать `=>`. Это небольшая уловка.
*/


/* SOLUTION-6 */
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));
// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин


  // EXERCISE-7
/*
Получить средний возраст
Напишите функцию `getAverageAge(users)`, 
которая принимает массив объектов со свойством `age`
и возвращает средний возраст.
Формула вычисления среднего арифметического значения: 
`(age1 + age2 + ... + ageN) / N`.
Например:
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/


/* SOLUTION-7 */
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(users) {
    let sumOfAges = 0;
    let len = 0;
    users.forEach(user => {
        sumOfAges += user.age;
        len++;
    });
    return sumOfAges / len
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28