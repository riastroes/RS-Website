function Engine(){
  this.maxspeed = 0;
  this.direction = createVector(0,0);
  this.acceleration = createVector(0,0);
  this.velocity = createVector(0,0);
  this.position = createVector(0,0);
  this.maxforce = 0.05; // Maximum steering force
  this.a = random(100);
}
Engine.prototype.seek = function(target){

  var desired = p5.Vector.sub(target, this.position); // A vector pointing from the location to the target
  // Normalize desired and scale to maximum speed
  desired.normalize();
  desired.mult(this.maxspeed);
  // Steering = Desired minus Velocity
  var steer = p5.Vector.sub(desired, this.velocity);
  steer.limit(this.maxforce); // Limit to maximum steering force
  return steer;
}
Engine.prototype.wander = function(speed){
  this.maxspeed = speed;
  this.direction.x = map(noise(this.a),0,1,-speed,speed);
  this.direction.y = map(noise(10 + this.a),0,1,-speed,speed);
  this.a += 0.1;

  this.mindBorders(0.3);
  this.applyForce(this.direction);
}
Engine.prototype.go = function(speed){
  this.maxspeed = speed;
  if(frameCount % app.randomInt(100) == 0){
    this.direction.x = map(noise(this.a),0,1,-speed,speed);
    this.direction.y = map(noise(10 + this.a),0,1,-speed,speed);
    this.a += 0.1;
  }
  this.mindBorders(0.3);
  this.applyForce(this.direction);

}
Engine.prototype.mindBorders = function(speed){
  var force = createVector(0,0);
  if(this.position.x < 100){
    force.x = map(this.position.x, 0, 100, speed,0);
  }
  if(this.position.x > width - 100){
    force.x = map(this.position.x, width - 100, width, 0,-speed);
  }
  if(this.position.y < 100){
    force.y = map(this.position.y, 0, 100, speed,0);
  }
  if(this.position.y > height - 100){
    force.y = map(this.position.y, height - 100, height, 0,-speed);
  }
  if(force.x != 0 || force.y !=0){
    this.direction = force.copy();
  }


}
Engine.prototype.applyForce = function(force) {
  this.acceleration.add(force);
}
Engine.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.velocity.limit(this.maxspeed);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
}
