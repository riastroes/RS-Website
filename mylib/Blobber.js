function Blobber(){
  this.pos = [];
  this.thickness = 1;
  this.center = undefined;
  this.corners = 0;
  this.size = 0;
  this.morepos = [];
  this.rot = random(TWO_PI);
  this.sign = 1;
  this.rscale = random(-4,4);
  this.factor =1;
}
Blobber.prototype.init = function(pos, corners, minwidth, maxwidth, minheight, maxheight){
  //the flexibility of the blopper is dependend of the difference in minwidth and maxwidth and minheight and maxheight.
  this.pos = [];
  this.position = pos.copy();
  this.center = createVector(0,0);
  this.corners = corners;
  if(maxheight >= minheight && maxheight >= maxwidth && maxheight >= minwidth){
        this.size = maxheight;
  }
  else if(minheight >= maxheight && minheight >= maxwidth && minheight >= minwidth){
    this.size = minheight;
  }
  else if(maxwidth >= maxheight && maxwidth >= minheight && maxwidth >= minwidth){
    this.size = maxwidth;
      }
  else{
    this.size = minwidth;
  }

  this.factor = 1;

  this.wminradius = minwidth/2;
  this.wmaxradius = maxwidth/2;
  this.hminradius = minheight/2;
  this.hmaxradius = maxheight/2;


  var p;
  var r = random(TWO_PI/corners);
  for (var i = 0; i < corners; i += 1) {
    var wradius = random(this.wminradius, this.wmaxradius);
    var hradius = random(this.hminradius, this.hmaxradius);
    p = app.posOnEllipse(this.center,wradius, hradius, this.corners, i + r);
    append(this.pos, p);
  }

};
Blobber.prototype.initWithVectors  = function(center, vectors){

  this.pos = [];
  var ps = [];
  var angles = [];
  var index = [];

  for (var i = 0; i < vectors.length; i++) {
    angles[i] = vectors[i].heading();
    index[i] = angles[i];
  }
  ps = sort(angles);
  var m =0;
  for (var i = 0; i < ps.length; i++) {
    for(var ix = 0 ; ix < index.length; ix++){
      if(index[ix] == ps[i]){
        append(this.pos,vectors[ix].copy());

      }
    }
  }

  this.position = center.copy();
  this.rot = 0;
  this.factor = 1;

}
Blobber.prototype.style = function(strokecolor, fillcolor,thickness){
  this.strokecolor = strokecolor;
  this.fillcolor = fillcolor;
  this.thickness = thickness;
};
Blobber.prototype.draw = function(pg){
  var i,s;

  push();
    translate(this.position.x, this.position.y);

    scale(this.factor);
    if(app.is(this.rot)){
      rotate(this.rot);
    }

    s = this.pos.length;
    if(app.isnot(pg)){
      if(app.is(this.strokecolor)) {
        stroke(this.strokecolor);
      }
      else{
        noStroke();
      }
      if(app.is(this.fillcolor)){
        fill(this.fillcolor);

      }
      else{
        noFill();
      }
      if(app.is(this.thickness)){
        strokeWeight(this.thickness);
      }
      else{
        strokeWeight = 0;
      }
      beginShape();
        for (i = 0; i < s+3; i += 1) {
          curveVertex(this.pos[i%s].x, this.pos[i%s].y);
        }

     endShape();
    }
    else {
      if(app.is(this.strokecolor)){
        pg.stroke(this.strokecolor);
        pg.fill(this.fillcolor);
        pg.strokeWeight(this.thickness);
      }
      pg.beginShape();
      for (i = 0; i < s+3; i += 1) {
        pg.curveVertex(this.pos[i%s].x, this.pos[i%s].y);
      }
      pg.endShape();
    }

  pop();
};
Blobber.prototype.showCenter = function(){
  var newposition = this.recalcPosition(this.position);
  ellipse(newposition.x, newposition.y, 10, 10);

  push();
  translate(this.position.x, this.position.y);
  scale(this.factor);
  if(app.is(this.rot)){
    rotate(this.rot);
  }
    ellipse(this.center.x, this.center.y, 10, 10);

  pop();
};
Blobber.prototype.showPoints = function(pg){
  var i;
  push();
  translate(this.position.x, this.position.y);
  scale(this.factor);
  if(app.is(this.rot)){
    rotate(this.rot);
  }
    for(i in this.pos){
      if(typeof(pg) == "undefined") {
        ellipse(this.pos[i].x, this.pos[i].y, 10, 10);
      }
      else{
        pg.ellipse(this.pos[i].x, this.pos[i].y, 10, 10);
      }
    }

  pop();
};
Blobber.prototype.showPoint = function(id, pg){

  push();
  translate(this.position.x, this.position.y);
  scale(this.factor);
  if(app.is(this.rot)){
    rotate(this.rot);
  }

  if(typeof(pg) == "undefined") {
    ellipse(this.pos[id].x, this.pos[id].y, 10, 10);
  }
  else{
    pg.ellipse(this.pos[id].x, this.pos[id].y, 10, 10);
  }


  pop();
};
Blobber.prototype.showEllipse = function(pg){
  var i;
  push();
  translate(this.position.x, this.position.y);
  scale(this.factor);
  if(app.is(this.rot)){
    rotate(this.rot);
  }

      if(typeof(pg) == "undefined") {
        noFill();
        ellipse(this.center.x, this.center.y, this.wmaxradius*2, this.hmaxradius*2);
      }
      else{
        noFill();
        pg.ellipse(this.center.x, this.center.y, this.wmaxradius*2, this.hmaxradius*2);
      }


  pop();
};
Blobber.prototype.createMorePoints = function(count){
  var i,s, t, x,y;
  this.morepos = [];
  s = this.pos.length;
  for(i = 0; i < s; i++){

    for (j = 0; j < count; j++) {
      t = j / count;
      x = curvePoint(this.pos[i].x, this.pos[(i+1)%s].x, this.pos[(i+2)%s].x, this.pos[(i+3)%s].x, t);
      y = curvePoint(this.pos[i].y, this.pos[(i+1)%s].y, this.pos[(i+2)%s].y, this.pos[(i+3)%s].y, t);
      append(this.morepos, createVector(x,y));
    }
  }
};
Blobber.prototype.showMorePoints = function(){
  var i,  t, x,y;
  push();
    translate(this.position.x, this.position.y);
    scale(this.factor);
  if(app.is(this.rot)){
    rotate(this.rot);
  }
    for(i = 0; i < this.morepos.length; i++){
      ellipse(this.morepos[i].x, this.morepos[i].y, 5, 5);
    }
  pop();
};
Blobber.prototype.grow = function(grown){

    this.factor += grown;
  // this.createMorePoints(2);
  // this.set(this.position, this.morepos, this.factor + grown);

};
Blobber.prototype.multiply = function(){
  var i,o, newpos, oldpos, newblobber;
  newpos = [];
  oldpos = [];
  o=0;
  if(this.pos.length >=6){

    for(i = 0; i < this.pos.length; i++){
      if(i%2 == 0) {
        append(newpos, this.pos[i]);
      }
      else{
        append(oldpos, this.pos[i]);
      }
    }

    newblobber = new Blobber();
    newblobber.set(this.position, newpos,this.factor);

    this.set(this.position,oldpos,this.factor);

  }
  return newblobber;
};
Blobber.prototype.split = function(newblobbers){
  var p,i,o, newpos, oldpos, newblobber, blobberpos;


  p = floor(this.pos.length/2);
  newpos = [];
  oldpos = [];
  o=0;
  if(p >3){

    oldpos = subset(this.pos, 0,p);
    newpos = subset(this.pos, p,this.pos.length - p);

    //append(newpos, oldpos[0]);
    //append(oldpos, newpos[0]);
    blobberpos = this.position.copy();

    newblobber = new Blobber();
    newblobber.set(blobberpos, newpos,this.factor);

    append( newblobbers, newblobber);

    this.set(this.position,oldpos,this.factor);
    this.style(app.pal.randomImgColor(),app.pal.tint(app.pal.randomImgColor()),1 );
    this.init(blobberpos,30,this.wminradius*2,this.wmaxradius*2,this.hminradius*2,this.hmaxradius*2);

  }

  return newblobber;
};
Blobber.prototype.splitting = function() {
  //two dots will grow to each other, if they connect the cell will split
  //this function should be called until the blobber is spit.
  var p, f, first, half;
  f = app.randomInt(0, this.pos.length -1);
  p = floor((f + (this.pos.length / 2)) % (this.pos.length -1));

  first = this.pos[f];
  half = this.pos[p];

  if (dist(first.x, first.y, half.x, half.y) > 10){

    first.mult(0.9);
    half.mult(0.9);
  }
  else{
    //split blobber
    return true;

  }
  return false;
};
Blobber.prototype.recalcPosition = function(position){
  var i, totx =0, avx, toty = 0, avy;
  for(i= 0; i < this.pos.length; i++){
    totx += this.pos[i].x;
    toty += this.pos[i].y;
  }
  avx = totx / this.pos.length / 2;
  avy = toty / this.pos.length / 2;

  return createVector(position.x +avx, position.y +avy);
}
Blobber.prototype.set = function(position, pos, factor){
  this.pos = [];
  arrayCopy(pos, this.pos);
  this.position = position;
  var newposition = this.recalcPosition(position);
  var change = p5.Vector.sub(this.position, newposition);
  for(i = 0; i < this.pos.length; i++){
    this.pos[i].add(change);
  }
  this.position = newposition;
  this.center = createVector(0,0);
  this.corners = this.pos.length;
  this.factor = factor;

};
Blobber.prototype.crossLines = function(){
  var pos1, pos2;
  push();
    translate(this.position.x,this.position.y);
    scale(this.factor);
  if(app.is(this.rot)){
    rotate(this.rot);
  }
    for (i = 0; i < half; i++) {
      pos1 = this.morepos[i];
      pos2 = this.morepos[i + half];

      line(pos1.x, pos1.y, pos2.x, pos2.y);
    }
  pop();
};
Blobber.prototype.linesToCenter = function(){
  var pos;
  push();
    translate(this.position.x,this.position.y);
    scale(this.factor);
  if(app.is(this.rot)){
    rotate(this.rot);
  }
    for (i = 0; i < this.morepos.length; i++) {
      pos = this.morepos[i];
      line(pos.x, pos.y, this.center.x, this.center.y);
    }
  pop();
};
//differential inheritants.
function RegBlobber(){
  this.blobber = new Blobber();
  this.blobber.init = this.init;
  return this.blobber;
}
RegBlobber.prototype.init = function(pos, corners, minwidth, maxwidth, minheight, maxheight){
  //the flexibility of the blopper is dependend of the difference in minwidth and maxwidth and minheight and maxheight.
  this.pos = [];
  this.position = pos.copy();
  this.center = createVector(0,0);
  this.corners = corners;
  this.size = maxheight;

  this.wminradius = minwidth/2;
  this.wmaxradius = maxwidth/2;
  this.hminradius = minheight/2;
  this.hmaxradius = maxheight/2;

  var p, wradius, hradius;
  var r = random(TWO_PI/corners);

  for (var i = 0; i < corners; i += 1) {
    if(i%2 == 0){
      wradius = this.wminradius;
      hradius = this.hminradius;
    }
    else {
      wradius = this.wmaxradius;
      hradius = this.hmaxradius;
    }

    p = posOnEllipse(this.center,wradius, hradius, this.corners, i + r);
    append(this.pos, p);
  }

};
function TulipBlobber(){
  this.blobber = new Blobber();
  this.blobber.init = this.init;
  return this.blobber;
}
TulipBlobber.prototype.init = function(pos, corners, minwidth, maxwidth, minheight, maxheight){
  //the flexibility of the blopper is dependend of the difference in minwidth and maxwidth and minheight and maxheight.
  this.pos = [];
  this.position = pos.copy();
  this.center = createVector(0,0);
  this.corners = corners;
  this.size = maxheight;

  this.wminradius = minwidth/2;
  this.wmaxradius = maxwidth/2;
  this.hminradius = minheight/2;
  this.hmaxradius = maxheight/2;

  var p, wradius, hradius, r;


  for (var i = 0; i < corners; i += 1) {
    if(i%3 == 0){
      wradius = this.wminradius;
      hradius = this.hminradius;
      r = 0;
    }
    if(i%3 == 1){
      wradius = this.wmaxradius;
      hradius = this.hmaxradius;
      r = (PI/corners)/4;
    }
    if(i%3 == 2){
      wradius = this.wmaxradius;
      hradius = this.hmaxradius;
      r = (PI/corners)*7;
    }

    p = posOnEllipse(this.center,wradius, hradius, this.corners, i + r);
    append(this.pos, p);
  }

};
function Tulip2Blobber(){
  this.blobber = new Blobber();
  this.blobber.init = this.init;
  return this.blobber;
}
Tulip2Blobber.prototype.init = function(pos, corners, minwidth, maxwidth, minheight, maxheight){
  //the flexibility of the blopper is dependend of the difference in minwidth and maxwidth and minheight and maxheight.

  this.pos = [];
  this.position = pos.copy();
  this.center = createVector(0,0);
  this.corners = corners;
  this.size = maxheight;

  this.wminradius = minwidth/2;
  this.wmaxradius = maxwidth/2;
  this.hminradius = minheight/2;
  this.hmaxradius = maxheight/2;

  var p, wradius, hradius, r, n;
  this.center2 = this.center.copy();
  this.center2.y -= 50;



  for (var i = 0; i < corners/2; i += 1) {
    if(i%3 == 0){
      wradius = this.wminradius;
      hradius = this.hminradius;
      r = 0;

    }
    if(i%3 == 1){
      wradius = this.wmaxradius;
      hradius = this.hmaxradius;
      r = (PI/(corners/2))/4;

    }
    if(i%3 == 2){
      wradius = this.wmaxradius;
      hradius = this.hmaxradius;
      r = (PI/(corners/2))*7;

    }

    p = posOnEllipse(this.center,wradius, hradius, this.corners, i);
    append(this.pos, p);

  }
  for (var i = corners/2; i < corners; i += 1) {
    if(i%3 == 0){
      wradius = this.wminradius;
      hradius = this.hminradius;
      r = 0;
    }
    if(i%3 == 1){
      wradius = this.wmaxradius;
      hradius = this.hmaxradius;
      r = (PI/(corners/2))/4;
    }
    if(i%3 == 2){
      wradius = this.wmaxradius;
      hradius = this.hmaxradius;
      r = (PI/(corners/2))*7;
    }


    p = posOnEllipse(this.center2,wradius, hradius, this.corners, i + r);
    append(this.pos, p);

  }

};
