
//e1 = example1
var example1 = function( e1 ) {

  e1.setup = function() {
    e1.createCanvas(400,320);
  };

  e1.draw = function() {
    e1.stroke(0);
        e1.strokeWeight(10);
        e1.line(100,300, 100, 100);
        e1.strokeWeight(5);
        e1.line(150,300, 150, 120);
        e1.strokeWeight(5);
        e1.line(200,300, 200, 80);
        e1.strokeWeight(10);
        e1.line(250,300, 250, 220);
        e1.strokeWeight(3);
        e1.line(300,300, 300, 250);
        e1.strokeWeight(3);
        e1.line(350,300, 350, 150);
  };
};

var myp5example1 = new p5(example1);


//e2 = example2
var example2 = function( e2 ) {

  e2.setup = function() {
    e2.createCanvas(400,300);
  };

  e2.draw = function() {
    e2.stroke(e2.random(255));
    e2.strokeWeight(10);
    e2.point(e2.random(400), e2.random(300));
  };
};

var myp5example2 = new p5(example2);

//e3 = example3
var example3 = function( e3 ) {

  e3.setup = function() {
    e3.createCanvas(400,300);
    e3.frameRate(10);
  };

  e3.draw = function() {
    e3.background(200);
    e3.stroke(e3.random(255));
    e3.strokeWeight(10);
    e3.line(e3.random(400), e3.random(300),e3.random(400), e3.random(300));
  };
};

var myp5example3 = new p5(example3);

//e4 = example4
var example4 = function( e4 ) {

  e4.setup = function() {
    e4.createCanvas(400,300);
    e4.background(0);
  };

  e4.draw = function() {

    e4.stroke(e4.random(255));
    e4.strokeWeight(1);
    e4.line(e4.random(400), e4.random(300),
    200,150);

  };
};

var myp5example4 = new p5(example4);


//e5 = example5
var example5 = function( e5 ) {
  e5.setup = function() {
    e5.createCanvas(400,300);
    e5.background(230);

  };

  e5.draw = function() {

    var size = e5.random(100);
    e5.stroke(e5.random(255));
    e5.ellipse(e5.mouseX, e5.mouseY, size,size);
  };
};
var myp5example5 = new p5(example5);

//e6 = example6
var example6 = function( e6 ) {
  var x;

  e6.setup = function() {
    e6.createCanvas(400,300);
    x = 0;
  };

  e6.draw = function() {
    e6.stroke(230);
    e6.line(200,0,x,300);
    x = x+10;
  };
};
var myp5example6 = new p5(example6);


//e7 = example7
var example7 = function( e7 ) {
  var x;

  e7.setup = function() {
    e7.createCanvas(400,300);
    x = 0;
  };

  e7.draw = function() {
    e7.background(240);
    e7.stroke(230);
    e7.rect(x,200,100,40);
    x += 1;

    e7.rect(x -100,100, 100,40);
    e7.rect(x -300,100, 100,40);
    e7.rect(x -700,100, 100,40);
  };
};
var myp5example7 = new p5(example7);


//e8 = example8
var example8 = function( e8 ) {
e8.setup = function() {
   e8.createCanvas(400,300);
   e8.background(0);
}
e8.draw = function() {
  e8.stroke(255);
  e8.strokeWeight(1);
  e8.line(e8.mouseX,e8.mouseY, e8.mouseX +10,e8.mouseY);

  };
};
var myp5example8 = new p5(example8);
