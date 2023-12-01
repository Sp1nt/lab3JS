

function FindMin(){
    let a = parseFloat(prompt("Введите 1е число: "));
    let b = parseFloat(prompt("Введите 2е число: "));

    alert("Минимальное число: " + Math.min(a, b));
}

function Exponentiation(){
    let a = parseFloat(prompt("Введите число: "));
    let b = prompt("Введите степень: ");

    alert("Число возведенное в степень: " + Math.pow(a, b));
}

function Calculator() {
    let a = parseFloat(prompt("Введите первое число: "));
    let operator = prompt("Введите оператор (+, -, *, /): ");
    let b = parseFloat(prompt("Введите второе число: "));
    let result;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0) {
                alert("Деление на ноль невозможно");
                return 0;
            } else {
                result = a / b;
            }
            break;
        default:
            alert("Неверный оператор");
            return;
    }

    alert(`Результат: ${a} ${operator} ${b} = ${result}`);
}


function Prime(){
    let number = prompt("Введите число для проверки на простое:");

    let isFlag = true;

    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i == 0) {
            isFlag = false;
            break;
        }
    }

    if (isFlag) {
        alert(`${number} - простое число.`);
    } else {
        alert(`${number} - не простое число.`);
    }
}

function multiplicationTable() {
    let a = parseInt(prompt('Введите число для таблицы умножения: '));

    let result = '';

    if (a < 2 || a > 9) {
        alert('Ошибка! Можно вводить только числа от 2 до 9.');
    } else {
        for (let i = 2; i <= 9; i++) {
            result += `${a} * ${i} = ${a * i} \n`;
        }
    }

    alert(result);
}


function remainder(){

    let a = parseFloat(prompt("Введите 1е число: "));
    let b = parseFloat(prompt("Введите 2е число: "));
    let num = 0;
    if (b === 0){
        alert('Делить на ноль нельзя!');
        return false;
    }

  while (a >= b) {
    num = a -= b;
  }

  alert(`Остаток от деления равен ${num}.`);
}
    
function sum(){

    let n = 0;
    do{
        n = parseInt(prompt('Введите количество чисел для прибавления(от 1  до 5): '));
    } while(isNaN(n) || n < 1|| n > 5);

    let result = 0;
    for(let i = 0; i < n; i++){
    let numbers = 0;
        do{
            numbers = parseInt(prompt(`Введите ${i + 1}-е число:`));
        } while(isNaN(numbers));
        result += numbers;
    }
  
    alert(result);
}

function mostOfThem() {
    let n = 0;
    do {
        n = parseInt(prompt('Введите количество чисел для поиска (от 1 до 5): '));
    } while (isNaN(n) || n < 1 || n > 5);

    let data = [];

    for (let i = 0; i < n; i++) {
        let number = 0;
        do {
            number = parseInt(prompt(`Введите ${i + 1}-е число:`));
        } while (isNaN(number));

        data.push(number);
    }

    alert("Максимальное число: " + Math.max(...data));
}

function displayInRange(){

    let start = parseInt(prompt('Введите начальный диапазон: '));
    let end = parseInt(prompt('Введите конечный диапазон:'));
    let isFlag = confirm('Какие числа выводить? (Ок - четные, Отмена - нечетные)');

    let result = '';

    if (start > end) {
        alert('Ошибка! Начальное значение должно быть меньше чем конечное!.');
        return false;
    }

    for (let i = start; i <= end; i++) {
        if ((i % 2 == 0 && isFlag) || (i % 2 != 0 && !isFlag)) {
            result += i + '\n';
        }
    }
    alert('Результат:\n' + result);
}

function isLeapYear(year) {

    return (year % 4 === 0 && year % 100 != 0) || (year % 400 == 0);
}

function nextDayDate() {
    let day = parseInt(prompt('Введите число:'));
    let month = parseInt(prompt('Введите месяц:'));
    let year = parseInt(prompt('Введите год:'));

    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (isLeapYear(year)) {
        daysInMonth[1] = 29;
    }
    
    if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1]) {
        alert('Некорректная дата');
        return;
    }

    day++;

    if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;

        if (month > 12) {
            month = 1;
            year++;
        }
    }

    //Форматирование
    let resultDate = `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;

    alert(resultDate);
}

