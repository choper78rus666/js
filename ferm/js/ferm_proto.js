(function(){
    'use strict';
    console.log("%c%s", "color:green;", "Ferm Prototype mode")
    
     function Farm(name, human_name){
        this.name = name;
        this.human = new Human(human_name);
    }

    function Human(name){
        this.name = name;
    }

    function AnimalsHotel(){
        this.animals = [];
        this.animas_count = 0;
        this.max_count = 3;
    }
    
    // поменяли на прототипный метод
    AnimalsHotel.prototype.addAnimals = function(animal){
            if(this.animals.length < this.max_count){
               this.animals.push(animal);
                this.animas_count++;
               } else {
                   console.log("Нет свободных мест");
               }
        };
    
    function Animal(name){
        this.name = null;
        var color = null;
    }
    
    function DomasticAnimal(name){
        this.name = name;
    };
    
    Animal.prototype.setColor = function(color){
        this.color = color;
    };
    
    Animal.prototype.getColor = function(){
        return this.color;
    };
    
    DomasticAnimal.prototype = Object.create(Animal.prototype);
    
    var farm = new Farm("ферма", "Human");
    console.log("farm", farm);
    
    var cat = new DomasticAnimal("кошка");
    cat.setColor("red");
    console.log("DomasticAnimal" ,cat , cat.getColor());
    
    var animalsHotel = new AnimalsHotel();
    animalsHotel.addAnimals(cat);
    
    var donkey = new DomasticAnimal("Ослик");
    donkey.setColor("gray");
    console.log("DomasticAnimal" , donkey, donkey.getColor());
    animalsHotel.addAnimals(donkey);
    
    console.log(animalsHotel);
    
}());