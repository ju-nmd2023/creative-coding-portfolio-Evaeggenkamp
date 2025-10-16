function setup() {
  createCanvas(3000, 900);
}

function draw() {
  background(255);

  const divider = 100;
  const numMountains = 6;

  for (let m = 0; m < numMountains; m++) {
    const baseY = 250 + m * 50;

    noiseSeed(m * 1000);
    fill(50, 100, 150, 180 - m * 25);
    stroke(50, 50, 50, 150);
    strokeWeight(1);

    beginShape();
    for (let x = 0; x < width; x++) {
      const y = baseY + noise(x / divider, m * 0.5) * 120;
      vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
  }
}
