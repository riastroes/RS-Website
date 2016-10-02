/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Diamonds";
  this.init();

};

Project.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;


  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Project.prototype.showText = function(){
  this.style(0);
  text(this.text,60,80);
}

Project.prototype.init = function(){
  background(255);
  var pos;
  this.diamonds = [];
  for(var i = 0; i < 5; i++){
    pos = createVector((width/2), (height/2));
    append(this.diamonds, new Diamonds(pos,200,9));
  }
}
Project.prototype.draw = function(nr){
  switch(nr){
    case 0:{

      for(var i = 0; i < 5; i++){
        if(this.diamonds[i].p.length>2){
          this.diamonds[i].minus();
        }
        this.diamonds[i].draw();
      }
      break;
    }
  }


}
