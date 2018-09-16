alert("Look console");

//Задание 1. 5 варианов записи строки It`s beautiful day. I like "free day".

//1й вариант
var first = "it`s ";
var second = "beautiful ";
var third = "day. ";
var fouth = "I ";
var fifth = "like ";
var sixth=`"free day".`
console.log(first+second+third+fouth+fifth+sixth);

//2й вариант
console.log("It`s beautiful day. I like \"free day\".");

//3й вариант

var sentence = "It`s beautiful day. I like \"free day\".";
console.log(sentence);

//4й вариант
var a = '"';
console.log("It`s beautiful day. I like " +a+"free day"+a+".");

//5й вариант
var part1 = "It`s beautiful day. I like ";
var part2 = "\"free day\".";
console.log(part1+part2);
//6

console.log('It`s beautiful day. I like \u0022free day\u0022.');


//Задание 2. Написать правильное умножение двух дробных чисел.
var x = 2.12;
var y = 3.22;
var multip1 = x * y;
var second = x * 100 * y * 100 / 10000;
var result = 6.8264;
console.log(multip1);               //произведение без преобразование
console.log(+multip1.toFixed(4));   //10 - количество знаков после запятой, до которых происходит округление.
console.log(x * 100 * y * 100 / 10000);
console.log(second == result); //проверка

//Задание 3. Исправить "string"+2=NaN
console.log(+ " string " + 2);      // + преобразует строку в число, если возможно
