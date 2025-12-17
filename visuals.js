let canvas;
let angle = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

}

function draw() {
  background(0, 40);

  push();
  translate(width / 2, height / 2);
  rotate(angle);

  noFill();
  stroke(255, 80);
  for (let i = 1; i <= 8; i++) {
    ellipse(0, 0, i * 120);
  }
  pop();

  angle += 0.002;

  fill(255, 0, 0);
  ellipse(width / 2, height / 2, 80);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}