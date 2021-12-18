// This display class contains the screen resize event handler and 
// handles drawing colors to the buffer and then to the display

const Display = function (canvas) {

    this.buffer = document.createElement("canvas").getContext("2d"),
        this.context = canvas.getContext("2d");

    // Defines container for sprite sheet image
    // original: passing size of the tiles (16) and number of columns (8)
    this.tile_sheet = new Display.TileSheet(32, 18);


    /* This function draws the map to the buffer. */
    this.drawMap = function (map, columns) {

        for (let i = map.length - 1; i > -1; --i) {
            // loop through every value in the map  
            let value = map[i]-1; 
            // value is the length of the map (128px)
            let source_x = (value % this.tile_sheet.columns) * this.tile_sheet.tile_size;
            let source_y = Math.floor(value / this.tile_sheet.columns) * this.tile_sheet.tile_size;
            let destination_x = (i % columns) * this.tile_sheet.tile_size;
            let destination_y = Math.floor(i / columns) * this.tile_sheet.tile_size;

            this.buffer.drawImage(this.tile_sheet.image, source_x, source_y, this.tile_sheet.tile_size, this.tile_sheet.tile_size, destination_x, destination_y, this.tile_sheet.tile_size, this.tile_sheet.tile_size);

        }

    };


    this.drawPlayer = function (rectangle, color1, color2) {
        // border color
        this.buffer.fillStyle = color1;
        this.buffer.fillRect(Math.floor(rectangle.x), Math.floor(rectangle.y), rectangle.width, rectangle.height);
        // inner color
        this.buffer.fillStyle = color2;
        this.buffer.fillRect(Math.floor(rectangle.x + 2), Math.floor(rectangle.y + 2), rectangle.width - 4, rectangle.height - 4);
    }



    // keeps the same aspect ratio but allows the display canvas to get smaller/larger as the window grows/shrinks
    this.resize = function (width, height, height_width_ratio) {
        if (height / width > height_width_ratio) {
            this.context.canvas.height = width * height_width_ratio;
            this.context.canvas.width = width;
        } else {
            this.context.canvas.height = height;
            this.context.canvas.width = height / height_width_ratio;
        }

        this.context.imageSmoothingEnabled = false;

    };

};

Display.prototype = {

    constructor: Display,

    render: function () { this.context.drawImage(this.buffer.canvas, 0, 0, this.buffer.canvas.width, this.buffer.canvas.height, 0, 0, this.context.canvas.width, this.context.canvas.height); },

};

Display.TileSheet = function (tile_size, columns) {

    // setting the properties of tile sheet = to what we pass to it
    this.image = new Image();
    this.tile_size = tile_size;
    this.columns = columns;

};

Display.TileSheet.prototype = {};