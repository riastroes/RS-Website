/* knitting
  0 = recht
  1 = averecht
*/
function Knitting(){
  this.row = 0;
  this.topleft = createVector(0,0);
  this.topright = createVector(width,0);
  this.bottomleft = createVector(0,height);
  this.bottomright = createVector(width,height);
  this.stitches = [];
  this.size;
  this.rowheight;
  this.stitchwidth = this.topright.x - this.topleft.x;
  this.stitchheight = this.bottomleft.y - this.topleft.y;
//  this.style(0);
  this.acolor = app.pal.randomImgColor();

}

Knitting.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = this.acolor;//app.pal.colors[0];
    this.fillcolor = false;
    this.thickness = 3;

    break;

    case 1:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = false;
    this.thickness = 5;

    break;

    case 2:
    this.strokecolor = app.pal.tint(app.pal.colors[0],50);
    this.fillcolor = false;
    this.thickness = 7;
    break;

    case 3:
    this.strokecolor = app.pal.colors[3];
    this.fillcolor = false;
    this.thickness = 2;
    break;
    case 4:
    this.strokecolor = app.pal.tint(app.pal.colors[0],50);
    this.fillcolor = false;
    this.thickness = 1;
    break;
    case 5:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = false;
    this.thickness = 3;
    break;
    case 6:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = false;
    this.thickness = 3;
    break;
    case 7:
    this.strokecolor = app.pal.tint( app.pal.randomImgColor(),30);
    this.fillcolor = false;
    this.thickness = 3;
    break;
    case 8:
    this.strokecolor = app.pal.tint(app.pal.randomImgColor(),50);
    this.fillcolor = false;
    this.thickness = 4;
    break;
    case 9:
    this.strokecolor = app.pal.colors[3];
    this.fillcolor = false;
    this.thickness = 7;
    break;
    case 10:
    this.strokecolor = false;
    this.fillcolor = app.pal.randomImgColor();
    this.thickness = 7;
    break;

  }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Knitting.prototype.init = function(topleft,topright,bottomleft, bottomright){

  this.topleft = topleft;
  this.topright = topright;
  this.bottomleft = bottomleft;
  this.bottomright = bottomright;


  this.stitchwidth = this.topright.x - this.topleft.x;
  this.stitchheight = this.bottomleft.y - this.topleft.y;
  this.style(1);

}
Knitting.prototype.pattern = function(pos,stitchwidth,stitchheight,pat){
  for(var i = 0; i < pat.length; i++){
    if(pat[i] == 0){
      pos.x += stitchwidth;
      this.knit(pos,stitchwidth, stitchheight);
    }
    if(pat[i] ==1){
      pos.x += stitchwidth;
      this.purl(pos,stitchwidth, stitchheight);
    }
  }
}
Knitting.prototype.pattern3D = function(pos,stitchwidth,stitchheight,pat){
  for(var i = 0; i < pat.length; i++){
    if(pat[i] == 0){
      pos.x += stitchwidth;
      this.knit3D(pos,stitchwidth, stitchheight);
    }
    if(pat[i] ==1){
      pos.x += stitchwidth;
      this.purl3D(pos,stitchwidth, stitchheight);
    }
  }
}

