/**
 * Created by Ria Stroes on 12-4-2016.
 */
function Project(){
  this.smoke = [];
  this.sky = new Sky();
  this.water = new Water();
  this.dok = new Dok();
  this.ferry = new Ferry();
  this.dokL = createVector(((this.ferry.width/2)-20), height/3*2);
  this.dokR = createVector(width -((this.ferry.width/2)-20), height/3*2);
  this.ferry.startEngine(this.dokL, this.dokR,0);
  this.pos;
  this.crossing = 0;
  this.wave = new Wave();
  this.peoples = [];

 this.createPeople(5);

};
Project.prototype.createPeople = function(count){
  this.peoples= [];
  for(i =0; i < count ; i++){
    append(this.peoples, new People());
  }
}
Project.prototype.loadPeopleLeft = function(){
  var i;
  for(i =0; i < this.peoples.length; i++){
    if(this.peoples[i].type == 0){
      this.peoples[i].jumping = 0;
      this.peoples[i].move(app.randomInt(3));
      this.peoples[i].draw();
    }
  }
}
Project.prototype.loadPeopleRight = function(){
  var i;
  for(i =0; i < this.peoples.length; i++){
    if(this.peoples[i].type == 1){
      this.peoples[i].jumping = 0;
      this.peoples[i].move(app.randomInt(3));
      this.peoples[i].draw();
    }
  }
}
Project.prototype.unloadPeopleLeft = function(){
  var i;
  for(i =0; i < this.peoples.length; i++){
    if(this.peoples[i].type == 0){

      this.peoples[i].move(app.randomInt(3));
      this.peoples[i].draw();
    }
  }
}
Project.prototype.unloadPeopleRight = function(){
  var i;
  for(i =0; i < this.peoples.length; i++){
    if(this.peoples[i].type == 1){
      this.peoples[i].move(app.randomInt(3));
      this.peoples[i].draw();
    }
  }
}
Project.prototype.checkBall = function(){
  var bal = document.getElementById("bal");
  var pos = bal.attributes[1].value.split(" ");
  if(pos[1] < -2.5 && pos[2] < -11 && abs((width/2) -this.ferry.pos.x) < 50){

    app.style.text(47, CENTER, app.pal.colors[1]);
    text("BOOM", width/2, height/2);
    for(var i = 0; i < this.peoples.length; i += 1){
      this.peoples[i].jump();
    }
    this.ferry.boom = true;
    app.sounds[1].play();

  }
}
Project.prototype.ferryPeopleLeftToRight = function(){
  var i, x,y;

  this.checkBall();
  for(i =0; i < this.peoples.length; i++){

    if(this.peoples[i].type == 0){

      if(this.peoples[i].t == this.peoples[i].track.pos.length-1 ){
        x = this.peoples[i].track.pos[this.peoples[i].t].x + (this.ferry.speed * this.ferry.dir);
        y = this.peoples[i].track.pos[this.peoples[i].t].y;
        append(this.peoples[i].track.pos,createVector(x,y))

      }

      this.peoples[i].move(1);
      this.peoples[i].draw();
    }
  }
};
Project.prototype.ferryPeopleRightToLeft = function(){
  var i, x,y;
  this.checkBall();
  for(i =0; i < this.peoples.length; i++){
    if(this.peoples[i].type == 1){

      if(this.peoples[i].t == this.peoples[i].track.pos.length-1 ){
        x = this.peoples[i].track.pos[this.peoples[i].t].x + (this.ferry.speed * this.ferry.dir);
        y = this.peoples[i].track.pos[this.peoples[i].t].y;
        append(this.peoples[i].track.pos,createVector(x,y))

      }

      this.peoples[i].move(1);
      this.peoples[i].draw();
    }
  }
};
Project.prototype.peopleLeaveRight = function(){
  var i ;
  for(i =0; i < this.peoples.length; i++){
    if(this.peoples[i].type == 0){

      this.peoples[i].track.createTrackRightFromBoot();

    }
  }
}
Project.prototype.peopleLeaveLeft = function(){
  var i ;
  for(i =0; i < this.peoples.length; i++){
    if(this.peoples[i].type == 1){

      this.peoples[i].track.createTrackLeftFromBoot();
    }
  }
}
Project.prototype.startLeft = function(){
  var i;
  this.ferry.startEngine(this.dokL, this.dokR,1);

};
Project.prototype.startRight = function(){
  var i;
  this.ferry.startEngine(this.dokR, this.dokL, -1);

};
Project.prototype.goRight = function(){
  this.ferry.goRight(3);
  this.wave.makeWave(this.ferry.pos, this.ferry.bow);
  if(random(10) < 1){
        append(this.smoke, new Smoke(this.ferry.pipe));
  }
};
Project.prototype.goLeft = function(){
  this.ferry.goLeft(3);
  this.wave.makeWave(this.ferry.pos, this.ferry.bow);
  if(random(10) < 1){
    append(this.smoke, new Smoke(this.ferry.pipe));
  }
};
Project.prototype.drawSmoke = function(){
  var i;
  for(i = 0; i < this.smoke.length; i++){
    this.smoke[i].draw();
  }
}
Project.prototype.stopWave = function(dir){

  this.wave = new Wave();

}
Project.prototype.stopRight = function(){
  var i, dir;
  this.ferry.smoke = [];
  this.stopWave();
  this.ferry.stop();
  this.peopleLeaveRight();
  this.crossing++;

};
Project.prototype.stopLeft = function(){
  var i, dir;
  this.ferry.smoke = [];
  this.stopWave();
  this.ferry.stop();
  this.peopleLeaveLeft();
  this.crossing++;
};
Project.prototype.drawbg = function(){

  this.sky.draw();
  this.water.draw();
  this.wave.draw();
  this.dok.draw();

};
Project.prototype.draw = function(){

  this.ferry.draw();
  this.drawSmoke();

};
/*********************SKY***************************/
function Sky(){
  this.h = 0;
}
Sky.prototype.style = function(nr){
  var bal = document.getElementById("bal");
  var pos = bal.attributes[1].value.split(" ");

  this.h = map(pos[1],-5, 5, 0,1);
  if(nr == 1){
    fill(lerpColor(color(24, 138, 236), color(255,255,0), this.h));
    noStroke();
    strokeWeight(0);
  }

}
Sky.prototype.draw = function(){
  this.style(1);
  rect(0,0, width, height/4);
}
/*********************SKY***************************/
function Water(){}
Water.prototype.style = function(nr){
  if(nr == 1){
    fill(app.pal.colors[4]);
    noStroke()
    strokeWeight(0);
  }
}
Water.prototype.draw = function(){
  this.style(1);
  rect(0,height/4, width, height);

}
/*********************DOK***************************/
function Dok(){}
Dok.prototype.style = function(nr){
  if(nr == 1){
    fill(app.pal.colors[2]);
    stroke(app.pal.colors[0]);
    strokeWeight(1);
  }
  else if(nr == 2){
    fill(app.pal.colors[3]);
    stroke(app.pal.colors[0]);
    strokeWeight(1);
  }
  else if(nr == 3){
    fill(app.pal.colors[5]);
    stroke(app.pal.colors[0]);
    strokeWeight(1);
  }
}
Dok.prototype.construct = function(){

  //left pier
  this.style(2);
  beginShape();
    vertex(0,height/3);
    vertex(0,height/3 - 10);
    vertex(200,height/3 - 10);
    vertex(200,height/3);
  endShape(CLOSE);
  //left dok
  this.style(1);
  beginShape();
    vertex(0,height/3*2);
    vertex(0,height/3);
    vertex(100,height/3);
  endShape(CLOSE);
  this.style(3);
  beginShape();
    vertex(0,(height/3*2)+ 20);
    vertex(100,height/3 +20);
    vertex(200,height/3 +20);
    vertex(200,height/3);
    vertex(100,height/3);
    vertex(0,(height/3*2));
  endShape(CLOSE);
  //right dok
  this.style(1);
  beginShape();
    vertex(width,height/3*2);
    vertex(width,height/3);
    vertex(width-100,height/3);
  endShape(CLOSE);
    //right pier
    this.style(2);
  beginShape();
    vertex(width,height/3);
    vertex(width,height/3 - 10);
    vertex(width -200,height/3 - 10);
    vertex(width -200,height/3);
  endShape(CLOSE);
  this.style(3);
  beginShape();
    vertex(width,(height/3*2)+ 20);
    vertex(width-100,height/3 +20);
    vertex(width-200,height/3 +20);
    vertex(width-200,height/3);
    vertex(width-100,height/3);
    vertex(width,(height/3*2));
  endShape(CLOSE);
}
Dok.prototype.draw = function(){
  this.style();
  this.construct();
};
/*********************Ferry***************************/
function Ferry(){
  this.pipe;
  this.dir = 1;
  this.speed;
  this.width = 160;
  this.isstarted = false;
  this.pos;
  this.bow;
  this.midship;
  this.deep = 20;
  this.boom = false;


};
Ferry.prototype.startEngine= function(startdok, enddok, dir){
  this.dir = dir;
  this.angle = 0;
  this.start = startdok.copy();
  this.end = enddok.copy();
  this.pos = this.start.copy();
  this.isstarted = true;
  app.sounds[0].play();
};
Ferry.prototype.goRight = function(speed){
  if(this.isstarted){
    this.speed = speed;
    this.pos.x += this.dir * this.speed;
    this.pipe = this.pos.copy();
    this.pipe.y -=40;
    this.angle = map(sin(this.pos.x/15),-1,1,-0.1, 0.1);
    this.bow = createVector(-60,20).rotate(this.angle);
    if(this.pos.x >= this.end.x){
      this.isstarted = false;
    }
  }
};
Ferry.prototype.goLeft = function(speed){
  if(this.isstarted){
    this.speed = speed;
    this.pos.x += this.dir * this.speed;
    this.pipe = this.pos.copy();
    this.pipe.y -=40;
    this.angle = map(sin(this.pos.x/15),-1,1,-0.1, 0.1);
    this.bow = createVector(60,20).rotate(this.angle);
    if(this.pos.x <= this.end.x){
      this.isstarted = false;
    }
  }
};
Ferry.prototype.stop = function(){
    this.angle = 0;
    this.dir =0;
    this.boom = false;
};
Ferry.prototype.style = function(nr){
  if(nr == 1){
    fill(app.pal.colors[1]);
    stroke(app.pal.colors[5]);
    strokeWeight(1);
  }
  else if(nr == 2){
    fill(app.pal.colors[5]);
    stroke(app.pal.colors[5]);
    strokeWeight(1);
  }
  else if(nr == 3){
    fill(app.pal.colors[2]);
    stroke(app.pal.colors[5]);
    strokeWeight(1);
  }
  else if(nr == 4){
    fill(app.pal.colors[4]);
    stroke(app.pal.colors[5]);
    strokeWeight(1);
  }
  else if(nr == 5){
    fill(color(255,255,0));
    stroke(color(255,255,0));
    strokeWeight(1);
  }

};
Ferry.prototype.construct = function(){
  //boot
  if(this.boom){
    this.style(5);

  }
  else{
    this.style(1);
  }

  beginShape();
  vertex(-90,0);vertex(90,0);
  vertex(60,25);vertex(-60,25);
  endShape(CLOSE);
  //kabin
  this.style(2);
  beginShape();
    vertex(-25,0);vertex(25,0);
    vertex(25,-25);vertex(-25,-25);
  endShape(CLOSE);
  //window
  this.style(3);
  beginShape();
    vertex(-15,-5);vertex(15,-5);
    vertex(15,-15);vertex(-15,-15);
  endShape(CLOSE);
  //capitan
  this.style(2);
  if(this.dir == 1){
    triangle(-3,-8,4,-11, -3,-11);
  }
  else if(this.dir == -1){
    triangle(-4,-11,3,-11, 3,-8);
  }

  ellipse(0,-8,5,5);

  //roof
  this.style(4);
  beginShape();
  vertex(-30,-20);vertex(30,-20);
  vertex(30,-26);vertex(-30,-26);

  endShape(CLOSE);
  //smokepipe
  beginShape();
  vertex(-2,-26);vertex(2,-26);
  vertex(2,-40);vertex(-2,-40);
  endShape(CLOSE);
}
Ferry.prototype.draw = function(){

  push();
  translate(this.pos.x, this.pos.y);

  rotate(this.angle);
  this.construct();

  pop();

};

