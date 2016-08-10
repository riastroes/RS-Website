function Polygon(pos, maxcorners, size, rot){
  this.pos = pos.copy();
  this.maxcorners = maxcorners;
  this.corners = [];
  this.size = size;
  this.rot = rot; //radians 0 - TWO_PI
  this.pg = createGraphics(this.size*2,this.size*2);

  this.strokecolor = color(0);
  this.fillcolor = color(255);
  this.strokeweight =1;
    this.init();
}
Polygon.prototype.init = function(){

  for(var c = 0; c < this.maxcorners; c++){
    var pgcenter =createVector((this.size/2),(this.size/2));
    var pos = posOnCircle(pgcenter, this.size, this.maxcorners, c);
    pos.add(pgcenter);
    append(this.corners, pos);
  }
  this.drawpg();
};
Polygon.prototype.style = function(strokecolor, fillcolor, strokeweight){
  if((strokecolor != this.strokecolor)||
      (fillcolor != this.fillcolor)||
      (strokeweight != this.strokeweight)){
    this.strokecolor = strokecolor;
    this.fillcolor = fillcolor;
    this.strokeweight = strokeweight;
    app.style.pg(this.pg, strokecolor, fillcolor, strokeweight);
    this.drawpg();
  }
};
Polygon.prototype.drawpg = function(){
  this.pg.beginShape();
      for(var i = 0; i < this.maxcorners; i +=1){
        this.pg.vertex(this.corners[i].x, this.corners[i].y);
      }
  this.pg.endShape(CLOSE);

};
Polygon.prototype.draw = function(){
   push();
    translate(this.pos.x, this.pos.y);
    rotate(this.rot);
    imageMode(CENTER);
    image(this.pg, 0,0);
  pop();
};
