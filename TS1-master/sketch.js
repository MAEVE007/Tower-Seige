const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
 // load the image of polygon
}
function setup() {
  createCanvas(900,400);
  // create engine 
  // create world 
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  // create stand2 with positions 700,200,200,10
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  // create block2 with positions 330,275,30,40
  // create block3 with positions 360,275,30,40
  // create block4 with positions 390,275,30,40
  // create block5 with positions 420,275,30,40
  // create block6 with positions 450,275,30,40
  // create block7 with positions 480,275,30,40
  //level two
   // create block8 with positions 330,235,30,40
   // create block9 with positions 360,235,30,40
   // create block10 with positions 390,235,30,40
   // create block11 with positions 420,235,30,40
   // create block12 with positions 450,235,30,40
  //level three
   // create block13 with positions 360,195,30,40
   // create block14 with positions 390,195,30,40
   // create block15 with positions 420,195,30,40
  //top
   // create block16 with positions 390,155,30,40

  //set 2 for second stand
  //level one
  // create  blocks1 with positions 640,175,30,40
   // create blocks2 with positions 670,175,30,40
  // create  blocks3 with positions 700,175,30,40
  // create  blocks4 with positions 730,175,30,40
   // create blocks5 with positions 760,175,30,40
  //level two
  // create  blocks6 with positions 670,135,30,40
  // create  blocks7 with positions 700,135,30,40
  // create  blocks8 with positions 730,135,30,40
  //top
  // create  blocks9 with positions 700,95,30,40

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
 // display block1 to block7
  fill("pink");
 // display block8 to block12
  fill("turquoise");
  //display block13 to block15
 
  fill("grey");
 // display  block16
  fill("skyblue");
 //display blocks1 to blocks5
 
  fill("turquoise");
  //display blocks6 to blocks8
  
  fill("pink")
 // display blocks9
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  // setPosition of ball as moouseX and mouseY
}
function mouseReleased(){
  slingShot.fly();
}