'use strict';

// let money, time;

// function getBuget() {
//     money = +prompt("Какой ваш бюджет на месяц?", "");

//     while (isNaN(money) || money == "" || money == null) {
//         money = +prompt("Какой ваш бюджет на месяц?", "");
//     }

//     time = prompt("Введите дату в формате ДД/ММ/ГГ", "");
// }
// getBuget();

// let AppData = {
//     buget: money,
//     time_data: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: true,
//     chooseExpenses: function () {
//         for (let i = 0; i < 2; i++) {
//             let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//                 b = prompt("Во сколько обойдется?", "");
//             if ((typeof (a)) === 'string' && (typeof (a)) != null && b != '' && a.length < 20 &&
//                 (typeof (b)) != null && a != '' && b.length < 10) {
//                 console.log("done");
//                 AppData.expenses[a] = b;
//             } else {
//                 i = i - 1;
//             }
//         }
//     },
//     detectDayBudget: function () {
//         AppData.MoneyperDay = (AppData.buget / 30).toFixed();
//         alert("Ежедневный бюджет" + AppData.MoneyperDay);
//     },
//     detectLevel: function () {
//         if (AppData.MoneyperDay <= 100) {
//             console.log("Ваш бюджет маленький");
//         } else if (AppData.MoneyperDay >= 100 && AppData.MoneyperDay <= 1000) {
//             console.log("Ваш бюджет средний");
//         } else if (AppData.MoneyperDay >= 1000) {
//             console.log("Ваш бюджет большой");
//         } else {
//             console.log("Что-то пошло не так");
//         }
//     },
//     checkSavings: function () {
//         if (AppData.savings == true) {
//             let save = +prompt("Какова сумма накоплений?"),
//                 percent = +prompt("Какой процент?");

//             AppData.monthIncome = (save * percent / 100 / 12).toFixed(1);
//             alert("Доход в месяц с вашего депозита: " + AppData.monthIncome);
//         }
//     },
//     chooseOptExpenses: function () {
//         for (let i = 1; i < 4; i++) {
//             let a = prompt("Статья необязательных расходов?", "");
//             if ((typeof (a)) === 'string' && typeof (a) != null && a.length < 20) {
//                 AppData.optionalExpenses[i] = " :" + a;
//             } else {
//                 i = i - 1;
//             }
//         }
//     },
//     choseIncome: function () {
//         for (let i = 0; i < 1; i++) {
//             let items = prompt('Что принесет дополнительный доход (перечислите через запятую)', '');
//             if (items != '' && typeof (items) === 'string' && items != null) {
//                 AppData.income = items.split(', ');
//                 let itemsAdd = prompt("Может что-то еще добавьте?");
//                 if (itemsAdd === null || itemsAdd === '') {} else {
//                     AppData.income.push(itemsAdd);
//                     AppData.income.sort();
//                 }
//             } else {
//                 i = i - 1;
//             }
//         }
//         let arrIncome = AppData.income;
//         let message = [];
//         arrIncome.forEach(function (key, i, arr) {
//             if (i == 0) {
//                 message = 'Способы доп. заработка: \n';
//             }
//             message = message + `${++i} : ${key} \n`;
//         });
//         alert(message);
//     }
// };
// console.log("Наша программа включает в себя данные: ");
// for (let variable in AppData) {
//     console.log(`${variable} : ${AppData[variable]}`)
// }

    

for (let i = 0; i <355; i++) {
let div = document.createElement('button');
document.body.appendChild(div).style.backgroundColor = `rgb(${i}, 100 , 100)`; 
};


// for (let i = 0; i < 10; i++) {
//     div.classList.add('black');
//     wrapper.appendChild(div);
// }


// console.log(div);

// document.body.appendChild(div);
// div.innerHTML = '<h1>Hello</h1>';

// for (let i=0; i<3; i++) {
//     document.body.removeChild(circle[i]);
// }
// document.body.removeChild(circle[1]);

// document.body.replaceChild(btn[1], circle[2]);
// console.log(btn[3]);
// console.log(circle[0]);
