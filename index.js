/**
                     Interstellar

         Made by InfinityDude777 and ch1ck3n
**/


//Planets adapted from Tegoon's 'Aurora'


//More of a graphics test that I decided to turn into a game

/**
 * To appreciate the star of the show, copy the code on lines 616-1039 to a 600x600 canvas and give it a black background
*/
/** sadly this does not work here.
function setup() {
  createCanvas(600, 600);
}
**/
function setup() {
  createCanvas(600, 600)
  textAlign(CENTER, CENTER); //aligns the text to the center of the 600x600 board
  imageMode(CENTER); //aligns images to center
  rectMode(CENTER); //aligns drawings from code to center
  randomSeed(8); //uh i forgot
  var colors = [
    color(255, 0, 174),
    color(0, 0, 0),
    color(133, 0, 75)
  ];
  //put it here
  var font = {
    light: textFont('monospace'), //ERROR
    big: textFont('Trade Winds'), //ERROR
    italic: textFont('Segoe UI Light Italic') //ERROR
  };
  
}
/**
textAlign(CENTER, CENTER); //aligns the text to the center of the 600x600 board
imageMode(CENTER); //aligns images to center
rectMode(CENTER); //aligns images to center
randomSeed(8); //uh i forgot
**/
var page = 'load'; //loading page
var clicked = false; //the variable "clicked" is false
var keys = []; //the array "keys" is blank
var transOpac = 255; //the variable "trans0pac" is set to 255
var liveTimer = 0; //the variable "liveTimer" is set to 0

