var color1, color2, color3;
var x,y;
var stop;

function setup(){
  var canvas = createCanvas(windowWidth, 10000);
  canvas.style("z-index",0);

  color1 = color(255,35,92);
  color2 = color("#009999");
  color3 = color("#664C80");


  background(255);
  fill(color2);
  stroke(color3);
  rect(0,0,windowWidth,150);


  fill(color1);
  stroke(color3);
  rect(30,30,windowWidth-60,90);
  stop = false
}
function draw(){

  x = random(50, width-50);
  if(stop){
    y = random(150, height);
    fill(random(255),random(255),random(255),40);
  }
  else{
    fill(color3);
    y= random(50,120);
  }


  stroke(255);
  triangle( x,y , x + random(20), y - random(20) , x - random(20), y - random(20));

  if(mouseIsPressed){
    stop = true;
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
  var code = localStorage.getItem("lesson5");
  elem = document.getElementById("inCode");
  elem.value = code;
  setCode();

}
function setCode(){
  block = document.getElementById("divFillCode");
  elem = document.getElementById("inCode");
  msg = document.getElementById("divMsg");
  lesson = document.getElementById("divLesson");
  if(elem.value == "rainbow"){
    lesson.style.display ="block";
    block.style.display ="none";
    localStorage.setItem("lesson5", "rainbow");
  }
  else if(elem.value != ""){
    msg.style.display = "block";
  }
}
