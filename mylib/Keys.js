/**
 * Created by Ria Stroes on 16-3-2016.
 */
function keyPressed() {
  if(app.canvastype != "svg"){
    app.acanvas.elt.focus();
  }
    //println("key:" + key);
    //println("keyCode:"+ keyCode);

    if (key == 'l' || key == 'L') {
        if (app.isrunning) {
            noLoop();
        } else {
            loop();
            app.isrunning = false;
        }
    }
    if (keyCode == RIGHT_ARROW) {
        if(app.is(app.scene)){
            app.scene +=1;
        }
    }
    if (keyCode == LEFT_ARROW) {
        if(app.is(app.scene)) {
            app.scene -=1;
        }
    }
    if (key  == " ") {
        //spacebar
        if(app.is(app.menu)) {
            app.menu.selected = "";
        }
   }
    if(key == 'g' || key =='G'){

        if(app.isnot(app.gifmaker) || !app.gifmaker.do){
            app.gifmaker = new Gifmaker();
            app.gifmaker.init(540,540,10,1,20,60);
            frameRate(app.gifmaker.speed);
        }
        else{
            //try to stop before maxframes = 0
            app.gifmaker.render();


        }
    }
    if(key == 'i' || key =='I'){
        app.info.doshow = !app.info.doshow;
        if(app.info.doshow){
            app.info.show();
        }

    }
    if(key == 'V' || key =='v'){
        if(app.canvastype == SVG){
          app.saveSVG();
        }
    }
    if(key == 's' || key =='S'){

        app.style.text(12,CENTER,app.pal.colors[0]);
        text("www.riastroes.nl", app.acanvas.width/2, app.acanvas.height-40);
        save(app.name + app.savedimages + ".jpg");
        app.savedimages++;
    }
    if(key == 'z' || key =='Z'){
        //image(app.signature, width-160, height-120);
        save(app.name + app.savedimages + ".jpg");
        app.savedimages++;
    }
    if(keyCode == ENTER){
      if(app.is(app.project)){
        if(app.project.name == "Welcome"){
          window.location.assign("index.html?scene=5");
        }
        else{
          window.location.assign("../Welcome/index.html?scene=5");
        }
      }
    }
    if(keyCode == 32){ //SPACEBAR
      var info = document.getElementById("info");
      if(app.is(info)){
        if(info.style.visibility == "visible"){
          info.style.visibility = "hidden";
        }
        else{
          info.style.visibility = "visible";
        }
      }

    }

    return false;


}