var resetTimer = function(n){ //seting a function "resetTimer"
    var setInf = "KAInfiniteLoopSetTimeout"; //setting the var (variable) "setInf" to "'KAInfiniteLoopSetTimeout'"
    if(setInf in this) {
        if(typeof this[setInf] === "function"){
            this[setInf](n);
        }
    }
};
var Smooth = function(pos, dest, tme){
    return (dest-pos)/tme;
};
var smallStar = function(x, y, r, g, b, t){
    pushStyle();
    pushMatrix();
    translate(x, y);
    for(var i = 8; i--;){
        noStroke();
        fill(r+sq(i), g+sq(i), b+sq(i), 10+pow(8-i, 2)*t);
        ellipse(0, 0, sq(i)*2*0.8, sq(i*1.3)*0.8);
    
    }
    filter(BLUR, 2);
    popMatrix();
    popStyle();
};
var star = function(x, y, r, g, b, s){
    pushStyle();
    pushMatrix();
    translate(x, y);
    for (var i = 8; i > 0; i-=0.2){
        if (i > 6){
            noFill();
            stroke(r+sq(i), g+sq(i), b+sq(i), 17+sq(8-i)*-4);
            strokeWeight(sq(i)/6);
            ellipse(100, 100, sq(i), sq(i));
        }
        noStroke();
        fill(200+sq(i), 250+sq(i), 250+sq(i), 7);
        ellipse(100, 100, pow(i, 2.5*1.1), pow(i, 2.5*1.1));
        
        fill(250+sq(i), 250+sq(i), 250+sq(i), 1.5*(5+pow(8-i,3)/2));
        triangle(100-s-sq(i)/20, 100, 100+s+sq(i)/20, 100, 100, 102+pow(i, 2));
        triangle(100-s-sq(i)/20, 100,100+s+sq(i)/20, 100, 100,102-pow(i,2));
        triangle(100, 100-s-sq(i)/20, 100, 100+s+sq(i)/20, 93-pow(i, 2.3), 100);
        triangle(100, 100-s-sq(i)/20, 100, 100+s+sq(i)/20, 177-pow(i, 2.3), 100);
    }
    filter(BLUR, 2);
    popMatrix();
    popStyle();
};
/**
var colors = [
    color(255, 0, 174),
    color(0, 0, 0),
    color(133, 0, 75)
];
**/
var gradientStroke = function(startWidth, endWidth, startColor, endColor, step) {
    step = step === undefined ? 1 : step > 0 ? step : 1;
    
    for(var i = startWidth - endWidth; i >= 0; i -= step) {
        stroke(lerpColor(startColor, endColor, 1 + i / (endWidth - startWidth)));
        strokeWeight(i + endWidth);
        line(50, 200, 250, 200);
    }
};
/**
var font = {
    light: createFont('Consolas'),
    big: createFont('Trade Winds'),
    italic: createFont('Segoe UI Light Italic')
};
**/
var transition = {
    active: false,
    out: false,
    t: 0,
    next: '',
    run: function(){
        if(this.active){
            fill(0, this.t);
            noStroke();
            if(!this.out){
                this.t+=Smooth(this.t, 300, 15);
                rect(300, 300, 600, 600);
                if(this.t>=255){
                    page = this.next;
                    this.out = true;
                }
            }
            if(this.out){
                this.t+=Smooth(this.t, 0, 10);
                rect(300, 300, 600, 600);
                if(this.t<=5){
                    this.out = false;
                    this.active = false;
                    this.t = 0;
                    this.next = '';
                }
            }
        }
    }
};
var imgs = {
    'menuBK': function(){
        background(138, 40, 84);
        noStroke();
        fill(128, 38, 97);
        ellipse(431, 449, 350, 350);
        ellipse(80, 292, 350, 350);
        ellipse(435, 210, 350, 350);
        
        fill(153, 104, 130, 100);
        ellipse(300, 300, 350, 350);
        ellipse(80, 425, 350, 350);
        ellipse(126, 382, 350, 350);
        ellipse(379, 262, 350, 350);
        ellipse(540, 38, 350, 350);
        ellipse(435, 210, 350, 350);
        
        fill(235, 172, 159, 100);
        ellipse(300, 300, 200, 200);
        ellipse(80, 425, 200, 200);
        ellipse(208, 343, 200, 200);
        ellipse(379, 262, 200, 200);
        ellipse(471, 89, 200, 200);
        ellipse(540, 38, 200, 200);
        
        fill(110, 3, 76);
        ellipse(300, 300, 100, 100);
        ellipse(438, 131, 100, 100);
        ellipse(80, 425, 100, 100);
        ellipse(126, 382, 100, 100);
        ellipse(249, 331, 100, 100);
        ellipse(208, 343, 100, 100);
        ellipse(379, 262, 100, 100);
        ellipse(423, 198, 100, 100);
        ellipse(15, 456, 100, 100);
        ellipse(471, 89, 100, 100);
        ellipse(540, 38, 100, 100);
        
        filter(BLUR, 20);
        
        for(var i = 0; i < 15; i++){
            smallStar(random(600), random(600), 255, 255, 255, random(1));
        }
        
        star(280, 200, 255, 0, 100, 4);
        star(20, 30, 255, 20, 100, 6);
        
        pushMatrix();
        translate(248, 530);
        rotate(29);
        fill(0);
        ellipse(0, 0, 100, 100);
        strokeWeight(3);
        fill(0, 0, 0, 60);
        for(var i = 0; i<90; i+=3){
            var p = pow(90-i, 1.2);
            
            stroke(p*1.1, p, p*1.3);
            arc(0, 0, (90-i)/9*10, 97, 90, 270);
        }
        strokeWeight(2.2);
        var xoff = 0.0;
        for(var y = -100; y < 100; y+=2) {
            var yoff = 0.0;
            for(var x = 0; x < sqrt(2400-sq(y)); x++) {
                var bright = map(noise(xoff, yoff), 0, 1, 0, 1);
                stroke(bright*255, bright*25, bright*20, x*1.8);
                point(-x, y);
               
                yoff += 0.017;
            }
            xoff += 0.15;
        }
        strokeWeight(4);
        noFill();
        for(var i = 0; i<8; i++){
            stroke(255, pow(8-i, 1.75));
            
            var r = 100+i*4;
            ellipse(0, 0, r, r);
        }
        popMatrix();
        
        for(var i = 0; i < 600; i++){
            strokeWeight(random(1, 2));
            stroke(255, random(255));
            point(random(600), random(600));
        }
        
        pushMatrix();
        translate(448, 230);
        rotate(15);
        fill(0);
        ellipse(0, 0, 150, 150);
        strokeWeight(3);
        fill(0, 0, 0, 60);
        for(var i = 0; i<90; i+=3){
            var p = pow(90-i, 1.2);
            
            stroke(p/*, p*1.3, p*1.4*/);
            arc(0, 0, (90-i)/9*15, 144.5, 90, 270);
        }
        strokeWeight(2.2);
        var xoff = 0.0;
        for(var y = -100; y < 100; y+=2) {
            var yoff = 0.0;
            for(var x = 0; x < sqrt(5600-sq(y)); x++) {
                var bright = map(noise(xoff, yoff), 0, 1, 0, 1);
                stroke(bright*200, bright, bright, x*2);
                point(-x, y);
               
                yoff += 0.017;
            }
            xoff += 0.15;
        }
        strokeWeight(4);
        noFill();
        for(var i = 0; i<8; i++){
            stroke(255, pow(8-i, 1.75));
            
            var r = 150+i*4;
            ellipse(0, 0, r, r);
        }
        popMatrix();
        
        filter(BLUR);
        
        return get(0, 0, 600, 600);
    },
    'gameBK': function(){
        background(69, 18, 41);
        noStroke();
        fill(28, 10, 22);
        ellipse(431, 449, 350, 350);
        ellipse(80, 292, 350, 350);
        ellipse(435, 210, 350, 350);
        
        fill(64, 45, 55, 100);
        ellipse(300, 300, 350, 350);
        ellipse(80, 425, 350, 350);
        ellipse(126, 382, 350, 350);
        ellipse(379, 262, 350, 350);
        ellipse(540, 38, 350, 350);
        ellipse(435, 210, 350, 350);
        
        fill(82, 68, 66, 100);
        ellipse(300, 300, 200, 200);
        ellipse(80, 425, 200, 200);
        ellipse(208, 343, 200, 200);
        ellipse(379, 262, 200, 200);
        ellipse(471, 89, 200, 200);
        ellipse(540, 38, 200, 200);
        
        fill(33, 13, 27);
        ellipse(300, 300, 100, 100);
        ellipse(438, 131, 100, 100);
        ellipse(80, 425, 100, 100);
        ellipse(126, 382, 100, 100);
        ellipse(249, 331, 100, 100);
        ellipse(208, 343, 100, 100);
        ellipse(379, 262, 100, 100);
        ellipse(423, 198, 100, 100);
        ellipse(15, 456, 100, 100);
        ellipse(471, 89, 100, 100);
        ellipse(540, 38, 100, 100);
        
        filter(BLUR, 20);
        
        for(var i = 0; i < 15; i++){
            smallStar(random(600), random(600), 255, 255, 255, random(1));
        }
        
        star(280, 200, 255, 0, 100, 4);
        star(20, 30, 255, 20, 100, 6);
        
        for(var i = 0; i < 600; i++){
            strokeWeight(random(1, 2));
            stroke(255, random(255));
            point(random(600), random(600));
        }
        
        filter(BLUR);
        
        return get(0, 0, 600, 600);
    },
    'helpBK': function(){
        background(138, 40, 84);
        noStroke();
        fill(128, 38, 97);
        ellipse(431, 449, 350, 350);
        ellipse(80, 292, 350, 350);
        ellipse(435, 210, 350, 350);
        
        fill(153, 104, 130, 100);
        ellipse(300, 300, 350, 350);
        ellipse(80, 425, 350, 350);
        ellipse(126, 382, 350, 350);
        ellipse(379, 262, 350, 350);
        ellipse(540, 38, 350, 350);
        ellipse(435, 210, 350, 350);
        
        fill(235, 172, 159, 100);
        ellipse(300, 300, 200, 200);
        ellipse(80, 425, 200, 200);
        ellipse(208, 343, 200, 200);
        ellipse(379, 262, 200, 200);
        ellipse(471, 89, 200, 200);
        ellipse(540, 38, 200, 200);
        
        fill(110, 3, 76);
        ellipse(300, 300, 100, 100);
        ellipse(438, 131, 100, 100);
        ellipse(80, 425, 100, 100);
        ellipse(126, 382, 100, 100);
        ellipse(249, 331, 100, 100);
        ellipse(208, 343, 100, 100);
        ellipse(379, 262, 100, 100);
        ellipse(423, 198, 100, 100);
        ellipse(15, 456, 100, 100);
        ellipse(471, 89, 100, 100);
        ellipse(540, 38, 100, 100);
        
        filter(BLUR, 25);
        
        for(var i = 0; i < 15; i++){
            smallStar(random(600), random(600), 255, 255, 255, random(1));
        }
        
        star(20, 100, 0, 145, 100, 4);
        
        
        pushMatrix();
        translate(448, 580);
        rotate(39);
        fill(0);
        ellipse(0, 0, 100, 100);
        strokeWeight(3);
        fill(0, 0, 0, 60);
        for(var i = 0; i<90; i+=3){
            var p = pow(90-i, 1.2);
            
            stroke(p*1.1, p, p*1.3);
            arc(0, 0, (90-i)/9*10, 97, 90, 270);
        }
        strokeWeight(2.2);
        var xoff = 0.0;
        for(var y = -100; y < 100; y+=2) {
            var yoff = 0.0;
            for(var x = 0; x < sqrt(2400-sq(y)); x++) {
                var bright = map(noise(xoff, yoff), 0, 1, 0, 1);
                stroke(bright*255, bright, bright*100, x*1.8);
                point(-x, y);
               
                yoff += 0.017;
            }
            xoff += 0.15;
        }
        strokeWeight(4);
        noFill();
        for(var i = 0; i<8; i++){
            stroke(255, pow(8-i, 1.75));
            
            var r = 100+i*4;
            ellipse(0, 0, r, r);
        }
        popMatrix();
        
        for(var i = 0; i < 600; i++){
            strokeWeight(random(1, 2));
            stroke(255, random(255));
            point(random(600), random(600));
        }
        
        pushMatrix();
        translate(498, 100);
        rotate(-15);
        fill(0);
        ellipse(0, 0, 50, 50);
        strokeWeight(3);
        fill(0, 0, 0, 60);
        for(var i = 0; i<90; i+=3){
            var p = pow(90-i, 1.2);
            
            stroke(p/*, p*1.3, p*1.4*/);
            arc(0, 0, (90-i)/9*5, 45, 90, 270);
        }
        strokeWeight(2.2);
        var xoff = 0.0;
        for(var y = -100; y < 100; y+=2) {
            var yoff = 0.0;
            for(var x = 0; x < sqrt(700-sq(y)); x++) {
                var bright = map(noise(xoff, yoff), 0, 1, 0, 1);
                stroke(bright*200, bright, bright, x*2);
                point(-x, y);
               
                yoff += 0.019;
            }
            xoff += 0.15;
        }
        strokeWeight(4);
        noFill();
        for(var i = 0; i<8; i++){
            stroke(255, pow(8-i, 1.75));
            
            var r = 50+i*4;
            ellipse(0, 0, r, r);
        }
        popMatrix();
        
        filter(BLUR);
        
        return get(0, 0, 600, 600);
    },
    'storyBK': function(){
        background(138, 40, 84);
        noStroke();
        fill(128, 38, 97);
        ellipse(431, 449, 350, 350);
        ellipse(80, 292, 350, 350);
        ellipse(435, 210, 350, 350);
        
        fill(153, 104, 130, 100);
        ellipse(300, 300, 350, 350);
        ellipse(80, 425, 350, 350);
        ellipse(126, 382, 350, 350);
        ellipse(379, 262, 350, 350);
        ellipse(540, 38, 350, 350);
        ellipse(435, 210, 350, 350);
        
        fill(235, 172, 159, 100);
        ellipse(300, 300, 200, 200);
        ellipse(80, 425, 200, 200);
        ellipse(208, 343, 200, 200);
        ellipse(379, 262, 200, 200);
        ellipse(471, 89, 200, 200);
        ellipse(540, 38, 200, 200);
        
        fill(110, 3, 76);
        ellipse(300, 300, 100, 100);
        ellipse(438, 131, 100, 100);
        ellipse(80, 425, 100, 100);
        ellipse(126, 382, 100, 100);
        ellipse(249, 331, 100, 100);
        ellipse(208, 343, 100, 100);
        ellipse(379, 262, 100, 100);
        ellipse(423, 198, 100, 100);
        ellipse(15, 456, 100, 100);
        ellipse(471, 89, 100, 100);
        ellipse(540, 38, 100, 100);
        
        filter(BLUR, 25);
        
        for(var i = 0; i < 15; i++){
            smallStar(random(600), random(600), 255, 255, 255, random(1));
        }
        
        star(280, 200, 0, 145, 100, 4);
        
        
        pushMatrix();
        translate(48, 530);
        rotate(142);
        fill(0);
        ellipse(0, 0, 100, 100);
        strokeWeight(3);
        fill(0, 0, 0, 60);
        for(var i = 0; i<90; i+=3){
            var p = pow(90-i, 1.2);
            
            stroke(p*1.1, p, p*1.3);
            arc(0, 0, (90-i)/9*10, 97, 90, 270);
        }
        strokeWeight(2.2);
        var xoff = 0.0;
        for(var y = -100; y < 100; y+=2) {
            var yoff = 0.0;
            for(var x = 0; x < sqrt(2400-sq(y)); x++) {
                var bright = map(noise(xoff, yoff), 0, 1, 0, 1);
                stroke(bright*255, bright*25, bright*20, x*1.8);
                point(-x, y);
               
                yoff += 0.017;
            }
            xoff += 0.15;
        }
        strokeWeight(4);
        noFill();
        for(var i = 0; i<8; i++){
            stroke(255, pow(8-i, 1.75));
            
            var r = 100+i*4;
            ellipse(0, 0, r, r);
        }
        popMatrix();
        
        for(var i = 0; i < 600; i++){
            strokeWeight(random(1, 2));
            stroke(255, random(255));
            point(random(600), random(600));
        }
        
        filter(BLUR);
        
        return get(0, 0, 600, 600);
    },
    'title': function(){
        
        strokeWeight(1.5);
        for (var i = 0; i < width * 2; i++) {
            stroke(lerpColor(i < width ? colors[0] : colors[1], i < width ? colors[1] : colors[2], i / width % 1));
            line(Math.min(i, 600), Math.max(i - 900, 0), 0, i/2);
        }
        var bk = get(0, 45, 600, 254);
        
        background(0, 0);
        fill(255);
        pushMatrix();
        translate(300, 130);
        scale(0.8, 2);
        textFont(font.light, 120);
        text('INTERSTELLAR', 0, 0);
        popMatrix();
        var wrd = get(0, 45, 600, 254);
        
        bk.mask(wrd);
        
        image(bk, 300, 172);
        
        return get(0, 0, 600, 300);
    },
    'help': function(){
        strokeWeight(1.5);
        for (var i = 0; i < width * 2; i++) {
            stroke(lerpColor(i < width ? colors[0] : colors[1], i < width ? colors[1] : colors[2], i / width % 1));
            line(Math.min(i, 600), Math.max(i - 900, 0), 0, i/2);
        }
        var bk = get(0, 45, 600, 254);
        
        background(0, 0);
        fill(255);
        pushMatrix();
        translate(300, 130);
        scale(0.8, 2);
        textFont(font.light, 120);
        text('HOW TO PLAY', 0, 0);
        popMatrix();
        var wrd = get(0, 45, 600, 254);
        
        bk.mask(wrd);
        
        image(bk, 300, 172);
        
        return get(0, 0, 600, 300);
    },
    'story': function(){
        strokeWeight(1.5);
        for (var i = 0; i < width * 2; i++) {
            stroke(lerpColor(i < width ? colors[0] : colors[1], i < width ? colors[1] : colors[2], i / width % 1));
            line(Math.min(i, 600), Math.max(i - 900, 0), 0, i/2);
        }
        var bk = get(0, 45, 600, 254);
        
        background(0, 0);
        fill(255);
        pushMatrix();
        translate(300, 130);
        scale(0.8, 2);
        textFont(font.light, 120);
        text('STORYLINE', 0, 0);
        popMatrix();
        var wrd = get(0, 45, 600, 254);
        
        bk.mask(wrd);
        
        image(bk, 300, 172);
        
        return get(0, 0, 600, 300);
    },
    'ship': function(){
        background(0, 0);
        fill(153, 153, 153);
        stroke(255, 0, 0);
        strokeWeight(1);
        noStroke();
        
        quad(62, 35, 46, 52, 125, 57, 112, 42);
        quad(140, 35, 112, 52, 171, 57, 156, 42);
        
        //Left main wing
        beginShape();
        vertex(38, 38);
        vertex(319, 54);
        vertex(291, 38);
        vertex(260, 33);
        vertex(249, 42);
        vertex(196, 37);
        vertex(187, 23);
        vertex(152, 18);
        vertex(149, 13);
        vertex(142, 13);
        vertex(138, 15);
        vertex(134, 16);
        vertex(131, 12);
        vertex(126, 10);
        vertex(120, 13);
        vertex(105, 11);
        vertex(38, 38);
        endShape();
        
        //Left wing extension
        beginShape();
        vertex(155, 16);
        vertex(189, 21);
        vertex(198, 34);
        vertex(247, 39);
        vertex(261, 29);
        vertex(189, 6);
        vertex(155, 16);
        endShape();
        
        //Left wing inside front
        beginShape();
        vertex(105, 64);
        vertex(206, 65);
        vertex(194, 54);
        vertex(105, 49);
        vertex(111, 54);
        vertex(111, 60);
        vertex(105, 64);
        endShape();
        
        //Left wing inside back
        beginShape();
        vertex(6, 54);
        vertex(26, 69);
        vertex(41, 69);
        vertex(47, 61);
        vertex(105, 64);
        vertex(111, 60);
        vertex(111, 54);
        vertex(99, 47);
        vertex(29, 41);
        vertex(6, 54);
        endShape();
        
        fill(97, 97, 97);
        
        //Small details left wing
        quad(101, 35, 105, 27, 81, 24, 74, 33);
        quad(135, 38, 138, 34, 166, 37, 168, 41);
        quad(125, 60, 130, 56, 188, 58, 187, 62);
        
        beginShape();
        vertex(109, 36);
        vertex(120, 20);
        vertex(180, 27);
        vertex(186, 31);
        vertex(132, 25);
        vertex(126, 37);
        vertex(109, 36);
        endShape();
        
        
        beginShape();
        vertex(190, 11);
        vertex(184, 15);
        vertex(204, 19);
        vertex(197, 26);
        vertex(200, 31);
        vertex(246, 36);
        vertex(245, 32);
        vertex(217, 28);
        vertex(227, 22);
        vertex(190, 11);
        endShape();
        noStroke();
        
        fill(148, 0, 0);
        
        quad(272, 35, 280, 36, 270, 51, 262, 51);
        for(var i = 0; i < 10; i++){
            stroke(0, i*13);
            line(148+i, 44, 156+i, 53);
            stroke(i*13);
            line(129+i, 43, 117+i, 52);
            
            stroke(0, i*13);
            line(99+i, 41, 112+i, 52);
            stroke(i*13);
            line(61+i, 38, 52+i, 45);
        }
        for(var i = 0; i < 4; i++){
            stroke(255, i*20);
            line(147+i, 44, 154+i, 52);
            line(134+i, 43, 125+i, 52);
            line(99+i, 41, 110+i, 52);
            line(66+i, 41, 58+i, 46);
        }
        stroke(0);
        line(317, 53, 39, 37);
        line(195, 54, 105, 52);
        line(26, 42, 105, 49);
        line(105, 49, 105, 52);
        line(105, 52, 111, 54);
        line(111, 60, 111, 54);
        line(111, 60, 105, 64);
        stroke(255);
        line(204, 64, 108, 63);
        line(314, 52, 81, 38);
        line(247, 43, 195, 38);
        for(var i = 0; i < 100; i++){
            stroke(0, 140-i*8);
            line(35, 55+i, 111, 60+i);
        }
        for(var i = 0; i < 18; i++){
            stroke(0, i*3);
            line(308, i+31, 249, i+22);
            stroke(0, 50-i*3);
            line(291-i, 38, 305-i, 45);
            stroke(0, i*3);
            line(122-i, 11, 60-i, 37);
            line(122-i, 10, 96-i, 22);
            stroke(0, 50-i*3);
            line(183-i, 22, 194-i, 38);
        }
        for(var i = 0; i < 50; i++){
            stroke(0, i);
            line(155-i, 12, 125-i, 22);
        }
        pushMatrix();
        for(var i = 0; i < 4; i++){
            noFill();
            stroke(0, 50-i/67);
            translate(0, 0);
            scale(1-i/400);
            beginShape();
            vertex(190, 11);
            vertex(184, 15);
            vertex(204, 19);
            vertex(197, 26);
            vertex(200, 31);
            vertex(246, 36);
            vertex(245, 32);
            vertex(217, 28);
            vertex(227, 22);
            vertex(190, 11);
            endShape();
        }
        
        popMatrix();
        
        fill(153);
        //Cockpit
        beginShape();
        vertex(48, 62);
        vertex(39, 72);
        vertex(195, 73);
        vertex(189, 65);
        vertex(48, 62);
        endShape();
        var sky2 = color(255, 162, 0);
        var sky1 = color(255, 196, 0);
        for (var y = 0 ; y < 5 ; y++) {
            noFill();
            stroke(lerpColor(sky1,sky2,y/5));
            //ellipse(166, 72, y+15, y);
        }
        noStroke();
        fill(153);
        beginShape();
        vertex(48, 62);
        vertex(39, 72);
        vertex(169, 73);
        vertex(160, 65);
        vertex(48, 62);
        endShape();
        beginShape();
        vertex(177, 73);
        vertex(192, 72);
        vertex(174, 73);
        vertex(164, 65);
        vertex(188, 68);
        endShape();
        
        for(var i = 0; i < 4; i++){
            stroke(0, 255-i*80);
            line(45, 63+i, 190, 65+i);
        }
        
        
        //RIGHT SIDE
        
        pushMatrix();
        translate(0, 145);
        scale(1, -1);
        fill(153, 153, 153);
        stroke(255, 0, 0);
        strokeWeight(1);
        noStroke();
        
        quad(62, 35, 46, 52, 125, 57, 112, 42);
        quad(140, 35, 112, 52, 171, 57, 156, 42);
        
        //Left main wing
        beginShape();
        vertex(38, 38);
        vertex(319, 54);
        vertex(291, 38);
        vertex(260, 33);
        vertex(249, 42);
        vertex(196, 37);
        vertex(187, 23);
        vertex(152, 18);
        vertex(149, 13);
        vertex(142, 13);
        vertex(138, 15);
        vertex(134, 16);
        vertex(131, 12);
        vertex(126, 10);
        vertex(120, 13);
        vertex(105, 11);
        vertex(38, 38);
        endShape();
        
        //Left wing extension
        beginShape();
        vertex(155, 16);
        vertex(189, 21);
        vertex(198, 34);
        vertex(247, 39);
        vertex(261, 29);
        vertex(189, 6);
        vertex(155, 16);
        endShape();
        
        //Left wing inside front
        beginShape();
        vertex(105, 64);
        vertex(206, 65);
        vertex(194, 54);
        vertex(105, 49);
        vertex(111, 54);
        vertex(111, 60);
        vertex(105, 64);
        endShape();
        
        //Left wing inside back
        beginShape();
        vertex(6, 54);
        vertex(26, 69);
        vertex(41, 69);
        vertex(47, 61);
        vertex(105, 64);
        vertex(111, 60);
        vertex(111, 54);
        vertex(99, 47);
        vertex(29, 41);
        vertex(6, 54);
        endShape();
        
        fill(97, 97, 97);
        
        //Small details left wing
        quad(101, 35, 105, 27, 81, 24, 74, 33);
        quad(135, 38, 138, 34, 166, 37, 168, 41);
        quad(125, 60, 130, 56, 188, 58, 187, 62);
        
        beginShape();
        vertex(109, 36);
        vertex(120, 20);
        vertex(180, 27);
        vertex(186, 31);
        vertex(132, 25);
        vertex(126, 37);
        vertex(109, 36);
        endShape();
        
        
        beginShape();
        vertex(190, 11);
        vertex(184, 15);
        vertex(204, 19);
        vertex(197, 26);
        vertex(200, 31);
        vertex(246, 36);
        vertex(245, 32);
        vertex(217, 28);
        vertex(227, 22);
        vertex(190, 11);
        endShape();
        noStroke();
        
        fill(148, 0, 0);
        
        quad(272, 35, 280, 36, 270, 51, 262, 51);
        for(var i = 0; i < 10; i++){
            stroke(0, i*13);
            line(148+i, 44, 156+i, 53);
            stroke(i*13);
            line(129+i, 43, 117+i, 52);
            
            stroke(0, i*13);
            line(99+i, 41, 112+i, 52);
            stroke(i*13);
            line(61+i, 38, 52+i, 45);
        }
        for(var i = 0; i < 4; i++){
            stroke(255, i*20);
            line(147+i, 44, 154+i, 52);
            line(134+i, 43, 125+i, 52);
            line(99+i, 41, 110+i, 52);
            line(66+i, 41, 58+i, 46);
        }
        stroke(0);
        line(317, 53, 39, 37);
        line(195, 54, 105, 52);
        line(26, 42, 105, 49);
        line(105, 49, 105, 52);
        line(105, 52, 111, 54);
        line(111, 60, 111, 54);
        line(111, 60, 105, 64);
        stroke(255);
        line(204, 64, 108, 63);
        line(314, 52, 81, 38);
        line(247, 43, 195, 38);
        for(var i = 0; i < 100; i++){
            stroke(0, 140-i*8);
            line(35, 55+i, 111, 60+i);
        }
        for(var i = 0; i < 18; i++){
            stroke(0, i*3);
            line(308, i+31, 249, i+22);
            stroke(0, 50-i*3);
            line(291-i, 38, 305-i, 45);
            stroke(0, i*3);
            line(122-i, 11, 60-i, 37);
            line(122-i, 10, 96-i, 22);
            stroke(0, 50-i*3);
            line(183-i, 22, 194-i, 38);
        }
        for(var i = 0; i < 50; i++){
            stroke(0, i);
            line(155-i, 12, 125-i, 22);
        }
        pushMatrix();
        for(var i = 0; i < 4; i++){
            noFill();
            stroke(0, 50-i/67);
            translate(0, 0);
            scale(1-i/400);
            beginShape();
            vertex(190, 11);
            vertex(184, 15);
            vertex(204, 19);
            vertex(197, 26);
            vertex(200, 31);
            vertex(246, 36);
            vertex(245, 32);
            vertex(217, 28);
            vertex(227, 22);
            vertex(190, 11);
            endShape();
        }
        
        popMatrix();
        
        fill(153);
        //Cockpit
        beginShape();
        vertex(48, 62);
        vertex(39, 72);
        vertex(195, 73);
        vertex(189, 65);
        vertex(48, 62);
        endShape();
        var sky2 = color(255, 162, 0);
        var sky1 = color(255, 196, 0);
        for (var y = 0 ; y < 5 ; y++) {
            noFill();
            stroke(lerpColor(sky1,sky2,y/5));
            //ellipse(166, 72, y+15, y);
        }
        noStroke();
        fill(153);
        beginShape();
        vertex(48, 62);
        vertex(39, 72);
        vertex(169, 73);
        vertex(160, 65);
        vertex(48, 62);
        endShape();
        beginShape();
        vertex(177, 73);
        vertex(192, 72);
        vertex(174, 73);
        vertex(164, 65);
        vertex(188, 68);
        endShape();
        
        for(var i = 0; i < 4; i++){
            stroke(0, 255-i*80);
            line(45, 63+i, 190, 65+i);
        }
        popMatrix();
        
        return get(5, 5, 314, 134);
    },
    'eship': function(){
        background(0, 0);
        
        fill(99, 99, 99);
        stroke(255, 0, 0);
        strokeWeight(1);
        noStroke();
        
        quad(62, 35, 46, 52, 125, 57, 112, 42);
        quad(140, 35, 112, 52, 171, 57, 156, 42);
        
        //Left main wing
        beginShape();
        vertex(38, 38);
        vertex(319, 54);
        vertex(291, 38);
        vertex(260, 33);
        vertex(249, 42);
        vertex(196, 37);
        vertex(187, 23);
        vertex(152, 18);
        vertex(149, 13);
        vertex(142, 13);
        vertex(138, 15);
        vertex(134, 16);
        vertex(131, 12);
        vertex(126, 10);
        vertex(120, 13);
        vertex(105, 11);
        vertex(38, 38);
        endShape();
        
        //Left wing extension
        beginShape();
        vertex(155, 16);
        vertex(189, 21);
        vertex(198, 34);
        vertex(247, 39);
        vertex(261, 29);
        vertex(189, 6);
        vertex(155, 16);
        endShape();
        
        //Left wing inside front
        beginShape();
        vertex(105, 64);
        vertex(206, 65);
        vertex(194, 54);
        vertex(105, 49);
        vertex(111, 54);
        vertex(111, 60);
        vertex(105, 64);
        endShape();
        
        //Left wing inside back
        beginShape();
        vertex(6, 54);
        vertex(26, 69);
        vertex(41, 69);
        vertex(47, 61);
        vertex(105, 64);
        vertex(111, 60);
        vertex(111, 54);
        vertex(99, 47);
        vertex(29, 41);
        vertex(6, 54);
        endShape();
        
        fill(184, 184, 184);
        
        //Small details left wing
        quad(101, 35, 105, 27, 81, 24, 74, 33);
        quad(135, 38, 138, 34, 166, 37, 168, 41);
        quad(125, 60, 130, 56, 188, 58, 187, 62);
        
        beginShape();
        vertex(109, 36);
        vertex(120, 20);
        vertex(180, 27);
        vertex(186, 31);
        vertex(132, 25);
        vertex(126, 37);
        vertex(109, 36);
        endShape();
        
        
        beginShape();
        vertex(190, 11);
        vertex(184, 15);
        vertex(204, 19);
        vertex(197, 26);
        vertex(200, 31);
        vertex(246, 36);
        vertex(245, 32);
        vertex(217, 28);
        vertex(227, 22);
        vertex(190, 11);
        endShape();
        noStroke();
        
        fill(148, 0, 0);
        
        quad(272, 35, 280, 36, 270, 51, 262, 51);
        for(var i = 0; i < 10; i++){
            stroke(0, i*13);
            line(148+i, 44, 156+i, 53);
            stroke(i*13);
            line(129+i, 43, 117+i, 52);
            
            stroke(0, i*13);
            line(99+i, 41, 112+i, 52);
            stroke(i*13);
            line(61+i, 38, 52+i, 45);
        }
        for(var i = 0; i < 4; i++){
            stroke(255, i*20);
            line(147+i, 44, 154+i, 52);
            line(134+i, 43, 125+i, 52);
            line(99+i, 41, 110+i, 52);
            line(66+i, 41, 58+i, 46);
        }
        stroke(0);
        line(317, 53, 39, 37);
        line(195, 54, 105, 52);
        line(26, 42, 105, 49);
        line(105, 49, 105, 52);
        line(105, 52, 111, 54);
        line(111, 60, 111, 54);
        line(111, 60, 105, 64);
        stroke(255);
        line(204, 64, 108, 63);
        line(314, 52, 81, 38);
        line(247, 43, 195, 38);
        for(var i = 0; i < 100; i++){
            stroke(0, 140-i*8);
            line(35, 55+i, 111, 60+i);
        }
        for(var i = 0; i < 18; i++){
            stroke(0, i*3);
            line(308, i+31, 249, i+22);
            stroke(0, 50-i*3);
            line(291-i, 38, 305-i, 45);
            stroke(0, i*3);
            line(122-i, 11, 60-i, 37);
            line(122-i, 10, 96-i, 22);
            stroke(0, 50-i*3);
            line(183-i, 22, 194-i, 38);
        }
        for(var i = 0; i < 50; i++){
            stroke(0, i);
            line(155-i, 12, 125-i, 22);
        }
        pushMatrix();
        for(var i = 0; i < 4; i++){
            noFill();
            stroke(0, 50-i/67);
            translate(0, 0);
            scale(1-i/400);
            beginShape();
            vertex(190, 11);
            vertex(184, 15);
            vertex(204, 19);
            vertex(197, 26);
            vertex(200, 31);
            vertex(246, 36);
            vertex(245, 32);
            vertex(217, 28);
            vertex(227, 22);
            vertex(190, 11);
            endShape();
        }
        
        popMatrix();
        
        fill(99, 99, 99);
        //Cockpit
        beginShape();
        vertex(48, 62);
        vertex(39, 72);
        vertex(195, 73);
        vertex(189, 65);
        vertex(48, 62);
        endShape();
        var sky2 = color(255, 162, 0);
        var sky1 = color(255, 196, 0);
        for (var y = 0 ; y < 5 ; y++) {
            noFill();
            stroke(lerpColor(sky1,sky2,y/5));
            //ellipse(166, 72, y+15, y);
        }
        noStroke();
        fill(153);
        beginShape();
        vertex(48, 62);
        vertex(39, 72);
        vertex(169, 73);
        vertex(160, 65);
        vertex(48, 62);
        endShape();
        beginShape();
        vertex(177, 73);
        vertex(192, 72);
        vertex(174, 73);
        vertex(164, 65);
        vertex(188, 68);
        endShape();
        
        for(var i = 0; i < 4; i++){
            stroke(0, 255-i*80);
            line(45, 63+i, 190, 65+i);
        }
        
        
        //RIGHT SIDE
        
        pushMatrix();
        translate(0, 145);
        scale(1, -1);
        fill(99, 99, 99);
        stroke(255, 0, 0);
        strokeWeight(1);
        noStroke();
        
        quad(62, 35, 46, 52, 125, 57, 112, 42);
        quad(140, 35, 112, 52, 171, 57, 156, 42);
        
        //Left main wing
        beginShape();
        vertex(38, 38);
        vertex(319, 54);
        vertex(291, 38);
        vertex(260, 33);
        vertex(249, 42);
        vertex(196, 37);
        vertex(187, 23);
        vertex(152, 18);
        vertex(149, 13);
        vertex(142, 13);
        vertex(138, 15);
        vertex(134, 16);
        vertex(131, 12);
        vertex(126, 10);
        vertex(120, 13);
        vertex(105, 11);
        vertex(38, 38);
        endShape();
        
        //Left wing extension
        beginShape();
        vertex(155, 16);
        vertex(189, 21);
        vertex(198, 34);
        vertex(247, 39);
        vertex(261, 29);
        vertex(189, 6);
        vertex(155, 16);
        endShape();
        
        //Left wing inside front
        beginShape();
        vertex(105, 64);
        vertex(206, 65);
        vertex(194, 54);
        vertex(105, 49);
        vertex(111, 54);
        vertex(111, 60);
        vertex(105, 64);
        endShape();
        
        //Left wing inside back
        beginShape();
        vertex(6, 54);
        vertex(26, 69);
        vertex(41, 69);
        vertex(47, 61);
        vertex(105, 64);
        vertex(111, 60);
        vertex(111, 54);
        vertex(99, 47);
        vertex(29, 41);
        vertex(6, 54);
        endShape();
        
        fill(184, 184, 184);
        
        //Small details left wing
        quad(101, 35, 105, 27, 81, 24, 74, 33);
        quad(135, 38, 138, 34, 166, 37, 168, 41);
        quad(125, 60, 130, 56, 188, 58, 187, 62);
        
        beginShape();
        vertex(109, 36);
        vertex(120, 20);
        vertex(180, 27);
        vertex(186, 31);
        vertex(132, 25);
        vertex(126, 37);
        vertex(109, 36);
        endShape();
        
        
        beginShape();
        vertex(190, 11);
        vertex(184, 15);
        vertex(204, 19);
        vertex(197, 26);
        vertex(200, 31);
        vertex(246, 36);
        vertex(245, 32);
        vertex(217, 28);
        vertex(227, 22);
        vertex(190, 11);
        endShape();
        noStroke();
        
        fill(148, 0, 0);
        
        quad(272, 35, 280, 36, 270, 51, 262, 51);
        for(var i = 0; i < 10; i++){
            stroke(0, i*13);
            line(148+i, 44, 156+i, 53);
            stroke(i*13);
            line(129+i, 43, 117+i, 52);
            
            stroke(0, i*13);
            line(99+i, 41, 112+i, 52);
            stroke(i*13);
            line(61+i, 38, 52+i, 45);
        }
        for(var i = 0; i < 4; i++){
            stroke(255, i*20);
            line(147+i, 44, 154+i, 52);
            line(134+i, 43, 125+i, 52);
            line(99+i, 41, 110+i, 52);
            line(66+i, 41, 58+i, 46);
        }
        stroke(0);
        line(317, 53, 39, 37);
        line(195, 54, 105, 52);
        line(26, 42, 105, 49);
        line(105, 49, 105, 52);
        line(105, 52, 111, 54);
        line(111, 60, 111, 54);
        line(111, 60, 105, 64);
        stroke(255);
        line(204, 64, 108, 63);
        line(314, 52, 81, 38);
        line(247, 43, 195, 38);
        for(var i = 0; i < 100; i++){
            stroke(0, 140-i*8);
            line(35, 55+i, 111, 60+i);
        }
        for(var i = 0; i < 18; i++){
            stroke(0, i*3);
            line(308, i+31, 249, i+22);
            stroke(0, 50-i*3);
            line(291-i, 38, 305-i, 45);
            stroke(0, i*3);
            line(122-i, 11, 60-i, 37);
            line(122-i, 10, 96-i, 22);
            stroke(0, 50-i*3);
            line(183-i, 22, 194-i, 38);
        }
        for(var i = 0; i < 50; i++){
            stroke(0, i);
            line(155-i, 12, 125-i, 22);
        }
        pushMatrix();
        for(var i = 0; i < 4; i++){
            noFill();
            stroke(0, 50-i/67);
            translate(0, 0);
            scale(1-i/400);
            beginShape();
            vertex(190, 11);
            vertex(184, 15);
            vertex(204, 19);
            vertex(197, 26);
            vertex(200, 31);
            vertex(246, 36);
            vertex(245, 32);
            vertex(217, 28);
            vertex(227, 22);
            vertex(190, 11);
            endShape();
        }
        
        popMatrix();
        
        fill(99, 99, 99);
        //Cockpit
        beginShape();
        vertex(48, 62);
        vertex(39, 72);
        vertex(195, 73);
        vertex(189, 65);
        vertex(48, 62);
        endShape();
        var sky2 = color(255, 162, 0);
        var sky1 = color(255, 196, 0);
        for (var y = 0 ; y < 5 ; y++) {
            noFill();
            stroke(lerpColor(sky1,sky2,y/5));
            //ellipse(166, 72, y+15, y);
        }
        noStroke();
        fill(153);
        beginShape();
        vertex(48, 62);
        vertex(39, 72);
        vertex(169, 73);
        vertex(160, 65);
        vertex(48, 62);
        endShape();
        beginShape();
        vertex(177, 73);
        vertex(192, 72);
        vertex(174, 73);
        vertex(164, 65);
        vertex(188, 68);
        endShape();
        
        for(var i = 0; i < 4; i++){
            stroke(0, 255-i*80);
            line(45, 63+i, 190, 65+i);
        }
        popMatrix();
        
        return get(5, 5, 314, 134);
    },
    'youBullet': function(){
        background(0, 0);
        for(var i = 0; i < 52; i++){
            stroke(255, 0, 0, i/7);
            strokeWeight(i);
            line(50, 200, 250, 200);
        }
        gradientStroke(23, 8, color(120, 0, 0), color(255, 0, 0));
        stroke(255);
        line(50, 200, 250, 200);
        
        return get(26, 175, 250, 51);
    },
    'eBullet': function(){
        background(0, 0);
        for(var i = 0; i < 52; i++){
            stroke(0, 0, 255, i/7);
            strokeWeight(i);
            line(50, 200, 250, 200);
        }
        gradientStroke(23, 8, color(0, 0, 120), color(0, 0, 255));
        stroke(255);
        line(50, 200, 250, 200);
        
        return get(26, 175, 250, 51);
    },
    'deadTitle': function(){
        strokeWeight(1.5);
        for (var i = 0; i < width * 2; i++) {
            stroke(lerpColor(i < width ? colors[0] : colors[1], i < width ? colors[1] : colors[2], i / width % 1));
            line(Math.min(i, 600), Math.max(i - 900, 0), 0, i/2);
        }
        var bk = get(0, 45, 600, 254);
        
        background(0, 0);
        fill(255);
        pushMatrix();
        translate(300, 130);
        scale(0.8, 2);
        textFont(font.light, 120);
        text('YOU DIED', 0, 0);
        popMatrix();
        var wrd = get(0, 45, 600, 254);
        
        bk.mask(wrd);
        
        image(bk, 300, 172);
        
        return get(0, 0, 600, 300);
    },
};

