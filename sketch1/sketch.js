let slidex;

function preload() {
  font = loadFont("DoubleBass-Regular-trial.ttf");
  img1 =loadImage("slide.png");
  img2 =loadImage("horn.png")
}

function setup() {
   createCanvas(windowWidth, windowHeight);
}

function draw() {
   background("#62C1E3");
  
  if(mouseIsPressed){
      if(mouseX < windowWidth-1000){
        slidex=windowWidth-1200
      }
      else(slidex=mouseX-200)
    image(img1, slidex, 100, 1200, 600);
    image(img2, windowWidth-1000, 10, 1200, 800); 
    textFont("DoubleBass");
    textSize(70);
    fill("#D42A2A");
    text("I'm so sick of being tired", slidex+300,475, 1200, 600); 
    //audio would play here
  }
  
  else{
    image(img1,windowWidth-300, 100, 1200, 600);
    image(img2, windowWidth-1000, 10, 1200, 800);
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
