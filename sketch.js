var newX = 500

function preload(){
birdImage = loadImage("bird.png")
obstacle1Image = loadImage("building 1.png")
obstacle2Image = loadImage("building 2.png")

}

function setup() {
  createCanvas(displayWidth, displayHeight);

  bird = new Bird()
 
  for(var i = 0; i < 25; i++){
    obstacles = new Obstacle(newX)
    newX += 500
  }
}

function draw() {
  background("black");  

bird.body.velocityY += 0.5

camera.position.x = bird.body.x

  if(keyDown (RIGHT_ARROW)){
    bird.body.x += 5
  }

  if(keyDown (LEFT_ARROW)){
    bird.body.x -= 5
  }

  if(keyDown("space")){
    bird.body.velocityY = -12
  }

  drawSprites();
}

