// однострочный комментарий

/*
    многострочный коммент
*/

//инструкция
'use strict';
console.log("Lesson 1", "info"); // отладка
var varName; // объявление переменной
//Переменные могут быть из букв и цифр, но цифра не может быть в начале переменной
// $
// _

varName = 45;
varName = "new val"; //переопределение переменной
console.log(window);
let var1, var2, var3;
let varName2 = "value";
console.log(window, varName2);

// Типы данных простые и составные
// Простые
let str = "Строковой тип данных 'строка в кавычках' данных";
str = "Строковой тип данных \"строка в кавычках\" данных";
// перенос строки \n

str = '56'; // тоже строка

console.log("str: ", str);

//логический тип
let boo = true;
let boo2 = false;
//к false преобразуется 0
// пустая строка "" или " "
// null и undefined

console.log(0==false);

// Числа
// integer float
// infinity бесконечность
//isNaN(someVar);
//Функция определяет на не число, если число то вернет false
//
console.log("56", isNaN(56));
console.log("56", isNaN('56'));
console.log("56", isNaN('wewew'));
console.log("56", isNaN(false));
console.log("56", isNaN(true));
console.log("56", isNaN(""));

//null
//undefined

let nullVar = null; //не 0 это пустая ячейка
let undefVar = undefined; // не определенное значение
let someNum = 78;

//typeof имя переменной;
//typeof str; определяет тип переменной
console.log("typeof str", typeof str);
console.log("typeof nullVar", typeof nullVar);
console.log("typeof someNum", typeof someNum);

// Составные