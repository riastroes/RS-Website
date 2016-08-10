/**
 * Created by riastroes on 08-03-16.
 * App is the main object to store the global variables
 * en general settings for the project(s)
 */
"use strict";
function App(name, appwidth, appheight,  canvastype){
    pixelDensity(1);
    this.name = name;
    this.canvastype = canvastype;


    switch(this.canvastype){
      case "svg":{
        if(appwidth != undefined && appheight != undefined){
            this.acanvas = createCanvas(appwidth, appheight, SVG);
        }
        else {
            this.acanvas = createCanvas(windowWidth, windowHeight, SVG);
        }
        break;
      }
      case "webgl":{
        if(appwidth != undefined && appheight != undefined){
            this.acanvas = createCanvas(appwidth, appheight, WEBGL);
        }
        else {
            this.acanvas = createCanvas(windowWidth, windowHeight, WEBGL);
        }
        break;
      }
      case undefined:{
        if(appwidth != undefined && appheight != undefined){
            this.acanvas = createCanvas(appwidth, appheight);
        }
        else {
            this.acanvas = createCanvas(windowWidth, windowHeight);
        }
        break;
      }
    }

    //resources
    this.resourcepath = "resources"; //default resource map
    //this.signature = loadImage(this.resourcepath + "/" + "signature.png" );
    this.images = [];
    this.sounds = [];
    this.svgs = [];
    this.maximages = 0;
    this.maxsounds = 0;
    this.maxsvgs = 0;
    this.loaded = 0;
    this.isloaded = false;
    this.isrunning = false;
    this.runcount =0;
    this.scene = 0;

    //styles and colors
    this.pal = new Palette(0);
    this.namedpalettes = [];
    this.namedpalettes[0]= new NamedPalette("standard");
    this.currentpalettename = "standard";
    arrayCopy(this.namedpalettes[0].pal.colors, this.pal.colors);
    this.style = new Style();

    //images, movi, SVG and gif maker
    this.exportSVG = false;
    this.savedimages = 0;
    this.gifmaker = new Gifmaker();

    //statistics
    this.info = new Info();
    this.totframerate = 0;
    this.gemframerate = 0;
}
App.prototype.imgPalette = function(img, count, name, more){
    //extract a color collection from an image

    var haspalette = false;
    for(var index in this.namedpalettes){
        if (this.namedpalettes.hasOwnProperty(index)) {
            if (this.namedpalettes[index].name == name) {
                if (!more) {
                    this.currentpalettename = name;
                    this.pal.imgcolors = [];
                }
                else {
                    this.currentpalettename += "," + name;
                }
                for (var i = 0; i < this.namedpalettes[index].pal.imgcolors.length; i++) {
                    append(this.pal.imgcolors, this.namedpalettes[index].pal.imgcolors[i]);
                }
                haspalette = true;
            }
        }
    }
    if(!haspalette){
        append(this.namedpalettes, new NamedPalette(name));
        if(!more) {
            this.pal.imgcolors = [];
        }
        var last =  this.namedpalettes.length -1;
        this.namedpalettes[last].pal.fromImage(img, count);
        for(var i = 0 ; i <this.namedpalettes[last].pal.imgcolors.length; i++ ){
            append(this.pal.imgcolors, this.namedpalettes[last].pal.imgcolors[i]);
        }
    }

};
App.prototype.loadResources = function(strimages, strsounds, strsvgs, path){
    // the images and sound should be stored in the map path
    var i,s,v;
    this.isloaded = false;
    this.loaded = 0;
    var imagenames = [];
    var soundnames = [];
    var svgnames = [];
    if(typeof(strimages) === "string"){
        imagenames = strimages.split(",");
        for(i = 0;  i < imagenames.length; i++){
            imagenames[i] = imagenames[i].trim();
        }
        this.maximages = imagenames.length;

    }
    else if(typeof(strimages) !== "undefined"){
        // array
        var strwithspace;
        this.maximages = strimages.length;
        for(i = 0; i < this.maximages; i++){
            strwithspace = strimages[i];
            imagenames[i] = strwithspace.trim();
         }
     }
    else{
        // undefined
        this.maximages = 0;
    }
    if(typeof(strsounds) === "string"){
        soundnames = strsounds.split(",");
        this.maxsounds = soundnames.length;
    }
    else if(typeof(strsounds) !== "undefined"){
        // array
        this.maxsounds = strsounds.length;
        for(s = 0; s < this.maxsounds; s++){
            soundnames[s] = strsounds[s];
        }
    }
    else{
        // undefined
        this.maxsounds = 0;
    }
    if(typeof(strimages) === "string"){
        imagenames = strimages.split(",");
        for(i = 0;  i < imagenames.length; i++){
            imagenames[i] = imagenames[i].trim();
        }
        this.maximages = imagenames.length;

    }
    else if(typeof(strsvgs) !== "undefined"){
        // array

        svgnames = strsvgs.split(",");
        this.maxsvgs = svgnames.length;
        for(i = 0; i < this.maxsvgs; i++){
            svgnames[i] = svgnames[i].trim();
         }
     }
    else{
        // undefined
        this.maxsvgs = 0;
    }
    if(typeof(path) !== "undefined"){
        this.resourcepath = path;
    }
    for(i = 0; i < this.maxsvgs; i++){
       this.svgs[i]=loadSVG(this.resourcepath + "/" + svgnames[i], this.callbackResources);
    }
    for(i = 0; i < this.maximages; i++){
        this.images[i] =loadImage(this.resourcepath + "/" + imagenames[i], this.callbackResources);
    }

    for(s = 0; s < this.maxsounds; s++){
        this.sounds[s] = loadSound(this.resourcepath + "/" + soundnames[s], this.callbackResources);
    }
};
App.prototype.callbackResources = function(){
    //you cann't use this in a callback function
    app.loaded++;
    if(app.loaded == (app.maximages + app.maxsounds + app.maxsvgs)){
        // after all the resources are loaded you can use them.
        app.isloaded = true;
    }

};
App.prototype.background = function(img, transparency) {
    var i,t;
    t = transparency * (255/100);
    if(this.isnot(this.pgbg)){
        this.pgbg = createGraphics(width,height);
        img.loadPixels();
        for(i=0; i < img.pixels.length; i+=4){
            img.pixels[i+3] = t;
        }
        img.updatePixels();

        this.pgbg.image(img,0,0);
    }
    else{
        image(this.pgbg,0,0);
    }


};
App.prototype.bg = function(acolor) {
  blendMode(DIFFERENCE);
  fill(acolor);
  rect(0,0,width,height);
  blendMode(BLEND);

}
//SMART FUNCTIONS
App.prototype.is = function(param){
    var ok = false;
    if(typeof(param) !== "undefined"){
        if(param !== null){
            if(param !== false) {
                ok = true;
            }
        }
    }
    return ok;
};
App.prototype.isnot = function(param){
    var ok = true;
    if(typeof(param) !== "undefined"){
        if(param !== null){
            if(param !== true) {
                ok = false;
            }
        }
    }
    return ok;
};
App.prototype.randomInt = function(min, max){
    if(app.is(max)){
        return floor(random(min,max+1));

    }
    else{
        return floor(random(min+1));
    }
};
App.prototype.runscene = function(framecounts){
    if(!this.isrunning){
        this.runcount = int(framecounts);
        this.isrunning  = true;
    }
    else{
        this.runcount -= 1;
    }
    if(this.runcount == 0){
      this.scene++;
      this.isrunning = false;
    }
};
App.prototype.nextscene = function(){

      this.scene++;
    
};
App.prototype.wait = function(framecounts, nextscene){
    if(framecounts > 0) {
        if(app.is(nextscene)){
          this.lastscene = nextscene -1;
        }
        else{
          this.lastscene = this.scene;
        }
        this.scene = 99999;
        this.runcount =framecounts;
        this.isrunning  = true;
    }
    else{
        this.runscene();
        if(this.scene >99999){
            this.scene = this.lastscene + 1;

        }

    }
};
App.prototype.counter = function(start, stop){
    if(this.isnot(this.c)){
        this.c = start;
    }
    else{
        if(this.c < stop){
            this.c++;
        }
    }
    return this.c;
};

