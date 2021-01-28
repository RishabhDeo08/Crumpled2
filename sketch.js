var backGround
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	backGround=loadImage("background.jpg")
}

function setup() {
	createCanvas(1600, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground1=new Ground(width/2,670,width,20)
    dustbin1=new Dustbins(1200,650)
    paper1=new Paper(200,450,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backGround);
  Engine.update(engine);
  ground1.display()
  dustbin1.display();
  paper1.display();
  //pop()
  drawSprites();
  
}
function keyPressed(){
  if (keyCode==UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-200})
  }
}


