(function() {
/*
Создать объект slider, в нем будут два метода:
1. init : получение элемента (по id), в который и будут вставляться слайды
2. add: добавление картинок в слайдер ( метод на вход принимает путь до картинки и alt, создает img, добавляет необходимые атрибуты и классы, и добавляет созданный элемент в элемент, который получили в методе init )
Внутри объекта пользуйтесь this
*/
    var slider = {
        init: function(id) {
            var idElem = document.getElementById(id);
            return idElem;
        },
        add: function(url, alt) {
            var pElem = document.createElement("img"); // создает тег (элемент)
            pElem.setAttribute("src", url);
            pElem.setAttribute("alt", alt);
            pElem.classList.add("slide");
            pElem.style.backgroundSize = "cover";
            pElem.style.width = "700px";
            pElem.style.height ="300px";
            this.init("slider").appendChild(pElem);
        },
    }
    
    var n = 0;
    goSlider();
    setInterval(goSlider, 2000);
   
    
    function goSlider(){
        var image = [["images/cat1.jpg", "slide1"], ["images/cat2.jpg", "slide2"], ["images/cat3.jpg", "slide3"], ["images/cat4.jpg", "slide4"]];
        n++;
        if(n >= image.length) n=0;
        slider.add(image[n][0], image[n][1]);
    }
    
    
})()