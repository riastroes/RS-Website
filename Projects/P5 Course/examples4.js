
//e1 = example1
var example1 = function( e1 ) {
  var x;
  var move;

  e1.setup = function() {
    e1.createCanvas(400,320);

    x = 0;
    move = 1;
  };

  e1.draw = function() {
    e1.background(255);
    e1.stroke(0);
    e1.fill(200);
    e1.rect(x, 200, 50,50);

    x += move;

    if(x > e1.width){
      move = -1;
    }
    if(x < 0){
      move = 1;
    }

  };
};

var myp5example1 = new p5(example1);

//e2 = example2
var example2 = function( e2 ) {
  var y;
  var grow;

  e2.setup = function() {
    e2.createCanvas(400,320);

    y = e2.height;
    grow = -1;
  };

  e2.draw = function() {
    e2.stroke(0);
    e2.fill(200);
    e2.rect(50, y, 50,-10);

    y += grow;

    if(y > e2.height){
      grow = -1;
    }
    if(y < 0){
      grow = 1;
    }

  };
};
var myp5example2 = new p5(example2);

//e3 = example3
var example3 = function( e3 ) {

  e3.setup = function() {
    e3.createCanvas(400,320);
    e3.background(150);

  };

  e3.draw = function() {
    e3.stroke(255);
    e3.fill(0);
    e3.strokeWeight(3);
    if(e3.mouseIsPressed){
      e3.ellipse(e3.mouseX, e3.mouseY, 20,20);
    }
    if(e3.keyIsPressed){
      e3.rect(e3.mouseX, e3.mouseY, 50,50);
    }
  };
};
var myp5example3 = new p5(example3);
