/**
 * Created by Ria Stroes on 16-3-2016.
 * Space is an object
 * Space.draw is allways from center;
 * Space is used for defining space (rectangle) for objects.
 */
function Space(rectwidth, rectheight) {

    this.width = rectwidth;
    this.height = rectheight;
    this.lefttop = undefined;
    this.righttop = undefined;
    this.leftbottom = undefined;
    this.rightbottom = undefined;
}
Space.prototype.set = function (pos) {
    this.center = pos.copy();
    this.lefttop = p5.Vector.add(this.center, createVector(-this.width/2, -this.height/2));
    this.righttop = p5.Vector.add(this.center, createVector(this.width/2, -this.height/2));
    this.leftbottom = p5.Vector.add(this.center, createVector(-this.width/2, this.height/2));
    this.rightbottom = p5.Vector.add(this.center, createVector(this.width/2, this.height/2));
};
Space.prototype.data = function(){
    //return an index collection of all the point in the space;
    var indexes = [];
    var pg = createGraphics(this.width, this.height);
    var found = false;
    var r, cr,pos,i;
    app.style.set(false, app.pal.transparent,0);
    this.draw(pg);
    pg.loadPixels();
    for(r = 0; r < height; r++){
        found = false;
        for(cr = 0; cr < Math.pow(2,r); cr++) {
            pos = posOnCircle(this.center, r, Math.pow(2, r), cr);
            i = (pos.y * width * 4) + (pos.x * 4);
            if(pg.pixels[i+3] == 0){
                append(indexes,i);
                found = true;
            }
        }
        if(!found){
            break;
        }
    }

}
Space.prototype.draw = function (pg) {
    var rectmodechanged = false;
    if (app.is(this.center)){
        if (app.is(pg)) {
            if(pg.rectMode() != CENTER){ pg.rectMode(CENTER); rectmodechanged = true;}
            pg.rect(this.center.x, this.center.y, this.width, this.height);
            if(rectmodechanged){ pg.rectMode(CORNER);}
        }
        else {
            if(rectMode() != CENTER){ rectMode(CENTER); rectmodechanged = true;}
            rect(this.center.x, this.center.y, this.width, this.height);
            if(rectmodechanged){ rectMode(CORNER);}
        }
    }

};