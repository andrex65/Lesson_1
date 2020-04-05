'use strict';

let money = +prompt("Какой ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате ДД/ММ/ГГ", "");

let AppData = {
    buget: money,
    time_data: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && b != '' && a.length < 20
                                  && (typeof(b)) != null && a != '' && b.length < 10) {
        console.log("done");
        AppData.expenses[a] = b;
    }       
}

// let i=0;

// while ( i < 2 ) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && b != '' && a.length < 20
//                                   && (typeof(b)) != null && a != '' && b.length < 10) {
//         console.log("done");
//         AppData.expenses[a] = b;
//     }    
//     i++;
// }

// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && b != '' && a.length < 20
//                                   && (typeof(b)) != null && a != '' && b.length < 10) {
//         console.log("done");
//         AppData.expenses[a] = b;
//     }    
//     i++;
// } while ( i < 2 );

AppData.MoneyperDay = AppData.buget / 30;

alert("Ежедневный бюджет" + AppData.MoneyperDay);

       if ( AppData.MoneyperDay <= 100 ) {
    console.log("Ваш бюджет маленький");
} else if ( AppData.MoneyperDay >= 100 && AppData.MoneyperDay <= 1000 ) {
    console.log("Ваш бюджет средний");
} else if ( AppData.MoneyperDay >= 1000 ) {
    console.log("Ваш бюджет большой");
} else {
    console.log("Что-то пошло не так");
}
    
