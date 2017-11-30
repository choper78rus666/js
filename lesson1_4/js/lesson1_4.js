/*
Задача 1
Задать высоту, длину и ширину прямоугольного параллелепипеда и найти его площадь.
Узнайте, что больше: ширина или высота и выведите информацию об этом в консоль.
*/

let x = 10; //длинна
let y = 35; //ширина
let z = 6;  //высота
let s;      //площадь поверхности прямоугольного параллелепипеда
s = 2*((x * y) + (x * z) + (y * z)); // ! СКОБКИ в умножении не обязательны, сначало переменные умножаются , а потом складываются.

console.log("Площадь поверхности прямоугольного параллелепипеда = " + s); // можно внутри поставить вместо + запятую, но так интересней ))

/*
Задача 2
На садовом участке площадью 10 соток , разбили грядки 15 на 25 метров. Сколько м2 осталось незанято?
*/

s = 1000; //площадь участка 10 соток = 1000 метров
x = 25; // длинна грядок
y = 15; // ширина грядок

let sMinimum = s%(x * y);

console.log("Осталось не занято " + sMinimum + "м2");

/*
Задача 3
Найдите площадь овального кольца, полученного из овала площадью 15 дм2 вырезанием овала площадью 600 см2.
*/

let s1 = 15; // площадь первого овала в дм2
let s2 = 600; // площадь второго овала в см

sMinimum = s2 - 15 * 100;

console.log("Площадь овального кольца равна " + sMinimum + "cм2");

/*
Задача 4
Задать 2 целочисленные переменные,
если остаток от деления меньше или равен 4 ->
вывести в консоль их сумму,
иначе вывести разницу
*/

x = 43;
y = 35;

let resault = x%y <= 4 ? "Cумма чисел = " + (x + y) : x > y ? x + " больше " + y + " на " + (x - y) : x + " меньше " + y + " на " + (y - x);

console.log(resault);

// ЭТО БЫЛО ООООЧЕНЬ ПРОСТО, НО ВЕСЕЛО =))

