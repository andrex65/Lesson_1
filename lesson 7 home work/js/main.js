let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpencesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

sumValue.addEventListener('input', function() {
    if (AppData.savings == true) {
        let sum = +sumValue.value,
        percent = +percentValue.value;

        AppData.monthIncome = sum/100/12*percent;
        AppData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = AppData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = AppData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (AppData.savings == true) {
        let sum = +sumValue.value,
        percent = +percentValue.value;

        AppData.monthIncome = sum/100/12*percent;
        AppData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = AppData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = AppData.yearIncome.toFixed(1); 
    }
});

checkSavings.addEventListener('click', function() {
    if (AppData.savings == true) {
        AppData.savings = false;
    } else {
        AppData.savings = true;
    }
    console.log(AppData.savings)
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;    
        AppData.income = items.split(', ');
        incomeValue.textContent = AppData.income;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpencesItem.length; i++) {
        let opt = optionalExpencesItem[i].value;
        AppData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += AppData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function () {
    if (AppData.buget != undefined) {
        AppData.MoneyperDay = (AppData.buget / 30).toFixed();
        dayBudgetValue.textContent = AppData.MoneyperDay;

        if (AppData.MoneyperDay <= 100) {
            levelValue.textContent = 'Ваш бюджет маленький';
        } else if (AppData.MoneyperDay >= 100 && AppData.MoneyperDay <= 1000) {
            levelValue.textContent = 'Ваш бюджет средний';
        } else if (AppData.MoneyperDay >= 1000) {
            levelValue.textContent = 'Ваш бюджет большой';
        } else {
            levelValue.textContent = 'Что-то пошло не так';
        }
    } else {
        dayBudgetValue.textContent = 'Для начала введите бюджет';
    }
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        if ((typeof (a)) === 'string' && (typeof (a)) != null && b != '' && a.length < 20 &&
            (typeof (b)) != null && a != '' && b.length < 20) {
            console.log("done");
            AppData.expenses[a] = b;
            sum += +b;

        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Какой ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    };
    AppData.buget = money;
    AppData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

let AppData = {
    buget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};