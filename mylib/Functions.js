//statistic functions

//text functions
function drawText(atext, pg, x, y, size, c) {

    strokeWeight(1);
    pg.strokeWeight(1);
    noStroke();
    pg.noStroke();
    fill(c);
    pg.fill(c);
    textSize(size);
    pg.textSize(size);

    pg.text(atext, x, y);

}
function drawTextBox(atext, pg, x, y, width, height, size, c) {
    strokeWeight(1);
    pg.strokeWeight(1);
    noStroke();
    fill(c);
    pg.fill(c);

    textSize(size);
    pg.textSize(size);

    pg.text(atext, x, y, width, height);

}
// position functions

function moveOnCircle(centerX, centerY, radius, maxsteps, step) {
    var v = createVector(centerX, centerY);
    var angle = ( TWO_PI / maxsteps ) * step;
    v.x = v.x + (radius * cos(angle));
    v.y = v.y + (radius * sin(angle));
    return v;
}

function posOnEllipse(center, wradius, hradius, maxsteps, step) {
    var v = center.copy();
    var angle = ( TWO_PI / maxsteps ) * step;
    v.x = v.x + (wradius * cos(angle));
    v.y = v.y + (hradius * sin(angle));
    return v;
}
function posOnCircle(center, radius, maxsteps, step) {
    var v = center.copy();
    var angle = ( TWO_PI / maxsteps ) * step;
    v.x = v.x + (radius * cos(angle));
    v.y = v.y + (radius * sin(angle));
    return v;
}
function moveOnLine(begin, end, maxsteps, step) {
    var d = dist(begin.x, begin.y, end.x, end.y);
    var stepsize = d / maxsteps;
    var aline = p5.Vector.sub(end, begin);
    aline.normalize();
    aline.mult(stepsize * step);
    var s = begin.copy();
    s.add(aline);
    return s;

}
function posInCircle(pos, center, radius) {
    var incircle = false;
    if (dist(pos.x, pos.y, center.x, center.y) < radius) {
        incircle = true;
    }
    return incircle;
}
function vectorTo(pos, center) {
    var v = center.copy();
    v.sub(pos.x, pos.y);
    return v;
}
//array functions

function equals(array1, array2) {
    var ok = true;
    if (array1.length == array2.length) {
        for (var i = 0; i < array1.length; i++) {
            if (array1[i] != array2[i]) {
                ok = false;
                break;
            }
        }
    }
    else {
        ok = false;
    }
    return ok;
}
function sortVectors(array) {
    var index;
    var p = [];
    var x = [];
    var y = [];

    for (index in array) {
        if (array.hasOwnProperty(index)) {

            x[index] = array[index].x;
            y[index] = array[index].y;
        }
    }
    sort(x);
    sort(y);
    for (index in array) {
        if (array.hasOwnProperty(index)) {
            p[index] = createVector(x[index], y[index]);
        }
    }

    return p;
}

function getScale(imgwidth, imgheight, maxwidth, maxheight) {
    var scale;
    var w = maxwidth / imgwidth;
    var h = maxheight / imgheight;
    if (h < w) {
        scale = h;//img.height/maxheight;
    }
    else {
        scale = w;//img.width/maxwidth;
    }

    return scale;
}
function randomInt(min, max) {
    return int(random(min, max));
}

function between(min, max, step) {
    //min en max be odd numbers.
    //moving from to and back
    var d = max - min;
    var r = step % d;
    if (r > (d / 2)) {
        r = r - (d / 2);
        r = (d / 2) - r;
    }

    return r;
}
//time functions





