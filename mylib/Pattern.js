function Pattern(patternwidth, patternheight){
  this.details = [];
  this.width = patternwidth;
  this.height = patternheight;
}
Pattern.prototype.checkDetail = function(detail){
  var pos, size, radius;

    if(detail.hasOwnProperty("center")){
      pos = detail.center.copy();
      if(detail.hasOwnProperty("size")){
        size = detail.size;
      }
      else if(detail.hasOwnProperty("radius")){
        size = detail.radius * 2;
      }
      if(size > 0){
        if(dist(pos.x,pos.y,  0, pos.y) < size/2){
          detail.overlappedX = true;
        }
        if(dist(pos.x,pos.y,  this.width, pos.y) < size/2){
          detail.overlappedW = true;
        }
        if(dist(pos.x,pos.y,  pos.x, 0) < size/2){
          detail.overlappedY = true;
        }
        if(dist(pos.x,pos.y,  pos.x, this.height) < size/2){
          detail.overlappedH = true;
        }
        if(detail.overlappedX && detail.overlappedY){
          detail.overlappedXY = true;
        }
        if(detail.overlappedW && detail.overlappedY){
          detail.overlappedWY = true;
        }
        if(detail.overlappedX && detail.overlappedH){
          detail.overlappedXH = true;
        }
        if(detail.overlappedW && detail.overlappedH){
          detail.overlappedWH = true;
        }
      }


  }
}
Pattern.prototype.checkDetails = function(){
  var pos, size, radius, detail;
  for(var i =0; i < this.details.length; i++){
    if(this.details[i].hasOwnProperty("center")){
      pos = this.details[i].center.copy();
      if(this.details[i].hasOwnProperty("size")){
        size = this.details[i].size;
      }
      else if(this.details[i].hasOwnProperty("radius")){
        size = this.details[i].radius * 2;
      }
      if(size > 0){
        if(dist(pos.x,pos.y,  0, pos.y) < size/2){
          this.details[i].overlappedX = true;
        }
        if(dist(pos.x,pos.y,  this.width, pos.y) < size/2){
          this.details[i].overlappedW = true;
        }
        if(dist(pos.x,pos.y,  pos.x, 0) < size/2){
          this.details[i].overlappedY = true;
        }
        if(dist(pos.x,pos.y,  pos.x, this.height) < size/2){
          this.details[i].overlappedH = true;
        }
        if(this.details[i].overlappedX && this.details[i].overlappedY){
          this.details[i].overlappedXY = true;
        }
        if(this.details[i].overlappedW && this.details[i].overlappedY){
          this.details[i].overlappedWY = true;
        }
        if(this.details[i].overlappedX && this.details[i].overlappedH){
          this.details[i].overlappedXH = true;
        }
        if(this.details[i].overlappedW && this.details[i].overlappedH){
          this.details[i].overlappedWH = true;
        }
      }

    }
  }
}
Pattern.prototype.checkWidthDetails = function(){
  var pos, size, radius, detail;
  for(var i =0; i < this.details.length; i++){
    if(this.details[i].hasOwnProperty("center")){
      pos = this.details[i].center.copy();
      if(this.details[i].hasOwnProperty("width")){
        size = this.details[i].width;
      }

      if(size > 0){
        if(dist(pos.x,pos.y,  0, pos.y) < size/2){
          this.details[i].overlappedX = true;
        }
        if(dist(pos.x,pos.y,  this.width, pos.y) < size/2){
          this.details[i].overlappedW = true;
        }

      }

    }
  }
}
Pattern.prototype.drawOverlappingDetails = function(){
  for(var i =0; i < this.details.length; i++){
    //app.style.set(app.pal.tint(app.pal.colors[2],50),app.pal.tint(app.pal.colors[2],10),1);

    if(this.details[i].overlappedX){
       this.draw(this.width, 0, this.details[i]);
       delete this.details[i].overlappedX;
    }
    if(this.details[i].overlappedW){
       this.draw(-this.width, 0, this.details[i]);
       delete this.details[i].overlappedW;
    }
    if(this.details[i].overlappedY){
       this.draw(0, this.height, this.details[i]);
       delete this.details[i].overlappedY;
    }
    if(this.details[i].overlappedH){
       this.draw(0, -this.height, this.details[i]);
       delete this.details[i].overlappedH;
    }
    if(this.details[i].overlappedXY){
       this.draw(this.width, this.height, this.details[i]);
       delete this.details[i].overlappedXY;
    }
    if(this.details[i].overlappedWY){
       this.draw(-this.width, this.height, this.details[i]);
       delete this.details[i].overlappedWY;
    }
    if(this.details[i].overlappedXH){
       this.draw(this.width, -this.height, this.details[i]);
       delete this.details[i].overlappedXH;
    }
    if(this.details[i].overlappedWH){
       this.draw(-this.width, -this.height, this.details[i]);
       delete this.details[i].overlappedWH;
    }
  }
}
Pattern.prototype.inFreeSpace = function(detail){
  var free = true;
  for(var i = 0; i < this.details.length; i++){
    if(dist(detail.position.x, detail.position.y, this.details[i].x, this.details[i].y) < (detail.size/2) + (this.details[i].size/2)){
      free = false;
      break;
    }
  }
  return free;
}
Pattern.prototype.draw = function(x,y, detail){
  push();
    translate(x,y);

    detail.draw();
  pop();
}