var curLoad = 0;
var loaded = false;
var load = function(){
    var obj = Object.keys(imgs);
    background(0, 0, 0, 0);
    imgs[obj[curLoad]] = imgs[obj[curLoad]]();
    curLoad++;

    background(0, 0, 0);
    fill(255, 255, 255);
    textFont(font.big);
    if(curLoad<obj.length){
        textSize(50);
        text('Loading:\n' + ~~(curLoad/obj.length*100) + '% Complete', 300, 300);
        textSize(15);
        if(curLoad%4===1){
            text('Please Wait.', 300, 400);
        }
        if(curLoad%4===2){
            text('Please Wait..', 300, 400);
        }
        if(curLoad%4===3){
            text('Please Wait...', 300, 400);
        }
        if(curLoad%4===0){
            text('Please Wait', 300, 400);
        }
        loaded = false;
    }
    else{
        loaded = true;
        page = 'menu';
    }
};

var Button = function(label, x, y, s, next){
    this.x = x;
    this.y = y;
    this.label = label;
    this.s = s;
    this.next = next;
    
    this.lineLength = 0;
    this.offButton = 0;
};
Button.prototype.update = function(){
    if(!this.width){
        this.trueWidth = textWidth(this.message)/2;
        this.width = textWidth(this.label)/2 + this.s * 2.1;
        this.height = textAscent()/2 + this.s;
    }
    this.lineLength+=Smooth(this.lineLength, this.checkMouse()?this.width/1.6:0, 10);
    if(!this.checkMouse()){
        this.offButton++;
    }
    if(this.checkMouse()){
        this.offButton = 0;
    }
};
Button.prototype.checkMouse = function(){
    return abs(mouseX - this.x) < this.width/2 && abs(mouseY - this.y) < this.height/2;
};
Button.prototype.display = function(){
    stroke(217, 67, 125);
    strokeWeight(3);
    if(this.offButton<=51){
        line(this.x+this.lineLength, this.y+this.height/2, this.x-this.lineLength, this.y+this.height/2);
        line(this.x+this.lineLength, this.y-this.height/2, this.x-this.lineLength, this.y-this.height/2);
    }
    
    fill(255);
    var msg = this.label;
    textFont(font.big, this.s);
    text(this.label, this.x, this.y);
    if(this.checkMouse()){
        cursor(HAND);
        if(clicked){
            transition.active = true;
            transition.next = this.next;
        }
    }
};
Button.prototype.pack = function(){
    this.update();
    this.display();
};
var buttons = {
    play: new Button('PLAY', 300, 300, 30, 'game'),
    help: new Button('INSTRUCTIONS', 300, 350, 30, 'help'),
    story: new Button('STORY', 300, 400, 30, 'story'),
    back: new Button('BACK', 60, 570, 30, 'menu')
};

