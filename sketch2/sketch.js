let words = ["I'm", "so", "tired", "of", "being", "sick."];
let positions = [];
let buttonOpacities = [];
let fade = [];
let buttonWidth = 115;
let buttonHeight = 70; 
let song;

function preload() {
  font = loadFont("DoubleBass-Regular-trial.ttf");
  img1 = loadImage("guitar.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song = createAudio('tired.mp3');


  let spacing = windowWidth / (words.length + 1);
  for (let i = 0; i < words.length; i++) {
    let x = spacing * (i + 1);
    let y = height / 2.3 + random(-30, 30); 
    positions.push({x: x, y: y});
    buttonOpacities.push(255); 
    fade.push(false);
    
  
  }
}

function draw() {
  background("#62C1E3");
  image(img1, 0, 0, windowWidth, windowHeight);

  textFont(font);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill("#FFD323");
  
  
  

  for (let i = 0; i < words.length; i++) {
    text(words[i], positions[i].x, positions[i].y);
  }

  noStroke();
  for (let i = 0; i < positions.length; i++) {
    if (buttonOpacities[i] > 0) {
      fill(0, buttonOpacities[i]); 
      rectMode(CENTER);
      rect(positions[i].x, positions[i].y, buttonWidth, buttonHeight);
    }

    if (fade[i]) {
      buttonOpacities[i] -= 5;
      if (buttonOpacities[i] < 0) {
        buttonOpacities[i] = 0;
        fade[i] = false;
      }
    }
  }
}

function mousePressed() {
  for (let i = 0; i < positions.length; i++) {
    if (
      abs(mouseX - positions[i].x) < buttonWidth / 2 &&
      abs(mouseY - positions[i].y) < buttonHeight / 2 &&
      buttonOpacities[i] > 0
    ) {
      fade[i] = true;
    }
  } song.play();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  positions = [];
  let spacing = windowWidth / (words.length + 1);
  for (let i = 0; i < words.length; i++) {
    let x = spacing * (i + 1);
    let y = height / 2 + random(-20, 20); 
    positions.push({x: x, y: y});
  }
}

//ChatGPT was asked to debug my positioning issues and help me space out my buttons
//ChatGPT was asked to help check which button was being clicked at a time
