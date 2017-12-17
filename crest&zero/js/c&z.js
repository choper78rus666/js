(function(){
    'use strict';
    
    function Game(){
        this.players = [];
        this.max_players = 2;
        
        this.startGame = function(){
            
        };
        
        this.finish = function(){
            
        };
        
        this.initPlayers(player) = function(){
            if(this.max_players > this.players.length){
                this.players.push(player);
            } else {
                return false;
            }
        };
    }

    function Player(){
        var name;
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
        
        this.updateField = function(){
            table = [[],[]];
        };
    }
    
    
    
}());