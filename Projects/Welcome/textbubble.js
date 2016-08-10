function TextBubble(min,  max){
  this.x = width/2;
  this.y = height/2;
  this.style(0);

  this.textnr = min-1;
  this.minnr = min;
  this.maxnr = max;
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
TextBubble.prototype.draw = function(x,y){
  this.x = x;
  this.y = y;

  this.style(0);
  ellipse(this.x,this.y - 125, 250,250);
  textSize(16);
  textAlign(CENTER);
  this.style(1);
  text(this.getText(), this.x,this.y - 125);

}
TextBubble.prototype.getText = function(){
  if(this.textnr > this.maxnr){
    this.textnr = this.minnr;
  }

  switch(this.textnr){
    case 1:
    this.text = "Hello, \nIf you want to find out more.\nJust click on the screen!"
    break;
    case 2:
    this.text = "I'm a creative coder.";
    this.text += "\nThis means code is my pencil.";
    this.text += "\nCode is my paint.";
    break;
    case 3:
    this.text = "Press ENTER";
    this.text += "\n and I will show my last project.";
    break;
    case 4:
    this.text = "This is the big crack!";
    break;
    case 5:
    this.text = "Don't fall in!";
    break;
    default:
    this.text = "Sorry, there is no more info.";
    this.textnr = max;
  }

  return this.text;
}
