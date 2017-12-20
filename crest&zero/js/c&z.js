(function(){
    'use strict';
    
    function Game(){
//        this.max_players = 2;
        
        this.startGame = function(){
            console.log("Развертка сетки и старт");
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
            this.htmlControl = new HtmlController();
            if (this.htmlControl.checkForm()){ 
                game.startGame();
            } else {
                console.log("EROR");
            }
        };
    }

    function Player(){
        var name = null;
        var score;
        var symbol;
        
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
                if(checkInput("set-player2").checked){
                    player2.setName(checkInput("name2").value);
                } else {
                    player2.setName(null);
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
        
        this.tableSize = function(){
             checkInput("size").innerHTML = checkInput("set-col").value + " X " +checkInput("set-col").value;
        }
        
    }
   
    var player1 = new Player();
    var player2 = new Player();
    var game = new Game();
    var htmlControl = new HtmlController();
    var table = new Table();
    
    htmlControl.checkInput("button").addEventListener("click", game.initGame);
    htmlControl.checkInput("checkplayer").addEventListener("click", htmlControl.checkPlayer);
    htmlControl.checkInput("set-col").addEventListener("mousemove", htmlControl.tableSize);
    
    
}());