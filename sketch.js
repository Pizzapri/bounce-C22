const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


function setup() {
  var canva =createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;
  
  /*var object_options={
    isStatic:true
  }*/
  
  //object=Bodies.rectangle(200,100,25,25,object_options);
  //World.add(world,object);

  var ground_options={
    isStatic:true
  }

  ground=Bodies.rectangle(200,350,400,20,ground_options);
  World.add(world,ground);


  var ball_options={
      'restitution':1.5
  }

  ball=Bodies.circle(200,100,30,ball_options);
  World.add(world,ball);

  
}

function draw() {
  background("purple");

  Engine.update(engine);

  rectMode(CENTER);


  ellipseMode(RADIUS);

  //rect(object.position.x,object.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball.position.x,ball.position.y,30);
}