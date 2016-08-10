function Bubble( x,y, size){
 this.x = x;
 this.y = y;
 this.size = size;
}
Bubble.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.tint(app.pal.randomImgColor(),20);
    this.thickness = 0.5;
    break;

  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
}
Bubble.prototype.move = function(){
  this.x += random(-1,1);

  if(random(10) < 1){
    this.y += 10;
  }
  else if(this.y < height-40){
    this.y += 2;
  }
  else{
    if(this.x < width/2){
      this.x -= 10;
    }
    else{
      this.x += 10;
    }

  }

}
Bubble.prototype.draw = function(){
  this.style(0);
  ellipse(this.x,this.y, this.size, this.size);
}
