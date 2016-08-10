function Circle(vector, radius){
  this.center = vector.copy();
  this.radius = radius;
  this.strokecolor = app.pal.colors[0];
  this.fillcolor = app.pal.colors[1];
  this.thickness = 1;
  this.noiseseed = random(10);
  this.noise = 0;
  this.speed = 0;
  this.hasmoved = false;
  this.alive = true;
};
Circle.prototype.style = function(strokecolor, fillcolor, thickness){
  if(app.is(strokecolor)|| !strokecolor){
    this.strokecolor = strokecolor;
  }
  if(app.is(fillcolor) || !fillcolor){
    this.fillcolor = fillcolor;
  }
  if(app.is(thickness)){
    this.thickness = thickness;
  }
};
Circle.prototype.scale = function(factor, minfactor, maxfactor){
  var newradius = this.radius;
  newradius += this.radius * factor;
  if(newradius > minfactor && newradius < maxfactor){
    this.radius = newradius;
  }
  else if(newradius <= minfactor){
    this.alive = false;
  }
  else{
    //do nothing
  }
};
Circle.prototype.overlap = function(circle){
  var d;
  var isoverlap = false;
  if(this.center.dist(circle.center)< (this.radius + circle.radius)){
    isoverlap = true;
  }
  return isoverlap;
}
Circle.prototype.move = function(index, circles, speed){
  var newpos, isoverlap, c, i ;
  this.hasmoved = false;
  this.speed = speed;
  newpos = this.center.copy();
  newpos.x += map(noise(this.noiseseed + this.noise), 0,1, -1,1);
  newpos.y += map(noise(this.noiseseed + this.noise), 0,1, -1,1);
  isoverlap = false;
  for(i = 0; i < circles.length; i++){
    if(i != index && circles[i].alive){
      if(this.overlap(circles[i])){
        isoverlap = true;
        break;
      }
    }
  }
  if(!isoverlap){
    this.center = newpos.copy();
    this.hasmoved = true;
  }

  this.noise += this.speed;
  return this.hasmoved;
}
Circle.prototype.moveTo = function(index, circles, speed, pos){
  var newpos, isoverlap, c, i ;
  this.hasmoved = false;
  this.speed = speed;
  this.dir = p5.Vector.sub(pos, this.center);
  this.dir.normalize();
  this.dir.mag(speed);

  newpos = p5.Vector.add(this.center, this.dir);

  isoverlap = false;
  for(i = 0; i < circles.length; i++){
    if(i != index && circles[i].alive){
      if(this.overlap(circles[i])){
        isoverlap = true;
        break;
      }
    }
  }
  if(!isoverlap){
    this.center = newpos.copy();
    this.hasmoved = true;
  }

  this.noise += this.speed;
  return this.hasmoved;
}
Circle.prototype.draw = function(){
  if(this.alive){
  if(!this.strokecolor){
    noStroke();
  }
  else{
    stroke(this.strokecolor);
  }
  if(!this.fillcolor){
    noFill();
  }
  else{
    fill(this.fillcolor);
  }
  strokeWeight(this.thickness);
  ellipse(this.center.x, this.center.y, this.radius*2, this.radius*2);
}
};
