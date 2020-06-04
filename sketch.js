var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload(){

}


function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	paper1 = new Paper(100, 100, 30)
	paper1.velocityY = paper1.velocityY + 0.8;	

	box1 = new Box(1100, 600, 200, 20, {isStatic:true})
	box2 = new Box(1000, 600, 20, 100,  {isStatic:true})
	box3 = new Box(1200, 600, 20, 100,  {isStatic:true})
	box4 = new Bbox(1220, 600, 20, 100, {isStatic:true})
	box5 = new Bbox(1240, 600, 20, 100, {isStatic:true})
	
	boxImage = new Bbbox(1150, 400, 1, 1, {isStatic:true})
}


function draw() {
  rectMode(CENTER);
  background(225);
  
 

  paper1.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  keyPressed();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body, paper1.body.position, {x:5, y:-10});
}
}