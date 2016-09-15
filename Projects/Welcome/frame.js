function Frame(img, nr, size){
  this.nr = nr;
  this.size = size;
  this.pg = createGraphics(size,size);
  img.resize(size,size);
  this.pg.image(img,0,0);
  this.marge = ((width-250) % this.size) / 2;
  this.offset = this.marge + 100 + ((this.pg.width)/2);
  this.pos = createVector(this.offset + ((app.randomInt(parseInt((width-450)/this.size)) * this.size)),-random(200,500));
  this.center = createVector(img.width/2, img.height/2);
  this.mask();
  this.stop = false;
  this.border = app.pal.randomImgColor();


}

Frame.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = this.border;
    this.fillcolor = false;
    this.thickness = 2;
    app.style.pg(this.pg, this.strokecolor, this.fillcolor, this.thickness);

    break;
  }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
}

Frame.prototype.mask = function(){
  this.pg.loadPixels();
  for(var x = 0; x < this.pg.width; x++){
    for(var y = 0; y < this.pg.height; y++){
      var pos = createVector(x,y);
      var center = createVector(this.pg.width/2, this.pg.height/2);
      if(!app.posInCircle(pos, center, ((this.pg.width/2)-10))){
        if(!app.posInCircle(pos, center, (this.pg.width/2))){
          var i = ( y * this.pg.width * 4 * pixelDensity()) + (x * 4 * pixelDensity());
          this.pg.pixels[i +3] = 0;
        }
        else{
          var i = ( y * this.pg.width * 4 * pixelDensity()) + (x * 4 * pixelDensity());
          this.pg.pixels[i +3] = 125;
        }
      }
    }
  }
  this.pg.updatePixels();
}
Frame.prototype.moveTo = function(pos){
  this.pos = pos;
}
Frame.prototype.move = function(){
  var x,y;
  var choosenproject = -1;
  this.stop = false;

  if(mouseIsPressed){
    x = mouseX;
    y = mouseY;
    ellipse(x,y,20,20);
  }
  if(touchIsDown){
    x = touchX;
    y = touchY;
    ellipse(x,y,20,20);
  }
  if(dist(this.pos.x + this.center.x , this.pos.y + this.center.y , x,y)< 100){
    choosenproject = this.nr;
    this.stop = true;
  }
  if(!this.stop){
    var canmove = true;
    for(var i = 0 ; i < app.project.gallery.frames.length; i++){
      var aframe = app.project.gallery.frames[i];


        if(dist(this.pos.x, this.pos.y, aframe.pos.x, aframe.pos.y) < (aframe.size) &&
          this.pos.y < aframe.pos.y){
            canmove = false;
        }

    }
    if(canmove){
      this.pos.y += app.project.gallery.speed;
    }
  }

    if(this.pos.y > (height+100)){

      this.marge = ((width -250) % this.size) / 2;
      this.offset = this.marge + 100 + ((this.pg.width)/2);
      this.pos.x = this.offset + ((app.randomInt(parseInt((width-450)/this.size)) * this.size));
      this.pos.y = -random(100,this.size);

    }
    return  choosenproject;
  }
Frame.prototype.move1 = function(){
  var x,y;
  this.stop = false;
  var choosenproject = -1;
  if(mouseIsPressed){
    x = mouseX;
    y = mouseY;
    ellipse(x,y,20,20);
  }
  if(touchIsDown){
    x = touchX;
    y = touchY;
    ellipse(x,y,20,20);
  }
  if(dist(this.pos.x + this.center.x , this.pos.y + this.center.y, x,y)< 100){
    choosenproject = this.nr;
    this.stop = true;
  }
  if(!this.stop){
    this.pos.y += app.project.gallery.speed;

    if(this.pos.y > (height-(this.size/2))){

      this.marge = ((width -250) % this.size) / 2;
      this.offset = this.marge + 100 + ((this.pg.width)/2);
      this.pos.x = this.offset + ((app.randomInt(parseInt((width-450)/this.size)) * this.size));
      this.pos.y -= this.pg.height * app.project.gallery.frames.length;

    }
  }
  return  choosenproject;
}

Frame.prototype.draw = function(){
  this.style(1);
  //this.pg.ellipse(this.center.x, this.center.y, this.pg.width-1,this.pg.height-1);
  //imageMode(CENTER);
  //rectMode(CENTER);
  image(this.pg, this.pos.x, this.pos.y);

}
