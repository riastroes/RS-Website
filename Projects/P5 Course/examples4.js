
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

//e4 = example4
var example4 = function( e4 ) {
  var x,y;
  var move_x, move_y;

  e4.setup = function() {
    e4.createCanvas(400,320);

    x = e4.random(e4.width);
    y = e4.random(e4.height);
    move_x = 1;
    move_y = 1;
  };

  e4.draw = function() {
    e4.background(150);
    e4.stroke(255);
    e4.strokeWeight(20);

    //control x
    if(x > e4.width){
      move_x = -1;
    }
    if(x < 0){
      move_x = 1;
    }

    //control y
    if(y > e4.height){
      move_y = -1;
    }
    if(y < 0){
      move_y = 1;
    }

    x += move_x;
    y += move_y;

    e4.point(x,y);

  };
};
var myp5example4 = new p5(example4);

//e5 = example5
var example5 = function( e5 ) {
  var x,y;
  var rectwidth;

  e5.setup = function() {
    e5.createCanvas(400,320);
    e5.background(220);



  };

  e5.draw = function() {

    //control frames
    if(e5.frameCount % 10 == 0){
      e5.stroke(0);
      e5.strokeWeight(30);
    }
    else{
      e5.stroke(220);
      e5.strokeWeight(10);
    }

    x = e5.random(e5.width);
    y = e5.random(e5.height);
    e5.point(x,y);

  };
};
var myp5example5 = new p5(example5);
