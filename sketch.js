const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var ground,ball
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world  = engine.world;
  var object_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,400,20,object_options);
  World.add(world,ground);
  var ball_options = {
  restitution:1
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

}

function draw() {
  background("black"); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}