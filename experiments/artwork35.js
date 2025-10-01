console.log("artwork35.js loaded");

window.addEventListener("load", () => {
  console.log("iframe window loaded, safe to run artwork35");

  let t = 0;
  let synth;

  function setup() {
    console.log("artwork35 setup called");
    createCanvas(innerWidth, innerHeight);
    synth = new Tone.Synth().toDestination();
    background(55);
  }

  function draw() {
    if (frameCount === 1) console.log("artwork35 draw started");

    background(10, 20);
    noStroke();

    let x = width / 2 + sin(3 * t) * 350;
    let y = height / 3 + sin(5 * t) * 350;

    fill(random(235), 40, 200, 100);
    ellipse(x, y, random(30, 60));

    fill(1, random(25), 100, 180);
    ellipse(width - x, height - y, random(30, 60));

    fill(40, random(25), 200, 180);
    ellipse(x, height - y, random(30, 40));
    ellipse(width - x, y, random(30, 40));

    t += 0.05;
  }

  function mousePressed() {
    console.log("mouse pressed - triggering Tone.js synth");
    Tone.start();
    const notes = ["C4", "D4", "E4", "G4", "A4"];
    const note = random(notes);
    synth.triggerAttackRelease(note, "8n");
  }
});
