

var app;

function setup() {

    app = new App("Ferry VR", windowWidth, windowHeight);
    app.loadResources("signature.png, ij-min.jpg", "toet.wav,explosion.wav");

    //

}

function draw() {
    var i,c;
    if(app.isloaded) {
        if(app.pal.name != "marine"){
            app.pal = new Palette(6, "marine");
            app.scene = 0;

        }

        if(app.isnot(app.project)){
          app.project = new Project();


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
              app.project.createPeople(20);

              app.runscene(0);
              app.info.add(app.scene + ": createpeople");
              break;
            }
            case 1:{
              //load people
              app.project.drawbg();
              app.project.loadPeopleLeft();
              app.project.draw();

              app.runscene(150);
              app.info.add(app.scene + ": loadpeopleleft");
              break;
            }
            case 2:{
                app.project.startLeft();

                app.runscene(0);
                app.info.add(app.scene + ": startleft");
                break;
            }
            case 3:{

                //take ferry
                app.project.goRight();
                app.project.drawbg();
                app.project.ferryPeopleLeftToRight(app.project.ferry.speed);
                app.project.draw();

                app.runscene(app.project.width/app.project.ferry.speed);


                break;
            }
            case 4:{

                //take ferry
                app.project.drawbg();

                app.project.stopRight();
                  app.project.draw();
                app.runscene(0);
                break;
            }
            case 5:{
              //load people
              app.project.drawbg();

              app.project.loadPeopleRight();
              app.project.draw();
              app.runscene(150);

              break;
            }
            case 6:{

                app.project.startRight();
                app.runscene(0);

                break;
            }

            case 7:{

                //take ferry
                app.project.goLeft();
                app.project.drawbg();
                app.project.ferryPeopleRightToLeft(app.project.ferry.speed);
                app.project.draw();
                app.runscene(app.project.width/app.project.ferry.speed);

                break;
            }
            case 8:{
              app.project.drawbg();
              app.project.draw();
              app.project.stopLeft();

              app.runscene(0);
              break;
            }
            case 9:{
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
        app.gifmaker.check(10, 80, false);


    }
    else{
        println("loading resources ...");
    }

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  app.images[1].resize(windowWidth/2, windowHeight);
}
function touchStarted() {

    var fs = fullscreen();
    fullscreen(!fs);

}
