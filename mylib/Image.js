function RImage(img){

  this.image= img;
  this.source = this.createSource();

}
RImage.prototype.createSource = function(){
  if(app.isnot(this.source)){
    var pixels = this.getPixels();
    var s = createImage(this.image.width, this.image.height);
    s.loadPixels();
    for(i = 0; i < s.pixels.length; i++){
      s.pixels[i] = pixels[i];
    }
    s.updatePixels();

    return s;
  }
}
RImage.prototype.get = function(){
  return this.image;
}
RImage.prototype.getPixels = function(){
  this.image.loadPixels();
  return this.image.pixels;
}
RImage.prototype.changePixels = function(){
  this.image.updatePixels();
}
RImage.prototype.colorPixels = function(acolor){

  var pixels = this.getPixels();

  for(i=0; i< pixels.length; i += 4){
     if(pixels[i] + red(acolor) <= 255){
       pixels[i] += red(acolor);
     }
     else{
       pixels[i] = 255;
     }
     if(pixels[i+1] + green(acolor) <= 255){
       pixels[i+1] += green(acolor);
     }
     else{
       pixels[i+1] = 255;
     }
     if(pixels[i+2] + blue(acolor) <= 255){
       pixels[i+2] += blue(acolor);
     }
     else{
       pixels[i+2] = 255;
     }

  }
  this.changePixels();
}
RImage.prototype.resize = function(w, h){
    this.image.resize(floor(w),floor(h));i
}
RImage.prototype.setTransparency = function(alpha){
  var i;
  var pixels = this.getPixels();
  for(i=0; i< pixels.length; i += 4){
    pixels[i+3]= alpha;
  }
  this.changePixels();
}
RImage.prototype.shiftPixels = function(vector){
  var i, i1,x, y, x1,y1;
  var v = vector.copy();
  var pixels = this.getPixels();
  for( y =  0; y < this.image.height; y++){
    for(x = 0; x < this.image.width; x++){
      x1 = (x + v.x) % this.image.width;
      y1 = (y + v.y) % this.image.height;

      i = (y * this.image.width * 4) + ( x * 4);
      i1 = (y1 * this.image.width * 4) + (x1 * 4);

      if(i % 4 == 0){

        pixels[i1] = pixels[i];
        pixels[i1+1] = pixels[i+1];
        pixels[i1+2] = pixels[i+2];
        pixels[i1+3] = pixels[i+3];

      }


    }
  }
  this.changePixels();
}
RImage.prototype.shiftPixels2 = function(vector){
  var i, i1,x, y, x1,y1;
  var v = vector.copy();
  var pixels = this.getPixels();
  for( y =  0; y < this.image.height; y++){
    for(x = 0; x < this.image.width; x++){
      i = (y * this.image.width * 4) + ( x * 4);
      if(i % 4 == 0){
        i1 = i-(4 * v.x);

        pixels[i1] = pixels[i];
        pixels[i1+1] = pixels[i+1];
        pixels[i1+2] = pixels[i+2];
        pixels[i1+3] = pixels[i+3];
      }


    }
  }
  this.changePixels();
}
