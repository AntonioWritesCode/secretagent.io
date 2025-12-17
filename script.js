let canvas;
let currentQuestion = 0;

var speed = 1;
var angle = 0;

let pulseActive = false;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  textFont('Arial');
  textSize(24);
  textAlign(CENTER, CENTER);

  console.log("Coded by me!");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // Background
  background(0, 30);

  // Ambient animation
  push();
  translate(width / 2, height / 2);
  rotate(angle);

  // Pulse effect
  let pulse = 15 + sin(frameCount * 0.05) * 5;
  noFill();

  if(pulseActive) {
    stroke(255, 0, 0);
  } else {
    stroke(255, 100);
  }

  for(let i = 0; i < 10; i++) {
    ellipse(0, 0, i * 40 + pulse)
  }

  pop();
  angle += 0.02;

  // Display Question
  fill(255);
  text(questions[currentQuestion],
    width / 2,
    650,
  );
}

// Randomize question on mouse click

function getRandomQuestion() {
  let newIndex;

  do {
    newIndex = floor(random(questions.length));
  } while (newIndex === currentQuestion);

  currentQuestion = newIndex;
}

// Function for input
function mousePressed() {
  getRandomQuestion();


  return false; // prevent default
}

function touchStarted() {
  getRandomQuestion();
  return false; // prevent scrolling on mobile devices
}

function isButtonPressed() {
  let d = dist(mouseX, mouseY, width / 2, height - 100);
  return d < 40 && (mouseIsPressed || touchStarted.length > 0);
}