Knitting.prototype.knit3D = function(pos, stitchwidth, stitchheight){
  this.pos = pos.copy();
  this.stitchwidth = stitchwidth;
  this.stitchheight = stitchheight;

  var w = this.stitchwidth/8;
  var h = this.stitchheight/10;

  push();
  translate(this.pos.x, this.pos.y);
  //  this.style(3);
    strokeCap(ROUND);
    beginShape();
  //  curveVertex((-1*w),(8*h));
      curveVertex((-1*w),(9*h));
      curveVertex((1*w),(9*h));
      curveVertex((3*w),(8*h));
      curveVertex((3*w),(6*h));
      curveVertex((1*w),(4*h));
      curveVertex((1*w),(2*h));
      curveVertex((3*w),(1*h));
      curveVertex((5*w),(1*h));
      curveVertex((7*w),(2*h));
      curveVertex((7*w),(4*h));
      curveVertex((5*w),(6*h));
      curveVertex((5*w),(8*h));
      curveVertex((7*w),(9*h));
      curveVertex((9*w),(9*h));
      curveVertex((10*w),(8*h));

    endShape();
    this.style(9);
    beginShape();
      curveVertex((1*w),(9*h));
      curveVertex((3*w),(8*h));
      curveVertex((3*w),(6*h));
      curveVertex((1*w),(4*h));
      curveVertex((1*w),(2*h));
      curveVertex((3*w),(1*h));

    endShape();

    beginShape();
      curveVertex((5*w),(1*h));
      curveVertex((7*w),(2*h));
      curveVertex((7*w),(4*h));
      curveVertex((5*w),(6*h));
      curveVertex((5*w),(8*h));
      curveVertex((7*w),(9*h));

    endShape();
  pop();

}
Knitting.prototype.purl3D = function(pos, stitchwidth, stitchheight){
  this.pos = pos.copy();
  this.stitchwidth = stitchwidth;
  this.stitchheight = stitchheight;

  var w = this.stitchwidth/8;
  var h = this.stitchheight/10;

  push();
  translate(this.pos.x, this.pos.y);
  //  this.style(3);
    strokeCap(ROUND);
    beginShape();
  //  curveVertex((-1*w),(8*h));
      curveVertex((-1*w),(9*h));
      curveVertex((1*w),(9*h));
      curveVertex((3*w),(8*h));
      curveVertex((3*w),(6*h));
      curveVertex((1*w),(4*h));
      curveVertex((1*w),(2*h));
      curveVertex((3*w),(1*h));
      curveVertex((5*w),(1*h));
      curveVertex((7*w),(2*h));
      curveVertex((7*w),(4*h));
      curveVertex((5*w),(6*h));
      curveVertex((5*w),(8*h));
      curveVertex((7*w),(9*h));
      curveVertex((9*w),(9*h));
      curveVertex((10*w),(8*h));

    endShape();
    this.style(9);
    beginShape();
    curveVertex((1*w),(4*h));
    curveVertex((1*w),(2*h));
    curveVertex((3*w),(1*h));
    curveVertex((5*w),(1*h));
    curveVertex((7*w),(2*h));
    curveVertex((7*w),(4*h));

    endShape();
    beginShape();
      curveVertex((-1*w),(9*h));
      curveVertex((1*w),(9*h));
      curveVertex((3*w),(8*h));
      curveVertex((3*w),(6*h));
      endShape();
      beginShape();

      curveVertex((5*w),(6*h));
      curveVertex((5*w),(8*h));
      curveVertex((7*w),(9*h));
      curveVertex((9*w),(9*h));
      curveVertex((10*w),(8*h));

    endShape();
  pop();

}

