"use strict";
// const scoreDolphins = (96 + 108 + 89) / 3;
// const avgKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > avgKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphins < avgKoalas) {
//   console.log("Koalas win the trophy");
// } else if (scoreDolphins === avgKoalas) {
//   console.log("Both win the trophy");
// }

// let bill = Number(prompt("Enter the bill amount!"));
// let tip = bill > 50 && bill < 300 ? (bill * 15) / 100 : (bill * 20) / 100;

// console.log(
//   `Your Amount is: ${bill} and tip is ${tip}\nYou have to pay ${bill + tip}`
// );
/*
  important things learned: JavaScript Fundamentals - Part1
    type conversion and coercion
    truthy and falsy values
    statement vs expressions
    the conditional ternary operator
*/
// javaScript Fundamentals part2

// function logger() {
//   console.log("My name is Jonas");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(5, 0));

// function expression
// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };
// console.log(calcAge(1997));

// // arrow function
// const calcAge2 = (birthYear) => 2050 - birthYear;
// const age3 = calcAge2(1997);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1997, "Ninja"));

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };
// const calcDolphins = calcAverage(85, 54, 41);
// const calcKoalas = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins > avgKoalas * 2) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//   } else if (avgKoalas > avgDolphins * 2) {
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   } else return `No team won!`;
// }

// const winner = checkWinner(calcDolphins, calcKoalas);
// console.log(winner);
