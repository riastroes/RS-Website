/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Diamonds(pos, size, max){
  this.pos = pos.copy();
  this.size = size;
  this.p = [];
  this.create(max);

};
Diamonds.prototype.create = function(max){
  var to;
  var pos;
  var from =0;
  for(var i = 0; i < max; i++){
    to = random(from, (i+1)*(360/max));
    pos = app.posOnCircle(this.pos, this.size, 360,random(from, to));

    append(this.p, pos);
    from = to;

  }


}
Diamonds.prototype.minus = function(){
  var newp = [];
  for(var i = 0; i < this.p.length; i++){
    var not = app.randomInt(this.p.length);
    if(i != not){
      append(newp, this.p[i]);
    }
  }
  arrayCopy( newp, this.p);
}
Diamonds.prototype.scale = function(){
  var diff;
  for (var i = 0; i < this.p.length; i++){
    diff = p5.Vector.sub( this.pos, this.p[i]);
    diff.normalize();
    this.p[i].add(diff.mult(5));
  }
}
Diamonds.prototype.draw = function(nr){
  this.style(2);
  this.scale();
  beginShape();
   for(var i =0; i < this.p.length; i++){
     vertex(this.p[i].x, this.p[i].y);
   }
  endShape(CLOSE)
}
Diamonds.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.randomImgColor();
    this.thickness = 1;
    break;
    case 2:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.tint(app.pal.randomImgColor(),20);
    this.thickness = 0.1;
    break;



  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