/*********************Wave***************************/
function Wave(){
  this.col = [];
}
Wave.prototype.style = function(nr){
  if(nr == 1){
    noFill();
    stroke(app.pal.colors[1]);
    strokeWeight(1);
  }
}
Wave.prototype.makeWave = function(pos, bow){
  var w;
  if(app.is(pos)){
    w = pos.copy();
    w.add(bow);
    append(this.col, w);
  }

}
Wave.prototype.draw = function(w){
  this.style(1);

  for(i = 0; i < this.col.length-1; i++){
    line(this.col[i].x, this.col[i].y, this.col[i+1].x, this.col[i+1].y);
  }
}
/*********************Smoke***************************/
function Smoke(pos){

  this.blobber = new Blobber();
  this.size = 0;
  this.pos = pos.copy();
  this.age = 0;

}
Smoke.prototype.init = function(){
  //pos, corners, minwidth, maxwidth, minheight, maxheight
  this.blobber.init(pos, 8, this.size,  this.size*2,  this.sizie,  this.size*2 );
  this.blobber.style(false, app.pal.colors[1],0);

}
Smoke.prototype.grow = function(){
  //pos, corners, minwidth, maxwidth, minheight, maxheight
  this.size++;
  this.pos.y =lerp(this.pos.y, 0, this.age/2000);
  this.age++;
  this.blobber.init(this.pos, 8,  this.size,  this.size*2,  this.size,  this.size*2 );
  this.blobber.style(false, app.pal.tint(app.pal.colors[1],100-this.age),0);
}
Smoke.prototype.draw = function(){
  this.grow();
  if(this.age < 100){
    this.blobber.draw();
  }
}
/*********************People***************************/
function People(){
  this.hair = new Blobber();
  this.jumping = 0;
  this.track = new Track();
  this.t = 0; //trackposition;
  this.type = app.randomInt(1);
  if(this.type == 0){
    this.track.createTrackLeftToBoot();
  }
  if(this.type == 1){
      this.track.createTrackRightToBoot();
  }
  //pos, corners, minwidth, maxwidth, minheight, maxheight

  this.hair.style(color(225,225,0), false, 2);

}
People.prototype.jump = function(){
  this.jumping = 1;
}
People.prototype.move = function(speed){
  var up = 0;
  if(this.jumping > 0){
    for(var j = 0; j < 50; j++){
      up = (j * 10) % 10;
      this.track.pos[this.t].y -= up;
    }


  }
  if(this.t < this.track.pos.length - speed){
    this.t += speed;
  }
  if(this.jumping >0){
    this.hair.init(this.track.pos[this.t],35,0,20,0,200);
  }
  else{
  this.hair.init(this.track.pos[this.t],13,0,20,0,20);
}
}
People.prototype.style = function(nr){
  if(nr == 0){
    fill(app.pal.colors[0]);
    noStroke();
    strokeWeight(1);
  }
  if(nr == 1){
    fill(app.pal.colors[1]);
    noStroke();
    strokeWeight(1);
  }
};

