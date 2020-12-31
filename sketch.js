
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var engine, world;
function setup() {
  createCanvas(700,800);
  engine = Engine.create();
  world = engine.world;
  
for (var k=0; k <=width; k = k+80) {
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75,10));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175,10));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275,10));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375,10));
  }
 
}
ground = new Ground(400,790,1000,10);
  Engine.run(engine);
  console.log(plinkos);
}

function draw() {
  background(20);
  
  for  (var k = 0; k<divisions.length;k++) {
    divisions[k].display();
 }
 if (mouseWentDown("left")) {
  for (var j = 40; j <= width; j=j+random(10,700)) {
    particles.push(new Particle(j,75,10));
  }
}


  for (var j = 0; j<particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0; k <divisions.length; k++) {
    divisions[k].display();
  }
  for (var j = 0; j <plinkos.length; j++) {
    plinkos[j].display();
   }

fill("red");
text("left click to spwan",300,200);
  drawSprites();
}
 