var Bullet = function(x, y){
    this.x = x;
    this.y = y;
};
Bullet.prototype.update = function(){
    this.y-=5;
};
Bullet.prototype.display = function(){
    pushMatrix();
    translate(this.x, this.y);
    rotate(90);
    image(imgs.youBullet, 0, 0, 20, 10);
    popMatrix();
};
var bullets = [];

var Asteroid = function(){
    this.x = random(-300, 900);
    this.y = -50;
    
    this.darkness = random(0, 100);
    
    this.xSpd = random(-5, 5);
    this.ySpd = random(-5, 5);
    this.rot = 0;
    this.rotSpd = random(-3, 3);
    
    this.dead = false;
};
Asteroid.prototype.update = function(){
    this.x-=this.xSpd;
    this.y-=this.ySpd;
    this.rot+=this.rotSpd;
};
Asteroid.prototype.display = function(){
    if(!this.dead){
        strokeWeight(1);
        stroke(0);
        fill(82, 70, 46);
        pushMatrix();
        translate(this.x, this.y);
        rotate(this.rot);
        beginShape();
        vertex(20, -11);
        vertex(-4, -18);
        vertex(-16, -26);
        vertex(-31, -8);
        vertex(-29, 4);
        vertex(-19, 28);
        vertex(-5, 9);
        vertex(19, 16);
        vertex(24, 10);
        vertex(16, -8);
        endShape(CLOSE);
        
        fill(0, this.darkness);
        beginShape();
        vertex(20, -11);
        vertex(-4, -18);
        vertex(-16, -26);
        vertex(-31, -8);
        vertex(-29, 4);
        vertex(-19, 28);
        vertex(-5, 9);
        vertex(19, 16);
        vertex(24, 10);
        vertex(16, -8);
        endShape(CLOSE);
        popMatrix();
    }
    for(var i = 0; i < bullets.length; i++){
        if(bullets[i].x>=this.x-20&&bullets[i].x<=this.x+20&&bullets[i].y<=this.y+20&&bullets[i].y>=this.y-20){
            this.dead = true;
        }
    }
};
var asteroids = [];

