/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Knitting by Ria Stroes";
  this.init();
};

Project.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 5;
    break;
    case 1:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 2;
    break;
    case 2:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.randomImgColor();
    this.thickness = 1;
    break;


  }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Project.prototype.showText = function(){
  textSize(12);
  textFont("Courier");
  this.style(0);
  text(this.text,width-220,height-25);
  this.style(1);
  text(this.text,width-220,height-25);
}

Project.prototype.init = function(){
  this.knitting = new Knitting();
  this.knitting.init( createVector(0,0),
                      createVector(300,100),
                      createVector(100,400),
                      createVector(300,400));

}
Project.prototype.draw = function(nr){
  //this.showText();
  switch(nr){
    case 0:{
      var rows = 1;
      var totrows = 12;
      var realtotrows = (totrows/2)+1;
      var stitches = 12;
      var stitchheight = 80;
      var stitchwidth = 40;
      var wmarge = (width -(stitchwidth*stitches))/ 2;
      var hmarge = 100;
      var y = hmarge +(stitchheight*realtotrows);

      var pos = createVector(wmarge,y);
      this.knitting.style(2);
      this.knitting.drawFirstRow(pos, stitches, stitchwidth, stitchheight);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      rows = 6;
      this.knitting.drawRowPurl(pos, rows, stitches, stitchwidth, stitchheight);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      this.knitting.drawRowKnit(pos, rows, stitches, stitchwidth, stitchheight);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      this.knitting.drawLastRow(pos, stitches, stitchwidth, stitchheight);


      break;
    }
    case 1:{
      var rows = 1;
      var totrows = 24;
      var realtotrows = (totrows/2)+1;
      var stitches = 25;
      var stitchheight = 40;
      var stitchwidth = 20;
      var wmarge = (width -(stitchwidth*stitches))/ 2;
      var hmarge = 100;
      var y = hmarge +(stitchheight*realtotrows);

      var pos = createVector(wmarge,y);
      this.knitting.style(4);
      this.knitting.drawFirstRow(pos, stitches, stitchwidth, stitchheight);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      rows = 12;
      this.knitting.drawRowPurl(pos, rows, stitches, stitchwidth, stitchheight);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      this.knitting.drawRowKnit(pos, rows, stitches, stitchwidth, stitchheight);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      this.knitting.drawLastRow(pos, stitches, stitchwidth, stitchheight);


      break;
    }
    case 2:{
      var rows = 1;
      var totrows = 24;
      var realtotrows = (totrows/2)+1;

      var stitches = 20;
      var stitchheight = 40;
      var stitchwidth = 25;
      var wmarge = (width -(stitchwidth*stitches))/ 2;
      var hmarge = 100;
      var y = hmarge +(stitchheight*realtotrows);

      var pos = createVector(wmarge,y);
      this.knitting.style(1);
      this.knitting.drawFirstRow(pos, stitches, stitchwidth, stitchheight);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      rows = 12;
      this.knitting.drawRowPurl(pos, rows, stitches, stitchwidth, stitchheight);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      this.knitting.drawRowKnit(pos, rows, stitches, stitchwidth, stitchheight);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      this.knitting.drawLastRow(pos, stitches, stitchwidth, stitchheight);
//***
var rows = 1;
var totrows = 24;
var realtotrows = (totrows/2)+1;

var stitches = 20;
var stitchheight = 40;
var stitchwidth = 25;
var wmarge = (width -(stitchwidth*stitches))/ 2;
var hmarge = 100;
var y = hmarge +(stitchheight*realtotrows);

var pos = createVector(wmarge,y);
      this.knitting.style(5);
      this.knitting.drawFirstRow(pos, stitches, stitchwidth, stitchheight);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      rows = 12;
      this.knitting.drawRowPurl(pos, rows, stitches, stitchwidth, stitchheight);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      this.knitting.drawRowKnit(pos, rows, stitches, stitchwidth, stitchheight);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      this.knitting.drawLastRow(pos, stitches, stitchwidth, stitchheight);


      break;
    }
    case 3:{
      var rows = 1;
      var totrows = 12;
      var realtotrows = (totrows/2)+1;
      var stitches = 12;
      var stitchheight = 80;
      var stitchwidth = 40;
      var wmarge = (width -(stitchwidth*stitches))/ 2;
      var hmarge = 100;
      var y = hmarge +(stitchheight*realtotrows);

      var pos = createVector(wmarge,y);
      this.knitting.style(6);
      this.knitting.drawFirstRow(pos, stitches, stitchwidth, stitchheight);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      rows = 6;
      this.knitting.drawRowPurl(pos, rows, stitches, stitchwidth, stitchheight);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      this.knitting.drawRowKnit(pos, rows, stitches, stitchwidth, stitchheight);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      this.knitting.drawLastRow(pos, stitches, stitchwidth, stitchheight);


      break;
    }
    case 4:{


      //this.text ="two knits, two purls";
    //  this.showText();
    var rows = 1;
    var totrows = 34;
    var realtotrows = (totrows/2)+1;
    var stitches = 36;
    var stitchheight = 25;
    var stitchwidth = 15;
    var wmarge = (width -(stitchwidth*stitches))/ 2;
    var hmarge = 100;
    var y = hmarge +(stitchheight*realtotrows);

    var pos = createVector(wmarge,y);

      this.knitting.style(7);
      this.knitting.drawFirstRow(pos, stitches, stitchwidth, stitchheight);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      rows = 34;
      var pat =[1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0];
      //pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      this.knitting.drawPattern(pos, rows, stitches, stitchwidth, stitchheight,pat);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));

      this.knitting.drawLastRow(pos, stitches, stitchwidth, stitchheight);

      this.knitting.style(10);
      textAlign(CENTER);
      text("two knits, two puls by Ria Stroes",width/2, height-50 );


      break;
    }
    case 5:{


      //this.text ="two knits, two purls";
    //  this.showText();
    var rows = 1;
    var totrows = 32;
    var realtotrows = (totrows/2)+1;
    var stitches = 36;
    var stitchheight = 25;
    var stitchwidth = 15;
    var wmarge = (width -(stitchwidth*stitches))/ 2;
    var hmarge = 100;
    var y = hmarge +(stitchheight*realtotrows);

    var pos = createVector(wmarge,y);
     var pat = [];

      this.knitting.style(8);
      this.knitting.drawFirstRow(pos, stitches, stitchwidth, stitchheight);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));

      rows = 1;
      for(var i = 0; i < 16; i++){
      pat =[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1];
      //pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      this.knitting.drawPattern(pos, rows, stitches, stitchwidth, stitchheight,pat);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      pat =[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1];
      //pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      this.knitting.drawPattern(pos, rows, stitches, stitchwidth, stitchheight,pat);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      }
      this.knitting.drawLastRow(pos, stitches, stitchwidth, stitchheight);

      this.knitting.style(10);
      textAlign(CENTER);
      text("stye by Ria Stroes",width/2, height-50 );


      break;
    }
    case 6:{
    // more knit
    var rows = 1;
    var totrows = 10;
    var realtotrows = (totrows/2)+1;
    var stitches = 12;
    var stitchheight = 80;
    var stitchwidth = 40;
    var wmarge = (width -(stitchwidth*stitches))/ 2;
    var hmarge = 100;
    var y = hmarge +(stitchheight*realtotrows);

    var pos = createVector(wmarge,y);
      this.knitting.style(0);
    this.knitting.drawFirstRow(pos, stitches, stitchwidth, stitchheight);
    pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
    rows = 10;
    //pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
    this.knitting.drawRowKnit3D(pos, rows, stitches, stitchwidth, stitchheight);
    pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
    this.knitting.drawLastRow3D(pos, stitches, stitchwidth, stitchheight);


      break;
    }
    case 7:{
    // more purl
    var rows = 1;
    var totrows = 10;
    var realtotrows = (totrows/2)+1;
    var stitches = 12;
    var stitchheight = 80;
    var stitchwidth = 40;
    var wmarge = (width -(stitchwidth*stitches))/ 2;
    var hmarge = 100;
    var y = hmarge +(stitchheight*realtotrows);

    var pos = createVector(wmarge,y);
    this.knitting.style(0);
    this.knitting.drawFirstRow3D(pos, stitches, stitchwidth, stitchheight);
    pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
    rows = 10;
    //pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
    this.knitting.drawRowPurl3D(pos, rows, stitches, stitchwidth, stitchheight);
    pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
    this.knitting.drawLastRow3D(pos, stitches, stitchwidth, stitchheight);


      break;
    }
    case 8:{
    // two knit, two purl, 3D
    var rows = 1;
    var totrows = 10;
    var realtotrows = (totrows/2)+1;
    var stitches = 12;
    var stitchheight = 80;
    var stitchwidth = 40;
    var wmarge = (width -(stitchwidth*stitches))/ 2;
    var hmarge = 100;
    var y = hmarge +(stitchheight*realtotrows);

    var pos = createVector(wmarge,y);
    var pat1 =[1,1,0,0,1,1,0,0,1,1,0,0];//,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1];

    this.knitting.style(0);
    pos = createVector(pos.x, pos.y - (rows * stitchheight/2));

    this.knitting.drawFirstRow3D(pos, stitches, stitchwidth, stitchheight);
    rows = 1;
    for(var i = 0; i < 10; i++){
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      this.knitting.drawPattern3D(pos, rows, stitches, stitchwidth, stitchheight,pat1);
    }
    pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
    this.knitting.drawLastRow3D(pos, stitches, stitchwidth, stitchheight);


      break;
    }
    case 9:{
    // STYE, 3D
    var rows = 1;
    var totrows = 10;
    var realtotrows = (totrows/2)+1;
    var stitches = 12;
    var stitchheight = 80;
    var stitchwidth = 40;
    var wmarge = (width -(stitchwidth*stitches))/ 2;
    var hmarge = 100;
    var y = hmarge +(stitchheight*realtotrows);

    var pos = createVector(wmarge,y);

    var pat1 =[1,0,1,0,1,0,1,0,1,0,1,0];//,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1];
    var pat2 =[0,1,0,1,0,1,0,1,0,1,0,1];//,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1];

    this.knitting.style(0);

    this.knitting.drawFirstRow3D(pos, stitches, stitchwidth, stitchheight);
    rows = 1;
    for(var i = 0; i < 10; i+=2){
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      this.knitting.drawPattern3D(pos, rows, stitches, stitchwidth, stitchheight,pat1);
      pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
      this.knitting.drawPattern3D(pos, rows, stitches, stitchwidth, stitchheight,pat2);

    }
    pos = createVector(pos.x, pos.y - (rows * stitchheight/2));
    this.knitting.drawLastRow3D(pos, stitches, stitchwidth, stitchheight);


      break;
    }

    case 10:{
      var pat = [];
      pat[0] =[1,1,0,0,1,1,0,0,1,1,0,0,1,1];

      var totrows = 12;
      var realtotrows = (totrows/2)+1;
      var stitches = pat[0].length;
      var stitchheight = 70;
      var stitchwidth = 35;
      var wmarge = (width -(stitchwidth*stitches))/ 2;
      var hmarge = 200;
      var y = hmarge +(stitchheight*realtotrows);
      var x = (wmarge*2);
      var pos = createVector(x,y);


      var pscale = 0.5;
      this.knitting.drawFabric(pos,12,pat[0].length,35,70,pat,pscale);
      break;
    }
    case 11:{

      var pat = [];
      pat[0] =[1,1,0,0,1,1,0,0,1,1,0,0,1,1];
      pat[1] =[1,1,0,0,1,1,0,0,1,1,0,0,1,1];
      pat[2] =[0,0,1,1,0,0,1,1,0,0,1,1,0,0];
      pat[3] =[0,0,1,1,0,0,1,1,0,0,1,1,0,0];

      var totrows = 12;
      var realtotrows = (totrows/2)+1;
      var stitches = pat[0].length;
      var stitchheight = 70;
      var stitchwidth = 35;
      var wmarge = (width -(stitchwidth*stitches))/ 2;
      var hmarge = 200;
      var y = hmarge +(stitchheight*realtotrows);
      var x = (wmarge*2) +(stitchwidth*stitches);
      var pos = createVector(x,y);

      var pscale = 0.5;
      this.knitting.drawFabric(pos,12,pat[0].length,35,70,pat,pscale);
      break;
    }
    case 12:{

      var pat = [];
      pat[0] =[1,1,1,1,1,1,1,1,1,1,1,1,1,1];
      pat[1] =[0,0,0,0,0,0,0,0,0,0,0,0,0,0];

      var totrows = 12;
      var realtotrows = (totrows/2)+0.75;
      var stitches = pat[0].length;
      var stitchheight = 70;
      var stitchwidth = 35;
      var wmarge = (width -(stitchwidth*stitches))/ 2;
      var hmarge = 200;
      var y = hmarge +(stitchheight*realtotrows)+(stitchheight*realtotrows);
      var x = (wmarge*2);
      var pos = createVector(x,y);
      var pscale = 0.5;
      this.knitting.drawFabric(pos,12,pat[0].length,35,70,pat,pscale);
      break;
    }
    case 13:{

      var pat = [];
      pat[0] =[1,1,1,1,1,1,1,1,1,1,1,1,1,1];
      pat[1] =[0,1,1,1,0,1,1,1,0,1,1,1,0,1];
      pat[2] =[0,0,1,0,0,0,1,0,0,0,1,0,0,0];
      pat[3] =[0,1,1,1,0,1,1,1,0,1,1,1,0,1];
      var rows = 1;
      var totrows = 12;
      var realtotrows = (totrows/2)+0.75;
      var stitches = pat[0].length;
      var stitchheight = 70;
      var stitchwidth = 35;
      var wmarge = (width -(stitchwidth*stitches))/ 2;
      var hmarge = 200;
      var y = hmarge +(stitchheight*realtotrows)+(stitchheight*realtotrows);
      var x = (wmarge*2) +(stitchwidth*stitches);
      var pos = createVector(x,y);
      var pscale = 0.5;
      this.knitting.drawFabric(pos,12,pat[0].length,35,70,pat,pscale);
      break;
    }

  }
}
