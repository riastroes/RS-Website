/**
 * Created by Ria Stroes on 10-8-2016.
 */
 "use strict";
function Project(){
  this.name ="Welcome";
  this.text1 = "Ria Stroes";
  this.text2 = "creative coder";
  this.bg =app.pal.randomImgColor();
  this.bubbles =[];
  this.density = pixelDensity();
  this.hasinfo = false;
  this.info = false;
  this.infobar = 1;
  this.cracks = [];
  this.gallery = new Gallery();
  this.choosenproject = -1;

};

Project.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = false;
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    case 2:
    this.strokecolor = false;
    this.fillcolor = app.pal.colors[2];
    this.thickness = 1;
    break;
    case 3:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.randomImgColor();
    this.thickness = 1;
    break;
    case 4:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = this.bg;
    this.thickness = 1;
    case 5:
    this.strokecolor = app.pal.colors[2];
    this.fillcolor = this.bg;
    this.thickness = 1;
    break;


  }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Project.prototype.run = function(nr){
  switch(nr){
    case 0:
    //show title
    this.bubble = new TextBubble(1,3);
    this.infobar = 0;
    this.hasinfo = true;
    background(this.bg);
    this.showTitle();
    this.showSubTitle();
    break;
    case 1:
    //start bubbling
    this.collectWhite();
    break;
    case 2:
    background(this.bg);
    this.showBubbles();
    break;
    case 3:
    // create cracks
    background(this.bg);

    this.bubble = new TextBubble(4,5);
    this.createCracks(4);
    break;
    case 4:
    background(this.bg);
    this.crackScreen();
    break;
    case 5:
    background(this.bg);
    this.gallery.createPresentation();
    break;
    case 6:
    //run presentation
    this.hasinfo = false;
    this.infobar = 1;
    background(this.bg);
    this.choosenproject = this.gallery.runPresentation();
    if(this.choosenproject >= 0){
      background(this.bg);
      app.nextscene();
    }
    break;
    case 7:
    if(this.choosenproject >0){
      this.gallery.gotoProject(this.choosenproject);
    }
    else{
      this.gallery.gotoProject(0);
    }
    break;

  }
  if(this.info && this.hasinfo){
    this.showInfo();
  }
  this.showInfoBar();
}
Project.prototype.showInfo = function(){

    this.bubble.draw(mouseX,mouseY);

}
Project.prototype.showInfoBar = function(){
  this.style(4);
  rect(0,height - 30,width,30);
  this.style(2);
  textAlign(CENTER);
  textSize(14);
  switch(this.infobar){
    case 0:
    text("CLICK = show info about a project, ENTER = show next project", width/2,height -10);
    break;
    case 1:
    text("CLICK on a image = show a project", width/2,height -10);
    break;
  }
}
Project.prototype.showTitle = function(){
  this.style(1);
  textSize(250);
  textAlign(CENTER);
  text(this.text1,width/2,height/3);
}

Project.prototype.showSubTitle = function(){
  this.style(1);
  textSize(100);
  textAlign(CENTER);
  text(this.text2,width/2,(height/3) + 100);
}
Project.prototype.collectWhite = function(){
  loadPixels();
  for(var i = 0; i < pixels.length; i += 60){
    if((pixels[i] == 255) && (pixels[i+1] == 255) && (pixels[i+2] == 255)){
      var p = (i / (4 * this.density));
      var x = p % width;
      var y = p / width;

      append(this.bubbles, new Bubble(x,y, 20));
    }
  }
}
Project.prototype.showBubbles = function(){
  for(var i = 0; i< this.bubbles.length; i++){
    this.bubbles[i].move();
    this.bubbles[i].draw();
  }
}
Project.prototype.createCracks = function(){
  var dir = createVector(-10,0);
  append(this.cracks, new Crack(mouseX, mouseY, dir));
  dir = createVector(10,0);
  append(this.cracks, new Crack(mouseX, mouseY, dir));
  dir = createVector(0,-10);
  append(this.cracks, new Crack(mouseX, mouseY, dir));
  dir = createVector(0,10);
  append(this.cracks, new Crack(mouseX, mouseY, dir));

}
Project.prototype.crackScreen = function(){
  for(var i = 0 ; i < this.cracks.length; i++){
    this.cracks[i].go();
    this.cracks[i].draw();
  }
}
