function Grid(cols, rows, lmarge, tmarge, rmarge, bmarge){
  this.cols = cols;
  this.rows = rows;
  this.maxi = this.cols * this.rows;
  this.pos = []; //the center positions of the grid;
  this.mask = [];

  if(typeof(rmarge) == "undefined"){
    this.rmarge = lmarge/2;
    this.lmarge = lmarge/2;
  }
  else{
    this.rmarge = rmarge;
    this.lmarge = lmarge;
  }

  if(typeof(bmarge) == "undefined"){
    this.bmarge = tmarge/2;
    this.tmarge = tmarge/2;
  }
  else{
    this.bmarge = bmarge;
    this.tmarge = tmarge;
  }

  this.cellwidth = int((width -  (this.lmarge + this.rmarge))/ cols);
  this.cellheight = int((height - (this.tmarge + this.bmarge))/ rows);


  for (var x = 0; x < this.cols; x++) {
    this.pos[x] = []; // create nested array
    for (var y = 0; y < this.rows; y++) {
      var vx = (this.lmarge) + (this.cellwidth * x) + (this.cellwidth/2);
      var vy = (this.tmarge) + (this.cellheight * y) + (this.cellheight/2);
      this.pos[x][y] = createVector(vx, vy);
    }
  }

}
Grid.prototype.show = function(){
  app.style.set(app.pal.colors[0], false, 3);
  for(var x = 0; x < this.cols; x++){
    for(var y = 0; y < this.rows; y++){
      point(this.pos[x][y].x, this.pos[x][y].y);
    }
  }
};
Grid.prototype.shownr = function(){
  app.style.set(app.colors[1], false, 4);
  var i = 0;
  for(var x = 0; x < this.cols; x++){
    for(var y = 0; y < this.rows; y++){

      app.style.text(12, CENTER, pal.colors[1]);
      text(i, this.pos[x][y].x, this.pos[x][y].y);
      i++;
    }
  }
};
Grid.prototype.get = function(index){
  var i = constrain(index, 0, this.maxi);
  var x = i % this.cols;
  var y = int(i / this.cols);

  return this.pos[x][y];
};
Grid.prototype.x = function(index){
  return index % this.cols;
};
Grid.prototype.y = function(index){
  return int(index / this.cols);
};
Grid.prototype.maskCircle = function(x,y, maskradius){
  var i;
  var center = createVector(x,y);
  this.mask = [];
  for(i =  0; i < this.cols * this.rows; i++ ){
    if(app.posInCircle(this.get(i), center, maskradius)){
      append(this.mask , this.get(i));
    }
  }
  return this.mask;
};
Grid.prototype.maskAll = function(){
  var i;
  this.mask = [];
  for(i =  0; i < this.cols * this.rows; i++ ){

      append(this.mask , this.get(i));

  }
  return this.mask;
};
Grid.prototype.showMask = function(){
    var i;
  app.style.set(app.pal.colors[0], false, 1);
  for(i = 0; i < this.mask.length; i++){

      point(this.mask[i].x, this.mask[i].y);

  }
};
