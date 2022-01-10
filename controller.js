// Controller code from tutorial by Frank Arendpoth (https://youtu.be/w-OKdSHRlfA)

const Controller = function () {

    // Button input class is used for tracking button states
    this.left = new Controller.ButtonInput();
    this.right = new Controller.ButtonInput();
    this.up = new Controller.ButtonInput();

    this.keyDownUp = function(type, key_code) {

        var down = (type == "keydown") ? true : false;

        switch(key_code) {
            case 37: this.left.getInput(down);
                break;
            case 38: this.up.getInput(down);
                break;
            case 39: this.right.getInput(down);
        }

    };


};

// the prototype allows us to add properties to the controller object (that exist in each controller object!)
Controller.prototype = {

    constructor : Controller

};

// Keyboard interaction
Controller.ButtonInput = function() {
    // active tracks the value of the button object inside the game logic
    // "down" tracks the physical state of the button on the keyboard 

    this.active = this.down = false;

};

Controller.ButtonInput.prototype = {

    constructor : Controller.ButtonInput,

    getInput : function(down) {
        // if the button is not pressed down, then set "active" to whatever is passed into this function, 
        // and set down to that as well
        if (this.down != down) this.active = down;
        this.down = down;

    }
};

