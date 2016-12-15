var xPosa = 250;
var yPosa = 250;
var xPosb = 150;
var yPosb = 280;
var xPosc = 250; //x ball 3
var yPosc = 350; //y ball 3
var xPosd = 380; //x ball 4
var yPosd = 400; //y ball 4
var xspeed = 8;
var yspeed = 8;
var xspeedb = 8;
var yspeedb = 8;
var xspeedc = 6; //x speed ball 3
var yspeedc = 6; //y speed ball 3 
var xspeedd = 8; //x speed ball 4
var yspeedd = 6; //y speed ball 4
var xTopLeft = 150;
var yTopLeft = 50;
var xTopRight = 450;
var yTopRight = 150;
var xbad = 250; //x hit ball 3
var ybad = 50; //y hit ball 3
var xhit = 130;
var yhit = 105;


var num = 0;
var phrase = ["SQUASH"];
var phraseT = ["TARGET PRACTICE"];
var phraseRestart = ["SCORE?"];
var phrasePoints = ["19 POINTS WELL DONE!"];
var phrase5 = ["5+"];
var phrase0 = ["0+"];
var phrase2 = ["2+"];


function setup() {
 createCanvas(500, 500);

}

function draw() {



 background(255);
 fill(20, 255, 20);
 ellipse(30, 18, 30, 30);



 //court design
 fill(0);
 line(0, 500, 100, 350);
 line(500, 500, 380, 350);
 line(100, 350, 380, 350);
 line(100, 320, 380, 320);

 line(100, 245, 380, 245);

 line(0, 150, 100, 60);
 line(500, 150, 380, 65);
 line(100, 60, 380, 65);


 fill(250);
 rect(100, 0, 3, 350);
 rect(380, 0, 3, 350);



 fill(0);
 textSize(32);
 text(phrase[num], 230, 100);

 fill(0);
 textSize(18);
 text(phraseT[num], 230, 120);

 fill(23, 126, 200);
 textSize(12);
 text(phraseRestart[num], 50, 15);
 var r, g, b; //colours of points ongoing element
 r = random(50, 150);
 g = random(150, 255);
 b = random(125, 250);
 fill(r, g, b);
 textSize(25);
 text(phrase5[num], 115, 265);
 text(phrase5[num], 350, 235);
 fill(r, g, b);
 textSize(25);
 text(phrase0[num], 50, 315);
 text(phrase0[num], 410, 315);
 fill(r, g, b);
 textSize(25);
 text(phrase2[num], 350, 140);






 racquet();

 //ball one design
 fill(25, 30, 60);
 stroke(20, 140, 55);
 ellipse(xPosa, yPosa, 30, 30);
 //xposa =250 yposa =250
 //racquet hits ball and ball bounces //  
 if (mouseX >= 220 && mouseX <= 265 && mouseY >= 230 && mouseY <= 275) { //|| xPos < xTopLeft || yPos < yTopLeft) {
  (xPosa = xPosa - xspeed); //-8 etc add these to change speed 
  (yPosa = yPosa - yspeed--); //by changing to +/- you change direction of the ball!
 }
 if (xPosa < xTopLeft) {
  (xspeed = -10);
 }
 if (yPosa < yTopLeft) {
  (yspeed = -10);
 }

 //ball two
 fill(25, 30, 60);
 stroke(20, 140, 55);
 ellipse(xPosb, yPosb, 30, 30);
 //xposv=150, yposb=250
 //racquet hits ball2 and ball2 bounces //  
 if (mouseX >= 130 && mouseX <= 160 && mouseY >= 260 && mouseY <= 290) { //|| xPos < xTopLeft || yPos < yTopLeft) {
  (xPosb = xPosb + xspeedb); //-8 etc add these to change speed 
  (yPosb = yPosb - yspeedb); //by changing to +/- you change direction of the ball!
 }
 if (xPosb < xTopRight) {
  (xspeedb = +xspeedb++);
 }
 if (yPosb < yTopRight) {
  (yspeedb = yspeedb - 2);
 }

 //ball three
 fill(25, 30, 60);
 stroke(20, 140, 55);
 ellipse(xPosc, yPosc, 30, 30);
 //xposc =250 yposc =350
 //racquet hits ball and ball bounces //  
 if (mouseX >= 230 && mouseX <= 265 && mouseY >= 340 && mouseY <= 365) { //|| xPos < xTopLeft || yPos < yTopLeft) {
  (xPosc = xPosc - xspeedc); //-8 etc add these to change speed 
  (yPosc = yPosc - yspeedc); //by changing to +/- you change direction of the ball!
 }
 if (xPosc < xTopLeft) {
  (xspeedc = -10);
 }
 if (yPosc < yTopLeft) {
  (yspeedc = -10);
 }

 //ball 4
 fill(25, 30, 60);
 stroke(20, 140, 55);
 ellipse(xPosd, yPosd, 30, 30);
 //xposd =380 yposc =400
 //racquet hits ball and ball bounces //  
 if (mouseX >= 360 && mouseX <= 390 && mouseY >= 390 && mouseY <= 415) { //|| xPos < xTopLeft || yPos < yTopLeft) {
  (xPosd = xPosd - xspeedd); //-8 etc add these to change speed 
  (yPosd = yPosd - yspeedd); //by changing to +/- you change direction of the ball!
 }
 if (xPosd < xhit) {
  (xspeedd = -10);
 }
 if (yPosd < yhit) {
  (yspeedd = -10);
 }




 //FOR LOOP
 for (x = 0; x <= windowWidth; x = x + 50) {
  fill(random(120, 150), 80, 192);
  line(x, 500, 30, 30);



 }
 //button for score
 if (mouseIsPressed && mouseX > 20 && mouseX < 35 && mouseY > 5 && mouseY < 20) {
  fill(203, 106, 200);
  textSize(15);
  text(phrasePoints[num], 130, 25);
 }
 //racquet
 function racquet() {
   
  fill(0)
  rect(mouseX, mouseY , 5, 60);
  fill(175);
  stroke(50);
  ellipse(mouseX + 5, mouseY + 5, 25, 35);
 

 }




}