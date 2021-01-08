//Variable for music
    var music;

//Variable for creating different surfaces
    var blueBlock,yellowBlock,redBlock,greenBlock;

//Variable for the ball
    var ball;

//This variable is related to stop the repetition of the music
    var play;

//defining edges
    var edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(900,600);

    //4 different surfaces creation and giving them colour
        blueBlock=createSprite(120,550,200,80);
        blueBlock.shapeColor="blue";

        yellowBlock=createSprite(345,550,200,80);
        yellowBlock.shapeColor="yellow";

        redBlock=createSprite(565,550,200,80);
        redBlock.shapeColor="red";

        greenBlock=createSprite(785,550,200,80);
        greenBlock.shapeColor="green";

    //creating the ball and giving it Colour and velocity
        ball=createSprite(Math.round(random(20,750)),95,30,30);
        ball.shapeColor="white";
        ball.velocityY=10;
        ball.velocityX=12;

    //Defining play Variable
        play=0;

    //Setting value to the gameState. Note that the gameState is defined in my library
        gameState=PLAY;

    //creating the edge sprite
        edges=createEdgeSprites();
}

function draw() {

    //Setting the background Colour
        background(134, 235, 52);

if(gameState===PLAY){
  
    //few functions for the ball
       ball.bounceOff(edges);

        if(isTouching(ball,blueBlock)){
            ball.shapeColor="blue";
            ball.bounceOff(blueBlock);
            play++;
            music.play(); 
            
            if(play==2){
                music.stop()
                play=1;
            }
            if(play==1){
                music.play();
            }

            
            

        }
        if(isTouching(ball,yellowBlock)){
            ball.shapeColor="yellow";
            ball.bounceOff(yellowBlock);
            if(play==2){
                music.stop()
                play=1;
            }
            if(play==1){
                music.play();
            }

        } 
        if(isTouching(ball,redBlock)){
            ball.shapeColor="red";
            ball.bounceOff(redBlock);
            ball.setVelocity(0,0);
            play=3;
            music.stop();
            gameState=END;

            
        } 

        if(isTouching(ball,greenBlock)){
            ball.shapeColor="green";
            ball.bounceOff(greenBlock);
            if(play==2){
                music.stop()
                play=1;
            }
            if(play==1){
                music.play();
            }

        }  
}

if(gameState===END){


    fill("white");
    text("Press R To Replay",330,300,textSize(30));
    ball.setVelocity(0,0);

    if(keyDown("r")){


        ball.x=Math.round(random(20,750));
        ball.y=95;
        ball.shapeColor="white";
        ball.velocityY=11;
        ball.velocityX=12;
        gameState=PLAY;

    }
}

    drawSprites();
}
