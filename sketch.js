var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 100, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-25, width,10);
	groundSprite.shapeColor=color(255)

	box1=createSprite(310,400,20,100);
	box2=createSprite(400,460,200,20);
    box3=createSprite(490,400,20,100);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 100 , 5 , {restitution:0.3, isStatic:true });
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  
  Engine.update(engine);
  background(0);
  rectMode(CENTER);
   
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
 packageSprite.collide(box2);

  drawSprites();
  
}

function keyPressed() {
	
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the key.Down arrow 
	Matter.Body.setStatic(packageBody, false);

  }}