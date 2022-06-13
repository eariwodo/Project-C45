var wood
function preload(){
  wood = loadImage("wood.png")
}
function setup() {

  createCanvas(800,400);
 

}

function draw() {
  background(235,253,223);  
  image(wood,width/2,height,800,400)
  drawSprites();
}