(function() {
    'use strict';

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

    var a = (x[0]-y[0])*(x[0]-y[0]) + (x[1]-y[1])*(x[1]-y[1]);
    var b = (x[0]-z[0])*(x[0]-z[0]) + (x[1]-z[1])*(x[1]-z[1]);
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
console.log("%c%s","color:green;","Задача 1");

/*
1.Написать функцию calc(a, b, operator), которая в зависимости от оператора будет складывать, умножать, вычитать или делить. 
Не забывайте про проверку типа введенных данных, и про деление на 0 (на 0 делить нельзя)
*/
    var a = 44;
    var b = 20;
    var operator = "+"; // Ввод оператора, у каждого своя функция в вычислениях
    var allowOperator = ['+','-','*','/']; // Операторы имеющие доступ
    
    function calc(a, b, operator) {
        if (!checkOperator(operator)) return "Введите другие данные";
            if (checkNum()) {
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
    
    function checkNum() {
        if (typeof a === "number" && typeof b === "number") {
            return true;
        }
        return false;
    }
    
    function checkOperator(check) {
            if (allowOperator.indexOf(check) > -1) {
                return true;
            }
        console.log("Вы указали неверный оператор!")
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
    function carry(a) {
        return function (step) {
            return a + step;
        };
    }
    
    var carrView = carry(3); // присвоили функцию с шагом (шаг)
    console.log(carrView(4));
    
//Пример с присвоением функции в качестве аргумента.
    
    function curryFunc (fun, a) {
        return function(b) {
            return fun(b, a); //здесь произойдет вызов функции fun
        };
    }
    
    function minus (a, b) {
        return a-b;
    }
    
    var curryPrime = curryFunc(minus, 1);// присваиваем функцию или метод в качестве аргумента
    console.log(curryPrime(5));
    console.log(curryPrime(8));
    
console.log("%c%s","color:green;","********** Домашнее задание №4 **********");
console.log("%c%s","color:green;","Задача 1");
/*
Задание 1
1.1. создать 2 объекта sity1 и sity2 со следующими свойствами: 
name, population, mayor 
двумя разными способами (первый объект одним способом, второй другим)

1.2. sity1 добавить метод, который позволяет забирать какую-то часть населения sity2 (и соответственно добавлять к своему)

1.3. Написать функцию (вне этих объектов), которая показывает мэра города (в зависимости от объекта, переданного ей в качестве аргумента)

1.4. Создать объект president c методом changeCountryMayor(), благодаря которому он сможет менять мэра города (в зависимости от объекта, переданного в качестве аргумента)
*/
    
    var sity1 = {
        name: "Питер",
        population: 5531,
        mayor: "Вася", //Далее функция переносит людей с любого города в этот (ТЕЛЕПОРТ)
        teleport: function(arg, numb) {
            this.population += numb;
            arg.population -= numb;
            console.log("Из города ", this.name," в город ", arg.name," телепортировано ", numb, " жителей");
            console.log("В ", this.name, " стало ", this.population, "жителей, в ", arg.name, " осталось ", arg.population, " жителей");
        },
    };
    
    var sity2 = {};
    
    sity2.name = "Москва";
    sity2.population = 2566;
    sity2.mayor = "Федя";
    
    var president = {
        changeCountryMayor: function(sity, name) {
            console.log("В городе ", sity.name," в ночной перестрелке был убит ", sity.mayor," его место занял еще более жестоки мафиозе ", name);
            sity.name = name;
        },
    };
    
    sity1.teleport(sity2, 433); //переносим жителей в siti1
    isBigBoss(sity1); // Показываем главного босса
    isBigBoss(sity2);
    president.changeCountryMayor(sity1, "Абдула"); // меняем президента
    president.changeCountryMayor(sity2, "Мустафа"); // меняем президента
    
    
    
    function isBigBoss(arg) {
        console.log("Главный мафиозе в городе ", arg.name, " ", arg.mayor);
    }
    
    
console.log("%c%s","color:green;","Задача 2");
/*
Задание 2
Написать функцию, которая на вход принимает строку и подстроку и ищет ВСЕ вхождения подстроки в строку
*/
    
    mergeString("Здесь был Вася, эх Вася, Вася", "Вася");
   
    function mergeString(str, lowstr) {
        var n = 0;
        var findCopy = 0;
        function list(){
            findCopy = str.indexOf(lowstr, findCopy);
            if (findCopy === -1 && !n) {
                 console.log("Совпадений не найдено");
                return;
            } else if (findCopy >= 0) {
                console.log("Найдено совпадение по индексу " + findCopy);
                findCopy++;
                return list(n++);
                
            } else {
                console.log("Всего " + n +" совпадений");
                return;
            }
        }
        list(n);
    }
    
console.log("%c%s","color:green;","Задача 3");
/*
Задание 3 (по рядам, нумерация от окна)
1 ряд: написать функцию getDataFromUser(), которая:
1)получает информацию от пользователя,
2)используя, функцию validateData(data, flag) - ее создает второй ряд, проверяет данные на валидность. 
Пример использования 
validateData(a, 'num') 
validateData(operator, 'operator')
validateData(b, 'num')
validateData(data, flag) возвращает либо true, либо false
В случае, если данные не валидны, пытается получить их до тех пор, пока не получит пригодные данные, 
3)после чего возврящает их в виде массива [+a, operator, +b]
Данная функция сначала получает первое число, потом оператор, потом второе число.
Оператор нельзя начать получать, пока не получено первое валидное число, второе число нельзя начать получать, пока пользователь не введет подходящий оператор 
Операторы могут быть + - * /

2 ряд: написать функцию validateData(data, flag), которая работает следующим образом:
1)если flag - 'num', data проверяется на число,
если flag - 'operator', data провереятся на соответствие одному из операторов ('+', '-', '*' или '/')
2)a и b - могут быть только числами
3)если operator === /, второе число не может быть 0 
4)возвращает true, в случае, если условия проверки выполняется и false, если нет

3 ряд: написать функцию runCalculator():
1)уточняет у пользователя, действительно ли он хочет запустить программу:
2) в случае положительного ответа:
2.1)получат данные из функции getDataFromUser(), вида [+a, operator, +b], например [1, "+", 5]
2.2)разбивает массив на отдельные переменные 
2.3)вызывает функцию operations(a, operator, b), передавая в качестве аргументов, переменные из п.2)
2.4)результат работы operations выводит пользователю (для вывода использовать alert)
3) в случае отрицательного прощается с пользователем

function operations(a, operator, b) {
    if (operator === '+') { 
        return a + b;
    } else if (operator === '-') { 
        return a - b; 
    } else if (operator === '*') { 
        return a * b; 
    } else return a / b; 
}
*/   
    console.log(getDataFromUser());
    
    function getDataFromUser() {
     var mass = [];
        function modal() {
            if (!validateData(mass[0], 'num')){
                mass[0] = prompt("Введите первое число","");
                console.log("Первое число",mass[0]);
            } else if (!validateData(mass[1], 'operator')){
                mass[1] = prompt("Введите оператор","");
                console.log("Оператор",mass[1]);
            } else if (!validateData(mass[2], 'num')){
                mass[2] = prompt("Введите второе число","");
                console.log("Второе число",mass[2]);
            } else {
                return mass;
            }
            return modal();
        }
        
    return modal();
 }  
    
    function validateData(data, flag) {
        if(data)
        return true;
        return false;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})()