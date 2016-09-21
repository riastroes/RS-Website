var size;
var y;
function setup(){
  var canvas = createCanvas(windowWidth, 10000);
  canvas.style("z-index",0);

  size  =10;
  y = -100;
 frameRate(10);

}
function draw(){
  background(255);
  fill(255,35,92);
  stroke(255);
  rect(0,0,windowWidth,200);
  var s = width/8;
  fill(255);
  noStroke();
  ellipse(50,y,s,s);
  ellipse(width/4,y, s,s);
  ellipse(width/2,y, s,s);
  ellipse((width/4)*3,y, s,s);
  ellipse(width-50,y, s,s);
  y += 1;
  if(y > 200 + s){
    y = -s;
  }


  if(pmouseX == mouseX && pmouseY == mouseY &&
    mouseX>0 && mouseX < width &&
    mouseY>0 && mouseY < height){
    size+=10;
    stroke(255,35,92);
    strokeWeight(1);
    noFill();
    line(mouseX - width, mouseY+size, width*2, mouseY+size);
  }
  else{
    size = 0;
  }
}

function show(elem){
  if(elem.style.display == "block"){
    //elem.style.display = "none";
  }
  else{
    elem.style.display = "block";
  }
  if (event.stopPropagation) {
    event.stopPropagation();
  }
  else {
    event.cancelBubble = true;
  }

}
function getCode(){
  var code = localStorage.getItem("lesson3");
  elem = document.getElementById("inCode");
  elem.value = code;
  setCode();

}
function setCode(){
  block = document.getElementById("divFillCode");
  elem = document.getElementById("inCode");
  msg = document.getElementById("divMsg");
  lesson = document.getElementById("divLesson");
  if(elem.value == "lines"){
    lesson.style.display ="block";
    block.style.display ="none";
    localStorage.setItem("lesson3", "lines");
  }
  else if(elem.value != ""){
    msg.style.display = "block";
  }
}