//VECTOR FUNCTIONS

App.prototype.inRange = function(pos, minx, maxx, miny, maxy) {
  if(pos.x >= minx && pos.x <= maxx){
      if(pos.y >= miny && pos.y <= maxy){
          return true;
      }
  }
    return false;
};
App.prototype.contains = function(array, obj) {
    for (var i = 0; i < array.length; i++) {
        if (array[i]== obj) {
            return true;
        }
    }
    return false;
};
App.prototype.containsVector = function(array, avector) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].x == avector.x && array[i].y == avector.y) {
            return true;
        }
    }
    return false;
};
App.prototype.posOnCircle = function(center, radius, maxsteps, step) {
    var v = center.copy();
    var angle = ( TWO_PI / maxsteps ) * step;
    v.x = v.x + (radius * cos(angle));
    v.y = v.y + (radius * sin(angle));
    return v;
};
App.prototype.posOnPie = function(center, radius, startangle, stopangle, maxsteps, step) {
    var v = center.copy();
    var angle = startangle + ( (stopangle-startangle) / maxsteps ) * step;
    v.x = v.x + (radius * cos(angle));
    v.y = v.y + (radius * sin(angle));
    return v;
};
App.prototype.posOnEllipse = function(center, wradius, hradius, maxsteps, step) {
    var v = center.copy();
    var angle = ( TWO_PI / maxsteps ) * step;
    v.x = v.x + (wradius * cos(angle));
    v.y = v.y + (hradius * sin(angle));
    return v;
};
App.prototype.posOnLine = function(begin, end, maxsteps, step) {
    var d = dist(begin.x, begin.y, end.x, end.y);
    var stepsize = d / maxsteps;
    var aline = p5.Vector.sub(end, begin);
    aline.normalize();
    aline.mult(stepsize * step);
    var s = begin.copy();
    s.add(aline);
    return s;

};

