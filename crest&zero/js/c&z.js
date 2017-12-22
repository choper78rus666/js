(function(){
    'use strict';
    
    function Game(){
//        this.max_players = 2;
        var status = 0;
        
        this.setStat = function(stat){
            status = stat;
        };
        
        this.getStat = function(){
            return status;
        };
        
        this.startGame = function(){
            console.log("Развертка сетки и старт");
            this.setStat(1);
            htmlControl.hideUnhideForm("start-info");
            htmlControl.hideUnhideForm("table");
            if(player2.getName()){
                console.log("2 игрока");
            } else {
                console.log("1 игрок");
            }
        };
        
        this.finish = function(){
            
        };
        
//        this.initPlayers = function(player){
//            if(this.max_players > this.players.length){
//                this.players.push(player);
//            } else {
//                return false;
//            }
//        };
        
        this.initGame = function(){
            if (htmlControl.checkForm()){ 
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
        
        this.getSymb = function(){
            return symbol;
        };
        
        this.setSymb = function(put_symbol){
            symbol = put_symbol;
        };
    
    }

    function Table(){
        var table = [[],[]];
        
        this.getTable = function(tablex, tabley){
            if(!table[tablex][tabley]) {
                return false;
            } else {
                return table[tablex][tabley];
            }
        };
        
        this.setTable = function(tablex, tabley, symbol){
            table[tablex][tabley] = symbol;
        };
        
        this.updateField = function(n){
            this.size = n;
            table = [[],[]];
            htmlControl.fieldUpdate(n);
            console.log("создана таблица ",n," на ", n);
        };
    }
    
    function HtmlController(){
        
        var checkInput = function(id){
            return document.getElementById(id);
        };
        this.checkInput = checkInput;
            
        this.checkForm = function (){
            
            if((!checkInput("name1").value.length) || (checkInput("set-player2").checked && !checkInput("name2").value.length)){ 
                alert("Нужно заполнить все поля!");
            } else {
                player1.setName(checkInput("name1").value);
                checkInput("playername1").innerHTML = player1.getName();
                if(checkInput("set-player2").checked){
                    player2.setName(checkInput("name2").value);
                    checkInput("playername2").innerHTML = player2.getName();
                } else {
                    // если игра с компьютером
                    player2.setName(null);
                    checkInput("playername2").innerHTML = "Компьютер";
                }
                
                table.updateField(checkInput("set-col").value)
                
                return true;
            }
            
        };
        
        this.checkPlayer = function(){
            if(checkInput("set-player1").checked){
               this.elem = checkInput("player2");
                this.elem.classList.add("hide");
                checkInput("player2").innerHTML = this.elem.innerHTML;
            } else if(checkInput("set-player2").checked){
                this.elem = checkInput("player2");
                this.elem.classList.remove("hide");
                checkInput("player2").innerHTML = this.elem.innerHTML;
            }
        };
        
        this.hideUnhideForm = function(id){
                this.form = checkInput(id);
                this.form.classList.toggle("hide");
                checkInput(id).innerHTML = this.form.innerHTML;
        };
        
        this.tableSize = function(){
             checkInput("size").innerHTML = checkInput("set-col").value + " X " +checkInput("set-col").value;
        };
        
        this.fieldUpdate = function(n){
            this.field = checkInput("table-field");
            for(let next = 0; next < n; next++){
                let i = 0;
                while(i < n){
                    this.elemDiv = document.createElement('div');
                    
                    this.elemDiv.classList.add("col");
                    this.elemDiv.style.height = 300/n + "px";
                    this.elemDiv.style.width = 300/n + "px";
                    this.elemDiv.setAttribute("id","pos" + next + i);
                    this.field.appendChild(this.elemDiv);
                    i++
                }
            }
        };
        
    }
   
    var player1 = new Player();
    var player2 = new Player();
    var game = new Game();
    var htmlControl = new HtmlController();
    var table = new Table();
    
    //обработчик формы
    htmlControl.checkInput("button").addEventListener("click", game.initGame);
    htmlControl.checkInput("checkplayer").addEventListener("click", htmlControl.checkPlayer);
    htmlControl.checkInput("set-col").addEventListener("mousemove", htmlControl.tableSize);
    htmlControl.checkInput("set-col").addEventListener("keyup", htmlControl.tableSize);
    htmlControl.checkInput("set-col").addEventListener("click", htmlControl.tableSize);
    
    
}());