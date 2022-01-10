# Platformer

## by Charlotte Clark

This is a platformer site. You can use the left, right, and up buttons on the keyboard to move the cube character throughout the world. 

## The Code 
This code was built according to [a tutorial by Frank Arendpoth](https://youtu.be/w-OKdSHRlfA) - This tutorial is incredibly helpful to anyone looking to start building platformer games using object collision detection and a fixed time step loop.

The engine file includes a fixed time step loop to maintain consistent gameplay across devices. Game file establishes broad and narrow phase collision detection. 

The game file includes the code to build the map for the world (using newtileset.png file) and establishes object collision detection.

The controller file and Game file contain the code for player movement (keyboard input causing the player to move left, right, and up).

The display file draws the map and the player to the screen.

The main file loads the display image and then start the engine. 

## Game Art

The game world was created using [Tiled](https://www.mapeditor.org/), a free map editor and a free tileset downloaded from [Open Game Art](https://opengameart.org/)

## Contact

If you have any questions about this project, please contact Charlotte Clark at charlotte.clark@alumni.usc.edu

## GIT 

To download the latest source off of the GIT server use: 

    git clone git@github.com:charlocc/platformer.git

Anyone is welcome to use this code, but be sure to give credit to Frank Arendpoth for most of the sourse code