var Enemy = function(){
    this.x = random(0, 600);
    this.y = -50;
    
    this.spd = random(3, 5);
    this.dead = false;
};
Enemy.prototype.update = function(){
    this.y+=this.spd;
};
Enemy.prototype.display = function(){
    if(!this.dead){
        pushMatrix();
        translate(this.x, this.y);
        rotate(90);
        image(imgs.eship, 0, 0, 60, 50);
        popMatrix();
    }
    for(var i = 0; i < bullets.length; i++){
        if(bullets[i].x>=this.x-20&&bullets[i].x<=this.x+20&&bullets[i].y<=this.y+20&&bullets[i].y>=this.y-20){
            this.dead = true;
        }
    }
};
var enemies = [];

var Player = function(x, y){
    this.x = x;
    this.y = y;
    
    this.xVel = 0;
    this.yVel = 0;
    this.accel = 0.1;
    this.speed = 3;
    
    this.scl = 50;
    this.rot = -90;
    this.sclChng = 0.01;
    
    this.shooting = false;
    this.reload = 0;
    this.bltX = null;
    this.bltY = null;
    
    this.dead = false;
};
Player.prototype.update = function(){
    if(!this.dead){
        this.reload++;
        this.scl+=Smooth(this.scl, keys[LEFT]||keys[RIGHT]?40:50, 10);
        this.rot+=Smooth(this.rot, keys[RIGHT]?-75:-90, 10);
        this.rot+=Smooth(this.rot, keys[LEFT]?-105:-90, 10);
        
        if(keys[32]&&this.reload>=30){
            this.reload = 0;
            this.shooting = true;
            this.bltX = this.x;
            this.bltY = this.y;
        }
        if(keys[LEFT]){
            this.xVel-=this.accel;
        }
        if(keys[RIGHT]){
            this.xVel+=this.accel;
        }
        if(keys[UP]){
            this.yVel-=this.accel;
        }
        if(keys[DOWN]){
            this.yVel+=this.accel;
        }
        if((!keys[RIGHT])&&(!keys[LEFT])){
            if(this.xVel>0){
                this.xVel-=this.accel;
                this.rot-=this.accel*2;
            }
            if(this.xVel<0){
                this.xVel+=this.accel;
                this.rot+=this.accel*2;
            }
        }
        if(Math.abs(this.xVel)>=this.speed){
            if(this.xVel>0){
                this.xVel = this.speed;
            }
            if(this.xVel<0){
                this.xVel = -this.speed;
            }
        }
        if(!keys[UP]&&!keys[DOWN]){
            if(this.yVel>0){
                this.yVel-=this.accel;
            }
            if(this.yVel<0){
                this.yVel+=this.accel;
            }
        }
        if(Math.abs(this.yVel)>=this.speed){
            if(this.yVel>0){
                this.yVel = this.speed;
            }
            if(this.yVel<0){
                this.yVel = -this.speed;
            }
        }
        if(this.shooting){
            bullets.push(new Bullet(this.bltX, this.bltY));
            this.shooting = false;
        }
        for(var i = 0; i < bullets.length; i++){
            bullets[i].update();
            bullets[i].display();

        }
        for(var i = 0; i < bullets.length; i++){
            if(bullets[i].y<=-20){
                bullets.splice(i, 1);
                continue;
            }
            
        }
        
        this.x = constrain(this.x, 30, 570);
        this.y = constrain(this.y, 40, 570);
        this.rot = constrain(this.rot, -100, -80);
        this.x+=this.xVel;
        this.y+=this.yVel;
    }
    for(var i = 0; i < asteroids.length; i++){
        if(asteroids[i].x+20>=this.x-20&&asteroids[i].x-20<=this.x+20&&asteroids[i].y+20>=this.y-30&&asteroids[i].y-20<=this.y+30){
            this.dead = true;
        }
    }
    for(var i = 0; i < enemies.length; i++){
        if(enemies[i].x+20>=this.x-20&&enemies[i].x-20<=this.x+20&&enemies[i].y+20>=this.y-30&&enemies[i].y-20<=this.y+30&&!enemies[i].dead){
            this.dead = true;
        }
    }
};
Player.prototype.display = function(){
    pushMatrix();
    translate(this.x, this.y);
    rotate(this.rot);
    image(imgs.ship, 0, 0, 60, this.scl);
    popMatrix();
};
Player.prototype.pack = function(){
    this.update();
    this.display();
};
var player = new Player(300, 500);

