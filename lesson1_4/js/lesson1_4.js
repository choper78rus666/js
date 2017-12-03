console.log("%c%s","color:green;","********** Домашнее задание №1 **********");
console.log("%c%s","color:green;","Задача 1");
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



console.log("%c%s","color:green;","Задача 2");
/*
Задача 2
На садовом участке площадью 10 соток , разбили грядки 15 на 25 метров. Сколько м2 осталось незанято?
*/

s = 1000; //площадь участка 10 соток = 1000 метров
x = 25; // длинна грядок
y = 15; // ширина грядок
let col = 2;// количество грядок
let scol = x*y*col; // общая площадь грядок

let sMinimum = s > scol ? "Осталось не занято " + s%scol + "м2" : s < scol ? "Не достаточно места для грядок, необходимо уменьшить площадь грядок на " + scol%s + "м2": "Площадь грядок равна площади участка";

console.log(sMinimum);



console.log("%c%s","color:green;","Задача 3");
/*
Задача 3
Найдите площадь овального кольца, полученного из овала площадью 15 дм2 вырезанием овала площадью 600 см2.
*/

let s1 = 15; // площадь первого овала в дм2
let s2 = 600; // площадь второго овала в см

s1 *= 100; // перевели площадь в сантиметры
sMinimum = s1%s2;

console.log("Площадь овального кольца равна " + sMinimum + "cм2");

console.log("%c%s","color:green;","Задача 4");
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




console.log("%c%s","color:green;","********** Домашнее задание №2 **********");
//Продолжаем **** Домашнее задание №2 ****
console.log("%c%s","color:green;","Задача 1");
/*
Задача 1 (while) 
Задать количество тарелок и количество моющего средства. 
Моющее средство расходуется из расчета 0,5 на одну тарелку. 
В цикле выводить сколько моющего средства осталось после мытья каждой тарелки 
В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.
*/

//задать кол-во посуды и моющего средства
var tar = 5; // количество тарелок
var fairy = 35; // количество моющего средства

//0.5 fairy - 1 tar
//while выводим остаток средства
while (tar && fairy) {
    tar--;
    fairy -= .5;
    console.log("Осталось " + fairy + "л. моющего средства");
}

resault = !tar ? "Грязных тарелок больше нет " : "Осталось " + tar + "тарелок ";
resault += !fairy ? "Моющее средство закончилось" : "Осталось " + fairy + "л. моющего средства";

console.log(resault);



console.log("%c%s","color:green;","Задача 2");
/*
Задача 2 
Создать таблицу соответствия между весом в фунтах и весом в килограммах для дначений от 1 до 10
*/

var table = [];
let funt = 1;
while (funt <= 10) {
    table[funt] = funt * 0.4536;
    console.log(funt + " lb = " + table[funt] + "kg");
    funt++;
}



console.log("%c%s","color:green;","Задача 3");
/*
Задание 3
Посмотреть, как работают методы для работы с массивами: join, slice, indexOf/lastIndexOf, concat.
Разобрать по 1му примену на каждый из них. В субботу обсудим
*/

var testArr = ['one','two','three','four','two'];

//Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
//Синтаксис arr.join() arr.join(separator)
console.log("+++ Метод .join(separator) +++");
console.log(testArr.join());
console.log(testArr.join(' + '));
console.log(testArr.join(''));

//Метод slice() возвращает новый массив, содержащий копию части исходного массива.
//Синтаксис arr.slice([begin[, end]])
console.log("+++ Метод .slice([begin[, end]] +++");
console.log(testArr.slice());
console.log(testArr.slice(1,3));
console.log(testArr.slice(-2,-1));

//Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
//Синтаксис arr.indexOf(searchElement[, fromIndex = 0])
console.log("+++ Метод .indexOf(searchElement[, fromIndex = 0] +++");
console.log(testArr.indexOf());
console.log(testArr.indexOf('one',4));
console.log(testArr.indexOf('two',0));
console.log(testArr.indexOf('four',-4));

//Метод lastIndexOf() возвращает последний индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет. Массив просматривается от конца к началу, начиная с индекса fromIndex
//Синтаксис arr.lastIndexOf(searchElement[, fromIndex = arr.length])
console.log("+++ Метод .lastIndexOf(searchElement[, fromIndex = arr.length] +++");
console.log(testArr.lastIndexOf());
console.log(testArr.lastIndexOf('two'));
console.log(testArr.lastIndexOf('two',4));
console.log(testArr.lastIndexOf('three',1));
console.log(testArr.lastIndexOf('three',-2));

