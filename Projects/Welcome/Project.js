/**
 * Created by Ria Stroes on 10-8-2016.
 */
 "use strict";
function Project(){
  this.text1 = "Ria Stroes";
  this.text2 = "creative coder";
  this.bg =app.pal.randomImgColor();
  this.bubbles =[];
  this.density = pixelDensity();
  this.info = false;
  this.cracks = [];

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
    this.info = false;
    this.bubble = new TextBubble(4,5);
    this.createCracks(4);
    break;
    case 4:
    background(this.bg);
    this.crackScreen();
    break;
    case 5:
    //one background color
    this.bg = get(10, 10);
    background(this.bg);
    break;
    case 6:
    this.createShow();
    break;
    case 7:
    //show projects
    this.showProjects();
    break;
  }
  if(this.info){
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
  text("CLICK = show info about a project, ENTER = show next project", width/2,height -10);

}
Project.prototype.showTitle = function(){
  this.style(1);
  textSize(200);
  textAlign(CENTER);
  text(this.text1,width/2,height/2);
}

Project.prototype.showSubTitle = function(){
  this.style(1);
  textSize(100);
  textAlign(CENTER);
  text(this.text2,width/2,(height/2) + 100);
}
Project.prototype.collectWhite = function(){
  loadPixels();
  for(var i = 0; i < pixels.length; i += 60){
    if((pixels[i] == 255) && (pixels[i+1] == 255) && (pixels[i+2] == 255)){
      var p = (i / (4 * this.density));
      var x = p % width;
      var y = p / width;

      append(this.bubbles, new Bubble(x,y, 10));
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
Project.prototype.createShow = function(){
  this.show = new Show();
}
Project.prototype.showProjects = function(){

  for(var i = 0; i < this.show.length; i++){

  }

}
