const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particles= [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;

function setup() {
  createCanvas(800,900);
  engine = Engine.create();
  world = engine.world;

  ground= new Ground(400,890,1000,20);
  
  //creating buckets
  for (var k = 0; k <=width; k = k + 100) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //creating plinkos
   for (var j = 25; j <=width; j= j+50) {
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,175));
   }

   for (var j = 25; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,275));
   }

   for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,375));
   }
}

function draw() {
  background("black");  
  Engine.update(engine);

  if (frameCount % 50 === 0) {
    particles.push(new Particle(random(width/2-400, width/2+400), 10, 10));
  }

  for (var a = 0; a < particles.length; a++) {
  particles[a].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
  }
  for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
  drawSprites();
  ground.display();
}