var menu = function(){
    background(255);
    pushMatrix();
    translate(-mouseX/80, -mouseY/80);
    image(imgs.menuBK, 300, 300, 614, 614);
    fill(0, 10);
    rect(300, 300, 650, 650);
    popMatrix();
    fill(255, 255, 255);
    textSize(10);
    text('A Game by Loyalty', 47, 591);
    image(imgs.title, 300, 105);
    buttons.play.pack();
    buttons.help.pack();
    buttons.story.pack();
    
    liveTimer = 0;
    player.dead = false;
    player.x = 300;
    player.y = 500;
    bullets.splice(0, bullets.length);
    asteroids.splice(0, asteroids.length);
    enemies.splice(0, enemies.length);
    
    if(loaded){
        noStroke();
        fill(0, transOpac);
        rect(300, 300, 600, 600);
        transOpac+=Smooth(transOpac, 0, 35);
    }
};
var help = function(){
    image(imgs.helpBK, 300, 300);
    image(imgs.help, 300, 105);
    fill(255, 255, 255);
    textFont(font.light);
    textSize(23);
    text('\u06DE Arrow keys to move \u06DE\n\n\u06DE Space bar to fire weapon \u06DE\n\n\u06DE Shoot enemies and asteroids \u06DE\n\n\u06DE Survive as long as possible \u06DE\n\n', 300, 388);
    buttons.back.pack();
};
var story = function(){
    image(imgs.storyBK, 300, 300);
    fill(0, 50);
    rect(300, 300, 605, 605);
    image(imgs.story, 300, 105);
    fill(255, 255, 255);
    textFont(font.light);
    textSize(18);
    text('Charlie watched as the final planet came into view.  It always comforted him to see its surface, backed by the pink gas floating around it.  Out of all the solar systems he had visited, Triangulum was his favorite.  It wasn\'t too far from his home - only 2.732 million light years.  He flipped the autopilot switch and kicked his feet up, knowing that Sage would guide him around the planet safely.  He named his ship after his great-grandpa Sage, who fought in the wars against the other life-forms.\n----------------------------------------------------------\nCharlie was awoken by a slight rumble coming from the back of his ship.  Quckly, he turned around, only to see a blast from a lazer cannon hit the back of his ship.  He turned off autopilot and pushed the thrust all the way forward.  He knew that these other life-forms still existed, he just didn\'t think he\'d ever have an encounter with them.  He rounded the final planet and flew head-on into a fleet of the alien soldiers.  Gritting his teeth, he started charging his weapon, ready for a fight.', 10, 70, 580, 580);
    buttons.back.pack();
};
var game = function(){
    if(!player.dead){
        liveTimer+=1/60;
    }
    background(0);
    pushMatrix();
    translate(-player.x/10, -player.y/10);
    image(imgs.gameBK, 300, 300, 750, 750);
    popMatrix();
    player.pack();
    if(frameCount%50===0){
        asteroids.push(new Asteroid());
    }
    for(var i in asteroids){
        asteroids[i].update();
        asteroids[i].display();
    }
    for(var i = 0; i < asteroids.length; i++){
        if(asteroids[i].x<=-50||asteroids[i].x>=650||asteroids[i].y<=-50||asteroids[i].y>=650){
            asteroids.splice(i, 1);
            continue;
        }
        if(asteroids[i].dead){
            asteroids.splice(i, 1);
            continue;
        }
    }
    if(frameCount%50===0){
        enemies.push(new Enemy());
    }
    for(var i = 0; i < enemies.length; i++){
        enemies[i].update();
        enemies[i].display();
    }
    for(var i = 0; i < enemies.length; i++){
        if(enemies[i].y>=650){
            enemies.splice(i, 1);
            continue;
        }
        if(enemies[i].dead){
            enemies.splice(i, 1);
            continue;
        }
    }
    if(player.dead){
        transition.active = true;
        transition.next = 'dead';
    }
};
var dead = function(){
    background(0);
    image(imgs.helpBK, 300, 300);
    image(imgs.deadTitle, 300, 105);
    textFont(font.italic);
    textSize(30);
    fill(255);
    text('Oh no!  Because of you, Charlie\ncouldn\'t make it back to his\nfamily!', 300, 270);
    textSize(35);
    text('You survived ' + liveTimer.toFixed(2) + ' seconds', 300, 380);
    buttons.back.pack();
};

var pages = function(){
    cursor(ARROW);
    switch(page){
        case 'load':
            load();
        break;
        case 'menu':
            menu();
        break;
        case 'help':
            help();
        break;
        case 'story':
            story();
        break;
        case 'game':
            game();
        break;
        case 'dead':
            dead();
        break;
    }
    transition.run();
    clicked = false;
};
draw = function() {
    try{
        pages();
    }
    catch(e){
        debug(e);
    }
    finally{
        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        imageMode(CENTER);
        fill(255);
        textFont(font.light, 7);
        text(this.__frameRate.toFixed(3) + ' FPS', 578, 594);
        resetTimer(Infinity);
    }
};

keyPressed = function(){
    keys[keyCode] = true;
};
keyReleased = function(){
    keys[keyCode] = false;
};
mouseClicked = function(){
    clicked = true;
};
