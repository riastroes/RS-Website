function Drop(x,y, acolor){
  this.pos = createVector(x,y);
  this.size = 5;
  this.color = acolor;
  this.a = random(100);
  this.dir = -1;
}
Drop.prototype.style = function(nr){
  switch(nr){
    case 0:
    this.strokecolor = app.pal.tint(color(130),30);
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = app.pal.tint(color(255),40);
    this.fillcolor = app.pal.tint(this.color,30);
    this.thickness = 0.3;
    break;
    case 2:
    this.strokecolor = app.pal.tint(this.color,60);
    this.fillcolor = app.pal.tint(this.color,10);

    this.thickness = 1;
    break;

  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
}
Drop.prototype.controlSize = function(min, max){
  if(this.size < min ){
    this.dir = 0.1;
  }
  if(this.size > max){
    this.dir = -0.1;
  }
  this.size += this.dir;
}
Drop.prototype.draw = function(){
  this.style(1);
  ellipse(this.pos.x,this.pos.y, this.size, this.size);
  this.pos.x  += map(noise(this.a),0,1,-0.5,0.5);
  this.pos.y +=1
  this.controlSize(1,10);

  this.a += 0.1;

}
Drop.prototype.draw2 = function(){
  this.style(2);
  ellipse(this.pos.x,this.pos.y, this.size, this.size);
  this.pos.x  += map(noise(this.a),0,1,-1,1);
  this.pos.y +=3;
  this.controlSize(-10,10);

  this.a += 0.1;
  this.style(2);
  if(this.pos.y < random(height-100, height)){
    ellipse(this.pos.x+ (this.size/6),this.pos.y - (this.size/6), (this.size/3), (this.size/3));
  }

}
