
"use strict";
var app;

function setup() {

    app = new App("Feathers", windowWidth, windowHeight);
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("skincolors2.png, grays.png");
}

function draw() {
    var i;
    if(app.isloaded) {
      if(app.pal.name != "beautiful"){
          app.pal = new Palette(7, "beautiful");
          app.pal.fromImage(app.images[0],5);
          app.pal.addImageColors(app.images[1],5);

      }
      if(app.isnot(app.project)){
        app.project = new Project();
        app.scene = 8;
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
               //

               background("#A52A2A");

               app.project.init();
               app.runscene(0);
               break;
             }
             case 1:{
               app.project.draw(1);
               app.runscene(1000);
               break;
             }
             case 2:{
               background("#A52A2A");
               app.project.init();
               app.runscene(0);
               break;
             }
             case 3:{
               app.project.draw(2);
               app.runscene(1000);
               break;
             }
             case 4:{
               background("#A52A2A");
               app.project.init();
               app.runscene(0);
               break;
             }
             case 5:{
               app.project.draw(3);
               app.runscene(2000);
               break;
             }
             case 6:{
               background("#A52A2A");
               app.project.init();
               app.runscene(0);
               break;
             }
             case 7:{
               app.project.draw2(2);
               app.runscene(2000);
               break;
             }
             case 8:{
               background("#A52A2A");
               app.project.init2();
               app.runscene(0);
               break;
             }
             case 9:{
               app.project.draw2(3);
               app.runscene(1000);
               break;
             }
             case 10:{
              app.scene = 0;
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
        app.gifmaker.check(20, 80, false);



    }
    else{
        println("loading resources ...");
    }

}
