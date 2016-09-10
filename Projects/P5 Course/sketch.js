
"use strict";
var app;

function setup() {

    app = new App("COURSE",windowWidth, windowHeight);
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("signature.png");
}

function draw() {
    var i;
    if(app.isloaded) {
      if(app.pal.name != "basic"){
          app.pal = new Palette(4, "basic");
      }
      if(app.isnot(app.project)){
        app.project = new Project();
        if(app.is(app.params.lesson)){
          app.scene = parseInt(app.params.lesson) -1;
        }
        else{
          app.scene = 0;
        }
      }
      else{
        switch(app.scene) {

            case -1:{
              background(app.pal.colors[1]);
              app.pal.show();
              app.wait(50);
              break;
            }
            case 0:{
               //resume lesson 1
                app.project.run(1);
                app.wait(200,99);
                break;
              }
            case 1:{
               //resume lesson 2
                app.project.run(1);
                app.project.run(2);
                app.wait(200,99);
                break;
              }
            case 2:{
               //resume lesson 3
                app.project.run(1);
                app.project.run(2);
                app.project.run(3);
                app.wait(200,99);
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
