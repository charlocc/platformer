window.addEventListener("load",function(event) {
   
    "use strict";
    
    // --------------------- FUNCTIONS ---------------------

    // Render and update functions called every frame
    var render = function () {
        // Communicates the games color value to the display
        display.renderColor(game.color);
        display.render();
    };

    var update = function() {
        // Tells the game to change the color value
        game.update();
    };

    // --------------------- OBJECTS ---------------------

    // The controller handles user input
    var controller = new Controller();
    // The display hndles window resizing
    var display = new Display(document.querySelector("canvas"));
    // The game will eventually hold our game logic
    var game = new Game();
    // Engine is where the above three sections can interact
    var engine = new Engine(1000/30, render, update);


    // --------------------- INITIALIZE ---------------------
    
    window.addEventListener("resize", display.handleResize);
    window.addEventListener("keydown", controller.handleKeyDownUp);
    window.addEventListener("keyup", controller.handleKeyDownUp)

    display.resize();
    engine.start();

}) 