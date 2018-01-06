'use strict';
class FieldModel {
    constructor() {
        this.start_coord = [];
        this.finish_coord = [];
        this.coord = [444, 11];
        this.bonusCoord = [];
        this.bonusCollision = false;
        this.stop = [0, 0, 0, 0];
        this.event = 0;
        this.score = 0;
        console.log(this);
    }
    
    humanMove(event){  //нажимаем на кнопку
                        //просматриваем коллизии
                        //смотрим обработчик
                        //переделываем координаты
                        //отрисовываем
        let set = this.coord;
        fieldController.clear(set);
       // console.log('Координаты для для обработки',this.coord);
        human.calcCollision(this.coord,'human');
       // console.log('Параметры для коллизии',this.stop);
         //console.log(this.stop[0], this.stop[1], this.stop[2] !== 255,this.stop[3][3]);
        let u = this.stop[0];
        let r = this.stop[1];
        let d = this.stop[2];
        let l = this.stop[3];
            //console.log(u[0] !== 255);
            //console.log(u,r,d,l);

        if(event.keyCode === 38){
            if(u === 255){
                this.coord[1] -= 3;
            } else if(u < 255){
                this.bonusScore();
            }
        } else if(event.keyCode === 39) {
            if(r === 255){
                this.coord[0] += 3;
            } else if(r < 255){
                this.bonusScore();
            }
            
        } else if(event.keyCode === 40){
            if(d === 255){
                this.coord[1] += 3;
            } else if(d < 255){
                this.bonusScore();
            }
        }else if(event.keyCode === 37){
            if(l === 255){
                this.coord[0] -= 3;
            } else if(l < 255){
                this.bonusScore();
            }
        } else {console.log('error')}
        human.generateImage('img/mouse.png', this.coord, 2);
        //if(!this.bonusCoord[0])
        //{this.generateSomeBonus()}
        // console.log(event.keyCode);
        // console.log(typeof event.keyCode);
        // console.log(this.coord)
    }
    
    generateSomeBonus(){
        // iterator caller
        let self = this;
        setInterval(function start(){
            if(self.bonusCoord.length < 20){
                    let coord = [parseInt(Math.random()*966),parseInt(Math.random()*966)];
                    human.calcCollision(coord, 'bonus');
                    if(self.bonusCollision === false){
                        //console.log('Наши координаты бонуса',coord);
                        human.generateImage('img/bonus.png',coord,3); //TODO: создать class bonus
                        self.bonusCoord.push(coord); // TODO: раскидать на методы 1 метод одно действие
                    } else {
                        self.bonusCollision = false;
                        start();
                    }
            } else {
                self.bonusClear();
            }
        },5000);
       }
    
    bonusClear(ind=0){
        let set = this.bonusCoord[ind];
        this.bonusCoord.shift();
        fieldController.clear(set);
        
    }

    bonusScore(){
        for(let i = 0; i < this.bonusCoord.length; i++){
            if(this.bonusCoord[i][0] > this.coord[0] - 50 && this.bonusCoord[i][0] < this.coord[0] + 50 && this.bonusCoord[i][1] > this.coord[1] - 50 && this.bonusCoord[i][1] < this.coord[1] + 50){
                this.bonusClear(i);
                this.score += 100;
                console.log("Получили бонус!!! Score: ", this.score);
            }
        }
    }

    // callHuman(){
    //
    // }
    // set start(start) {
    //     this.start_coord = start;
    //     console.log(this.start_coord);
    // }
    //
    // set finish(finish) {
    //     this.finish_coord = finish;
    //     console.log(this.finish_coord);
    // }
    // set cord(coord){
    //         this.coord
    //     }
}