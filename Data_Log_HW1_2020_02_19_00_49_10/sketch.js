let capture;
let vScale = 4;
var clicks = 0;
let clickBool = false;

function setup() {
  createCanvas(400, 400);
  capture = createCapture(VIDEO);
  capture.hide();
  imageMode(CENTER);
}

function preload() {
  sound = loadSound('Phone.mp3');
  ghost = loadImage('pngfuel.com.png');
  fire = loadImage('fire.png');
}

function draw() {
  background(255, 252, 0);
  if (frameCount % 10 == 0) {
    tint(random(256), random(256), random(256))
  }
  image(capture, 200, 184, 150, 150);
  //noTint();
  scale(1 / 2)
  image(ghost, 400, 350);
  if (clicks >= 3) {
    image(fire, 400, 700, 125, 150);
  }
  for (let i = 375-clicks*5; i < 375+clicks*5; i++) {
    let ra = random(0, clicks*5);
    let rb = random(0, clicks*5);
    line((400 + rb)-clicks*5, i, (400 - ra)+clicks*5, i);
  }
  textSize(50);
  textAlign(CENTER, CENTER);
  text(clicks, 400, 710);
}

function mousePressed() {
  clicks++;
  sound.play();

  if (clicks >= 3) {
    clickBool = true;

  } else {}
}