/**
 * Created by Ria Stroes on 30-3-2016.
 */


function BigBlobber(mask){
    //this.grid = new Grid(10,10,(width-540)/2, (height-540)/2, (width-540)/2, (height-540)/2);
    this.grid  = undefined;
    this.mask = mask;
    this.center = createVector(width/2, height/2);
    this.newblobbers = [];
    this.blobbers = [];
    for(i =0; i < this.mask.length; i++){
        this.blobbers[i] = new Blobber();
        this.blobbers[i].style(app.pal.randomImgColor(), app.pal.tint(app.pal.randomImgColor(),10),1);
        this.blobbers[i].init(this.mask[i],30,300,height/2,300,height/2);

    }

}


BigBlobber.prototype.style = function(nr) {
       switch(nr){

         case 0:{
           for (i = 0; i < this.blobbers.length; i++) {
              this.blobbers[i].style(false,app.pal.tint(app.pal.randomImgColor(), 50), 1);
          }
           break;
         }
         case 1:{

           for (i = 0; i < this.blobbers.length; i++) {
              this.blobbers[i].style(app.pal.tint(app.pal.randomImgColor(), 50), false, 1);
          }
           break;
         }
         case 2:{
           for (i = 0; i < this.blobbers.length; i++) {
              this.blobbers[i].style(app.pal.randomImgColor(), app.pal.randomImgColor(), 1);
          }

           break;
         }
         case 3:{
           for (i = 0; i < this.blobbers.length; i++) {
              this.blobbers[i].style(app.pal.colors[1], app.pal.randomImgColor(), 0.3);
          }
           break;
         }
         case 4:{
           for (i = 0; i < this.blobbers.length; i++) {
              this.blobbers[i].style(app.pal.colors[1], app.pal.tint(app.pal.randomImgColor(), 50), 1);
          }
           break;
         }

       }
//     var i, ok = false;
//     if (nr == 2){
//         for (i = 0; i < this.blobbers.length; i++) {
//             this.blobbers[i].style(app.pal.colors[1], app.pal.tint(app.pal.randomImgColor(), 10), 3);
//         }
// }
//     else{
//         for (i = 0; i < this.blobbers.length; i++) {
//             this.blobbers[i].style(app.pal.colors[1], app.pal.tint(app.pal.randomImgColor(), 50), 3);
//         }
//
//     }
};
BigBlobber.prototype.live = function() {
    var i, ok = false ;

    for(i=0; i < this.blobbers.length; i++) {

        ok =this.blobbers[i].splitting();
        if(ok){
            this.blobbers[i].split(this.newblobbers);
        }
    }
    if(this.newblobbers.length > 0){

        for(i = 0 ; i < this.newblobbers.length; i++) {
           // this.blobbers = subset(this.blobbers,1,this.blobbers.length);
            //append(this.blobbers, this.newblobbers[i]);
        }
        this.newblobbers = [];
    }

};
BigBlobber.prototype.rotate = function(rot){
    var i;

    for(i=0; i < this.blobbers.length; i++) {
       this.blobbers[i].rot += rot;
    }
};
BigBlobber.prototype.draw = function(){
    var i;
    //app.style.set( app.pal.colors[3],app.pal.tint(app.pal.colors[3],10),1);
    for(i=0; i < this.blobbers.length; i++) {
        this.blobbers[i].draw();

    }
};
BigBlobber.prototype.draw1 = function(){
    var i;

    for(i=0; i < this.blobbers.length; i++) {
       this.blobbers[i].draw();

    }
};

BigBlobber.prototype.lines = function(morepoints) {
    var i,max, half;
    //app.style.set(app.pal.colors[2], app.pal.colors[3],1);
    for(i=0; i < this.blobbers.length; i++) {
        this.blobbers[i].createMorePoints(morepoints);
        max = this.blobbers[i].morepos.length;
        half = floor(this.blobbers[i].morepos.length / 2);
        this.blobbers[i].linesToCenter();
    }
};
BigBlobber.prototype.split = function(){

    var i, newblobber;

    for(i=0; i < this.blobbers.length; i++) {
       this.blobbers[i].split(this.newblobbers, i);

    }
    for(i =0; i < this.newblobbers.length; i++){
        append( this.blobbers, this.newblobbers[i]);

    }
    this.newblobbers = [];



};
BigBlobber.prototype.grow = function(g){
   var i;
   for(i=0; i < this.blobbers.length; i++) {
       this.blobbers[i].grow(g);

   }

};
