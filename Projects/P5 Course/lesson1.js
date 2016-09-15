var size;
function setup(){
  var canvas = createCanvas(windowWidth, 6000);
  canvas.style("z-index",0);
  size  =10;


}
function draw(){
  background(255,10);
  fill(color(255,255,200));
  noStroke();
  ellipse(mouseX, mouseY, size,size);
  if(pmouseX == mouseX && pmouseY == mouseY &&
    mouseX>0 && mouseX< width &&
    mouseY>0 && mouseY < height){
    size++;
  }
  else{
    size = 10;
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
    event.stopPropagation()
  }
  else {
    event.cancelBubble = true
  }

}
