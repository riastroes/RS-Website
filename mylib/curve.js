function Curve(begin, end){
  this.begin = begin.copy();
  this.end = end.copy();
  this.control1 = this.begin.copy();
  this.control2 = this.end.copy();
  this.center = this.getCenter();
  this.controlradius =0;
  this.size = dist(this.begin.x, this.begin.y, this.end.x, this.end.y);
  this.angle = 0;
  this.controlradius = 0;
}
Curve.prototype.style = function(nr){
  if(nr == 0){
    stroke(app.pal.colors[0]);
    noFill();
    strokeWeight(1);
  }
  if(nr == 1){
    stroke(app.pal.colors[0]);
    fill(app.pal.colors[1]);
    strokeWeight(1);
  }
  if(nr == 2){
      stroke(app.pal.randomImgColor());
      fill(app.pal.tint(app.pal.randomImgColor(),10));
      strokeWeight(1);
  }
}
Curve.prototype.curve = function(factor){
  this.controlradius = this.size * factor;
  this.control1 = app.posOnCircle(this.center, this.controlradius, TWO_PI, this.angle);
  this.control2 = app.posOnCircle(this.center, this.controlradius, TWO_PI, this.angle);
}
Curve.prototype.getCenter = function(){
  var center;
  center = createVector((this.begin.x + this.end.x)/2, (this.begin.y + this.end.y)/2);
  return center;
}
Curve.prototype.showStructure = function(){
  this.style(0);
  ellipse(this.begin.x,this.begin.y, 5,5);
  ellipse(this.center.x, this.center.y, 10,10);
  ellipse(this.end.x, this.end.y, 5,5);
  ellipse(this.center.x, this.center.y, this.controlradius*2, this.controlradius*2);
  ellipse(this.control1.x,this.control1.y, 3,3);
  ellipse(this.control2.x,this.control2.y, 3,3);
}
Curve.prototype.draw = function(){
  beginShape();
    curveVertex(this.control1.x, this.control1.y);
    curveVertex(this.begin.x, this.begin.y);
    curveVertex(this.end.x, this.end.y);
    curveVertex(this.control2.x, this.control2.y);
  endShape();
}
