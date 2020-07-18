const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, paperImg;
var ground;
var bin1, bin2, bin3;
var dustbin, dustbinImg;

function preload(){
	dustbinImg = loadImage("dustbingreen.png");
	paperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(150, 650);
	ground = new Ground(500, 690, 1000, 20);

	bin1 = new Dustbin(745, 600, 20, 165);
	bin3 = new Dustbin(855, 600, 20, 165);
	bin2 = new Dustbin(800, 670, 130, 20);

	dustbin = createSprite(800,600);
	dustbin.addImage(dustbinImg);
	dustbin.scale = 0.5;

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(254);

  Engine.update(engine);
 
  ground.display();
  paper.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:110, y:-110});
	}
}



