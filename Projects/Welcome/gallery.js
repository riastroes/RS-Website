function Gallery(){
  this.path = "../../resources/";
  this.pagepath ="../pages/";
  this.url = "show.json";
  this.gallery  = loadJSON(this.path + this.url);
  this.thumbnails = [];
  this.projects = [];
  this.pages = [];

}
Gallery.prototype.createShow = function(){
  for(var i = 0; i < this.gallery.length; i++){
    append(this.projects , this.path + this.gallery[i].project);
    append(this.pages , this.pagepath + this.gallery[i].page);
    append(this.thumbnails , loadImage(this.path + this.gallery[i].thumbnail));
  }
}
Gallery.prototype.showProject = function(i){
  window.location.assign(this.pages[i]);
}
