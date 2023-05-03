let circles = [];

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  
  print("Introduction to Programming 1, Final, Josh Lin, 05/03/23");
}

function draw() {
  background(225);

  //circles
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size, circle.size);
  }

  //add when the mouse is pressed
  if (mouseIsPressed) {
    let circle = {
      x: mouseX,
      y: mouseY,
      size: random(10, 50),
      color: color(random(255), random(255), random(255), 100)
    };
    circles.push(circle);
  }

  //remove circles when the 'c' key is pressed
  if (keyIsPressed && key === 'c') {
    circles.splice(0, 1);
  }
}
