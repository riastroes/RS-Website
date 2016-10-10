function Chain(start,distance, length,  min , max, margin, conditionnr){
  this.pos =[];
  this.pos[0] = start.copy();
  this.distance = distance;
  this.margin = margin;
  for( var i = 0; i < length; i++){
    this.add(min,max, conditionnr);
  }

}
Chain.prototype.add = function(min,max, conditionnr){
  var newpos;
  var found = false;
  var trycounter = 0;
  while(!found && trycounter <100){
    newpos= app.posOnPie(createVector(0,0),1,min, max,10, app.randomInt(10));
    newpos.mult(this.distance);
    newpos.add(this.pos[this.pos.length-1]);
    if(this.checkMargin(newpos)){
         found = true;
         break;
    }
    trycounter++;
  }
  if(found){
    append(this.pos,newpos);
  }
}
Chain.prototype.checkMargin = function(pos){
  var isOk = false;
  if(  pos.x > this.margin && pos.x < (width-this.margin) &&
       pos.y > this.margin && pos.y < (height-this.margin) ){
    isOk = true;
  }
  return isOk;
}
Chain.prototype.checkCondition = function(nr, pos){
  var isOk = true;
  switch(nr){
    case 0:{
      //distance to hole < radius
      this.center = createVector(width/2, height/2);
      if(dist(pos.x, pos.y, this.center.x, this.center.y) < 20){
        isOk = false;
      }
      this.center = createVector(100, 100);
      if(dist(pos.x, pos.y, this.center.x, this.center.y) < 70){
        isOk = false;
      }
      this.center = createVector(500, 150);
      if(dist(pos.x, pos.y, this.center.x, this.center.y) < 50){
        isOk = false;
      }
      this.center = createVector(650, height-75);
      if(dist(pos.x, pos.y, this.center.x, this.center.y) < 30){
        isOk = false;
      }
      this.center = createVector(850, 75);
      if(dist(pos.x, pos.y, this.center.x, this.center.y) < 40){
        isOk = false;
      }
      this.center = createVector(1100, 600);
      if(dist(pos.x, pos.y, this.center.x, this.center.y) < 100){
        isOk = false;
      }
      break;
    }
    case 1:{
      this.center = createVector(width-500, 180);
      if(dist(pos.x, pos.y, this.center.x, this.center.y) < 100){
        isOk = false;
      }
      this.center = createVector(width-500, 600);
      if(dist(pos.x, pos.y, this.center.x, this.center.y) < 200){
        isOk = false;
      }


    }
  }
  return isOk;
}
Chain.prototype.addForce = function(){
  var center = createVector(0,0);
  var force;
  for(var i = 0; i < this.pos.length; i++){

    force = p5.Vector.sub(this.pos[i], center);
    force.normalize();
    force.mult(100);
    this.pos[i].add(force);
  }
  var center = createVector(width,0);
  var force;
  for(var i = 0; i < this.pos.length; i++){

    force = p5.Vector.sub(this.pos[i], center);
    force.normalize();
    force.mult(100);
    this.pos[i].add(force);
  }
  var center = createVector(width-500, 550);
  var force;
  for(var i = 0; i < this.pos.length; i++){

    force = p5.Vector.sub(center,this.pos[i] );
    force.normalize();
    force.mult(100);
    this.pos[i].add(force);
  }
}
Chain.prototype.show = function(){

  ellipse(this.pos[0].x,this.pos[0],10,10);
  for(var i = 1; i < this.pos.length; i++){

    line(this.pos[i-1].x,this.pos[i-1].y,this.pos[i].x,this.pos[i].y)
    ellipse(this.pos[i].x,this.pos[i],10,10);
  }
}
Chain.prototype.svg = function(){

  beginShape();
  for(var i = 0; i < this.pos.length; i++){
    if(this.checkCondition(1, this.pos[i])){
          vertex(this.pos[i].x, this.pos[i].y);
    }
  }
  endShape();
}
Chain.prototype.style = function(nr,a){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;

    case 1:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = false;
    this.thickness = 1;
    break;
    case 2:
    this.strokecolor = lerpColor(app.pal.colors[8],app.pal.colors[7], a);
    this.fillcolor = false;
    this.thickness = 1;
    break;


  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
