function Group(max){
  this.creatures = [];
  this.max = max;
  this.leader = -1;
  this.init();

}
Group.prototype.init  = function(){
  for(var i = 0; i < this.max; i++){
    append(this.creatures, new Creature());
  }
  this.chooseLeader();
}

Group.prototype.chooseLeader = function(){
  //leader is the one that is closest to the center
  var center = createVector(width/3, height/4);
  var disttocenter = width;
  this.leader = -1;
  for(var i = 0; i < this.creatures.length; i++){
    var mydist =   p5.Vector.dist(center, this.creatures[i].pos)
    if(mydist < disttocenter){
      disttocenter = mydist;
      this.leader = i;
    }
  }
  if(this.leader>=0){
    for(var i = 0; i < this.creatures.length; i++){
      if(this.leader === i){
        this.creatures[i].leader = true;
      }
      else{
        this.creatures[i].leader = this.creatures[this.leader];
      }
    }
  }
}
Group.prototype.chooseAdventurestLeader = function(){
  //leader is the one farest away from the others
  var totdistance = [];
  this.leader = -1;

  for(var i = 0; i < this.creatures.length; i++){
    totdistance[i] = 0;
    for(var j = 0; j < this.creatures.length; j++){
      totdistance[i] += p5.Vector.dist(this.creatures[i].pos,this.creatures[j].pos);
    }
  }
  var maxdistance =0;
  for(var i = 0; i < totdistance.length; i++){
    if(totdistance[i] > maxdistance){
      this.leader = i;
      maxdistance = totdistance[i];
    }
  }
  if(this.leader>=0){
    for(var i = 0; i < this.creatures.length; i++){
      if(this.leader === i){
        this.creatures[i].leader = true;
      }
      else{
        this.creatures[i].leader = this.creatures[this.leader];
      }
    }
  }
}
Group.prototype.getLeader = function(){
  return this.creatures[this.leader];
}

Group.prototype.update = function(speed){
  this.getLeader().moveRandom(speed);
  for(var i = 0; i < this.creatures.length; i++){
      this.creatures[i].update( speed);
  }
}
Group.prototype.dans = function(speed){
  for(var i = 0; i < this.creatures.length-1; i++){
      this.creatures[i].moveTo( this.creatures[i+1].pos, speed);
  }
  this.creatures[this.creatures.length-1].moveTo( this.creatures[0].pos, speed);
}
Group.prototype.createBodyVectors = function(){
  this.center = this.getLeader().pos;
  var body = [];

  for(var i = 0; i < this.creatures.length; i++){

      var pos = this.creatures[i].pos.copy();
      pos.sub(this.center);
      append(body, pos);
  }
  return body;
}
Group.prototype.shrink = function(){
  this.center = createVector(width/3, height/4);
  for(var i = 0; i < this.creatures.length; i++){

      var heading = p5.Vector.sub(this.creatures[i].pos, this.center);
      heading.mult(0.03);
      this.creatures[i].pos.sub(heading);

  }
}
Group.prototype.grow = function(pos){
  this.center = pos.copy();
  for(var i = 0; i < this.creatures.length; i++){

      var heading = p5.Vector.sub(this.creatures[i].pos, this.center);
      heading.setMag(0.1);
      this.creatures[i].pos.add(heading);

  }
}
Group.prototype.setNearPos = function(pos){
  this.center = pos.copy();
  for(var i = 0; i < this.creatures.length; i++){
      this.creatures[i].pos = this.center.copy();
      this.creatures[i].heading = p5.Vector.fromAngle(i * (TWO_PI/this.creatures.length));
      //this.creatures[i].heading.setMag(random(0,20));
      this.creatures[i].pos.add(this.creatures[i].heading);
      this.creatures[i].center = this.center;
  }
}
Group.prototype.growUP = function(){
  var up;
  var speed = 1;
  for(var i = 0; i < this.creatures.length; i++){
      up = createVector(random(-speed,speed), random(-speed,0));
      this.creatures[i].heading.add(up);
      this.creatures[i].heading.normalize();
      this.creatures[i].heading.mult(3);
      this.creatures[i].pos.add(this.creatures[i].heading);


  }
}
Group.prototype.constrainVelocity = function(){
  for(var i = 0; i < this.creatures.length; i++){
    if(this.creatures[i].leader != true){
      this.creatures[i].walker.velocity.x = constrain(this.creatures[i].walker.velocity.x,0,0.2);
      this.creatures[i].walker.velocity.y = constrain(this.creatures[i].walker.velocity.y,0,0.2);
    }
  }
}
Group.prototype.style = function(nr){
  for(var i = 0; i < this.creatures.length; i++){
    this.creatures[i].style(nr);
  }
}
Group.prototype.drawLines = function(){
  for(var i = 0; i < this.creatures.length; i++){
    this.creatures[i].drawLines();
  }
}
Group.prototype.drawLineWeb = function(){
  for(var i = 0; i < this.creatures.length-1; i++){
    this.creatures[i].drawLineWeb(this.creatures[i+1]);
  }
  this.creatures[this.creatures.length-1].drawLineWeb(this.creatures[0]);
}
Group.prototype.drawCurvedWeb = function(){
  for(var i = 0; i < this.creatures.length-1; i++){
    this.creatures[i].drawCurvedWeb(this.creatures[i+1]);
  }
  this.creatures[this.creatures.length-1].drawCurvedWeb(this.creatures[0]);
}
Group.prototype.draw3 = function(){
  for(var i = 0; i < this.creatures.length; i++){
    this.creatures[i].style(3);
    this.creatures[i].draw2();
  }
}
Group.prototype.draw4 = function(){
  for(var i = 0; i < this.creatures.length; i++){
    this.creatures[i].style(2);
    this.creatures[i].draw2();
  }
}
Group.prototype.draw5 = function(shiftx){
  for(var i = 0; i < this.creatures.length; i++){
    this.creatures[i].style(3);
    this.creatures[i].draw3(shiftx);
  }
}
Group.prototype.drawBlobber = function(){
  var leader = this.getLeader();
  var blobber = new Blobber();
  blobber.initWithVectors(leader.pos, this.createBodyVectors());
  blobber.style(leader.strokecolor,leader.fillcolor, leader.thickness);
  blobber.draw();

}