console.log("+++ Метод .concat(value1[, value2[, ...[, valueN]]] +++");
//Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
//Синтаксис var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
console.log(testArr.concat(testArr));
console.log(testArr.concat(1,2,"six"));
console.log(testArr.concat(1,2,"six",["ten","eleven"]));



console.log("%c%s","color:green;","Задача 4");
/*
Задача 4
Есть три вершины. Координаты вершин (x1, x2), (y1, y2), (z1, z2) заданы как целые числа. Нужно определить - является ли треугольник с заданными координатами прямоугольным.
В решении использовать только математические и логические операторы. Результат в консоль.
Обязательное условие: все вычисления производить только с целыми числами. Любой переход в дробные числа запрещен!
*/

x = [1,4]; // вершина x по шкале[x,y]
y = [1,2]; // вершина y по шкале[x,y]
z = [3,4]; // вершина z по шкале[x,y]

// рассчитаем длинну сторон по формуле (X2-X1)²+(Y2-Y1)², потом определим угол применив теорему Пифагора

let a = (x[0]-y[0])*(x[0]-y[0]) + (x[1]-y[1])*(x[1]-y[1]);
let b = (x[0]-z[0])*(x[0]-z[0]) + (x[1]-z[1])*(x[1]-z[1]);
let c = (y[0]-z[0])*(y[0]-z[0]) + (y[1]-z[1])*(y[1]-z[1]);
console.log("Длина сторон треугольника в квадрате: a = ", a, " b = ", b, " c = ", c);

if ((a > b && a > c && a === b+c) || (b > a && b > c && b === a+c) || (c > b && c > a && c === b+a)){
    console.log("Треугольник имеет прямой угол");
} else {
    console.log("У треугольника нет прямых углов");
}



console.log("%c%s","color:green;","Задача 5");
/*
Задача 5
Создать массив из чисел. Выполнить сортировку массива по возрастанию методом пузырька. Запрещено использовать стандартные методы.
*/

var arrNumber = [2,5,6,7,8,9,2,3,4,56,234,123,446,212,2143,544,212,1233,231,532,96,344,133];
var i, i2;
var test;
for (i = arrNumber.length - 1; i > 1; i--) {
    test = arrNumber[i];
    
    for (i2 = i; i2 > 1; i2--) {
        
        if (test < arrNumber[i2-1]) {
            arrNumber[i] = arrNumber[i2-1];
            arrNumber[i2-1] = test;
            test = arrNumber[i];
        }
    }
}

console.log(arrNumber);

console.log("%c%s","color:green;","********** Домашнее задание №3 **********");
//Продолжаем **** Домашнее задание №3 ****

(function() {
    'use_strict';
    
console.log("%c%s","color:green;","Задача 1");

/*
1.Написать функцию calc(a, b, operator), которая в зависимости от оператора будет складывать, умножать, вычитать или делить. 
Не забывайте про проверку типа введенных данных, и про деление на 0 (на 0 делить нельзя)
*/
    var a = 25;
    var b = 20;
    var operator = "Вася"; // Ввод оператора, у каждого своя функция в вычислениях
    var allowOperator = ['Вася','Федя','Маша','Катя']; // Операторы имеющие доступ
    
    function calc(a, b, operator) {
        if (!checkOperator(operator)) return "Введите другие данные";
            if (typeof a === "number" && typeof b === "number") {
                if (operator === allowOperator[0]) {
                    return a + b;
                } else if  (operator === allowOperator[1]) {
                    return a - b;
                } else if  (operator === allowOperator[2]) {
                    return a * b;
                } else if  (operator === allowOperator[3] && b) {
                    return a / b;
                } else {
                    return "На ноль делить нельзя";
                }
            } else {
                return "Введите число";
            }
    }
    
    function checkOperator(check) {
            if (allowOperator.indexOf(check) > -1) {
                return true;
            }
        console.log("У данного оператора нет доступа к вычислениям!")
        return false;
    }
    
    console.log(calc(a,b,operator));
    
console.log("%c%s","color:green;","Задача 2");
/*
2. Дано целое число n. Вычислите сумму его цифр. Использовать только рекурсию.
*/
    var n = 5567;
    var b = 0;
    function recurs(n) {
        if (n%10) {
            b += n%10;
            n -=n%10;
            return recurs(n/10);
            } else {
                return n+b;
            }
        } 
    
    console.log(recurs(n));
    
console.log("%c%s","color:green;","Задача 3");
/*
3. (на замыкание)
Написать функцию, которая возвращает новую функцию, которая увеличивает/уменьшает переданное число на указанный при карировании шаг.
*/
    
}())
