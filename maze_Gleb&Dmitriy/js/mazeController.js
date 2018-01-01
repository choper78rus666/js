class CanvasDrawer {
    constructor(){
        this.canvas = null;
        this.canvas_context = null;
        this.set_canvas_size = null;
        this.what_draw = 0;
    }

    initGameCanvas(canvas_id, ctx) {
        this.canvas = document.getElementById(canvas_id);
        this.canvas_context = this.canvas.getContext(ctx);
    }

    generateImage(img_path, coord, what_draw) {
        let img = document.createElement('img');
        img.setAttribute("src", img_path);
        if(what_draw === 1){ //1 ресуем поле 2- рисуем мышку 3 - рисуем бонус
            this.canvas.height = img.height;
            this.canvas.width = img.width;
            this.canvas_context.drawImage(img, coord[0], coord[1]);
            // let data = this.canvas_context.getImageData(coord[0],coord[1], img.height, img.width).data;
            // console.log(data);
        } else if(what_draw === 2){
            this.canvas_context.drawImage(img, coord[0], coord[1]);
        } else if(what_draw === 3){
            this.canvas_context.drawImage(img, coord[0], coord[1]);
        }
    }
    clear(set){
        // this.canvas_context.fillStyle = '255 255 255 255';
        this.canvas_context.fillStyle = '#FFF';
        this.canvas_context.fillRect(set[0]+1,set[1],23,24);
        // this.canvas_context.fillRect(set[0],set[1],23,24);
        // let ctx = this.canvas_context;
        // ctx.beginPath();
        this.canvas_context.fillStyle = '#FFF';
        // ctx.moveTo(set[0]+25,set[1]+25);
        // ctx.fill();
        //
        // this.canvas_context.fillRect(set[0],set[1],25,25);
        // CanvasRenderingContext2D.font = "12px sans-serif";
        // CanvasRenderingContext2D.fillText = "X";
    }
}
class FieldController extends CanvasDrawer {
    constructor(set_canvas_size) {
        super(set_canvas_size);
        this.field_model = new FieldModel();
        this.sendCoordToModel();
    }
    sendCoordToModel() {
        this.field_model.start = [6, 8];
        this.field_model.finish = [7, 0];
    }

}
class HumanController extends CanvasDrawer{
    constructor(set_canvas_size) {
        super(set_canvas_size);
        this.initListenr();
    }
    initListenr() {
        window.addEventListener('keypress', this.someFunc.bind(this))
    }

    calcCollision(coord,what_need_calc){ //
        if(what_need_calc === 'human'){
        let midUp = this.canvas_context.getImageData(coord[0]+12,coord[1]-2,1,1).data;
        let midRight = this.canvas_context.getImageData(coord[0]+28,coord[1]+12,1,1).data;
        let midDown = this.canvas_context.getImageData(coord[0]+13,coord[1]+28,1,1).data;
        let midLeft = this.canvas_context.getImageData(coord[0]-2,coord[1]+14,1,1).data;
        let stop = [midUp[0],midRight[0],midDown[0],midLeft[0]];
        console.log(stop);
        fieldController.field_model.stop = [midUp,midRight,midDown,midLeft];
        // let black = humanData.prototype.entries([0],255);
        console.log("Левый угол верх",midUp[0],'Альфа',midUp[3],'Правый верх угол',midRight[0],'Альфа',midRight[3],"Правый угол низ",midDown[0],'Альфа',midDown[3],'Левый угол Низ',midLeft[0],'Альфа', midLeft[3]);
        } else if(what_need_calc === 'bonus'){
            let sqare = this.canvas_context.getImageData(coord[0],coord[1],26,26);
            
        }
    }
    someFunc(event) {
        // event.preventDefault();
        console.log(event.keyCode);
        console.log(typeof event);
        this.sendToModel(event);
    }

    sendToModel(event){
        fieldController.field_model.humanMove(event);
    }

}
// class WayController extends CanvasDrawer{
//     constructor(set_canvas_size){
//         super(set_canvas_size);
//
//     }
// }
// class KeyboardController {
//     constructor(){
//
//     }

// }
let fieldController = new FieldController();
fieldController.initGameCanvas('maze_canvas', '2d');
fieldController.generateImage('img/maze.png', [0, 0], 1);
// fieldController.callculateField('img/maze.png');
let human = new HumanController(2);
human.initGameCanvas('maze_canvas', '2d');
human.generateImage('img/mouse.png', [444, 11], 2);

