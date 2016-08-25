

var app;

function setup() {

    app = new App("Beziers Circles",windowWidth, windowHeight);
    app.resourcepath ="resources";
    app.loadResources("spring.jpg");
}
function draw() {
    if(app.isloaded) {
        if(app.pal.name != "black_white"){
            app.pal = new Palette(4, "black_white");
            app.scene = 4;

        }
        if(app.isnot(app.project)){
          app.project = new Project();
        }

          switch(app.scene) {
            case 4:{
              background(app.pal.colors[1]);
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 5:{
              app.project.change(2);
              app.project.draw(0,0);
              app.runscene(311);
              break;
            }
            case 6:{
              background(app.pal.colors[1]);
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 7:{
              app.project.change(3);
              app.project.draw(0,0);
              app.runscene(614);
              break;
            }
            case 8:{
              background(app.pal.colors[1]);
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 9:{
              app.project.change(4);
              app.project.draw(0,0);
              app.runscene(300);
              break;
            }
            case 10:{
              background(app.pal.colors[1]);
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 11:{
              app.project.change(5);
              app.project.draw(0,0);
              app.runscene(300);
              break;
            }
            case 12:{
              // background(app.pal.colors[1]);
              // app.project.construct();
              app.runscene(0);
              break;
            }
            case 13:{
              app.project.change(6);
              app.project.draw(0,0);
              app.runscene(300);
              break;
            }
            case 14:{
              background(app.pal.colors[1]);
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 15:{
              app.project.change(7);
              app.project.draw(0,0);
              app.runscene(680);
              break;
            }
            case 16:{
              background(app.pal.colors[1]);
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 17:{
              app.project.change(8);
              app.project.draw(0,0);
              app.runscene(320);
              break;
            }
            case 18:{
              background(app.pal.colors[1]);
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 19:{
              app.project.change(9);
              app.project.draw(0,0);
              app.project.showBegin(0,0);
              app.runscene(200);
              break;
            }
            case 20:{
              app.wait(100);
              break;
            }
            case 21:{
              background(app.pal.colors[1]);
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 22:{
              app.project.change(10);
              app.project.draw(0,0);
              app.project.showBegin(0,0);
              app.runscene(180);
              break;
            }
            case 23:{
              background(app.pal.colors[1]);
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 24:{
              app.project.change(11);
              app.project.draw(0,0);
              app.runscene(450);
              break;
            }
            case 25:{
              background(app.pal.colors[1]);
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 26:{
              app.project.change(12);
              app.project.draw(0,0);
              app.runscene(600);
              break;
            }
            case 27:{
              background(app.pal.colors[1]);
              app.runscene(0);
              app.project.construct();
              break;
            }
            case 28:{
              app.project.change(13);
              app.project.draw(0,0);
            //  app.project.showControls((width/4),(height/3 *2)-10);
              app.runscene(300);
              break;
            }
            case 29:{
              app.runscene(500);
            }
            case 30:{
              app.wait(1,0);
            }
            default:{
                app.wait();
              }
            }
            app.info.show();
            app.gifmaker.check(3, 100, false);


        }
        else{
            println("loading resources ...");
        }

    }
