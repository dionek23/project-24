const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,580,1200,40)
    hammer = new Hammer(10,100);
    rubber = new Rubber(100,100,60)
    stone = new Stone(500,50)
    iron = new Iron(800,150)


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display()
    stone.display()
    iron.display()


    
 
}