
//Maggie Galletti
//credit: SuperHi
let song;
var font;
var points;
var nl = 0.30;

function preload() {
  font = loadFont("DoubleBass-Regular-trial.ttf");
  img1 =loadImage("mic.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER); 
  song = createAudio('tired2.mp3');
  song.play()

  points = font.textToPoints("I'm so tired of being sick", 180, 330, 125, {
    sampleFactor: 0.1,
    simplifyThreshold: 0,
  });
}


function draw() {
  background("#62C1E3");
  noFill();
  stroke("#D42A2A");
  strokeWeight(4);
  image(img1,0,0,windowWidth,windowHeight);

  beginShape();
  points.forEach((point) => {
    let movement = createVector(0, 0);
    if (mouseX) {
      distance = dist(point.x, point.y, mouseX, mouseY);
      movement = createVector(point.x - mouseX, point.y - mouseY);
      movement = movement.mult(60 / distance);
    }

    const nx =
      movement.x +
      (noise(nl * point.x, nl * point.y, nl * frameCount) * 40 - 20);
    const ny =
      movement.y +
      (noise(nl * point.x, nl * point.y, nl * frameCount) * 40 - 20);
    vertex(point.x + nx, point.y + ny);
  });
  endShape();

  noStroke();
  fill("#FFD323");
  points.forEach((point) => {
    let movement = createVector(0, 0);
    if (mouseX) {
      distance = dist(point.x, point.y, mouseX, mouseY);
      movement = createVector(point.x - mouseX, point.y - mouseY);
      movement = movement.mult(60 / distance);
    }

    const nx = movement.x;
    const ny = movement.y;
    circle(point.x + nx, point.y + ny, 6);
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}