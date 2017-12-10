(function(){
    'use strict';
/*
3. 
создать папку paint, в ней:
html, css, js

приблизителные html и css:
<div class="paint"> 
<div class="toolbar"> 
<input id="paint_brush" type="button" value="brush"> 
<input id="paint_brush_color" type="color"> 
<input id="paint_brush_size" type="range"> 
<input id="paint_eraser" type="button" value="erase"> 
</div> 
<canvas></canvas> 
</div> 

css
* { 
box-sizing: border-box; 
} 

.paint { 
position: relative; 
height: 600px; 
width: 800px; 
border: 2px solid #000; 
} 

.paint .toolbar { 

margin-bottom: 7px; 
margin-left: 5px; 

} 

.paint canvas { 
border-top: 2px solid #000; 
width: 800px; 
margin: 0; 
padding: 0; 
}

В js файле создать объект handlers со следующими методами:
startDraw
endDraw
drawing
erase

на canvas повесить следующие обработчики:
'mousedown' - метод handlers - startDraw
'mouseup'- метод handlers - endDraw
'mouseout' - метод handlers - endDraw
'mousemove'- метод handlers - drawing

Проверьте, чтобы методы действительно отрабатывали. Во вторник будем делать из этого мини paint. Но можете попробовать реализовать его сами до вторника (надо будет почитать про рисование canvas)
*/
    
    var canvas = document.getElementsByTagName("canvas")[0],
    point = canvas.getContext('2d');
    canvas.height = 560;
    canvas.width  = 800;
    
    var handlers = {
        startDraw: function(event){
            console.log("mousedown");
            console.log(event.pageX, event.pageY);
            point.fillRect(event.pageX-10, event.pageY-50,3,3);
        },
        endDraw: function(){
            console.log("mouseout");
        },
        drawing: function(){
            console.log("mousemove");
        },
        erase: function(){
            console.log("mouseup");
        },
    };
    
   
    
    canvas.addEventListener("mousedown", handlers.startDraw);
    canvas.addEventListener("mouseup", handlers.erase);
    canvas.addEventListener("mouseout", handlers.endDraw);
    canvas.addEventListener("mousemove", handlers.drawing);
    
    
    
    
    
    
})()