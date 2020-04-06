'use strict';

let money, time;

function getBuget() {
    money = +prompt("Какой ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Какой ваш бюджет на месяц?", "");
    }

    time = prompt("Введите дату в формате ДД/ММ/ГГ", "");
}
getBuget();

let AppData = {
    buget: money,
    time_data: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
        if ((typeof (a)) === 'string' && (typeof (a)) != null && b != '' && a.length < 20 &&
            (typeof (b)) != null && a != '' && b.length < 10) {
            console.log("done");
            AppData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let a = prompt("Статья необязательных расходов?", "");
        if ((typeof (a)) === 'string' && typeof (a) != null && a.length < 20) {
            AppData.optionalExpenses[i] = " :" + a;
        } else {
            i = i - 1;
        }
    }
}
chooseOptExpenses();

function detectDayBudget() {
    AppData.MoneyperDay = (AppData.buget / 30).toFixed();
    alert("Ежедневный бюджет" + AppData.MoneyperDay);
}
detectDayBudget();

function detectLevel() {
    if (AppData.MoneyperDay <= 100) {
        console.log("Ваш бюджет маленький");
    } else if (AppData.MoneyperDay >= 100 && AppData.MoneyperDay <= 1000) {
        console.log("Ваш бюджет средний");
    } else if (AppData.MoneyperDay >= 1000) {
        console.log("Ваш бюджет большой");
    } else {
        console.log("Что-то пошло не так");
    }
}
detectLevel();

function checkSavings() {
    if (AppData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Какой процент?");

        AppData.monthIncome = (save * percent / 100 / 12).toFixed(1);
        alert("Доход в месяц с вашего депозита: " + AppData.monthIncome);
    }
}
checkSavings();