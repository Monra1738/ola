let c = [];
let positionsX = [100, 100, 100, 200, 200, 200, 300, 300, 300, 400, 400, 400, 100, 200, 300, 400, 500, 500, 500, 500];
let positionsY = [100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300, 400, 400, 400, 400, 100, 200, 300, 400];
let index = 0;
let begin = false;
let counterPressed=0;
let finished=true;
function preload(){   
    Myfont = loadFont('NovaSquare.ttf');}   
function setup_2() {
   // createCanvas(720, 500);
    background(255, 227, 150);
    frameRate(30);

    

    for (let i = 0; i < 20; i++) {
        let cubeObj;
        
        cubeObj = new cube();

        cubeObj.col1 = random(0, 255);
        cubeObj.col2 = random(0, 255);
        cubeObj.col3 = random(0, 255);
        cubeObj.posX = positionsX[index];
        cubeObj.posY = positionsY[index];
        cubeObj.w = random(10, 50);
        cubeObj.h = cubeObj.w;
        cubeObj.initPositionX = cubeObj.posX;
        cubeObj.initPositionY = cubeObj.posY;
        c.push(cubeObj);
        cubeObj.limitPos=random(20,50);
        index++;
     
    }
}
function draw_2() {
    if (begin) {
        for (let j = 0; j < c.length; j++) {
            c[j].show();
            c[j].update();
            c[j].checkState();
            c[j].makeRectFront();
        }
    }
    if (!begin) {
        background(0);
    }
    textFont(Myfont);
    textSize(62);
    fill(0);
    text('BAUHAUS', 30 ,530);

    textSize(36);
    fill(0);
    text('AUSSTELLUNG', 330 ,510);

    textSize(31);
    fill(0);
    text('JULI, AUGUST,SETEMBER', 32 ,566);

    textSize(58);
    fill(0);
    text('1923', 445 ,565);
}

function mousePressed() {
    if(counterPressed==0)
    {
        begin = true;
        background(255, 227, 160);
    }
if(counterPressed>=1){
    background(255, 227, 160);
    for(let j=0;j<c.length;j++){
        c[j].posX=c[j].initPositionX;
        c[j].posY=c[j].initPositionY;
        c[j].col1=random(0,255);
        c[j].col2=random(0,255);
        c[j].col3=random(0,255);
        if(c[j].finsihed){
            c[j].finsihed=false;

          
        }
    }
}
counterPressed++;

}