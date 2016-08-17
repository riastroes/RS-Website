
"use strict";
var app;

function setup() {

    app = new App("NOC",windowWidth,windowHeight-30);
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("signature.png");

}

function draw() {
    var i;
    if(app.isloaded) {


      if(app.pal.name != "beautiful"){
          app.pal = new Palette(7, "beautiful");
      }
      if(app.isnot(app.project)){
        app.project = new Project();
        app.scene = 0;
      }

        switch(app.scene) {

            case -1:{
              background(app.pal.colors[0]);
              app.pal.show();
              app.pal.showImgColors();
              app.wait(50);
              break;
            }
            case 0:{
               //
               app.bg(10);
               app.project.draw(0);
               app.wait(10);
               break;
              }
           case 1:{
               //white lines, one group
               app.bg(5);
               app.project.draw(1);
               app.runscene(500);
               break;
                }
          case 2:{
              //  //colored lines, one group
              //  app.bg(5);
              //  app.project.draw(2);
              //  app.runscene(300);
               app.runscene(0);
               break;
              }
            case 3:{
               //one big blobber, one group
              //  app.bg(5);
              //  app.project.draw(3);
              //  app.runscene(300);
              app.runscene(0);
               break;
              }
            case 4:{
              //create 5 blobbers
              background(255);
              app.project.draw(4);
              app.runscene(4);
              break;
             }
            case 5:{
              //soft moving blobbers
              background(255);
              app.project.draw(5);
              app.runscene(300);
              break;
             }
           case 6:{
                 //soft moving and swelling blobbers
                 background(255);
                 app.project.draw(6);
                 app.runscene(300);
                 break;
                }
           case 7:{
                 //clear screen
                 background(255);
                 app.runscene(0);
                 break;
                }
            case 8:{
                   //keep blobbers smaller
                   app.bg(1);
                   app.project.draw(7);
                   app.runscene(300);
                   break;
                  }
            case 9:{
                  //clear screen
                  background(255);
                  app.runscene(0);
                  break;
                 }

           case 10:{
                  //new groups white lines
                  background(255);
                  app.project.draw(9);
                  app.runscene(0);
                  break;
                 }
           case 11:{
                  //colored lines on white
                  //app.bg(1);
                  app.project.draw(10);
                  app.runscene(300);
                  break;
                 }
           case 12:{
                  //colored lines on black
                  if(frameCount % 3 == 0){
                    //app.bg(1);
                  }
                  app.project.draw(10);
                  app.runscene(300);
                  break;
                 }
           case 13:{
                  //yellow lines on black
                  if(frameCount % 3 == 0){
                    //slowly turning black
                    //app.bg(1);
                    background(0);
                  }

                  //app.project.draw(11);
                  //app.runscene(300);
                  app.runscene(0);
                  break;
            }
           case 14:{
             background(0);
             app.runscene(0);
             break;
           }


        case 15:{
                  //white lines on black, without a leader
                  app.bg(0.3);
                  app.project.draw(12);
                  app.runscene(300);
                  break;
                 }
        case 16:{
                  //white lines on black, without a leader
                  app.bg(0.01);
                  app.project.draw(12);
                  app.runscene(500);
                  break;
                 }
       case 17:{
              //slowly changing color lines on black, without a leader
              background(255);
              app.runscene(0);
              break;

             }
         case 18:{
                //slowly changing color lines on black, without a leader
                app.bg(0.01);

                app.project.draw(13);
                app.runscene(1000);
                break;
               }
         case 19:{
                //slowly changing color lines on black, without a leader
                background(255);
                app.runscene(0);
                break;

               }
       case 20:{
         //start over
              app.wait(1,0);
              break;

             }

            default:{
                //wait
                app.wait();
            }



        }

        app.info.show();
        //function(skip, maxframes, show)
        app.gifmaker.check(5, 120, false);



    }
    else{
        println("loading resources ...");
    }

}
