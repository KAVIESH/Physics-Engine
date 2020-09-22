
//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;
var ball;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  var options = 
  {
    isStatic :  true,
  }
  
  var ball_options = 
  {
    restitution : 1
  }

  ground = Bodies.rectangle(200, 390, 400, 20, options);
  World.add(world, ground);

  ball  =   Bodies.circle(200, 100, 20, ball_options); 
  World.add(world, ball);

  console.log(ground)
}



function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x , ground.position.y, 400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20)
  drawSprites();
}