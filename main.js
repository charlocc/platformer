// Main code frome tutorial by Frank Arendpoth (https://youtu.be/w-OKdSHRlfA)

window.addEventListener("load",function(event) {
   
    "use strict";
    
    // --------------------- FUNCTIONS ---------------------

    var keyDownUp = function(event) {
        // passes the event type (whether its a key down press or key up (releasing the key))
        // and passes the keyCode to the keyDownUp function in the controller
        controller.keyDownUp(event.type, event.keyCode);
    }
    
    var resize = function(event) {
        // subtracting 32px gives a small 16px border on either side of the game world on the window
        display.resize(document.documentElement.clientWidth - 32, document.documentElement.clientHeight - 32, game.world.height / game.world.width);
        display.render();
    }
    
    var render = function () {
        // display.fill(game.world.background_color); this just sets a backgground color
        display.drawMap(game.world.map, game.world.columns);
        // display.drawRectangle(game.world.player.x, game.world.player.y, game.world.player.width, game.world.player.height, game.world.player.color);
        display.drawPlayer(game.world.player, game.world.player.color1, game.world.player.color2);
        display.render();
    };

    var update = function() {
        // If the controller left button is active, then move the player left
        if (controller.left.active) {game.world.player.moveLeft();}
        if (controller.right.active) {game.world.player.moveRight();}
        // sets controller up active to false so the player does not continuously jump as you hold down up arrow
        if (controller.up.active) {game.world.player.jump(); controller.up.active = false}

        game.update();

    };

    // --------------------- OBJECTS ---------------------

    var controller = new Controller();
    var display = new Display(document.querySelector("canvas"));
    var game = new Game();

    // render and update are called 30 times every second
    var engine = new Engine(1000/30, render, update);


    // --------------------- INITIALIZE ---------------------
    
    display.buffer.canvas.height = game.world.height;
    display.buffer.canvas.width = game.world.width;

    display.tile_sheet.image.addEventListener("load", function(event) {
        resize();

        engine.start();
        
    }, {once : true});

    // load the display image first and then start the engine
    display.tile_sheet.image.src= "newtileset.png";

    window.addEventListener("keydown", keyDownUp);
    window.addEventListener("keyup", keyDownUp);
    window.addEventListener("resize", resize);
    document.getElementById("upBtn").addEventListener("click", Game.jump);
    document.getElementById("rightBtn").addEventListener("click", Game.moveRight);
    document.getElementById("leftBtn").addEventListener("click", Game.moveLeft);



});