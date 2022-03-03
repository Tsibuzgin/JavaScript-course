//Запрос первого числа
let number1 = Number(prompt('Number1?'));
//Второго
let number2 = Number(prompt('Number2?'));
//Запрос арифметической операции
let operation = (prompt('Operation?'));
//Алгоритм работы
if (operation==="+") {
    alert('Результат: ' + number1 + operation + number2 + ' = ' + (number1 + number2));
} else if (operation==="-") {
    alert('Результат: ' + number1 + operation + number2 + ' = ' + (number1 - number2));
} else if (operation==="*") {
    alert('Результат: ' + number1 + operation + number2 + ' = ' + (number1*number2));
} else if (operation==="/") {
    if (number2===0) {
        alert('Error!')
    } else
    alert('Результат: ' + number1 + operation + number2 + ' = ' + (number1/number2));
}

 