Knitting.prototype.knit = function(pos, stitchwidth, stitchheight){
  this.pos = pos.copy();
  this.stitchwidth = stitchwidth;
  this.stitchheight = stitchheight;

  var w = this.stitchwidth/8;
  var h = this.stitchheight/10;

  push();
  translate(this.pos.x, this.pos.y);
  //  this.style(3);
    strokeCap(ROUND);
    beginShape();
  //  curveVertex((-1*w),(8*h));
      curveVertex((-1*w),(9*h));
      curveVertex((1*w),(9*h));
      curveVertex((3*w),(8*h));
      curveVertex((3*w),(6*h));
      curveVertex((1*w),(4*h));
      curveVertex((1*w),(2*h));
      curveVertex((3*w),(1*h));
      curveVertex((5*w),(1*h));
      curveVertex((7*w),(2*h));
      curveVertex((7*w),(4*h));
      curveVertex((5*w),(6*h));
      curveVertex((5*w),(8*h));
      curveVertex((7*w),(9*h));
      curveVertex((9*w),(9*h));
      curveVertex((10*w),(8*h));

    endShape();
    beginShape();
      curveVertex((1*w),(9*h));
      curveVertex((3*w),(8*h));
      curveVertex((3*w),(6*h));
      curveVertex((1*w),(4*h));
      curveVertex((1*w),(2*h));
      curveVertex((3*w),(1*h));

    endShape();
    beginShape();
    curveVertex((5*w),(1*h));
    curveVertex((7*w),(2*h));
      curveVertex((7*w),(4*h));
      curveVertex((5*w),(6*h));
      curveVertex((5*w),(8*h));
      curveVertex((7*w),(9*h));

    endShape();
  pop();

}
Knitting.prototype.purl = function(pos, stitchwidth, stitchheight){
  this.pos = pos.copy();
  this.stitchwidth = stitchwidth;
  this.stitchheight = stitchheight;

  var w = this.stitchwidth/8;
  var h = this.stitchheight/10;

  push();
  translate(this.pos.x, this.pos.y);
  //  this.style(3);
    strokeCap(ROUND);
    beginShape();
  //  curveVertex((-1*w),(8*h));
      curveVertex((-1*w),(9*h));
      curveVertex((1*w),(9*h));
      curveVertex((3*w),(8*h));
      curveVertex((3*w),(6*h));
      curveVertex((1*w),(4*h));
      curveVertex((1*w),(2*h));
      curveVertex((3*w),(1*h));
      curveVertex((5*w),(1*h));
      curveVertex((7*w),(2*h));
      curveVertex((7*w),(4*h));
      curveVertex((5*w),(6*h));
      curveVertex((5*w),(8*h));
      curveVertex((7*w),(9*h));
      curveVertex((9*w),(9*h));
      curveVertex((10*w),(8*h));

    endShape();
    beginShape();
    curveVertex((1*w),(4*h));
    curveVertex((1*w),(2*h));
    curveVertex((3*w),(1*h));
    curveVertex((5*w),(1*h));
    curveVertex((7*w),(2*h));
    curveVertex((7*w),(4*h));

    endShape();
    beginShape();
      curveVertex((-1*w),(9*h));
      curveVertex((1*w),(9*h));
      curveVertex((3*w),(8*h));
      curveVertex((3*w),(6*h));
      endShape();
      beginShape();
    //curveVertex((3*w),(8*h));
      curveVertex((5*w),(6*h));
      curveVertex((5*w),(8*h));
      curveVertex((7*w),(9*h));
      curveVertex((9*w),(9*h));
      curveVertex((10*w),(8*h));

    endShape();
  pop();

}
Knitting.prototype.setup = function(pos, stitchwidth, stitchheight){
  this.pos = pos.copy();
  this.stitchwidth = stitchwidth;
  this.stitchheight = stitchheight;

  var w = this.stitchwidth/8;
  var h = this.stitchheight/10;

  push();
  translate(this.pos.x, this.pos.y);
    //this.style(3);
    strokeCap(ROUND);

    beginShape();
      //curveVertex((9*w),(6*h));
      curveVertex((8*w),(6*h));
      curveVertex((8*w),(6*h));
      curveVertex((5*w),(5*h));
      curveVertex((2*w),(5*h));
      curveVertex((1*w),(2*h));
      curveVertex((3*w),(1*h));
      curveVertex((5*w),(1*h));
      curveVertex((7*w),(2*h));
      curveVertex((6*w),(5*h));
      curveVertex((4*w),(6*h));
      curveVertex((0*w),(6*h));
      curveVertex((0*w),(6*h));


    endShape();

     beginShape();
     curveVertex((8*w),(6*h));
     curveVertex((8*w),(6*h));
     curveVertex((5*w),(5*h));
     curveVertex((2*w),(5*h));
     curveVertex((1*w),(2*h));

     endShape();
    beginShape();
      curveVertex((1*w),(5*h));
      curveVertex((1*w),(2*h));
      curveVertex((3*w),(1*h));
      curveVertex((5*w),(1*h));
      curveVertex((7*w),(2*h));
      curveVertex((6*w),(5*h));

    endShape();

  pop();

}
Knitting.prototype.setup3D = function(pos, stitchwidth, stitchheight){
  this.pos = pos.copy();
  this.stitchwidth = stitchwidth;
  this.stitchheight = stitchheight;

  var w = this.stitchwidth/8;
  var h = this.stitchheight/10;

  push();
  translate(this.pos.x, this.pos.y);
    //this.style(3);
    strokeCap(ROUND);

    beginShape();
      //curveVertex((9*w),(6*h));
      curveVertex((8*w),(6*h));
      curveVertex((8*w),(6*h));
      curveVertex((5*w),(5*h));
      curveVertex((2*w),(5*h));
      curveVertex((1*w),(2*h));
      curveVertex((3*w),(1*h));
      curveVertex((5*w),(1*h));
      curveVertex((7*w),(2*h));
      curveVertex((6*w),(5*h));
      curveVertex((4*w),(6*h));
      curveVertex((0*w),(6*h));
      curveVertex((0*w),(6*h));


    endShape();
    beginShape();
    curveVertex((8*w),(6*h));
    curveVertex((8*w),(6*h));
    curveVertex((5*w),(5*h));
    curveVertex((2*w),(5*h));
    curveVertex((1*w),(2*h));

    endShape();
    this.style(9);
    beginShape();
      curveVertex((1*w),(5*h));
      curveVertex((1*w),(2*h));
      curveVertex((3*w),(1*h));
      curveVertex((5*w),(1*h));
      curveVertex((7*w),(2*h));
      curveVertex((6*w),(5*h));

    endShape();




  pop();

}
Knitting.prototype.begin = function(pos, stitchwidth, stitchheight){
  this.pos = pos.copy();
  this.stitchwidth = stitchwidth;
  this.stitchheight = stitchheight;

  var w = this.stitchwidth/8;
  var h = this.stitchheight/10;

  push();
  translate(this.pos.x, this.pos.y);

    strokeCap(ROUND);

    beginShape();
      curveVertex((6*w),(18*h));
      curveVertex((6*w),(18*h));

      curveVertex((6*w),(7*h));
      curveVertex((5*w),(5*h));
      curveVertex((2*w),(5*h));
      curveVertex((1*w),(2*h));
      curveVertex((3*w),(1*h));
      curveVertex((5*w),(1*h));
      curveVertex((7*w),(2*h));
      curveVertex((6*w),(5*h));
      curveVertex((4*w),(6*h));
      curveVertex((1*w),(6*h));
      curveVertex((0*w),(6*h));
      curveVertex((0*w),(6*h));
    endShape();

    beginShape();
      curveVertex((2*w),(5*h));
      curveVertex((1*w),(2*h));
      curveVertex((3*w),(1*h));
      curveVertex((5*w),(1*h));
      curveVertex((7*w),(2*h));
      curveVertex((6*w),(5*h));

    endShape();

    beginShape();

      curveVertex((6*w),(18*h));

      curveVertex((6*w),(7*h));
      curveVertex((5*w),(5*h));
      curveVertex((2*w),(5*h));
      curveVertex((1*w),(2*h));

    endShape();
  pop();

}
Knitting.prototype.begin3D = function(pos, stitchwidth, stitchheight){
  this.pos = pos.copy();
  this.stitchwidth = stitchwidth;
  this.stitchheight = stitchheight;

  var w = this.stitchwidth/8;
  var h = this.stitchheight/10;

  push();
  translate(this.pos.x, this.pos.y);

    strokeCap(ROUND);

    beginShape();
      curveVertex((6*w),(18*h));
      curveVertex((6*w),(18*h));

      curveVertex((6*w),(7*h));
      curveVertex((5*w),(5*h));
      curveVertex((2*w),(5*h));
      curveVertex((1*w),(2*h));
      curveVertex((3*w),(1*h));
      curveVertex((5*w),(1*h));
      curveVertex((7*w),(2*h));
      curveVertex((6*w),(5*h));
      curveVertex((4*w),(6*h));
      curveVertex((1*w),(6*h));
      curveVertex((0*w),(6*h));
      curveVertex((0*w),(6*h));
    endShape();
  beginShape();

      curveVertex((6*w),(18*h));

      curveVertex((6*w),(7*h));
      curveVertex((5*w),(5*h));
      curveVertex((2*w),(5*h));
      curveVertex((1*w),(2*h));

    endShape();
    this.style(9);
    beginShape();
      curveVertex((2*w),(5*h));
      curveVertex((1*w),(2*h));
      curveVertex((3*w),(1*h));
      curveVertex((5*w),(1*h));
      curveVertex((7*w),(2*h));
      curveVertex((6*w),(5*h));

    endShape();
  pop();

}
Knitting.prototype.last = function(pos, stitchwidth, stitchheight){
 if((this.row % 2)==1){
    this.pos = pos.copy();
    this.stitchwidth = stitchwidth;
    this.stitchheight = stitchheight;

    var w = this.stitchwidth/8;
    var h = this.stitchheight/10;

    push();
    translate(this.pos.x +stitchwidth, this.pos.y);
      //this.style(3);
      strokeCap(ROUND);
      beginShape();
      curveVertex((0*w),(9*h));
      //curveVertex((1*w),(9*h));
      curveVertex((1*w),(9*h));
      curveVertex((2*w),(8*h));
      curveVertex((2*w),(5*h));
      curveVertex((1*w),(4*h));
      //curveVertex((0*w),(4*h));
      curveVertex((0*w),(4*h));
      endShape();
    pop();
  }
}
Knitting.prototype.first = function(pos, stitchwidth, stitchheight){
  if((this.row % 2)==0 ){
    this.pos = pos.copy();
    this.stitchwidth = stitchwidth;
    this.stitchheight = stitchheight;

    var w = this.stitchwidth/8;
    var h = this.stitchheight/10;

    //this.pos.x += stitchwidth;

    push();
    translate(this.pos.x, this.pos.y);
    //  this.style(3);
      strokeCap(ROUND);
      beginShape();
      curveVertex((9*w),(9*h));
      curveVertex((9*w),(9*h));
      curveVertex((8*w),(9*h));
      curveVertex((7*w),(8*h));
      curveVertex((7*w),(5*h));
      curveVertex((8*w),(4*h));
      curveVertex((9*w),(4*h));
      curveVertex((9*w),(4*h));
      endShape();
    pop();
  }
}
Knitting.prototype.end = function(pos, stitchwidth, stitchheight){
  this.pos = pos.copy();
  this.stitchwidth = stitchwidth;
  this.stitchheight = stitchheight;

  var w = this.stitchwidth/8;
  var h = this.stitchheight/10;

  push();
  translate(this.pos.x, this.pos.y);
  //  this.style(3);
    strokeCap(ROUND);
    beginShape();
      //curveVertex((10*w),(5*h));
      curveVertex((12*w),(19*h));
      curveVertex((12*w),(19*h));
      curveVertex((12*w),(9*h));
      curveVertex((12*w),(6*h));
      //curveVertex((9*w),(5*h));
      curveVertex((9*w),(5*h));
      curveVertex((5*w),(7*h));
      curveVertex((5*w),(8*h));
      curveVertex((7*w),(9*h));
        // curveVertex((9*w),(5*h));
        // curveVertex((5*w),(7*h));
      //curveVertex((5*w),(8*h));
        // curveVertex((6*w),(9*h));
        // curveVertex((8*w),(9*h));
      //curveVertex((9*w),(8*h));
      curveVertex((9*w),(7*h));
      curveVertex((5*w),(5*h));
      curveVertex((1*w),(5*h));
      curveVertex((0*w),(5*h));
      //curveVertex((1*w),(5*h));

    endShape();

      beginShape();


    // curveVertex((10*w),(5*h));
     curveVertex((9*w),(5*h));
     curveVertex((9*w),(5*h));
     curveVertex((5*w),(7*h));
     curveVertex((5*w),(8*h));
     curveVertex((7*w),(9*h));

      endShape();

  pop();
}
Knitting.prototype.end3D = function(pos, stitchwidth, stitchheight){
  this.pos = pos.copy();
  this.stitchwidth = stitchwidth;
  this.stitchheight = stitchheight;

  var w = this.stitchwidth/8;
  var h = this.stitchheight/10;

  push();
  translate(this.pos.x, this.pos.y);

    strokeCap(ROUND);
    beginShape();
      curveVertex((12*w),(19*h));
      curveVertex((12*w),(19*h));
      curveVertex((12*w),(9*h));
      curveVertex((12*w),(6*h));
      curveVertex((9*w),(5*h));
      curveVertex((5*w),(7*h));
      curveVertex((5*w),(8*h));
      curveVertex((7*w),(9*h));
      curveVertex((9*w),(7*h));
      curveVertex((5*w),(5*h));
      curveVertex((1*w),(5*h));
      curveVertex((0*w),(5*h));
    endShape();
    this.style(9);
      beginShape();

      curveVertex((5*w),(7*h));
      curveVertex((5*w),(8*h));
      curveVertex((7*w),(9*h));
      curveVertex((9*w),(8*h));
      curveVertex((5*w),(7*h));

      endShape();


  pop();
}
Knitting.prototype.ending = function(pos, stitchwidth, stitchheight){
  this.pos = pos.copy();
  this.stitchwidth = stitchwidth;
  this.stitchheight = stitchheight;

  var w = this.stitchwidth/8;
  var h = this.stitchheight/10;

  push();
  translate(this.pos.x, this.pos.y);

    strokeCap(ROUND);
    //this.style(3);
    beginShape();
      //curveVertex((10*w),(5*h));
      curveVertex((9*w),(5*h));
      curveVertex((9*w),(5*h));
      curveVertex((5*w),(7*h));
      curveVertex((5*w),(8*h));
      curveVertex((7*w),(9*h));
      curveVertex((9*w),(9*h));
      curveVertex((11*w),(8*h));
      curveVertex((10*w),(7*h));
      curveVertex((5*w),(5*h));
      curveVertex((1*w),(5*h));
      //curveVertex((1*w),(5*h));
        curveVertex((0*w),(5*h));
    endShape();

    beginShape();
      //curveVertex((12*w),(5*h));
      curveVertex((11*w),(5*h));

     curveVertex((9*w),(5*h));
     curveVertex((5*w),(7*h));
     curveVertex((5*w),(8*h));
     curveVertex((7*w),(9*h));
    endShape();

  pop();
}
Knitting.prototype.ending3D = function(pos, stitchwidth, stitchheight){
  this.pos = pos.copy();
  this.stitchwidth = stitchwidth;
  this.stitchheight = stitchheight;

  var w = this.stitchwidth/8;
  var h = this.stitchheight/10;

  push();
  translate(this.pos.x, this.pos.y);

    strokeCap(ROUND);
    //this.style(3);
    beginShape();
      //curveVertex((10*w),(5*h));
      curveVertex((9*w),(5*h));
      curveVertex((9*w),(5*h));
      curveVertex((5*w),(7*h));
      curveVertex((5*w),(8*h));
      curveVertex((7*w),(9*h));
      curveVertex((9*w),(9*h));
      curveVertex((11*w),(8*h));
      curveVertex((10*w),(7*h));
      curveVertex((5*w),(5*h));
      curveVertex((1*w),(5*h));
      curveVertex((0*w),(5*h));
    endShape();
    beginShape();
      curveVertex((11*w),(5*h));
      curveVertex((9*w),(5*h));
      curveVertex((5*w),(7*h));
      curveVertex((5*w),(8*h));
      curveVertex((7*w),(9*h));
    endShape();
    this.style(9);

    beginShape();
      curveVertex((5*w),(7*h));
      curveVertex((5*w),(8*h));
      curveVertex((7*w),(9*h));
      curveVertex((9*w),(9*h));
      curveVertex((11*w),(8*h));
      curveVertex((10*w),(7*h));
    endShape();
  pop();
}
Knitting.prototype.lastturn = function(pos, stitchwidth, stitchheight){

    this.pos = pos.copy();
    this.stitchwidth = stitchwidth;
    this.stitchheight = stitchheight;

    var w = this.stitchwidth/8;
    var h = this.stitchheight/10;

    //this.pos.x += stitchwidth;

    push();
    translate(this.pos.x, this.pos.y);
      //this.style(3);
      strokeCap(ROUND);
      beginShape();
      //curveVertex((10*w),(5*h));
        curveVertex((12*w),(5*h));
        curveVertex((9*w),(5*h));
        curveVertex((8*w),(5*h));
        curveVertex((7*w),(6*h));
        curveVertex((8*w),(7*h));

        curveVertex((11*w),(7*h));
        curveVertex((11*w),(9*h));
        curveVertex((9*w),(9*h));
        curveVertex((9*w),(9*h));
      endShape();
    //  this.style(3);
      beginShape();
        curveVertex((8*w),(6*h));
        curveVertex((7*w),(6*h));
        curveVertex((8*w),(7*h));

        curveVertex((11*w),(7*h));
        curveVertex((11*w),(8*h));

      endShape();
    pop();

}


