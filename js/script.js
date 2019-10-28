// УРОК 3. Динамическая типизация. Все об условиях
// КОНСПЕКТ УРОКА

// 'use strict';

// let a = 5;
// console.log('a: ', a);
// let question = confirm('Тебе есть 18 лет?');
// let question2 = prompt('Сколько тебе лет?');
// console.log(question);
// console.log(question2);
// console.log(typeof question2);

// console.log(5	+	'5');
// console.log(typeof (5 + '5'));		
// console.log(5	-	'5');
// console.log(5	*	'5');
// console.log(5	/	'5');
// console.log('js'	/	'5');
// console.log(5 == '5');
// console.log(!!5);
// console.log(!!'js');

// console.log(String([1,2,3]));
// console.log(typeof (10..toString()));

// console.log(typeof Number('33'));
// console.log(typeof +'10');
// let n = '10';
// n *= 1;
// console.log(typeof n);

// console.log(parseInt('10ff px', 16)); 
// console.log(parseFloat('10.5 px'));

/*

Если (жарко) {
  одеваем шорты; одеваем футболку;
} иначе {
  одеваем джинсы;
  одеваем кофту;
}
 
*/

// if (true) console.log('Истина');
// if (false) console.log('Этот код не выполнится');

// let n = 4;
// if (n === 5){
// console.log('команда 1');
// } else if(n === 4){
// console.log('команда 2'); 
// } else {
// console.log('команда 3'); 
// }

// switch (n){
//   case 3:
//     console.log(3);
//     break;
//   case 4:
//     console.log(4);
//     break;
//   case 5:
//     console.log(4);
//     break;
//   case 6:
//     console.log(6);
//     break;
//   default:
//     console.log('не верно');
// }

// let result = n === 5 ? 'верно' : 'неверно'; 
// console.log('result: ',	result);

// Полезная информация
// Для проверки пользовательского ввода на число можно использовать код:
// !isNaN(parseFloat(n)) && isFinite(n); - где n - это строка для проверки. Это выражение вернет true если n - число или false, если n не число

// Домашняя работа:

'use strict';