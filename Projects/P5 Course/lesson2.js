var size;
function setup(){
  var canvas = createCanvas(windowWidth, 10000);
  canvas.style("z-index",0);
  rectMode(CENTER)
  size  =10;


}
function draw(){
  if(mouseIsPressed){
    size += 5;

    stroke(255,189,240);
    strokeWeight(1);
    noFill();

    ellipse(mouseX, mouseY,size, size);
  }
  else{
    background(255);
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
  var code = localStorage.getItem("lesson2");
  elem = document.getElementById("inCode");
  elem.value = code;
  setCode();

}
function setCode(){
  block = document.getElementById("divFillCode");
  elem = document.getElementById("inCode");
  msg = document.getElementById("divMsg");
  lesson = document.getElementById("divLesson");
  if(elem.value == "rectangles"){
    lesson.style.display ="block";
    block.style.display ="none";
    localStorage.setItem("lesson2", "rectangles");
  }
  else if(elem.value != ""){
    msg.style.display = "block";
  }
}