Knitting.prototype.firstturn = function(pos, stitchwidth, stitchheight){
  if((this.row % 2)==0){
    this.pos = pos.copy();
    this.stitchwidth = stitchwidth;
    this.stitchheight = stitchheight;

    var w = this.stitchwidth/8;
    var h = this.stitchheight/10;

    //this.pos.x += stitchwidth;

    push();
    translate(this.pos.x, this.pos.y);
      //this.style(2);
      strokeCap(ROUND);
      beginShape();
      curveVertex((9*w),(4*h));
      curveVertex((9*w),(4*h));
      curveVertex((8*w),(4*h));
      curveVertex((8*w),(6*h));
      curveVertex((9*w),(6*h));
      curveVertex((9*w),(6*h));
      endShape();
    pop();
  }
}
Knitting.prototype.drawFirstRow3D = function(pos, stitches, stitchwidth,stitchheight){
  var p = pos.copy();

    p.x = pos.x;
    p.y -= stitchheight/2;
    for(var s = 0; s < stitches-1 ; s += 1){
      if(s == 0){
        this.firstturn(p, stitchwidth,stitchheight);
      }
      p.x += stitchwidth;
      this.setup3D(p, stitchwidth, stitchheight);

    //this.last(p, stitchwidth,stitchheight);

  }
  p.x += stitchwidth;
  this.begin3D(p, stitchwidth, stitchheight);
  this.row++;
}
Knitting.prototype.drawFirstRow = function(pos, stitches, stitchwidth,stitchheight){
  var p = pos.copy();

    p.x = pos.x;
    p.y -= stitchheight/2;
    for(var s = 0; s < stitches-1 ; s += 1){
      if(s == 0){
        //if(this.row == 0){
          this.firstturn(p, stitchwidth,stitchheight);
        //}
        // else{
        //   this.first(p, stitchwidth,stitchheight);
        // }
      }
      p.x += stitchwidth;
      this.setup(p, stitchwidth, stitchheight);

    //this.last(p, stitchwidth,stitchheight);

  }
  p.x += stitchwidth;
  this.begin(p, stitchwidth, stitchheight);
  this.row++;
}
Knitting.prototype.drawLastRow3D = function(pos, stitches, stitchwidth,stitchheight){
  var p = pos.copy();

    p.x = pos.x;
    p.y -= stitchheight/2;
    for(var s = 0; s < stitches-1 ; s += 1){
      if(s == 0){
        this.lastturn(p, stitchwidth,stitchheight);
      }
      p.x += stitchwidth;
      this.ending3D(p, stitchwidth,stitchheight);


  }
  p.x += stitchwidth;
  this.end3D(p, stitchwidth, stitchheight);

  this.row++;
}

