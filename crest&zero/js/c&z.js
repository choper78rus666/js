(function(){
    'use strict';
    
    function Game(){
//        this.max_players = 2;
        var status = -1;
        var step = 0;
        
        this.setStat = function(stat){
            status = stat;
        };
        
        this.getStat = function(){
            return status;
        };
        
        this.nextStep = function(){
            console.log("step",step);
            if(step < (table.getSize()*table.getSize())){
                status = 1 !== status ? 1 : -1;
                this.str = "Ходит " + (player1.getSymb(status) ? player1.getName() : player2.getName());
                console.log("Ходит " + (player1.getSymb(status) ? player1.getName() : player2.getName()));
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
            if(player2.getName()){
                console.log("2 игрока");
            } else {
                player2.setName("Компьютер")
                console.log("1 игрок");
            }
            
            this.nextStep();
        };
        
        this.finish = function(){
            
        };
        
        this.getWin = function(row, col, symb){
            return true;
        };
        
//        this.initPlayers = function(player){
//            if(this.max_players > this.players.length){
//                this.players.push(player);
//            } else {
//                return false;
//            }
//        };
        
        // Запуск игры
        this.initGame = function(){
            if (htmlControl.checkForm()){ 
                player1.setSymb(1);
                player2.setSymb(-1);
                game.startGame();
            } else {
                console.log("EROR");
            }
        };
    }

    function Player(){
        var name = null;
        var score = 0;
        var symbol = null;
        
        this.getName = function(){
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
        var arrtable = [];
        this.size = null;
        
        this.getTable = function(row, col){
            console.log(row, col," ",arrtable[parseInt(row)][parseInt(col)]);
                return arrtable[parseInt(row)][parseInt(col)];
        };
        
        this.setTable = function(row, col, symbol){
            arrtable[parseInt(row)][parseInt(col)] = symbol;
        };
        
        this.setSize = function(size){
            this.size = size;
        };
        
        this.getSize = function(){
            return this.size;
        }
        
        this.updateField = function(){
            for(let i = 0; i < this.getSize(); i++){
                arrtable[i] = new Array(this.getSize()-1);
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
                player1.setName(getId("name1").value);
                getId("playername1").innerHTML = player1.getName();
                if(getId("set-player2").checked){
                    player2.setName(getId("name2").value);
                    getId("playername2").innerHTML = player2.getName();
                } else {
                    // если игра с компьютером
                    player2.setName(null);
                    getId("playername2").innerHTML = "Компьютер";
                }
                
                table.updateField(getId("set-col").value);
                
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
            table.setSize(getId("set-col").value);
        };
        
        this.fieldUpdate = function(){
            for(let row = 0; row < table.getSize(); row++){
                let col = 0;
                while(col < table.getSize()){
                    this.setDiv(row, col, 0);
                    table.setTable(row, col, 0);
                    col++;
                }
            }
        };
        
        this.setDiv = function(row, col, symb){
            if(symb === 0){
                this.elemDiv = document.createElement('div');
                this.elemDiv.classList.add("col");
                this.elemDiv.style.height = 300/table.getSize() + "px";
                this.elemDiv.style.width = 300/table.getSize() + "px";
                this.elemDiv.style.fontSize = 270/table.getSize() + "pt";
                this.elemDiv.setAttribute("id", "" + (row < 10 ? "0"+row : row) + (col < 10 ? "0"+col : col));
                getId("table-field").appendChild(this.elemDiv);
            } else if(symb === 1) {
                getId(row + col).innerHTML = "X";
                table.setTable(row, col, 1);
                game.getWin(row, col, 1);
            } else {
                getId(row + col).innerHTML = "O";
                table.setTable(row, col, -1);
                game.getWin(row, col, 1);
            }
        };
        
        //var setDiv = this.setDiv;
        this.setPosition = function(event){
            console.log(event.target.id[0]+event.target.id[1]+event.target.id[2]+event.target.id[3]);
            this.row = event.target.id[0]+event.target.id[1]
            this.col = event.target.id[2]+event.target.id[3];
            
            if(!table.getTable(this.row, this.col)){
                htmlControl.setDiv(this.row, this.col, game.getStat());
                game.nextStep();
                console.log("put");
            }
        };
        
        this.gameInfo = function(str){
            getId("game-info").innerHTML = str;
        };
        
    }
   
    var player1 = new Player();
    var player2 = new Player();
    var game = new Game();
    var htmlControl = new HtmlController();
    var table = new Table();
    
    //обработчик формы
    htmlControl.getId("button").addEventListener("click", game.initGame);
    htmlControl.getId("checkplayer").addEventListener("click", htmlControl.checkPlayer);
    htmlControl.getId("set-col").addEventListener("mousemove", htmlControl.tableSize);
    htmlControl.getId("set-col").addEventListener("keyup", htmlControl.tableSize);
    htmlControl.getId("set-col").addEventListener("click", htmlControl.tableSize);
    
    //обработчик таблицы
    htmlControl.getId("table-field").addEventListener("click", htmlControl.setPosition);
    
    
}());