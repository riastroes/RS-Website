function Feather(x,y){
   this.center = createVector(width/2, height/2);
   this.start = createVector(x,y);
   this.top = this.start.copy();
   this.top.y -= 50;

   this.control1 = this.start.copy();
   this.control1.y += 10;

   this.control2 = this.top.copy();
   this.control2.x += random(-10,10);

   this.rot = random(TWO_PI);


}
Feather.prototype.change1 = function(){
  var dircenter = p5.Vector.sub(this.center, this.start);
  dircenter.normalize();
  if(frameCount % 3 == 1){
    this.start.add(dircenter);
    this.top.add(dircenter);
  }


  this.top.x += random(-1,1);
  this.top.y += random(-1,1);
  this.control1.x += random(-1,1);
  this.control2.y -= random(-5,5);
}

Feather.prototype.change2 = function(){

  var dircenter = p5.Vector.sub(this.center, this.start);
  dircenter.normalize();
  if(frameCount % 3 == 1){
    this.control1.add(dircenter);

  }

}
Feather.prototype.change3 = function(){
  var dircenter = p5.Vector.sub(this.center, this.start);
  dircenter.normalize();
  if(frameCount % 5 == 1){
    this.control1.add(dircenter);
    this.control2.add(dircenter);
    this.top.add(dircenter);
    this.start.sub(dircenter);

  }

}
Feather.prototype.change4 = function(){
  var dircenter = p5.Vector.sub(this.center, this.start);
  dircenter.normalize();
  dircenter.mult(3);
  if(frameCount % 5 == 1){
    //this.control1.add(dircenter);
    //this.control2.add(dircenter);
    this.top.add(dircenter);
    this.start.sub(dircenter);

  }

}
Feather.prototype.draw = function(nr){


   if(frameCount% 100 == 0){
     this.style(2);
   }

   this.rot += 0.01;
   if(nr == 1){
     this.change3();
   }
   if(nr == 2){
     this.change1();
   }
   if(nr == 3){
     this.change2();
   }

   push();
   translate(this.start.x,this.start.y);
   scale(0.4);
   rotate(this.rot);
   curve(this.control1.x, this.control1.y,0,0 , this.top.x, this.top.y, this.control2.x, this.control2.y);
   pop();


}
Feather.prototype.draw2 = function(nr){


   if(frameCount% 100 == 0){
     this.style(0);
   }

   this.rot += 0.01;
   if(nr == 2){
     this.change2();
   }
   if(nr == 3){
     this.change4();
   }

   push();
   translate(this.center.x, this.center.y);
   scale(0.4);
   rotate(this.rot);
   curve(this.control1.x, this.control1.y, this.start.x,this.start.y, this.top.x, this.top.y, this.control2.x, this.control2.y);
   pop();


}
Feather.prototype.style = function(nr){

  switch(nr){
     case 0:
       this.strokecolor = app.pal.colors[0];
       this.fillcolor = app.pal.colors[1];
       this.thickness = 1;
     break;
     case 1:
       this.strokecolor = app.pal.colors[1];
       this.fillcolor = app.pal.tint(app.pal.randomImgColor(),10);
       this.thickness = 0.2;
     break;
     case 2:
       this.strokecolor = app.pal.tint(app.pal.randomImgColor(),20);
       this.fillcolor = false;
       this.thickness = 1;
     break;
     }
    app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
