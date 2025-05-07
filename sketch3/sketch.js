let positions = [];
let song;

function preload() {
  font = loadFont("DoubleBass-Regular-trial.ttf");
  img1 =loadImage("drum.png");
  img2=loadImage("mallet.png");
  words=loadImage("drum-words.png");
  
}

function setup() {
   createCanvas(windowWidth, windowHeight);
  song = createAudio('itry.mp3');
  
}

function draw() {
   background("#62C1E3");
  
  if(mouseIsPressed){
    image(img1, 0, 0, windowWidth, windowHeight);
    image(img2, 0, 0, windowWidth, windowHeight+100);
    image(words, 0, 0, windowWidth, windowHeight);
    song.play();
  }
  else{
    image(img1, 0, 0, windowWidth, windowHeight);
    image(img2, 0, 0, windowWidth, windowHeight);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}