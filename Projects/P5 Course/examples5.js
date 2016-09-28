
//e1 = example1
var example1 = function( e1 ) {
var redSlider, greenSlider, blueSlider;
var redLabel, greenLabel, blueLabel;

  e1.setup = function() {

    e1.createCanvas(200,200);
    // create sliders
    redSlider = e1.createSlider(0,255, 255);
    greenSlider = e1.createSlider(0,255, 0);
    blueSlider = e1.createSlider(0,255, 0);

    redLabel = e1.createSpan('Red');
    redLabel.position(60, 360);
    redSlider.position(100, 360);

    greenLabel = e1.createSpan('Green');
    greenLabel.position(60, 385);
    greenSlider.position(100, 385);

    blueLabel = e1.createSpan('Blue');
    blueLabel.position(60, 415);
    blueSlider.position(100, 415);
  };

  e1.draw = function() {
    e1.background(255);

    e1.fill(redSlider.value(), greenSlider.value(), blueSlider.value());
    e1.strokeWeight(1);
    e1.ellipse(100, 100, 150, 150);

    e1.fill(50);
    e1.noStroke();
    e1.textSize(14);
    e1.textFont("Courier");
    e1.text('fill(' + redSlider.value() + ',' + greenSlider.value() + ',' + blueSlider.value() + ');', 25, 200);
  };

};

var myp5example1 = new p5(example1);

//e2 = example2
var example2 = function( e2 ) {
var redSlider, greenSlider, blueSlider;
var redLabel, greenLabel, blueLabel;

  e2.setup = function() {

    e2.createCanvas(200,200);
    // create sliders
    redSlider = e2.createSlider(0,255, 0);
    greenSlider = e2.createSlider(0,255, 255);
    blueSlider = e2.createSlider(0,255, 0);

    redLabel = e2.createSpan('Red');
    redLabel.position(320, 360);
    redSlider.position(360, 360);

    greenLabel = e2.createSpan('Green');
    greenLabel.position(320, 385);
    greenSlider.position(360, 385);

    blueLabel = e2.createSpan('Blue');
    blueLabel.position(320, 415);
    blueSlider.position(360, 415);
  };

  e2.draw = function() {
    e2.background(255);

    e2.fill(redSlider.value(), greenSlider.value(), blueSlider.value());
    e2.strokeWeight(1);
    e2.ellipse(100, 100, 150, 150);

    e2.fill(50);
    e2.noStroke();
    e2.textSize(14);
    e2.textFont("Courier");
    e2.text('fill(' + redSlider.value() + ',' + greenSlider.value() + ',' + blueSlider.value() + ');', 25, 200);
  };

};

var myp5example2 = new p5(example2);

//e3 = example3
var example3 = function( e3 ) {
var redSlider, greenSlider, blueSlider;
var redLabel, greenLabel, blueLabel;

  e3.setup = function() {

    e3.createCanvas(200,200);
    // create sliders
    redSlider = e3.createSlider(0,255,0);
    greenSlider = e3.createSlider(0,255,0);
    blueSlider = e3.createSlider(0,255,255);

    redLabel = e3.createSpan('Red');
    redLabel.position(560, 360);
    redSlider.position(600, 360);

    greenLabel = e3.createSpan('Green');
    greenLabel.position(560, 385);
    greenSlider.position(600, 385);

    blueLabel = e3.createSpan('Blue');
    blueLabel.position(560, 415);
    blueSlider.position(600, 415);
  };

  e3.draw = function() {
    e3.background(255);

    e3.fill(redSlider.value(), greenSlider.value(), blueSlider.value());
    e3.strokeWeight(1);
    e3.ellipse(100, 100, 150, 150);

    e3.fill(50);
    e3.noStroke();
    e3.textSize(14);
    e3.textFont("Courier");
    e3.text('fill(' + redSlider.value() + ',' + greenSlider.value() + ',' + blueSlider.value() + ');', 25, 200);
  };

};

var myp5example1 = new p5(example3);


//e4 = example4
var example4 = function( e4 ) {

var color1, color2;
var perc;

e4.setup = function() {
  e4.createCanvas(400, 100);
  color1 = e4.color(230,40,20);
  color2 = e4.color(20,40,230);
  perc = 0;


};
e4.draw = function() {
  var c = e4.lerpColor(color1, color2, perc );
  var x = (e4.frameCount % 400) * 4;
  e4.stroke(c);
  e4.strokeWeight(4);
  e4.line(x,0,x,e4.height);
  perc += 0.1;
  if(perc > 1){
    perc = 0;
  }

};

};

var myp5example4 = new p5(example4);

//e5 = example5
var example5 = function( e5 ) {

var color1, color2, color3, color4, color5, color6;
var alpha;

e5.setup = function() {
  e5.createCanvas(400, 300);

  alpha = 60;
  color1 = e5.color(20,255,180, alpha);
  color2 = e5.color(70,220,40, alpha);
  color3 = e5.color(120,170,255, alpha);
  color4 = e5.color(170,120,0, alpha);
  color5 = e5.color(220,70,210, alpha);
  color6 = e5.color(255,20,100, alpha);

  e5.noStroke();
};
e5.draw = function() {
  e5.fill(color1);
  e5.ellipse(50,50,100,100);
  e5.fill(color2);
  e5.ellipse(125,50,100,100);
  e5.fill(color3);
  e5.ellipse(200,50,100,100);

  e5.fill(color4);
  e5.ellipse(50,125,100,100);
  e5.fill(color5);
  e5.ellipse(125,125,100,100);
  e5.fill(color6);
  e5.ellipse(200,125,100,100);

  e5.noLoop();

};

};

var myp5example5 = new p5(example5);

//e6 = example6
var example6 = function( e6 ) {

var color1;
var alpha;
var size;


e6.setup = function() {
  e6.createCanvas(400, 255);
  alpha = 5;
  color1 = e6.color(220,70,210, alpha);

  size = e6.height;
  e6.frameRate(5);
  e6.noStroke();
};
e6.draw = function() {

  e6.fill(color1);
  e6.ellipse(e6.width/2, e6.height/2,size,size);
  size -= 10;
  if(size < 0){
    size = e6.height;
  }
  if(e6.mouseIsPressed){
    e6.background(255);
  }

};

};

var myp5example6 = new p5(example6);
