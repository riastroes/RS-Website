function Walker(pos){
  //don't copy the pos, but use an pointer to the location of an object.
  this.location = pos;
  this.velocity = createVector(0,0) //snelheid
  this.acceleration = createVector(0,0)//versnelling
  this.direction = createVector(0,0)//direction
  this.speed = 0;
  this.force = createVector(0,0);

}
Walker.prototype.randomWalk = function(speed, size){
  this.speed = speed;
  this.direction = createVector(random(-speed, speed), random(-speed, speed));
  this.direction.normalize();
  this.direction.add(this.feelForce(1));
  this.acceleration = this.direction.copy();
  this.acceleration.mult(this.speed);
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);

}
Walker.prototype.feelForce = function(power){

  //borders
  this.force.x = map(this.location.x,0,width, power,-power)
  this.force.y = map(this.location.y, 0, height, power, -power);


  return this.force;
}
Walker.prototype.moveDir = function(dir, speed, size){

  this.speed = speed;
  this.direction = dir.copy();
  this.direction.normalize();
  this.direction.add(this.feelForce(1));
  this.acceleration = this.direction.copy();
  this.acceleration.mult(this.speed);
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);

}
Walker.prototype.moveTo = function(pos, speed, size){
  //vector def: magnitude * direction
  this.speed = speed;

  this.direction = pos.copy();
  this.direction.sub(this.location);
  this.direction.normalize();
  this.direction.add(this.feelForce(0.5));
  this.acceleration = this.direction.copy();
  this.acceleration.mult(this.speed);
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);

}
