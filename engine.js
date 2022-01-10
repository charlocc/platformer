// Engine code frome tutorial by Frank Arendpoth (https://youtu.be/w-OKdSHRlfA)

// This is a fixed time step game loop. (important for uniform gameplay)
// It will ensure that the game will update and draw at a fixed rate across different devices

const Engine = function(time_step, update, render) {

    this.accumulated_time = 0;
    this.animation_frame_request = undefined, 
    this.time = undefined, // Most recent timestamp of loop execution
    this.time_step = time_step, // 1000/30 = 30 frames per second

    // Whether or not the update function has been called since last cycle
    this.updated = false;
    // render and update functions defined in main file 
    this.update = update;
    this.render = render;

    this.run = function(time_stamp) {
        // This is one cycle of the game loop
        this.accumulated_time += time_stamp - this.time;
        this.time = time_stamp;


        // If the device is too slow, updates may take longer than our time step -
        // Never allow three full frames without an update
        if (this.accumulated_time >= this.time_step * 3) {
            this.accumulated_time = this.time_step;
        };

        // We want to update every time we have accumulated one time step's worth of time
        // If multiple time steps have accumulated, we must update one time for each to stay up to speed
        while(this.accumulated_time >= this.time_step) {
            this.accumulated_time -= this.time_step;
            this.update(time_stamp);
            // if the game is updated, we need to draw it again
            this.updated = true;
        };

        // This allows us to only draw when the game has updated
        if (this.updated) {
            this.updated = false;
            this.render(time_stamp);
        };

        this.animation_frame_request = window.requestAnimationFrame(this.handleRun);

    };
    // use an arrow function to make sure the "this" refers to the engine object and not the window
    this.handleRun = (time_step) => {
        this.run(time_step);
    };

};

Engine.prototype = {

    constructor:Engine,

    start:function() {

        this.accumulated_time = this.time_step;
        this.time = window.performance.now();
        this.animation_frame_request = window.requestAnimationFrame(this.handleRun);

    },

    stop:function() {
         
        window.cancelAnimationFrame(this.animation_frame_request);
    
    }
}