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

    this.handleResize = (event) => {
        this.handleResize(event);
    };
};

Display.prototype = {
    constructor : Display
};