(function(){
    'use strict';
    
    function Game(){
        this.player1 = new Player();
        this.player2 = new Player();
        this.table = new Table();
        this.playGame = false;
        var status = -1;
        var step = 0;
        
        this.setStat = function(stat){
            status = stat;
        };
        
        this.getStat = function(){
            return status;
        };
        
        this.setPlayGame = function(set){
            this.playGame = set;
        };
        
        this.getPlayGame = function(){
          return this.playGame;  
        };
        
        this.nextStep = function(){
            console.log("step",step);
            if(step < (this.table.getSize()*this.table.getSize())){
                status = 1 !== status ? 1 : -1;
                this.str = "Ходит " + this.playerGetNameSymbol(status);
                htmlControl.gameInfo(this.str);
                step++;
                if(status === -1 && game.player2.getPc()){
                    //остановили обработчик ходов
                    htmlControl.getId("table-field").removeEventListener("click", htmlControl.setPosition);
                } else {
                    //запустили обработчик ходов
                    htmlControl.getId("table-field").addEventListener("click", htmlControl.setPosition);
                }
                
            } else {
               htmlControl.gameInfo("Победила дружба!");
               this.finish();
            }
            
        };
        
        this.startGame = function(){
            console.log("Развертка сетки и старт");
            htmlControl.hideUnhideForm("start-info");
            htmlControl.hideUnhideForm("table");
            htmlControl.hideUnhideForm("table-field");
            if(!this.player2.getPc()){
                console.log("2 игрока");
            } else {
                console.log("1 игрок");
            }
            this.setPlayGame(true);
            this.nextStep();
        };
        
        this.finish = function(){
            htmlControl.getId("table-field").removeEventListener("click", htmlControl.setPosition);
            this.setPlayGame(false);
        };
        
        this.getWin = function(row, col, symb){
            this.checkLine(row, col, symb);
            if(this.nextStepForPc[0] === this.table.getSize() - 1 || this.nextStepForPc[0] === 4){
                htmlControl.gameInfo("Выиграл " + this.playerGetNameSymbol(symb));
                console.log("Проверка выигрыша",this.nextStepForPc,this.nextStepForPc[0]);
                this.finish();
            }
            console.log("Проверка выигрыша",this.nextStepForPc,this.nextStepForPc[0]);
        };
        
        this.checkLine = function(row, col, symb){
            row = parseInt(row);
            col = parseInt(col);
            console.log("this.table.getSize()",this.table.getSize());
            var win = 0;
            var nextStepForPc = [0,0,0];
            
            // Проверка линий - логика поиска хода
            this.testPosition = function(rows, cols){
                
                win += symb === this.table.arrtable[rows][cols] ? symb : 0;
                        console.log(win, symb);
                        if(!this.table.arrtable[rows][cols]){
                            if(win){
                                if(nextStepForPc[0] <= win * symb){
                                    nextStepForPc = [win * symb, rows, cols];
                                }
                            } else if(!nextStepForPc[0]){
                                    nextStepForPc = [0, rows, cols];
                                }
                        } else {
                            if(win && nextStepForPc[0] < win * symb){
                                nextStepForPc[0] = win * symb;
                            }
                        }
            };
            
            // Проверка вертикаль ++
            for(let i = 1; i < 5 ; i++)
                {
                    if(row + i < this.table.getSize()){
                        this.testPosition(row + i, col);
                        if(this.table.arrtable[row + i][col] !== symb) break;
                    }
                }
            console.log("вертикаль ++",nextStepForPc);
            // Проверка вертикаль --
            for(let i = 1; i < 5 ; i++)
                {
                    if(row - i >= 0){
                        this.testPosition(row - i, col);
                        if(this.table.arrtable[row - i][col] !== symb) break;
                    }
                }
            
            // Проверка горизонталь ++
            win = 0;
            console.log("вертикаль --",nextStepForPc);
            for(let i = 1; i < 5 ; i++)
                {
                    if(col + i < this.table.getSize()){
                        this.testPosition(row, col + i);
                        if(this.table.arrtable[row][col + i] !== symb) break;
                    }
                }
            console.log("горизонталь ++",nextStepForPc);
            // Проверка горизонталь --
            for(let i = 1; i < 5 ; i++)
                {
                    if(col - i >= 0){
                        this.testPosition(row, col - i);
                        if(this.table.arrtable[row][col - i] !== symb) break;
                    }
                }
            console.log("горизонталь --",nextStepForPc);
            // Проверка диагональ вниз с лева на право
            win = 0;
            for(let i = 1; i < 5 ; i++)
                {   
                    if(col + i < this.table.getSize() && row + i < this.table.getSize()){
                        this.testPosition(row + i, col + i);
                        if(this.table.arrtable[row + i][col + i] !== symb) break;
                    }
                }
            console.log("test4",nextStepForPc);
            // Проверка диагональ вверх с права на лево
            for(let i = 1; i < 5 ; i++)
                {   
                    if(col - i >= 0 && row - i >= 0){
                        this.testPosition(row - i, col - i);
                        if (this.table.arrtable[row - i][col - i] !== symb) break;
                    }
                }
            console.log("test5",nextStepForPc);
            // Проверка диагональ вниз с права на лево
            win = 0;
            for(let i = 1; i < 5 ; i++)
                {   
                    if(col - i >= 0 && row + i < this.table.getSize()){
                        this.testPosition(row + i, col - i);
                        if(this.table.arrtable[row + i][col - i] !== symb) break;
                    }
                }
            console.log("test6",nextStepForPc);
            // Проверка диагональ вверх с лева на право
            for(let i = 1; i < 5 ; i++)
                {   
                    if(col + i < this.table.getSize() && row - i >= 0){
                        this.testPosition(row - i, col + i);
                        if(this.table.arrtable[row - i][col + i] !== symb) break;
                    }
                }
            
            this.nextStepForPc = nextStepForPc;
            console.log("test7",nextStepForPc);
        };
        
        // Запуск игры
        this.initGame = function(){
            if (htmlControl.checkForm()){ 
                game.player1.setSymb(1);
                game.player2.setSymb(-1);
                game.startGame();
            } else {
                console.log("EROR");
            }
        };
        
        this.playerGetNameSymbol = function(symb){
            return (this.player1.getSymb(symb) ? this.player1.getName() : this.player2.getName());
        };
        
        this.stepPc = function(){
            let row = "" + (this.nextStepForPc[1] < 10 ? "0"+this.nextStepForPc[1] : this.nextStepForPc[1]);
            let col = "" + (this.nextStepForPc[2] < 10 ? "0"+this.nextStepForPc[2] : this.nextStepForPc[2]);
            console.log("put",row," ",this.nextStepForPc[1]," ",this.nextStepForPc[2]," ", col);
            htmlControl.setDiv(row, col, -1);
            
        };
    }

    function Player(){
        var name = null;
        var score = 0;
        var symbol = null;
        var pc = false;
        
        this.getName = function(symb){
            return name;
        };
        
        this.setName = function(new_name){
            name = new_name;
        };
        
        this.getScore = function(){
            return score;
        };
        
        this.setScore = function(add_score){
            score = add_score;
        };
        
        this.getSymb = function(sym){
            if(sym && sym !== symbol){
                return false;
            }
            return symbol;
        };
        
        this.setSymb = function(put_symbol){
            symbol = put_symbol;
        };
        
        this.setPc = function(set){
            pc = set;
        };
        
        this.getPc = function(){
            return pc;
        };
        
    }
    

    function Table(){
        this.arrtable = [];
        this.size = 3;
        
        this.getTable = function(row, col){
            console.log(row, col," ",this.arrtable[parseInt(row)][parseInt(col)]);
                return this.arrtable[parseInt(row)][parseInt(col)];
        };
        
        this.setTable = function(row, col, symbol){
            this.arrtable[parseInt(row)][parseInt(col)] = symbol;
            if(symbol){
                game.nextStep();
                game.getWin(row, col, symbol);
                if(symbol === 1 && game.player2.getPc() && game.getPlayGame()){
                    game.stepPc();
                }
            }
        };
        
        this.setSize = function(size){
            this.size = size;
        };
        
        this.getSize = function(){
            return parseInt(this.size);
        }
        
        this.updateField = function(){
            for(let i = 0; i < this.getSize(); i++){
                this.arrtable[i] = new Array(this.getSize()-1);
            }
            
            htmlControl.fieldUpdate();
            console.log("создана таблица ", this.getSize(), " на ", this.getSize());
        };
    }
    
    function HtmlController(){
        
        var getId = function(id){
            return document.getElementById(id);
        };
        this.getId = getId;
            
        this.checkForm = function (){
            
            if((!getId("name1").value.length) || (getId("set-player2").checked && !getId("name2").value.length)){ 
                alert("Нужно заполнить все поля!");
            } else {
                game.player1.setName(getId("name1").value);
                getId("playername1").innerHTML = game.player1.getName();
                if(getId("set-player2").checked){
                    game.player2.setName(getId("name2").value);
                    getId("playername2").innerHTML = game.player2.getName();
                } else {
                    // если игра с компьютером
                    game.player2.setPc(true);
                    game.player2.setName("Компьютер");
                    getId("playername2").innerHTML = "Компьютер";
                }
                
                game.table.updateField(getId("set-col").value);
                
                return true;
            }
            
        };
        
        this.checkPlayer = function(){
            if(getId("set-player1").checked){
               this.elem = getId("player2");
                this.elem.classList.add("hide");
                getId("player2").innerHTML = this.elem.innerHTML;
            } else if(getId("set-player2").checked){
                this.elem = getId("player2");
                this.elem.classList.remove("hide");
                getId("player2").innerHTML = this.elem.innerHTML;
            }
        };
        
        this.hideUnhideForm = function(id){
                this.form = getId(id);
                this.form.classList.toggle("hide");
                getId(id).innerHTML = this.form.innerHTML;
        };
        
        this.tableSize = function(){
            getId("size").innerHTML = getId("set-col").value + " X " +getId("set-col").value;
            game.table.setSize(getId("set-col").value);
        };
        
        this.fieldUpdate = function(){
            for(let row = 0; row < game.table.getSize(); row++){
                let col = 0;
                while(col < game.table.getSize()){
                    this.setDiv(row, col, 0);
                    game.table.setTable(row, col, 0);
                    col++;
                }
            }
        };
        
        this.setDiv = function(row, col, symb){
            if(symb === 0){
                this.elemDiv = document.createElement('div');
                this.elemDiv.classList.add("col");
                this.elemDiv.style.height = 300/game.table.getSize() + "px";
                this.elemDiv.style.width = 300/game.table.getSize() + "px";
                this.elemDiv.style.fontSize = 270/game.table.getSize() + "pt";
                this.elemDiv.setAttribute("id", "" + (row < 10 ? "0"+row : row) + (col < 10 ? "0"+col : col));
                getId("table-field").appendChild(this.elemDiv);
            } else if(symb === 1) {
                getId(row + col).innerHTML = "X";
                game.table.setTable(row, col, 1);
            } else {
                getId(row + col).innerHTML = "O";
                game.table.setTable(row, col, -1);
            }
        };
        
        this.setPosition = function(event){
            console.log(event.target.id[0]+event.target.id[1]+event.target.id[2]+event.target.id[3]);
            this.row = event.target.id[0]+event.target.id[1]
            this.col = event.target.id[2]+event.target.id[3];
            
            if(!game.table.getTable(this.row, this.col)){
                htmlControl.setDiv(this.row, this.col, game.getStat());
                console.log("put");
            }
        };
        
        this.gameInfo = function(str){
            getId("game-info").innerHTML = str;
        };
        
    }
   
    
    var game = new Game();
    var htmlControl = new HtmlController();
    
    //обработчик формы
    htmlControl.getId("button").addEventListener("click", game.initGame);
    htmlControl.getId("checkplayer").addEventListener("click", htmlControl.checkPlayer);
    htmlControl.getId("set-col").addEventListener("mousemove", htmlControl.tableSize);
    htmlControl.getId("set-col").addEventListener("keyup", htmlControl.tableSize);
    htmlControl.getId("set-col").addEventListener("click", htmlControl.tableSize);
    
    
}());