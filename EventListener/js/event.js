(function() {
    'use strict';
/*
1. События клавиатуры keydown, keyup, keypress
Написать функцию обработчик события так, чтобы вводимая пользователем инфоромация сразу же отображалась в textarea или любом другом месте
<input type="text"> - поле для ввода текста пользователем
<textarea></textarea> - поле для отображения вводимого пользователем текста
*/
    var key = document.getElementById("keydown_id");
    var write_text = document.getElementById("print_id");
    
    key.addEventListener("keydown", keydownFunc);
    
    function keydownFunc(event) {
        console.log("keydown", event.key);
        write_text.innerHTML += event.key;
    }
    
/*
2. Написать по одной любой функции-обработчику на следующие события:
DOMContentLoaded
beforeunload
onload на отдельный элемент
*/
    var load = document.getElementById("load_id");
    var image = document.getElementById("image");
    
    document.addEventListener("DOMContentLoaded", ContentLoaded);
    
    function ContentLoaded(event) {
        load.innerHTML = "Страничка загружена, загружаем картинку.";
    }
    
    image.onload = function Loaded() {
        load.innerHTML = "Картинка " + this.src + " загружена.";
    };
    
    window.onbeforeunload = function beforeunload() {
        return "Вы действительно хотите уйти?";
    };
    
})()