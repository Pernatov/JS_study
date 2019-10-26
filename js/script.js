// УРОК 2. Типы переменных. КОНСПЕКТ УРОКА
// let myVar;

// myVar = 10;
// console.log('Тип данных переменной: ' + typeof myVar);
// myVar = 'Hello world';
// console.log('Тип данных переменной: ' + typeof myVar);
// myVar = true;
// console.log('Тип данных переменной: ' + typeof myVar);
// myVar = null;
// console.log('Тип данных переменной: ' + typeof myVar);
// myVar = undefined;
// console.log('Тип данных переменной: ' + typeof myVar);
// myVar = Symbol();
// console.log('Тип данных переменной: ' + typeof myVar);
// myVar = {};
// console.log('Тип данных переменной: ' + typeof myVar);

// console.log('null: ', null);

// let maVar;
// console.log('myVar: ', myVar);

// let obj = {};
// console.log('obj.prop: ', obj.prop);

// let arr = [1,2,3];
// console.log('arr: ', arr);

// let myTrue = true;
// let myFalse = false;

// console.log('myTrue: ', myTrue);
// console.log('myFalse: ', myFalse);

// console.log(2 == 2);
// console.log(2 === 3);

// console.log(Boolean(5));
// console.log(Boolean('Hello'));
// console.log(Boolean({}));
// console.log(Boolean([]));
// console.log(Boolean(function(){}));

// let myTrue = true; 
// let myFalse = false;

// console.log(Boolean(0)); 
// console.log(Boolean(undefined)); 
// console.log(Boolean(null)); 
// console.log(Boolean(NaN)); 
// console.log(Boolean(''));

// let myTrue = true; 
// let myFalse = false;

// ||- или && - и ! - не

// console.log(true || true);
// console.log(true || false);
// console.log(false || false);

// console.log(true && true);
// console.log(true && false);
// console.log(false && false);

// console.log(!true);
// console.log(!false);

// console.log(50); 
// console.log(8.5);
// console.log(.5); 
// console.log(5e6); 
// console.log(0B1111); 
// console.log(0011); 
// console.log(0X22aacc); 
// console.log(Infinity); 
// console.log(NaN);

// console.log(typeof 50); 
// console.log(typeof 8.5);
// console.log(typeof .5); 
// console.log(typeof 5e6); 
// console.log(typeof 0B1111); 
// console.log(typeof 0011); 
// console.log(typeof 0X22aacc); 
// console.log(typeof Infinity); 
// console.log(typeof NaN);

// console.log(3 + 4); 
// console.log(4 - 3); 
// console.log(2 * 3); 
// console.log(9 / 2); 
// console.log(9 % 2);

// let n = 15; 
// console.log('n: ', n);
// // n = n + 3;
// n += 3;
// console.log('n: ', n);
// // n = n - 6;
// n -= 6;
// console.log('n: ', n);
// // n = n / 3;
// n /= 3;
// console.log('n: ', n);

// console.log(3 > 2); 
// console.log(3 < 2); 
// console.log(5 >= 3); 
// console.log(10 <= 5); 
// console.log(5 === 5); 
// console.log(5 !== 6); 
// console.log(5 == '5');

// console.log(Math.sqrt(25));
// console.log(Math.pow(5, 3));
// Найти новый оператор возведения в степень (ДЗ)
// console.log(Number.isInteger(5));
// console.log(Number.isInteger(5.5));

// let myString = 'Hello world!'; 
// let myStr = "\t Hello \"my\" \n friends!";
// console.log('Hello "my" friends!');
// console.log('myStr: ', myStr);
// console.log('Hello' + ' ' + 'world');
// console.log(5 + '10');
// console.log(typeof (5 + '10'));
// let str = 'Hello my friends!'; 
// console.log(myString + ' ' + str);

// let str = 'Hello my Friends!';
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.charAt(0));
// console.log(str.charAt(1));
// console.log(str.charAt(2));
// console.log(str.charAt(3));
// console.log(str.charAt(4));
// console.log(str[0]);

// console.log(str.substring(6)); 
// console.log(str.substring(9, 15)); 
// console.log(str.slice(6)); 
// console.log(str.slice(-8)); 
// console.log(str.substr(6, 9));

// console.log(str.indexOf('Friends'));
// console.log(str.indexOf('d'));
// console.log(str.indexOf('a'));

// console.log(str.replace('my Friends', 'World'));

// console.log(str.split(' '));

// let str = 'apple, kiwi, orange';
// console.log(str.split(', '));

// ДОМАШНЕЕ ЗАДАНИЕ:
// 1) Следующим переменным присвоить значения: 
let money = 60003; // любое число “Доход за месяц”
let income = 'получаю от фриланса 10000'; // строка с дополнительными доходом (например, фриланс или такси)
let addExpenses = ' За то 2 доллара, за сё 10 юаней, За это 7892 дней принудительных работ, на поездку в город Москва ушло 274 гривны, сумма долга Алексею - 32000 ДОЛЛАРОВ'; // строка с перечислением дополнительных расходов через запятую (минимум 3 значения)
let deposit = true; // любое булевое значение
let mission = 3000000; // любое число (Какую сумму хотите накопить)
let period = 4; // число от 1 до 12
// 2) Используя методы и свойства:
// - Вывести в консоль тип данных значений переменных money, income, deposit;
console.log('Тип данных переменной \"money\": \t' + typeof money);
console.log('Тип данных переменной \"income\": \t' + typeof income);
console.log('Тип данных переменной \"deposit\": \t' + typeof deposit);
// - Вывести в консоль длину строки income
console.log('Длина строки \"income\": \t' + income.length);
//  - Вывести в консоль “Период (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”
console.log('Сообщение: \t' + 'Период' + ' ' + period + ' ' + 'месяцев');
console.log('Сообщение: \t' + 'Цель заработать' + ' ' + mission + ' ' + 'юаней');
//  - Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log('нижний регистр: \t' + addExpenses.toLowerCase() );
console.log(addExpenses.split(', '));
//   - Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30), вывести в консоль результат и остаток        от деления
let budgetDay;
budgetDay = (money/30);
console.log('budgetDay: ', budgetDay);
console.log( money % 30);

// 3) Проверить, чтобы все работало без ошибок в консоли
// 4) Добавить папку или ветку со вторым уроком в свой репозиторий на GitHub