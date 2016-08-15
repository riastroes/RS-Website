function Gallery(){
  this.path = "resources/";
  this.projectpath ="../";
  this.url = "show.json";
  this.gallery  = loadJSON(this.path + this.url, this.callBackGallery);
  this.thumbnails = [];
  this.projects = [];
  this.pages = [];
  this.pos = [];
  this.frames = [];


}
Gallery.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;
  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
}
Gallery.prototype.callBackGallery = function(){
  //you cann't use this in a callback function
  app.project.gallery.createShow();
}
Gallery.prototype.createShow = function(){
  for(var i = 0; i < this.gallery.length; i++){
    append(this.thumbnails , loadImage(this.path + this.gallery[i].thumbnail));
    append(this.projects , this.gallery[i].project);
    if(app.isnot(this.gallery[i].page)){
      this.gallery[i].page = "/index.html";
    }
    append(this.pages , this.gallery[i].page);
    console.log(this.gallery[i].thumbnail);
  }
}

Gallery.prototype.createPresentation = function(){
 var loaded = 0;
 var attemped = 0;

 while(loaded < this.thumbnails.length  && attemped < 100){
   for(var i = 0; i < this.thumbnails.length; i++){
     if((app.is(this.thumbnails[i]) && this.thumbnails[i].width >1) && app.isnot(this.frames[i])){
       loaded++;
       this.frames[i] = new Frame(this.thumbnails[i],i);
     }
   }
   attemped++;
   console.log(attemped);

 }
 if(attemped == 100){
   //ERROR:  THIS IS WRONG, BUT I DON'T HAVE AN OTHER SOLLUTION
   location.reload();
 }

}
Gallery.prototype.runPresentation = function(){
  var choosenproject = -1;
  for(var i = 0; i < this.frames.length; i++){
    choosenproject =this.frames[i].move();
    if(choosenproject >=0){
      break;
    }
    else{
    this.frames[i].draw();
    }
  }
  return choosenproject;
}
Gallery.prototype.gotoProject = function(i){
  window.location.assign(this.projectpath + this.projects[i] + this.pages[i]);
}
