'use strict';
class FieldModel {
    constructor() {
        this.start_coord = [];
        this.finish_coord = [];
        this.coord = [444, 11];
        this.bonusCoord = [];
        this.bonuCollision = false;
        this.stop = [0, 0, 0, 0];
        this.event = 0;
        console.log(this);
    }
    humanMove(event){  //нажимаем на кнопку
                        //просматриваем коллизии
                        //смотрим обработчик
                        //переделываем координаты
                        //отрисовываем
        let set = this.coord;
        fieldController.clear(set);
        console.log('Координаты для для обработки',this.coord);
        human.calcCollision(this.coord,'human');
        console.log('Параметры для коллизии',this.stop);
        // console.log(this.stop[0], this.stop[1], this.stop[2] !== 255,this.stop[3][3]);
        let u = this.stop[0];
        let r = this.stop[1];
        let d = this.stop[2];
        let l = this.stop[3];
            console.log(u[0] !== 255);
            console.log(u,r,d,l);

        if(event.keyCode === 38 && u[0] === 255){
            this.coord[1] -=5
        } else if(event.keyCode === 39 && r[0] === 255) {
            this.coord[0] +=5
        } else if(event.keyCode === 40 && d[0] === 255){
            this.coord[1] +=5
        }else if(event.keyCode === 37 && l[0] === 255){
            this.coord[0] -=5
        } else {console.log('error')}
        human.generateImage('img/mouse.png', this.coord, 2);
        if(!this.bonusCoord[0])
        {this.generateSomeBonus()}
        // console.log(event.keyCode);
        // console.log(typeof event.keyCode);
        // console.log(this.coord)
    }
    generateSomeBonus(){
        // iterator caller
        let self = this;
        let i = 0;
        setInterval(function(){
            if(i < 10){
                    let coord = [parseInt(Math.random()*966),parseInt(Math.random()*966)];
                    human.calcCollision(coord);
                    if(self.bonuCollision === false){
                        console.log('Наши координаты бонуса',coord);
                        human.generateImage('img/bonus.png',coord,3); //TODO: создать class bonus
                        self.bonusCoord.push(coord); // TODO: раскидать на методы 1 метод одно действие
                        i++;
                    }
            } else {
                self.bonusClear();
                i = 9;
            }
        },50000);
       }
    bonusClear(){
        let set = this.bonusCoord[0];
        fieldController.clear(set);
        this.bonusCoord.shift();
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
