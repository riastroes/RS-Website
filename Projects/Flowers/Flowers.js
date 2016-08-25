/**
 * Created by Ria Stroes on 16-3-2016.
 * Creating different kind of flowers.
 * Creating a flower with the Blobber class
 */
function Flower(){
    this.width = 0;
    this.height = 0;
    this.center = undefined;
    this.lobs = 0;
    this.age = 0;

}
Flower.prototype.live = function(pos, flowerwidth, flowerheight, lobs){
    var b,hart;
    this.age+=0.001;
    this.center = pos.copy();
    this.width = this.age * flowerwidth;
    this.height = this.age * flowerheight;
    this.lobs = lobs;
    if(app.isnot(this.blobbers)){
        this.blobbers = [];
        append(this.blobbers,new RegBlobber() );
        append(this.blobbers,new RegBlobber() );
        append(this.blobbers,new Blobber() );

    }
    this.blobbers[0].init(this.center, this.lobs,this.width/2, this.width, this.height/2, this.height);
    this.blobbers[1].init(this.center, this.lobs +4,this.width/4, this.width, this.height/4, this.height);
    hart = flowerwidth/5;
    this.blobbers[2].init(this.center, 5,hart/2, random(hart/2, hart),hart/2, random(hart/2, hart));
};
Flower.prototype.draw = function() {


    for (b = 0; b < this.blobbers.length - 1; b++) {
        this.blobbers[b].style(app.pal.frameCountImgColor(5), app.pal.tint(app.pal.frameCountImgColor(25), 70), 1);
        this.blobbers[b].draw();
    }
    app.style.set(app.pal.frameCountImgColor(10), app.pal.tint(app.pal.frameCountImgColor(25), 70), 1);
    this.blobbers[b].draw();
};
Flower.prototype.drawBW = function(){

        for(b = 0; b < this.blobbers.length - 1; b++){
            this.blobbers[b].style(app.pal.colors[0], app.pal.tint(app.pal.frameCountColor(25),70),1);
            this.blobbers[b].draw();
        }
        app.style.set(app.pal.colors[1], app.pal.colors[0],3);
        this.blobbers[b].draw();
};
Flower.prototype.drawB = function(){
    //flower mask

        this.blobbers[0].style(false, app.pal.colors[0],1);
        this.blobbers[0].draw();


};