Knitting.prototype.drawLastRow = function(pos, stitches, stitchwidth,stitchheight){
  var p = pos.copy();

    p.x = pos.x;
    p.y -= stitchheight/2;
    for(var s = 0; s < stitches-1 ; s += 1){
      if(s == 0){
        this.lastturn(p, stitchwidth,stitchheight);
      }
      p.x += stitchwidth;
      this.ending(p, stitchwidth,stitchheight);
      //  }

    //this.last(p, stitchwidth,stitchheight);

  }
  p.x += stitchwidth;
  this.end(p, stitchwidth, stitchheight);

  this.row++;
}
Knitting.prototype.drawRowKnit = function(pos, rows, stitches, stitchwidth,stitchheight){
  var p = pos.copy();

  for(var r = 0; r < rows; r += 1){

    p.x = pos.x;
    p.y -= stitchheight/2;
    for(var s = 0; s < stitches ; s += 1){
      if(s == 0){
        this.first(p, stitchwidth,stitchheight);
      }
      p.x += stitchwidth;
      this.knit(p, stitchwidth, stitchheight);
    }
    this.last(p, stitchwidth,stitchheight);
    this.row++;
  }
}
Knitting.prototype.drawRowKnit3D = function(pos, rows, stitches, stitchwidth,stitchheight){
  var p = pos.copy();

  for(var r = 0; r < rows; r += 1){

    p.x = pos.x;
    p.y -= stitchheight/2;
    for(var s = 0; s < stitches ; s += 1){
      if(s == 0){
        this.first(p, stitchwidth,stitchheight);
      }
      p.x += stitchwidth;
      this.knit3D(p, stitchwidth, stitchheight);
    }
    this.last(p, stitchwidth,stitchheight);
    this.row++;
  }
}
Knitting.prototype.drawRowPurl3D = function(pos, rows, stitches, stitchwidth,stitchheight){
  var p = pos.copy();

  for(var r = 0; r < rows; r += 1){
    p.x = pos.x;
    p.y -= stitchheight/2;
    for(var s = 0; s < stitches ; s += 1){
      if(s == 0){
        this.first(p, stitchwidth,stitchheight);
      }
      p.x += stitchwidth;
      this.purl3D(p, stitchwidth, stitchheight);
    }
    this.last(p, stitchwidth,stitchheight);
    this.row++;
  }
}

