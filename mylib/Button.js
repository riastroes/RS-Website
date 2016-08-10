function Button(text, pos, buttonwidth, buttonheight, strokecolor, fillcolor, round, fun){
    this.text = text;
    this.pos = pos.copy();
    this.width = buttonwidth;
    this.height = buttonheight;
    this.strokecolor = strokecolor;
    this.fillcolor = fillcolor;
    this.round = round;
    this.textcolor = app.pal.colors[0];
    if ((red(this.fillcolor) + green(this.fillcolor) + blue(this.fillcolor)) < 300){
        this.textcolor = app.pal.colors[1];
    }
    if(typeof(fun) !== "undefined"){
        this.fun = fun;
    }
}
Button.prototype.draw = function(){


    app.style.set(this.strokecolor, this.fillcolor, 1, CENTER);
    rect(this.pos.x, this.pos.y, this.width, this.height, this.round );
    app.style.text(12, CENTER, this.textcolor);
    text(this.text, this.pos.x, this.pos.y+6);
    app.style.reset();


};
Button.prototype.isClicked = function(){
    if(mouseIsPressed && (abs(mouseX - this.pos.x) < this.width/2) && (abs(mouseY - this.pos.y) < this.height/2)){
        mouseIsPressed = false;
        if(typeof(this.fun) !== "undefined"){
            this.fun();
        }
        return true;
    }
    return false;
};
Button.prototype.testfun = function(){
    app.style.text(12,CENTER,app.pal.colors[0]);
    text("This button is clicked", this.pos.x, this.pos.y + (this.height/2)+ 20);
};