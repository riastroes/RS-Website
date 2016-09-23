/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = [];
  append(this.text,"Course P5, basics");

};

Project.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = false;
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1;
    break;
    case 2:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.randomImgColor();
    this.thickness = 1;
    break;


  }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Project.prototype.showText = function(x,y, lesson){
  this.style(0);
  var l ="";
  var h3 = createElement('h3',"Lesson " + lesson);
  h3.position(x,y);

  for(var i = 0; i< this.text.length; i++){
    l += "<li>";
    l += this.text[i];
    l +="</li>"
  }

var ul = createElement("ul",l);
ul.position(x, y+50);
}

Project.prototype.run = function(nr){
  this.text = [];
  switch(nr){
    case 1:{
      append(this.text,"p5.js library");
      append(this.text,"p5.js editor");
      append(this.text,"functions, params and values");
      append(this.text,"function setup and draw");
      append(this.text,"createCanvas");
      append(this.text,"fill");
      append(this.text,"mouseX, mouseY");
      append (this.text,"ellipses and circles");
      this.showText(50,100,1);
      break;
    }
    case 2:{
      append (this.text,"comments");
      append (this.text,"rectangles and squares");
      append (this.text,"triangles");
      append (this.text,"stroke and strokeWeight");
      append (this.text,"noFill and noStroke");
      this.showText(50,350,2);
      break;
    }
    case 3:{
      append (this.text,"background");
      append (this.text,"point and line");
      append (this.text,"variables");
      append (this.text,"windowWidth, windowHeight");
      append (this.text,"animations and frames");
      append (this.text,"frameRate");
      append (this.text,"noFill and noStroke");
      this.showText(50,550,3);

      break;
    }
    case 4:{
      append (this.text,"conditions");
      append (this.text,"if else");
      append (this.text,"expressions");
      append (this.text,"==, >, <, >=, <=");
      append (this.text,"&& and ||");
      append (this.text,"mouseIsPressed");
      append (this.text,"keyIsPressed");
      append (this.text,"frameCount");
      append (this.text,"% (modulo)");

      this.showText(50,750,4);

      break;
    }
  }

}
