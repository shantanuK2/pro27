
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 object1 = new bob(200,200,50)
	 roof1 = new roof(200,300,50,30)
	 Rope = new rope(object1.Body,roof1.Body)
	 object2 = new bob(20,200,50)
	 roof2 = new roof(230,300,50,30)
	 Rope2 = new rope(object2.Body,roof2.Body)
	 object3 = new bob(20,200,50)
	 roof3 = new roof(260,300,50,30)
	 Rope3 = new rope(object3.Body,roof3.Body)
	 object4 = new bob(20,200,50)
	 roof4 = new roof(290,300,50,30)
	 Rope4 = new rope(object4.Body,roof4.Body)
	 object5 = new bob(20,200,50)
	 roof5 = new roof(320,300,50,30)
	 Rope5 = new rope(object5.Body,roof5.Body)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  object1.display()
  roof1.display()
  Rope.display()
  object2.display()
  roof2.display()
  Rope2.display()
  object3.display()
  roof3.display()
  Rope3.display()
  object4.display()
  roof4.display()
  Rope4.display()
  object5.display()
  roof5.display()
  Rope5.display()
  drawSprites();
 
}



