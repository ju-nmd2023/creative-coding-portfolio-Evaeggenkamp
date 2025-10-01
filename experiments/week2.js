let circles = [];
let cols = 10;
let rows = 12;
let circleSize = 80;

function setup() {
  createCanvas(600, 700);
  background(100, 80, 100);
  noFill();

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let cx = 60 + x * 50;
      let cy = 60 + y * 50;
      circles.push(new ScribbleCircle(cx, cy, circleSize, 100));
    }
  }
}

function draw() {
  for (let c of circles) {
    c.update();
    c.show();
  }
}
class ScribbleCircle {
  constructor(x, y, r, numPoints) {
    this.pos = createVector(x, y);
    this.r = r;
    this.walkers = [];

    for (let i = 0; i < numPoints; i++) {
      let angle = random(TWO_PI);
      let px = this.pos.x + cos(angle) * this.r * 0.5;
      let py = this.pos.y + sin(angle) * this.r * 0.5;
      this.walkers.push(createVector(px, py));
    }
  }

  update() {
    for (let w of this.walkers) {
      w.x += random(-2, 2);
      w.y += random(-2, 2);

      let d = dist(w.x, w.y, this.pos.x, this.pos.y);
      if (d > this.r * 0.5) {
        let angle = atan2(w.y - this.pos.y, w.x - this.pos.x);
        w.x = this.pos.x + cos(angle) * this.r * 0.5;
        w.y = this.pos.y + sin(angle) * this.r * 0.5;
      }
    }
  }
  show() {
    stroke(0, 30);
    for (let w of this.walkers) {
      point(w.x, w.y);
    }
  }
}
