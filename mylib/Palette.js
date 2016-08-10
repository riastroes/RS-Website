function Palette(nr, name){

  this.colors =[];
  this.imgcolors = [];
  this.nr = nr;
  this.name = name;
  this.init(this.nr);


}
Palette.prototype.add = function(i, acolor){
  this.colors[i] = acolor;
};

Palette.prototype.init = function(nr){
  this.nr = nr;

    //these colors are always available
    this.transparent = color(0,0,0,0);
    this.add(0, color('#000000')); // black
    this.add(1, color('#ffffff')); // white

  if(this.nr == 1){
    this.add(2, color('#ff6666')); //red
    this.add(3, color('#002266'));  //blue
    this.add(4, color('#888888')); // gray
    this.add(8, color('#f47171')); //reds
    this.add(5, color('#99ccff')); // licht blauw

  }
  else if(this.nr == 2){
    this.add(2, color('#cc0000')); // dark red
    this.add(3, color('#ff9900')); // gold
    this.add(5, color('#804d00'));
    this.add(4, color('#ffcc80'));
    this.add(6, color('#0f3761')); // green
    this.add(7, color('#368026')); // frog green
   }
    else if(this.nr == 3){
      //MCCC palette march 2016
      //springtime
      this.add(2, color('#FAEE5A'));
      this.add(3, color('#E4FCF9'));
      this.add(4, color('#ACE6F6'));
      this.add(5, color('#4B89AC'));
      this.add(6, color('#99ccff')); // licht blauw
  }
    else if(this.nr == 4){
      //gray scale
      this.add(2,color(225));
      this.add(3,color(200));
      this.add(4,color(175));
      this.add(5,color(150));
      this.add(6,color(125));
      this.add(7,color(100));
      this.add(8,color(75));
      this.add(9,color(50));
      this.add(10,color(25));
      this.add(11, color('#f47171')); //reds
  }
  else if(this.nr == 5){
      //gray scale
      this.add(2,color(255,0,0));
      this.add(3,color(25,65,80));
      this.add(4,color(80,180,200));
      this.add(5,color(4, 65, 23));     //green
      this.add(6,color(77, 175, 107));  //light green

  }
  else if(this.nr == 6){
      //marine
      this.add(2,color(88,102,115));
      this.add(3,color(126,167,193));
      this.add(4,color(48,97,129));
      this.add(5,color(8,41,62));     //green


  }
  else if(this.nr == 7){  //tulips
    this.add(2, color('#c30808')); //reds
    this.add(3, color('#f47171')); //orange
    this.add(4, color('#dcf421')); //purple
    this.add(5, color('#365d09')); //green
    this.add(6, color('#113d04')); //green
    this.add(7, color('#b8ec76')); //green
    this.add(8, color('#304de6')); //blue
  }
  else if(this.nr == 8){  //tulips
    this.add(2, color('#c30808')); //reds
    this.add(3, color('#f47171')); //orange
    this.add(4, color('#dcf421')); //purple
    this.add(5, color('#87CEFA')); //licht blauw
    this.add(6, color('#113d04')); //green
    this.add(7, color('#b8ec76')); //green
    this.add(8, color('#304de6')); //blue
  }
  else if(this.nr == 10){  //basis palette voor mijn website
    this.add(2, color('#fffffe')); //almost white
    this.add(3, color('#909090')); //dark gray
    this.add(4, color('#aeaeae')); //light gray
    this.add(5, color('#d60303')); //red
    this.add(6, color('#ffff00')); //yellow
    this.add(7, color('#ffff00')); //yellow
    this.add(8, color('#ffff00')); //yellow
  }
};



Palette.prototype.fromImage = function(img, count){

    var acolor;
    var c = 0;
    var attempt = 0;
    this.imgcolors = [];
    var threshold = 250;

    img.loadPixels();
    while( c  < count){
      var r = random(img.pixels.length - 4);
      var i = int(r - (r % 4));
      acolor = color(img.pixels[i], img.pixels[i+1], img.pixels[i+2], img.pixels[i+3]);
      if(!app.contains(this.imgcolors, acolor) || attempt > 100){
        if(red(acolor)<threshold || green(acolor) < threshold || blue(acolor) < threshold){
          append(this.imgcolors, acolor);
          c++;
        }
      }
        attempt++;
    }


};
Palette.prototype.addImageColors = function(img, count){
  var acolor;
  var c = 0;
  var attempt = 0;
  var threshold = 250;

  img.loadPixels();
  while( c  < count){
    var r = random(img.pixels.length - 4);
    var i = int(r - (r % 4));
    acolor = color(img.pixels[i], img.pixels[i+1], img.pixels[i+2], img.pixels[i+3]);
    if(!app.contains(this.imgcolors, acolor) || attempt > 100){
      if(red(acolor)<threshold || green(acolor) < threshold || blue(acolor) < threshold){
        append(this.imgcolors, acolor);
        c++;
      }

    }
      attempt++;
  }

}
Palette.prototype.randomColor = function(){
    if(this.colors.length > 0) {
        return this.colors[app.randomInt(this.colors.length-1)];
    }
    return false;
};

Palette.prototype.randomImgColor = function(){
    if(this.imgcolors.length > 0) {
        return this.imgcolors[app.randomInt(this.imgcolors.length-1)];
    }
    return false;
};
Palette.prototype.randomRGBColor = function(colorgroup){
    var acolor = this.colors[0];
    switch(colorgroup){
        case "GRAY":{
            acolor = color(app.randomInt(255));
            break;
        }
        case "DARK":{
            acolor = color(app.randomInt(127),app.randomInt(127),app.randomInt(127));
            break;
        }
        case "LIGHT":{
            acolor = color(app.randomInt(127,255),app.randomInt(127,255),app.randomInt(127,255));
            break;
        }
        default:{
            acolor = color(app.randomInt(255),app.randomInt(255),app.randomInt(255));
        }

    }
    return acolor;
};
Palette.prototype.transparent = function(){
  return color(0,0,0,100);
}
Palette.prototype.tint = function(acolor, percentage){
  var p = (255/100) * percentage;
  return color(red(acolor), green(acolor), blue(acolor), p );
};
Palette.prototype.frameCountColor = function(frames){
    var a = int((frameCount/frames)) % this.colors.length;
    return this.colors[a];

};
Palette.prototype.frameCountImgColor = function(frames){
    if(this.imgcolors.length > 0) {
        var a = int((frameCount / frames)) % this.imgcolors.length;
        return this.imgcolors[a];
    }
    return undefined;
}

Palette.prototype.show = function(){
  var i,x,y,w;
  noStroke();
  for(i = 0; i< this.colors.length; i++){
    w = width/this.colors.length;
    x = i * w;
    y = 0;
    fill(this.colors[i]);
    ellipse(x + (w/2), y + (w/2), w,w);
    fill(this.colors[0]);
    text(i,x + (w/2), y + (w/2));
  }
}
Palette.prototype.showImgColors = function(){
  var i,x,y,w;
  noStroke();
  for(i = 0; i< this.imgcolors.length; i++){
    w = width/this.imgcolors.length;
    x = i * w;
    y = 0;
    fill(this.imgcolors[i]);
    ellipse(x + (w/2), y + (w/2)+w, w,w);
    fill(this.imgcolors[0]);
    text(i,x + (w/2), y + (w/2)+w);
  }
}
function NamedPalette(name){
  this.name = name;
  this.pal = new Palette();

}
