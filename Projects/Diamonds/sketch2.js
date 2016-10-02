
"use strict";
var app;

function setup() {

    app = new App("Diamonds",540,540);
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.resourcepath ="result";
    app.loadResources("Diamonds0.jpg,Diamonds1.jpg,Diamonds2.jpg,Diamonds3.jpg,Diamonds4.jpg,Diamonds5.jpg,Diamonds6.jpg,Diamonds7.jpg,Diamonds8.jpg,Diamonds9.jpg,Diamonds10.jpg,Diamonds11.jpg,Diamonds12.jpg,Diamonds13.jpg");
    app.scene = 0;
}

function draw() {
    var i;
    if(app.isloaded) {



        switch(app.scene) {


            case 0:{
               //
               background(app.images[0]);
               app.wait(30);
               break;
              }
            case 1:{
               //
                background(app.images[1]);
                app.wait(30);
                break;
                }
            case 2:{
               //
                background(app.images[2]);
                app.wait(30);
                break;
                }
            case 3:{
               //
                background(app.images[3]);
                app.wait(30);
                break;
                }
            case 4:{
               //
               background(app.images[4]);
               app.wait(30);
               break;
              }
            case 5:{
               //
                background(app.images[5]);
                app.wait(30);
                break;
                }
            case 6:{
               //
                background(app.images[6]);
                app.wait(30);
                break;
                }
            case 7:{
               //
                background(app.images[7]);
                app.wait(30);
                break;
                }
          case 8:{
             //
             background(app.images[8]);
             app.wait(30);
             break;
            }
          case 9:{
             //
              background(app.images[9]);
              app.wait(30);
              break;
              }
          case 10:{
             //
              background(app.images[10]);
              app.wait(30);
              break;
              }
          case 11:{
             //
              background(app.images[11]);
              app.wait(30);
              break;
              }
          case 12:{
             //
              background(app.images[12]);
              app.wait(30);
              break;
              }
          case 13:{
             //
              background(app.images[13]);
              app.wait(30);
              break;
              }
          case 14:{
             //
              app.scene = 0;
              break;
              } 
         default:{
          //wait
          app.wait();
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
