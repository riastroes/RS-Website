
"use strict";
var app;

function setup() {

    app = new App("Ria Stroes",windowWidth,windowHeight);
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("signature.png,palette_landscape.png");
}
function keyPressed(){
  if(app.is(app.project)){

    if(keyCode == ENTER){
      app.nextscene();
    }
  }
  return false;
}
function mousePressed(){

  if(mouseButton == LEFT){
    if(app.is(app.project)){

      if(app.project.bubble.textnr <= app.project.bubble.max){
        app.project.info = true;
      }
      else{
        app.project.info = false;
      }
    }
  }
  return false;
}
function draw() {
    var i;
    if(app.isloaded) {
      if(app.pal.name != "beautiful"){
          app.pal = new Palette(10, "beautiful");
          app.pal.fromImage(app.images[1],10);
      }
      if(app.isnot(app.project)){
        app.project = new Project();
        app.scene = -1;
      }
      else{
        switch(app.scene) {

            case -1:{
              background(app.pal.colors[1]);
              app.pal.show();
              app.pal.showImgColors();
              app.wait(50);
              break;
            }
            case 0:{
               app.project.run(0);
               app.runscene(50);
               break;
              }
            case 1:{
               app.project.run(1);
               app.runscene(0);
               break;
              }
            case 2:{
               app.project.run(2);
               app.runscene(500);
               break;
              }
            case 3:{
               app.project.run(3);
               app.runscene(500);
               break;
              }
            default:{
                //wait
                app.wait();
            }
          }
        }

        app.info.show();
        //function(skip, maxframes, show)
        app.gifmaker.check(1, 160, false);



    }
    else{
        println("loading resources ...");
    }

}
