// Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице

// 1) Создать переменную num со значением 266219
let num;
console.log('Создана переменная num: ', num);
num = 266219;
num = String(num);
console.log('Присвоено значение num: ', num);
let arr;
console.log('Создана переменная arr: ', arr);
arr = num.split('');
console.log('Присвоено значение arr = num.split: ', arr);
let one = (num[0]);
console.log('one= num[0]: ', one);
let two = (num[1]);
console.log('two= num[1]: ', two);
let three = (num[2]);
console.log('three= num[2]: ', three);
let four = (num[3]);
console.log('four= num[3]: ', four);
let five = (num[4]);
console.log('five= num[4]: ', five);
let six = (num[5]);
console.log('six= num[5]: ', six);
let result;
console.log('Создана переменная result: ', result);
result = (one*two*three*four*five*six);
console.log('result = one*two*three*four*five*six: ', result);

//2) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
let cubed = (result**3);
console.log('возведение result в сепень 3, cubed: ', cubed);
//Вывести на экран первые 2 цифры полученного числа
number = String(cubed);
console.log('Массив из cubed, number: ' + number.split(''));
console.log('первое число number: ' + number[0] + ' второе число number: ' + number[1]);