App.prototype.isPosOnLine = function(pos, a, b){
  var isonline = false;
  var AB, AP
  //lijnstuk ab
  if(a.x < b.x || (a.x == b.x && a.y <= b.y)){
    AB = p5.Vector.sub(b, a);
    AP = p5.Vector.sub(pos, a);
  }
  else{
      AB = p5.Vector.sub(a, b);
      AP = p5.Vector.sub(a, pos);
  }
  if(AP.x > 0){
    if(AP.x >= p5.Vector.mult(AB,0).x && AP.x <= p5.Vector.mult(AB,1).x){
      if(AP.y > 0){
        if(AP.y >= p5.Vector.mult(AB,0).y && AP.y <= p5.Vector.mult(AB,1).y){
          isonline = true;
        }
      }
      else{
        if(AP.y <= p5.Vector.mult(AB,0).y && AP.y >= p5.Vector.mult(AB,1).y){
          isonline = true;
        }
      }
    }
  }
  else{
    if(AP.x <= p5.Vector.mult(AB,0).x && AP.x >= p5.Vector.mult(AB,1).x){
      if(AP.y > 0){
        if(AP.y >= p5.Vector.mult(AB,0).y && AP.y <= p5.Vector.mult(AB,1).y){
          isonline = true;
        }
      }
      else{
        if(AP.y <= p5.Vector.mult(AB,0).y && AP.y >= p5.Vector.mult(AB,1).y){
          isonline = true;
        }
      }
    }
  }
  return isonline;
}
App.prototype.isPosOnLine2 = function(pos, a, b){
  var is = false;
  var isonline = false;
  // var v, c;
  // a.y = v * a.x + c;
  // b.y = v * b.x + c;
  // pos.y = v * pos.x + c;
  //
  // a.y - (v * a.x) = c;
  // b.y = ( v * b.x ) + a.y - (v * a.x);
  // b.y - a.y = (v * b.x) - ( v * a.x);
  // b.y - a.y = v * ( b.x - a.x)
  // ((b.y - a.y) /(b.x - a.x )) = v;

  if(a.x != b.x){

    if(pos.y == (((b.y - a.y) /(b.x - a.x ))* pos.x) + a.y - (((b.y - a.y) /(b.x - a.x ))  * a.x)){
      is = true;
    }
  }
  else{
    if(pos.x == a.x){
      is = true;
    }
  }
  if(is){
    if(a.mag() <= pos.mag() && pos.mag() <= b.mag()){
      isonline = true;
    }
    if(b.mag() <= pos.mag() && pos.mag() <= a.mag()){
      isonline = true;
    }



    // if(a.x <= b.x && a.y <= b.y){
    //   if(pos.x >= a.x && pos.x <= b.x  && pos.y >= a.y && pos.y <= b.y){
    //     isonline = true;
    //   }
    // }
    // else if(b.x <= a.x && b.y <= a.y){
    //   if(pos.x >= b.x && pos.x <= a.x  && pos.y >= b.y && pos.y <= a.y){
    //     isonline = true;
    //   }
    // }
    // else if(b.x <= a.x && a.y <= b.y){
    //   if(pos.x >= b.x && pos.x <= a.x  && pos.y >= a.y && pos.y <= b.y){
    //     isonline = true;
    //   }
    // }
    // else if(a.x <= b.x && b.y <= a.y){
    //   if(pos.x >= a.x && pos.x <= b.x  && pos.y >= b.y && pos.y <= a.y){
    //     isonline = true;
    //   }
    // }
  }

  return isonline;
}
App.prototype.posInCircle = function(pos, center, radius) {
    var incircle = false;
    if (dist(pos.x, pos.y, center.x, center.y) < radius) {
        incircle = true;
    }
    return incircle;
}
App.prototype.posInRect = function(pos, x, y, rectwidth, rectheight) {
    var inrect = false;
    if (pos.x >= x && pos.x <= rectwidth + x && pos.y >=y && pos.y <= rectheight + y) {
        inrect = true;
    }
    return inrect;
}
App.prototype.findCircleLineIntersections = function(center, radius, slope, constant) {

    // r: circle radius
    // center: circle centre
    // slope: slope of the line (y = slope * x + constant)


    // get a, b, c values
    var a = 1 + sq(slope);
    var b = -center.x * 2 + (slope * (constant - center.y)) * 2;
    var c = sq(center.x) + sq(constant - center.y) - sq(radius);

    // get discriminant
    var d = sq(b) - 4 * a * c;
    if (d >= 0) {
        // insert into quadratic formula
        var intersections = [
            (-b + sqrt(sq(b) - 4 * a * c)) / (2 * a),
            (-b - sqrt(sq(b) - 4 * a * c)) / (2 * a)
        ];
        if (d == 0) {
            // only 1 intersection
            return [intersections[0]];
        }
        return intersections;
    }
    // no intersection
    return [];
}
App.prototype.findIntersection = function(vA, vB, vC, vD){
  var a = [vA.x,vA.y];
  var b = [vB.x,vB.y];
  var c = [vC.x,vC.y];
  var d = [vD.x,vD.y];
  var intersection = math.intersect(a,b,c,d);
  if(intersection != []){
    var pos =  createVector(intersection[0], intersection[1]);
    if(this.isPosOnLine(pos, vA,vB) && this.isPosOnLine(pos, vC,vD)){
      return pos;
    }
    else{
      return false;
    }
  }
  else{
    return false;
  }


}
App.prototype.sortVectors= function(vectors, newvectors) {

    newvectors = [];
    var ps = [];
    var angles = [];
    var index = [];


    for (var i = 0; i < vectors.length; i++) {
      angles[i] = vectors[i].heading();
      index[i] = angles[i];
    }
    ps = sort(angles);
    var m =0;
    for (var i = 0; i < ps.length; i++) {
      for(var ix = 0 ; ix < index.length; ix++){
        if(index[ix] == ps[i]){
          append(newvectors,vectors[ix].copy());
        }
      }
    }
    return newvectors;

}


App.prototype.saveSVG = function(){
  save();
}
