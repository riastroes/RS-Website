function Frame(img,nr, free){
  this.nr = nr;
  this.pg = createGraphics(img.width, img.height);
  this.pg.image(img,0,0);
  this.marge = (width % 200) / 2;
  this.pos = createVector(this.marge + (app.randomInt((width-200)/200) * 200),-this.nr*200);
  this.relcenter = createVector(img.width/2, img.height/2);
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
    this.thickness = 3;
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
      if(!app.posInCircle(pos, center, 90)){
        if(!app.posInCircle(pos, center, 100)){
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
  var choosenproject = -1;
  if(mouseIsPressed == true){
    if(dist(this.pos.x + this.relcenter.x , this.pos.y + this.relcenter.y, mouseX, mouseY)< 100){
      choosenproject = this.nr;
      this.stop = true;
    }
  }
  if(!this.stop){
    this.pos.y += 1;
    if(this.pos.y > (height-30)){
      this.marge = (width % 200) / 2;
      this.pos = createVector(this.marge + (app.randomInt((width-200)/200) * 200),-this.nr*200);
      console.log(app.randomInt(width/200));
    }
  }
  return  choosenproject;
}
Frame.prototype.draw = function(){
  this.style(1);
  ellipse(this.pos.x + this.relcenter.x, this.pos.y + this.relcenter.y, 200,200);
  image(this.pg, this.pos.x, this.pos.y);

}
