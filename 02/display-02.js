// This display class contains the screen resize event handler and 
// handles drawing colors to the buffer and then to the display

const Display = function(canvas) {
    this.buffer = document.createElement("canvas").getContext("2d"),
    // Specficy the type of canvas to create
    this.context = canvas.getContext("2d");

    this.renderColor = function(color) {
        this.buffer.fillStyle = color;
        this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas.height);

    };

    this.render = function() {
        this.context.drawImage(this.buffer.canvas, 0, 0, this.buffer.canvas.width, this.buffer.canvas.height)
    };

    // this.resize = function(event) {
    //     var height , width;
    //     height = document.documentElement.clientHeight;
    //     width = document.documentElement.clientWidth;

    //     this.context.canvas.height = height - 32;
    //     this.context.canvas.width = width - 32;

    //     this.render()
    // };

    // this.handleResize = (event) => { this.resize(event); };
};

Display.prototype = {
    constructor : Display
};