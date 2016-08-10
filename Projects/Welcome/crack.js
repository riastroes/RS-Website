function Crack(x, y, dir){
  this.path = [];
  this.pos = createVector(x, y);
  this.x = x;
  this.y = y;
  this.dir = dir.copy();
  this.crackthickness = 0.5;
  this.color = app.pal.randomImgColor();
  append(this.path, createVector(this.x, this.y));
}
Crack.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.tint(this.color,20);
    this.thickness = 0.5;
    break;

  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
}
Crack.prototype.go = function(){
  this.pos.add(p5.Vector.random2D().mult(10));
  this.pos.add(this.dir);

  append(this.path, this.pos.copy());
}
Crack.prototype.draw = function(){
  var out = false;
  this.style(0);
    if(this.path.length > 1){
      beginShape();
        for(var i = 0; i < this.path.length; i++){
          vertex(this.path[i].x - (i*this.crackthickness), this.path[i].y - (i*this.crackthickness));
          if(this.path[i].x < 0 || this.path[i].x > width || this.path[i].y < 0 || this.path[i].y > height){
            out = true;
          }
        }
        for(var i = this.path.length-1; i >= 0; i--){
          vertex(this.path[i].x + (i*this.crackthickness), this.path[i].y  + (i*this.crackthickness));
        }
      endShape(CLOSE);
      if(out){
       this.crackthickness+=0.1;
     }
    }
}
