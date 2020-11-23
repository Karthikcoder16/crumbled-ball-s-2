
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


  Engine.run(engine);
  

	paper1= new Paper(100,200,20);
	ground1= new Ground(400,690,800,10);
    bin1=new Ground(600,680,100,10);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  paper1.display();
  ground1.display();
  bin1.display();
 
  drawSprites();
 
}



function keyPressed(){


if (keyCode === UP_ARROW){

Matter.Body.applyForce(paper1.body,paper1.body.position,{x:45,y:-45});


}


}








