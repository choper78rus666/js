(function() {
/*
Создать объект slider, в нем будут два метода:
1. init : получение элемента (по id), в который и будут вставляться слайды
2. add: добавление картинок в слайдер ( метод на вход принимает путь до картинки и alt, создает img, добавляет необходимые атрибуты и классы, и добавляет созданный элемент в элемент, который получили в методе init )
Внутри объекта пользуйтесь this
*/
    var slider = {
        init: function(id) {
            this.idElem = document.getElementById(id);
        },
        add: function(url, alt) {
            this.pElem = document.createElement("img"); // создает тег (элемент)
            this.pElem.setAttribute("src", url);
            this.pElem.setAttribute("alt", alt);
            this.pElem.classList.add("slide");
            this.pElem.style.backgroundSize = "cover";
            this.pElem.style.width = "700px";
            this.pElem.style.height ="300px";
            this.init("slider");
            this.idElem.remove();
            this.idElem = document.createElement('div');
            this.idElem.setAttribute("id", "slider");
            document.body.appendChild(this.idElem);
            this.idElem.appendChild(this.pElem);
            
        },
        goSlider: function() {
        this.image = [["images/cat1.jpg", "slide1"], ["images/cat2.jpg", "slide2"], ["images/cat3.jpg", "slide3"], ["images/cat4.jpg", "slide4"]];
        n++;
        if(n >= this.image.length) n=0;
        slider.add(this.image[n][0], this.image[n][1]);
        },
    }
    
    var n = 0;
    slider.goSlider();
    setInterval(slider.goSlider, 2000);
   
    
    
    
    
})()