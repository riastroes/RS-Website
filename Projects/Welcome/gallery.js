function Gallery(){
  this.path = "resources/";
  this.projectpath ="../";
  this.url = "show.json";
  this.gallery  = loadJSON(this.url, this.callBackGallery);
  this.thumbnails = [];
  this.projects = [];
  this.pages = [];
  this.size = [];
  this.pos = [];
  this.connections =[];

  this.frames = [];
  this.loaded = 0;
  this.speed = 1;


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
  this.connections =[];
  this.size = [];

  for(var i = 0; i < this.gallery.length; i++){
    this.thumbnails[i] = loadImage(this.path + this.gallery[i].thumbnail, this.callBackImage);
    this.projects[i] = this.gallery[i].project;
    if(app.isnot(this.gallery[i].page)){
      this.pages[i] = "/index.html";
    }
    else{
      this.pages[i] = this.gallery[i].page;
    }
    if(app.is(this.gallery[i].size)){
      this.size[i] = parseInt(this.gallery[i].size);
    }
    else{
      this.size[i] = 200;
    }
    if(app.is(this.gallery[i].connect)){
      append(this.connections, i);
      append(this.connections, parseInt(this.gallery[i].connect));
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
   gal.loaded = 0;
   var attemped = 0;

   while(gal.loaded < gal.thumbnails.length  && attemped < 100){
     for(var i = 0; i < gal.thumbnails.length; i++){
       if((app.is(gal.thumbnails[i]) && gal.thumbnails[i].width >1) && app.isnot(gal.frames[i])){
         gal.loaded++;
         gal.frames[i] = new Frame(gal.thumbnails[i],i,gal.size[i]);
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
  var slower_faster = document.getElementById("slower_faster");
  slower_faster.style.visibility ="visible";
  var imgclick = document.getElementById("imgclick");
  imgclick.style.visibility ="visible";
  var enter = document.getElementById("enter");
  enter.style.visibility ="hidden";

  var choosenproject = -1;
  for(var i = 0; i < this.frames.length; i++){
    choosenproject =this.frames[i].move();
    if(choosenproject >=0){
      break;
    }

  }
  if(this.loaded == this.frames.length && this.loaded >0){

   //this.showConnections();
   this.draw();
 }

  return choosenproject;
}
Gallery.prototype.draw = function(){

  for(var i = 0; i < this.frames.length; i++){
    this.frames[i].draw();
  }
}
Gallery.prototype.gotoProject = function(i){
  if(this.gallery[i].page.startsWith("http://")){
    window.location.assign(this.pages[i]);
  }
  else{
    window.location.assign(this.projectpath + this.projects[i] + this.pages[i]);
  }
}
Gallery.prototype.showConnections = function(){
  var a,b,d;
  this.style(0);
  for(var i = 0; i < this.connections.length; i +=2){
    a = this.connections[i];
    b = this.connections[i+1];
    d = abs(this.frames[a].pos.y - this.frames[b].pos.y);
    if(d < height/2){
      line(this.frames[a].pos.x,this.frames[a].pos.y,this.frames[b].pos.x,this.frames[b].pos.y);
    }
  }
}
