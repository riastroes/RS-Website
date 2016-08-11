function Gallery(){
  this.path = "../../resources/";
  this.pagepath ="../pages/";
  this.url = "show.json";
  this.gallery  = loadJSON(this.path + this.url);
  this.thumbnails = [];
  this.projects = [];
  this.pages = [];
  this.mask = new Mask(this.path + "mask.png", 200,200,color(255));

}
Gallery.prototype.createShow = function(){
  for(var i = 0; i < this.gallery.length; i++){
    append(this.projects , this.path + this.gallery[i].project);
    append(this.pages , this.pagepath + this.gallery[i].page);
    append(this.thumbnails , loadImage(this.path + this.gallery[i].thumbnail));
  }
}
Gallery.prototype.getIndex = function(){

}
Gallery.prototype.showProject = function(i){
  window.location.assign(this.pages[i]);
}
Gallery.prototype.createPresentation = function(id){
  ;
  this.pg = createGraphics(200,200);

  this.pg.image(this.thumbnails[id].mask(this.mask));

  image(this.pg, random(width), random(height));

}
