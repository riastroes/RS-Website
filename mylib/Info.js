/**
 * Created by Ria Stroes on 9-3-2016.
 */
function Info(){
    this.pg = createGraphics(200, height);
    this.leftmarge = 20;
    this.topmarge = 20;
    this.liney = this.topmarge;
    this.lineheight = 20;
    this.log = [];
    this.doshow = false;


}

Info.prototype.show = function(){
   if(this.doshow) {
       this.pg.background(app.pal.colors[1]);

        if (frameCount % 100 == 0) {
            app.totframerate = frameRate();  // reset
        }
        else if (frameCount % 100 < 99) {
            app.totframerate += frameRate(); //add
        }
        else if (frameCount % 100 == 99) {
            app.gemframerate = app.totframerate / 100;

        }
        app.style.pg(this.pg, false, app.pal.colors[0], 1);

        this.pg.text("frameRate: " + int(frameRate()), this.leftmarge, this.liney);
        this.pg.text("gem. frameRate: " + int(app.gemframerate), this.leftmarge, this.liney += this.lineheight);
        this.pg.text("frameCount: " + frameCount, this.leftmarge, this.liney += this.lineheight);
        this.pg.text("scene: " + app.name, this.leftmarge, this.liney += this.lineheight);
        this.pg.text("scene: " + app.scene, this.leftmarge, this.liney += this.lineheight);
        this.pg.text("run: " + app.runcount, this.leftmarge, this.liney += this.lineheight);
        this.pg.text("width: " + width, this.leftmarge, this.liney += this.lineheight);
        this.pg.text("height: " + height, this.leftmarge, this.liney += this.lineheight);

        for (var index in this.log) {
            if (this.log.hasOwnProperty(index)) {
                this.pg.text(this.log[index], this.leftmarge, this.liney += this.lineheight);
            }
        }
        this.log = [];
        this.liney = this.topmarge;
        app.style.image(CORNER, BLEND);
        image(this.pg, 0, 0);
    }
};
Info.prototype.add = function (msg){
    append(this.log, msg);
};
