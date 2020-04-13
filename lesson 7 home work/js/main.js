let v = '-value',
    rightBlocks = document.querySelectorAll(`.budget${v}, .daybudget${v}, .level${v}, 
                                             .expenses${v}, .optionalexpenses${v}, .income${v},
                                             .monthsavings${v}, .yearsavings${v}`),
    inputExpenses = document.getElementsByClassName('expenses-item'),
    buttons = document.getElementsByTagName('button'),
    inputOptionalExpences = document.querySelectorAll('.optionalexpenses-item'),
    inputChoseIncome = document.querySelector('.choose-income'),
    checkboxSavings = document.querySelector('#savings'),
    summ = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

for (i = 0; i < 8; i++) {console.log(rightBlocks[i]);}
for (i =0; i < inputExpenses.length; i++) {console.log(inputExpenses[i]);}
for (i =0; i < buttons.length; i++) {console.log(buttons[i]);}
for (i =0; i < inputOptionalExpences.length; i++) {console.log(inputOptionalExpences[i]);}
console.log(inputChoseIncome);
console.log(checkboxSavings);
console.log(summ);
console.log(percent);
console.log(yearValue);
console.log(monthValue);
console.log(dayValue);

// console.log(rightBlocks.length);