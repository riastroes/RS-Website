var app;

function setup() {

    app = new App("Flowers");
    app.resourcepath = "resources";
    app.loadResources("signature.png,flowers.jpg,lint.png,spring.jpg");

}

function draw() {
    var  size, x, y,i,d;

    if(app.isloaded) {

        if(app.isnot(app.mask)){
            app.mask = new Mask();
            app.mask.init();
        }
        if (app.isnot(app.flower)){
            app.flower = new Flower();
            app.scene = 1;
            app.mask.add(app.images[2], 0, 0, app.pal.colors[0]);
            app.pal = new Palette(1);
            app.imgPalette(app.images[1], 12, "flowers");
            background(app.pal.randomImgColor());
        }
        else{

        switch(app.scene) {


            case 1:{
                //draw flowers on a lint
                //black mask
                i = app.mask.data[int(random(app.mask.data.length - 1))];
                x = i/4 % (this.width);
                y = int((i/4) / this.width);
                size = random(30,80);
                app.flower.live(createVector(x,y), size, size,18);
                app.flower.draw();
                app.runscene(1500);
                break;
            }
            case 2:
            {
                //white mask
                app.pal = new Palette(1);
                app.imgPalette(app.images[1], 4, "flowers2");
                app.mask.add(app.images[2], 0, 0, app.pal.colors[1]);
                app.flower.age = 10;
                app.runscene(0);
                break;
            }
            case 3:{
                //draw small flowers on a lint
                i = app.mask.data[int(random(app.mask.data.length - 1))];
                x = i/4 % (this.width);
                y = int((i/4) / this.width);
                size = random(10,10);
                app.flower.live(createVector(x,y), size, size,18);
                app.flower.draw();

                app.runscene(500);
                break;
            }
            case 4:
            {
                //create a black and white palette

                app.pal = new Palette(4);
                background(app.pal.colors[1]);
                app.flower.age = 1;
                for(i = 0; i < 10; i++){
                    size =random(100,800);
                    app.flower.live(createVector(random(width), random(height)), size, size,18);
                    app.flower.drawBW();
                }
                //create mask from blackcolors in background
                app.mask.createMask(app.pal.colors[0]);
                app.flower.age = 0;
                app.runscene(0);
                break;
            }

            case 5:{
                i = app.mask.data[int(random(app.mask.data.length - 1))];
                x = i/4 % (this.width);
                y = int((i/4) / this.width);
                size = random(10,100);
                app.flower.live(createVector(x,y), size, size,int(random(13,18)));
                app.flower.drawBW();
                app.runscene(2000);
                break;
            }
            case 6:
            {
                //create a black and white mask

                app.pal = new Palette(0);
                app.imgPalette(app.images[3], 8, "spring");
                background(app.pal.randomImgColor());
                app.acanvas.elt.style.visibility = "hidden";
                app.flower.age = 1;
                for(i = 0; i < 20; i++){
                    size =random(100,800);
                    app.flower.live(createVector(random(width), random(height)), size, size,18);
                    app.flower.drawBW();
                }
                app.mask.createMask(app.pal.colors[0]);
                background(app.pal.colors[1]);
                app.acanvas.elt.style.visibility = "visible";
                app.runscene(0);
                break;
            }

            case 7:{
                i = app.mask.data[int(random(app.mask.data.length - 1))];
                x = i/4 % (this.width);
                y = int((i/4) / this.width);
                size = random(10,200);
                app.flower.live(createVector(x,y), size, size,int(random(13,18)));
                app.flower.draw();
                app.runscene(1000);
                break;
            }

            case 8:{
                //add a new image to the mask and select a palette
                //mask is my signature
                background(app.pal.colors[0]);
                app.mask.add(app.images[0],0,0,app.pal.colors[0]);
                app.imgPalette(app.images[3], 4, "spring");
                app.flower.age = 0;
                app.runscene(0);
                break;
            }
            case 9:{
                //draw flowers on the mask
                i = app.mask.data[int(random(app.mask.data.length - 1))];
                x = i/4 % (this.width);
                y = int((i/4) / this.width);
                size = random(80,120);
                app.flower.live(createVector(x,y), size,size, 13);
                app.flower.draw();
                app.runscene(1000);
                break;
            }
            case 10:{
                //create a mask, select a palette and draw flowers at every 400e position
                background(255);
                app.mask.add(app.images[0],0,0,app.pal.colors[0]);
                app.imgPalette(app.images[3], 8, "spring");
                app.flower.age = 1;
                for(d = 0; d< app.mask.data.length; d += 400){
                    i = app.mask.data[d];
                    x = i/4 % (this.width);
                    y = int((i/4) / this.width);
                    size = random(40,60);
                    app.flower.live(createVector(x,y), size,size, 13);
                    app.flower.draw();
                }
                app.runscene(100);
                break;
            }
            case 11:{
                app.style.text(36,CENTER,app.pal.colors[0]);
                text("Ready", width/2, height/2);
                break;
            }
        }
      }


        app.gifmaker.check();

    }
    else{
        println("loading resources ...");
    }

}
