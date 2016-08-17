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
  this.loaded = 0;


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
  this.thumbnails = [];
  this.projects = [];
  this.pages = [];
  for(var i = 0; i < this.gallery.length; i++){
    this.thumbnails[i] = loadImage(this.path + this.gallery[i].thumbnail, this.callBackImage);
    this.projects[i] = this.gallery[i].project;
    if(app.isnot(this.gallery[i].page)){
      this.pages[i] = "/index.html";
    }
    else{
      this.pages[i] = this.gallery[i].page;
    }


  }
  this.loadingtime = 0;
  setTimeout(app.project.gallery.createPresentation, 1000);
}
Gallery.prototype.callBackImage = function(){
  app.project.gallery.loaded++;
}

Gallery.prototype.createPresentation = function(){
   var gal = app.project.gallery;
   var loaded = 0;
   var attemped = 0;

   while(loaded < gal.thumbnails.length  && attemped < 100){
     for(var i = 0; i < gal.thumbnails.length; i++){
       if((app.is(gal.thumbnails[i]) && gal.thumbnails[i].width >1) && app.isnot(gal.frames[i])){
         loaded++;
         gal.frames[i] = new Frame(gal.thumbnails[i],i);
       }

     }
     attemped++;
     console.log(attemped);

   }
   if(attemped == 100){
     //ERROR:  THIS IS WRONG, BUT I DON'T HAVE AN OTHER SOLLUTION
     //this.createShow();
     console.log(gal.frames);
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
  if(this.gallery[i].page.startsWith("http://")){
    window.location.assign(this.pages[i]);
  }
  else{
    window.location.assign(this.projectpath + this.projects[i] + this.pages[i]);
  }
}
