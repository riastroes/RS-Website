
//e1 = example1
var example1 = function( e1 ) {

  e1.setup = function() {
    e1.createCanvas(400,320);
  };

  e1.draw = function() {
    e1.noStroke();
    e1.fill(120);
    //head
    e1.ellipse(200, 30, 50, 50);
    e1.rect(195,50,10,20);
    //belly
    e1.rect(180, 70, 40, 100);
    //legs
    e1.triangle(200, 150, 220, 150, 250, 250);
    e1.triangle(180, 150, 200, 150, 150, 250);
    //arms
    e1.triangle(200, 70, 220, 70, 250, 150);
    e1.triangle(180, 70, 200, 70, 150, 150);


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
    e2.triangle(e2.random(400), e2.random(300),
                e2.random(400), e2.random(300),
                e2.random(400), e2.random(300));

  };
};
var myp5example2 = new p5(example2);

//e3 = example3
var example3 = function( e3 ) {

  e3.setup = function() {
    e3.createCanvas(400,300);
  };

  e3.draw = function() {
    e3.stroke(255);
    e3.strokeWeight(2);
    e3.fill(0);
    e3.triangle(e3.random(400), e3.random(300),
                e3.random(400), e3.random(300),
                e3.random(400), e3.random(300));
  };
};

var myp5example3 = new p5(example3);

//e4 = example4
var example4 = function( e4 ) {

  e4.setup = function() {
    e4.createCanvas(400,300);
  };

  e4.draw = function() {
    e4.stroke(255);
    e4.strokeWeight(3);
    e4.fill(200);
    e4.rect(50,20, 40 ,e4.random(200));
    e4.fill(50);
    e4.rect(90,20, 30 ,e4.random(200));
    e4.fill(100);
    e4.rect(120,20, 40 ,e4.random(200));
    e4.fill(150);
    e4.rect(160,20, 20 ,e4.random(200));
    e4.fill(200);
    e4.rect(180,20, 40 ,e4.random(200));
    e4.fill(250);
    e4.rect(220,20, 30 ,e4.random(200));
    e4.fill(200);
    e4.rect(250,20, 40 ,e4.random(200));
    e4.fill(150);
    e4.rect(290,20, 20 ,e4.random(200));
    e4.fill(100);
    e4.rect(310,20, 40 ,e4.random(200));
    e4.fill(50);
    e4.rect(350,20, 30 ,e4.random(200));
  };
};

var myp5example4 = new p5(example4);

//e5 = example5
var example5 = function( e5 ) {

  e5.setup = function() {
    e5.createCanvas(400,300);
  };

  e5.draw = function() {
    e5.stroke(255);
    e5.fill(120);
    e5.triangle(200,100, 100,200, 300,200);
    e5.triangle(200,100, 110,210, 290,210);
    e5.triangle(200,100, 120,220, 280,220);
    e5.triangle(200,100, 130,230, 270,230);
    e5.triangle(200,100, 140,240, 260,240);
    e5.triangle(200,100, 150,250, 250,250);
    e5.triangle(200,100, 160,260, 240,260);

  };
};

var myp5example5 = new p5(example5);

//e6 = example6
var example6 = function( e6 ) {
e6.setup = function() {
   e6.createCanvas(400,300);
   e6.background(0);
}
e6.draw = function() {
  e6.stroke(255);
  e6.strokeWeight(1);
  e6.noFill();
  //e6.rect(e6.mouseX,e6.mouseY, 10,10);
  e6.ellipse(e6.mouseX + 10,e6.mouseY, 10,10);
  e6.ellipse(e6.mouseX - 10,e6.mouseY, 10,10);
  e6.ellipse(e6.mouseX,e6.mouseY + 10, 10,10);
  e6.ellipse(e6.mouseX,e6.mouseY -10, 10,10);

  };
};
var myp5example6 = new p5(example6);


//e7 = example7
var example7 = function( e7 ) {
e7.setup = function() {
   e7.createCanvas(441,101);

}
e7.draw = function() {
  e7.stroke(0);
  e7.strokeWeight(1);
  e7.fill(0);
  e7.rect(0,0,40,100);
  e7.fill(25);
  e7.rect(40,0,40,100);
  e7.fill(50);
  e7.rect(80,0,40,100);
  e7.fill(75);
  e7.rect(120,0,40,100);
  e7.fill(100);
  e7.rect(160,0,40,100);
  e7.fill(125);
  e7.rect(200,0,40,100);
  e7.fill(150);
  e7.rect(240,0,40,100);
  e7.fill(175);
  e7.rect(280,0,40,100);
  e7.fill(200);
  e7.rect(320,0,40,100);
  e7.fill(225);
  e7.rect(360,0,40,100);
  e7.fill(255);
  e7.rect(400,0,40,100);

  };
};
var myp5example7 = new p5(example7);
