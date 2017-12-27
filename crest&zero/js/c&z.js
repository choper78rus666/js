(function(){
    'use strict';
    
    function Game(){
        this.player1 = new Player();
        this.player2 = new Player();
        this.table = new Table();
        var status = 1;
        var step = 0;
        
        this.setStat = function(stat){
            status = stat;
        };
        
        this.getStat = function(){
            return status;
        };
        
        this.nextStep = function(){
            console.log("step",step);
            if(step < (this.table.getSize()*this.table.getSize())){
                status = -1 !== status ? -1 : 1;
                this.str = "Ходит " + this.playerGetNameSymbol(status*-1);
                htmlControl.gameInfo(this.str);
                step++;
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
            if(this.player2.getName()){
                console.log("2 игрока");
            } else {
                this.player2.setName("Компьютер")
                console.log("1 игрок");
            }
            
            this.nextStep();
        };
        
        this.finish = function(){
            htmlControl.getId("table-field").removeEventListener("click", htmlControl.setPosition);
        };
        
        this.getWin = function(row, col, symb){
            let win = 0;
            for(let i = 0; i < this.table.getSize() ; i++)
                {
                    win += symb === this.table.arrtable[i][parseInt(col)] ? symb : win = 0;
                    console.log("win",win," this.table.arrtable[i, parseInt(col)]",this.table.arrtable[i][ parseInt(col)], " symb ",symb," this.table.getSize() ",parseInt(this.table.getSize()));
                    if (win === parseInt(this.table.getSize()) || win === -this.table.getSize() || win === 5 || win === -5){
                        htmlControl.gameInfo("Выиграл " + this.playerGetNameSymbol(symb));
                        this.finish();
                    }
                }
            
            win = 0;
            for(let i = 0; i < this.table.getSize() ; i++)
                {
                    win += symb === this.table.arrtable[parseInt(row)][i] ? symb : win = 0;
                    console.log("win",win," this.table.arrtable[i, parseInt(col)]",this.table.arrtable[i][ parseInt(col)], " symb ",symb," this.table.getSize() ",parseInt(this.table.getSize()));
                    if (win === parseInt(this.table.getSize()) || win === -this.table.getSize() || win === 5 || win === -5){
                        htmlControl.gameInfo("Выиграл " + this.playerGetNameSymbol(symb));
                        this.finish();
                    }
                }
            win = 0;
            for(let i = 0; i < 5 ; i++)
                {   
                    if(parseInt(col)+i < parseInt(this.table.getSize()) && parseInt(row)+i < parseInt(this.table.getSize())){
                        win += symb === this.table.arrtable[parseInt(row)+i][parseInt(col)+i] ? symb : win = 0;
                        if (win === parseInt(this.table.getSize()) || win === -this.table.getSize() || win === 5 || win === -5){
                            htmlControl.gameInfo("Выиграл " + this.playerGetNameSymbol(symb));
                            this.finish();
                        }
                    }
                }
            win = 0;
            for(let i = 0; i < 5 ; i++)
                {   
                    if(parseInt(col)-i >= 0 && parseInt(row)-i >= 0){
                        win += symb === this.table.arrtable[parseInt(row)-i][parseInt(col)-i] ? symb : win = 0;
                        if (win === parseInt(this.table.getSize()) || win === -this.table.getSize() || win === 5 || win === -5){
                            htmlControl.gameInfo("Выиграл " + this.playerGetNameSymbol(symb));
                            this.finish();
                        }
                    }
                }
            
            win = 0;
            for(let i = 0; i < 5 ; i++)
                {   
                    if(parseInt(col)-i < parseInt(this.table.getSize()) && parseInt(row)+i < parseInt(this.table.getSize())){
                        win += symb === this.table.arrtable[parseInt(row)+i][parseInt(col)-i] ? symb : win = 0;
                        if (win === parseInt(this.table.getSize()) || win === -this.table.getSize() || win === 5 || win === -5){
                            htmlControl.gameInfo("Выиграл " + this.playerGetNameSymbol(symb));
                            this.finish();
                        }
                    }
                }
            win = 0;
            for(let i = 0; i < 5 ; i++)
                {   
                    if(parseInt(col)+i >= 0 && parseInt(row)-i >= 0){
                        win += symb === this.table.arrtable[parseInt(row)-i][parseInt(col)+i] ? symb : win = 0;
                        if (win === parseInt(this.table.getSize()) || win === -this.table.getSize() || win === 5 || win === -5){
                            htmlControl.gameInfo("Выиграл " + this.playerGetNameSymbol(symb));
                            this.finish();
                        }
                    }
                }
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
    }

    function Player(){
        var name = null;
        var score = 0;
        var symbol = null;
        
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
    
    }

    function Table(){
        this.arrtable = [];
        this.size = null;
        
        this.getTable = function(row, col){
            console.log(row, col," ",this.arrtable[parseInt(row)][parseInt(col)]);
                return this.arrtable[parseInt(row)][parseInt(col)];
        };
        
        this.setTable = function(row, col, symbol){
            this.arrtable[parseInt(row)][parseInt(col)] = symbol;
            if(symbol){
                game.getWin(row, col, symbol);
            }
        };
        
        this.setSize = function(size){
            this.size = size;
        };
        
        this.getSize = function(){
            return this.size;
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
                    game.player2.setName(null);
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
                //game.getWin(row, col, 1);
            } else {
                getId(row + col).innerHTML = "O";
                game.table.setTable(row, col, -1);
                //game.getWin(row, col, -1);
            }
        };
        
        this.setPosition = function(event){
            console.log(event.target.id[0]+event.target.id[1]+event.target.id[2]+event.target.id[3]);
            this.row = event.target.id[0]+event.target.id[1]
            this.col = event.target.id[2]+event.target.id[3];
            
            if(!game.table.getTable(this.row, this.col)){
                game.nextStep();
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
    
    //обработчик таблицы
    htmlControl.getId("table-field").addEventListener("click", htmlControl.setPosition);
    
    
}());