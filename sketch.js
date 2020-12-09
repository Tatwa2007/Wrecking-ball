const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
/*var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState = "on sling"
var bg ="sprite/bg2.png";
var score = 0;

function preload() {
    getBackgroundImg(); 
}*/

function setup(){
   
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width/2, height,width,20);
   // platform = new Ground(150, 505, 300, 170);

    box1 = new Box(width-width/3,100,height/10,height/10);
    box2 = new Box(width-width/3,100,height/10,height/10);
    box3 = new Box(width-width/3,100,height/10,height/10);
    box4 = new Box(width-width/3,100,height/10,height/10);
    box5 = new Box(width-width/3,100,height/10,height/10);
    box13 = new Box(width-width/3,100,height/10,height/10);
    box14 = new Box(width-width/3,100,height/10,height/10);

    box6 = new Box(width-width/3+height/10,100,height/10,height/10);
    box7 = new Box(width-width/3+height/10,100,height/10,height/10);
    box8 = new Box(width-width/3+height/10,100,height/10,height/10);
    box9 = new Box(width-width/3+height/10,100,height/10,height/10);
    box10 = new Box(width-width/3+height/10,100,height/10,height/10);
    box11 = new Box(width-width/3+height/10,100,height/10,height/10);
    box12 = new Box(width-width/3+height/10,100,height/10,height/10);

    box15 = new Box(width-width/3+2*height/10,100,height/10,height/10);
    box16 = new Box(width-width/3+2*height/10,100,height/10,height/10);
    box17 = new Box(width-width/3+2*height/10,100,height/10,height/10);
    box18= new Box(width-width/3+2*height/10,100,height/10,height/10);
    box19 = new Box(width-width/3+2*height/10,100,height/10,height/10);
    box20 = new Box(width-width/3+2*height/10,100,height/10,height/10);
    box21 = new Box(width-width/3+2*height/10,100,height/10,height/10);

    ball1 = new ball(height-height/10, height/2,height/5);
    rope1 = new rope (ball1.body,{x:height-height/10, y:20});
  
     //slingshot = new SlingShot(bird.body,{x:200, y:250});
  
}



function draw(){
   // if(backgroundImg){
    background(0);
    //textSize(22);
//text ("Score:"+score,1100,50);

    //}

    Engine.update(engine);
    ground.display();
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    rope1.display();
    ball1.display();
   
    //slingshot.display(); 

}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}

/*
function mouseReleased(){
    slingshot.fly();
    gameState = "launch";  
}

function keyPressed(){
    if(keyCode===32 && bird.body.speed<1){
    bird.trajectory = [];
    Matter.Body.setPosition(bird.body, {x:200, y:50})
    bird.body.speed = 0;
    slingshot.attach(bird.body);
    }
}

async function getTime(){
    console.log(T);
    }

   async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var T = dateTime.slice(11,13);

    if (T>=06 && T<=16){
        bg = "sprites/bg.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);

   }
   */
   

