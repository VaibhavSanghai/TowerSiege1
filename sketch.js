const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground; 
var polygon, polygonImg; 

function setup() {
    var canvas = createCanvas(800, 700); 

    engine = Engine.create(); 
    world = engine.world; 

    //Ground and stand
    ground = new Ground(400, 700, 800, 20); 
    stand = new Ground(390, 250, 175, 30);

    //Level 3
    box8 = new Polygon(330, 235, 30, 40); 
    box9 = new Polygon(360, 235, 30,  40); 
    box10 = new Polygon(390, 235, 30, 40); 
    box11 = new Polygon(420, 235, 30, 40);     
    box12 = new Polygon(450, 235, 30, 40); 

    //Level 2
    box13 = new Polygon(360, 195, 30, 40); 
    box14 = new Polygon(390, 195, 30, 40); 
    box15 = new Polygon(420, 195, 30, 40); 

    //Level 1
    box16 = new Polygon(390, 155, 30, 40); 

    //Polygon holder with slings
    polygon = Bodies.circle(50, 200, 20); 
    World.add(world, polygon); 

    //Attaching slingshot
    slingShot = new SlingShot(this.polygon, {x: 100, y: 200}); 
}

function draw() {
    background("white"); 

    //Updating engine
    Engine.update(engine); 
    strokeWeight(4); 

    //Adding the image
    imageMode(CENTER); 
    image(polygonImg, polygon.position.x, polygon.position.y, 40, 40); 

    //Displaying all objects
    ground.display(); 
    stand.display(); 

    box8.display(); 
    box9.display(); 
    box10.display(); 
    box11.display(); 
    box12.display(); 

    box13.display(); 
    box14.display(); 
    box15.display(); 

    box16.display(); 

    slingShot.display(); 

    drawSprites(); 
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
    slingShot.fly; 
}