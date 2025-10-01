function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(237, 201, 175);

  const numWaves = 15;

  for (let m = 0; m < numWaves; m++) {
    const baseY = 10 + m * 40;
    const divider = 150;
    const speed = 0.006 + m * 0.003;

    let c1 = color(150, 200, 255, 100);
    let c2 = color(0, 80, 150, 180);
    let c = lerpColor(c1, c2, m / numWaves);

    noiseSeed(m * 100);
    fill(c);
    noStroke();

    beginShape();
    for (let x = 0; x < width; x++) {
      const y = baseY + noise(x / divider, frameCount * speed) * 70;
      vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

    stroke(255); 
    strokeWeight(2); 
    noFill();
    beginShape();
    for (let x = 0; x < width; x++) {
      let y = baseY + noise(x / divider, frameCount * speed) * 70;
      y += random(-2, 1); 
      vertex(x, y);
    }
    endShape();
  }
}
