'use strict';

let money = prompt("Какой ваш бюджет на месяц?", "5000");
let time = prompt("Введите дату в формате ДД/ММ/ГГ", "15/04/20");
let cont1 = prompt("Введите обязательную статью расходов в этом месяце", "еда");
let summ1 = prompt("Во сколько обойдется?", "2000");
let cont2 = prompt("Введите обязательную статью расходов в этом месяце", "жилье");
let summ2 = prompt("Во сколько обойдется?", "3000");

let AppData = {
    buget: money,
    time_data: time,
    expenses: {
        Q1: cont1 + ' : ' + summ1,
        Q2: cont2 + ' : ' + summ2
    },
    optionalExpenses: null,
    income: [],
    savings: false
}

let money_day = money / 30;
let summ1_day = summ1 / 30;
let summ2_day = summ2 / 30;

alert("Ваш бюджет на день:" + "\r\n" + 
"Общий: " + money_day.toFixed(0) + "$" + "\r\n" +
"Из которого: " + "\r\n" +
cont1 + " : " + summ1_day.toFixed(0) + "$" + "\r\n" +
cont2 + " : " + summ2_day.toFixed(0) + "$"
);

// console.log(AppData.expenses.Q1);
// console.log(AppData.expenses.Q2);
// console.log(money);
// console.log(time);
