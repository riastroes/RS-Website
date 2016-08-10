function TextBubble(nr){
  this.x = width/2;
  this.y = height/2;
  this.style(0);
  this.textnr = nr;
  this.minnr = 0;
  this.maxnr = 3;
  this.max = 99;

}
TextBubble.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.tint(app.pal.imgcolors[0],20);
    this.thickness = 0.5;
    break;
    case 1:
    this.strokecolor = false;
    this.fillcolor = app.pal.colors[1];
    this.thickness = 0.5;
    break;

  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
}
TextBubble.prototype.draw = function(x,y,minnr, maxnr){
  this.x = x;
  this.y = y;
  this.minnr = minnr;
  this.maxnr = maxnr;
  this.style(0);
  ellipse(this.x,this.y - 125, 250,250);
  textSize(16);
  textAlign(CENTER);
  this.style(1);
  text(this.getText(this.textnr), this.x,this.y - 125);

}
TextBubble.prototype.getText = function(nr){
  switch(nr){
    case 1:
    this.text = "Hello, \nIf you want to find out more.\nJust click on the screen!"
    break;
    case 2:
    this.text = "I'm a creative coder.";
    this.text += "\nThis means code is my pencil.";
    this.text += "\nCode is my paint.";
    break;
    default:
    this.text = "Sorry, there is no more info.";
    this.textnr = max;
  }
  this.textnr++;
  return this.text;
}
