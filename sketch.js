
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var startPositionX = width/2;
	var startPositionY = height/4 + 500;
	var radius = 20;


	Engine.run(engine);

	bob1 = new Bob(startPositionX - radius * 4, startPositionY,radius);
	bob2 = new Bob(startPositionX - radius * 2, startPositionY, radius);
	bob3 = new Bob(startPositionX,startPositionY,radius);
	bob4 = new Bob(startPositionX + radius * 2, startPositionY, radius);
	bob5 = new Bob(startPositionX + radius * 4, startPositionY, radius);
	roof = new Roof(width/2,height/4,width/7,20);

	rope1 = new Rope(bob1.body,roof.body,-radius*4,0);
	rope2 = new Rope(bob2.body,roof.body,-radius*2,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,radius*2,0);
	rope5 = new Rope(bob5.body,roof.body,radius*4,0);



}


function draw() {
	background("white");

  rectMode(CENTER);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  changeBobProperty();


  
  drawSprites();

 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		//alert("Up Arrow is pressed");
		//Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:-65})
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
		console.log("hello");
	}
}

function changeBobProperty() {
	Matter.Body.setStatic(bob1.body,true);
		Matter.Body.setStatic(bob2.body,true);
		Matter.Body.setStatic(bob3.body,true);
		Matter.Body.setStatic(bob4.body,true);
		Matter.Body.setStatic(bob5.body,true);
}



