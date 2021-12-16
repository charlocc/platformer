// Code frome tutorial by Frank Arendpoth (https://youtu.be/w-OKdSHRlfA)

const Game = function () {

    this.world = new Game.World();

    this.update = function () {

        this.world.update();

    };
};



Game.prototype = {

    constructor: Game

};

Game.World = function (friction = 0.9, gravity = 3) {

    // this.collider = new Game.World.Collider();//

    this.friction = friction;
    this.gravity = gravity;

    this.player = new Game.World.Player();

    this.columns = 12;
    this.rows = 9;
    this.tile_size = 16;
    this.map = [48,17,17,17,49,48,18,19,16,17,35,36,
              10,39,39,39,16,18,39,31,31,31,39,07,
              10,31,39,31,31,31,39,12,05,05,28,01,
              35,06,39,39,31,39,39,19,39,39,08,09,
              02,31,31,47,39,47,39,31,31,04,36,25,
              10,39,39,31,39,39,39,31,31,31,39,37,
              10,39,31,04,14,06,39,39,03,39,00,42,
              49,02,31,31,11,39,39,31,11,00,42,09,
              08,40,27,13,37,27,13,03,22,34,09,24];
    
    
    this.height = this.tile_size * this.rows;
    this.width = this.tile_size * this.columns;
};

Game.World.prototype = {

    constructor: Game.World,
    // Establishes how collision is handled
    collideObject: function (object) {
        // if the object is at the far right or far left side of the screen, stop
        if (object.x < 0) {
            object.x = 0; object.velocity_x = 0;
        } else if (object.x + object.width > this.width) {
            object.x = this.width - object.width; object.velocity_x = 0;
        }
        // if the object is at the top or bottom of the screen, stop
        if (object.y < 0) {
            object.y = 0; object.velocity_y = 0;
        } else if (object.y + object.height > this.height) {
            object.jumping = false; object.y = this.height - object.height; object.velocity_y = 0;
        }
    },

    update: function () {
        // update each aspect of the players position each frame
        this.player.velocity_y += this.gravity;
        this.player.update();

        this.player.velocity_x *= this.friction;
        this.player.velocity_y *= this.friction;

        this.collideObject(this.player);
    }
};



// Designs the player
Game.World.Player = function (x, y) {

    this.color1 = "yellow";
    this.color2 = "orange";
    this.height = 12;
    this.jumping = true;
    this.velocity_x = 0;
    this.velocity_y = 0;
    this.width = 12;
    this.x = 100;
    this.y = 50;

};

Game.World.Player.prototype = {

    constructor: Game.World.Player,

    jump: function() {

        if (!this.jumping) {
            this.jumping = true;
            this.velocity_y -= 20;
        }


    },

    moveLeft: function () { this.velocity_x -= 0.5; },
    moveRight: function () { this.velocity_x += 0.5; },

    update: function () {

        this.x += this.velocity_x;
        this.y += this.velocity_y;

    }
};