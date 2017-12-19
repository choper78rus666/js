(function(){
    'use strict';
    console.log("%c%s", "color:green;", "Ferm Class mode");
    
    class Farm {
        constructor(name, human_name){
            this.name = name;
            this.human = new Human(human_name);
        }
    }

    class Human {
        constructor(name){
            this.name = name;
        }
    }

    class AnimalsHotel{
        constructor(){
            this.animals = [];
            this.animas_count = 0;
            this.max_count = 3;
        }
    
        addAnimals(animal){
            if(this.animals.length < this.max_count){
               this.animals.push(animal);
                this.animas_count++;
               } else {
                   console.log("Нет свободных мест");
               }
        }
    }
    
    class Animal {
        constructor(name){
            this.name = null;
            var color = null;
        }
        
        set setGetColor(color){
            this.color = color;
        }
        
        get setGetColor(){
            return this.color;
        }
    }
    
    class DomasticAnimal extends Animal{
        constructor(name){
            super(name);
            this.name = name;
        }
    }
    
    var farm = new Farm("ферма", "Human");
    console.log("farm", farm);
    
    var cat = new DomasticAnimal("кошка");
    cat.setGetColor = "red";
    console.log("DomasticAnimal" ,cat , cat.setGetColor);
    
    var animalsHotel = new AnimalsHotel();
    animalsHotel.addAnimals(cat);
    
    var donkey = new DomasticAnimal("Ослик");
    donkey.setGetColor = "gray";
    console.log("DomasticAnimal" , donkey, donkey.setGetColor);
    animalsHotel.addAnimals(donkey);
    
    console.log(animalsHotel);
    
}());