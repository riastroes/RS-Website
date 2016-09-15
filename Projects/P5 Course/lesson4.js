var size;
function setup(){
  var canvas = createCanvas(windowWidth, 10000);
  canvas.style("z-index",0);

  size = 0;
 frameRate(10);

}
function draw(){
  background(255);
  fill(255,35,92);
  stroke(255);
  rect(0,0,windowWidth,200);

  fill(255);
  noStroke();
  rect(0,50, size,30);

  size++;

  if(size > 500){
    size = 0;
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
  var code = localStorage.getItem("lesson4");
  elem = document.getElementById("inCode");
  elem.value = code;
  setCode();

}
function setCode(){
  block = document.getElementById("divFillCode");
  elem = document.getElementById("inCode");
  msg = document.getElementById("divMsg");
  lesson = document.getElementById("divLesson");
  if(elem.value == "color"){
    lesson.style.display ="block";
    block.style.display ="none";
    localStorage.setItem("lesson4", "color");
  }
  else{
    msg.style.display = "block";
  }
}
