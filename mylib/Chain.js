function Chain(start,distance, length,  min , max, margin){
  this.pos =[];
  this.pos[0] = start.copy();
  this.distance = distance;
  this.margin = margin;
  for( var i = 0; i < length; i++){
    this.add(min,max);
  }
  return this.pos;
}
Chain.prototype.add = function(min,max){
  var newpos;
  var found = false;
  var trycounter = 0;
  while(!found && trycounter <100){
    newpos= app.posOnPie(createVector(0,0),1,min, max,10, app.randomInt(10));
    newpos.mult(this.distance);
    newpos.add(this.pos[this.pos.length-1]);
    if(newpos.x > this.margin && newpos.x < width-this.margin &&
       newpos.y > 0 && newpos.y < height-this.margin){
         found = true;
         break;
       }
    trycounter++;
  }
  if(found){
    append(this.pos,newpos);
  }
}

Chain.prototype.show = function(){
  stroke(0);
  ellipse(this.pos[0].x,this.pos[0],10,10);
  for(var i = 1; i < this.pos.length; i++){
    line(this.pos[i-1].x,this.pos[i-1].y,this.pos[i].x,this.pos[i].y)
    ellipse(this.pos[i].x,this.pos[i],10,10)
  }
}