People.prototype.draw = function(){
   this.style(0);
    ellipse(this.track.pos[this.t].x, this.track.pos[this.t].y, 10,10);
    rect(this.track.pos[this.t].x-5, this.track.pos[this.t].y,10,15);
    this.style(1);
    ellipse(this.track.pos[this.t].x-2, this.track.pos[this.t].y, 3,3);
    ellipse(this.track.pos[this.t].x+2, this.track.pos[this.t].y, 3,3);

    this.hair.draw();

}

/*********************Track***************************/
function Track(){
  this.pos = [];

};
Track.prototype.createTrackLeftToBoot = function(){
  var x, y;
  y = (height/3)+10;
  for(x = 0; x<80; x++){
      append(this.pos, createVector(x, y));
  }
  while(x > -10){
    y += ((height/3*2) - ((height/3)+10)) /80;
    x -= 1;
    append(this.pos, createVector(x, y));
  }
  while(x < app.randomInt(160)){
    y = (height/3*2)-5;
    x +=10;
    append(this.pos, createVector(x, y));
  }


};
Track.prototype.createTrackRightToBoot = function(){
  var x, y;
  y = (height/3)+10;
  for(x = width; x> width-80; x--){
      append(this.pos, createVector(x, y));
  }
  while(x < width+10){
    y += ((height/3*2) - ((height/3)+10)) /80;
    x += 1;
    append(this.pos, createVector(x, y));
  }
  while(x > app.randomInt(width-160, width)){
    y = (height/3*2)-5;
    x -=10;
    append(this.pos, createVector(x, y));
  }


};
Track.prototype.createTrackLeftFromBoot = function(){
  var x, y;
  y = (height/3)+10;
  while(x > 0){
    y = (height/3*2)-5;
    x -=10;
    append(this.pos, createVector(x, y));
  }
  append(this.pos, createVector(0, y));
  while(x < 80){
    y -= ((height/3*2) - ((height/3)+10)) /80;
    x += 1;
    append(this.pos, createVector(x, y));
  }
  for(x = 80; x>0; x--){
      append(this.pos, createVector(x, y));
  }

};
Track.prototype.createTrackRightFromBoot = function(){
  var x, y;
  y = (height/3)+10;
  while(x < width){
    y = (height/3*2)-5;
    x +=10;
    append(this.pos, createVector(x, y));
  }
  append(this.pos, createVector(width, y));
  while(x > width-80){
    y -= ((height/3*2) - ((height/3)+10)) / 80;
    x -= 1;
    append(this.pos, createVector(x, y));
  }
  for(x = width-80; x< width; x++){
      append(this.pos, createVector(x, y));
  }

};