Knitting.prototype.drawRowPurl = function(pos, rows, stitches, stitchwidth,stitchheight){
  var p = pos.copy();

  for(var r = 0; r < rows; r += 1){
    p.x = pos.x;
    p.y -= stitchheight/2;
    for(var s = 0; s < stitches ; s += 1){
      if(s == 0){
        this.first(p, stitchwidth,stitchheight);
      }
      p.x += stitchwidth;
      this.purl(p, stitchwidth, stitchheight);
    }
    this.last(p, stitchwidth,stitchheight);
    this.row++;
  }
}
Knitting.prototype.drawPattern = function(pos, rows, stitches, stitchwidth,stitchheight,pat){
  var p = pos.copy();

 for(var r = 0; r < rows; r += 1){
    p.x = pos.x;
    p.y -= stitchheight/2;

    this.first(p, stitchwidth,stitchheight);


    this.pattern(p, stitchwidth, stitchheight, pat);

    this.last(p, stitchwidth,stitchheight);
    this.row++;
  }
}
Knitting.prototype.drawPattern3D = function(pos, rows, stitches, stitchwidth,stitchheight,pat){
  var p = pos.copy();

 for(var r = 0; r < rows; r += 1){
    p.x = pos.x;
    p.y -= stitchheight/2;

    this.first(p, stitchwidth,stitchheight);


    this.pattern3D(p, stitchwidth, stitchheight, pat);

    this.last(p, stitchwidth,stitchheight);
    this.row++;
  }
}
Knitting.prototype.drawFabric = function(pos,rows, stitches,stitchwidth,stitchheight,pat, pscale){
  push();
  scale(pscale);

  this.style(0);
  var r = 1;
  pos = createVector(pos.x, pos.y - (r * stitchheight/2));

  this.drawFirstRow3D(pos, stitches, stitchwidth, stitchheight);

  for(var i = 0; i < rows ; i+=pat.length){
    for(var p = 0; p < pat.length; p++){

      pos = createVector(pos.x, pos.y - (r * stitchheight/2));
      this.drawPattern3D(pos, 1, stitches, stitchwidth, stitchheight,pat[p]);

    }
  }

  pos = createVector(pos.x, pos.y - (r * stitchheight/2));
  this.drawLastRow3D(pos, stitches, stitchwidth, stitchheight);
  pop();
}
