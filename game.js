// position of the ball
var y = 0;
var x= 0; 
var Points=0; 
// how far the ball moves every time
var speed = 5;
var speed2= 3;
draw = function() {
    background(178, 203, 219);
    var r= random(0, 250); 
var g=random(0, 250);
var b=random(0, 250);
var X1=mouseX; 
    fill(r, b, g);
    ellipse(x, y, 50, 50);

if(y<25) {speed=5;}
if(x>375) {speed2=-3;} 
if(x<25) {speed2=3;}
if(y>=360) {
    if((x<=X1+80) && x>=X1 && y<=370) {
        speed=-5; 
        Points++; 
    }
}
    // move the ball

    if(y>400) {
        fill(0, 0, 0);
        rect(0,0, 400, 400); 
        fill(237, 171, 255);
        textSize(60);
        var f = createFont("fantasy");
textFont(f);
        text("GAME OVER", 70, 200); 
        noLoop(); 
    }
        y = y + speed;
    x = x+speed2; 
    rect(X1, 380, 80, 10); 
    fill(0, 85, 255);
    textSize(30);

text(+Points+ " total points", 120, 380); 
textSize(14); 
fill(56, 56, 56);
    text("fish like the number 11", 120, 50); 

if(Points>10) {
draw= function() {
    background(127, 151, 227);
var fish= function(centerX,centerY) {
var centerX = random(0,400);
var centerY = random(0,400);
var bodyLength = 118;
var bodyHeight = 74;
var r=random(0,255);
var b=random(0,255);
var g=random(0,255);
var bodyColor = color(r, b, g);

noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};


draw= function() {
    fish(); 
  
  frameRate(100);

};

};}

};
