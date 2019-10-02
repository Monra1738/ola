
var Myfont;
var pilotes = [];
var bool=false;
function preload(){   
  Myfont = loadFont('NovaSquare.ttf');}

function setup() {
  createCanvas(650, 600);
  background(150)
  //textFont(Myfont);
  //textSize(120);
  //fill(255);
 // noStroke();
  //text('PLAY',350,150);
 
  var points = Myfont.textToPoints('PLAY',95,200,200,{//crea punts el voltant de tot
  sampleFactor: 0.25});
  var points_1 = Myfont.textToPoints('Ramon',35,400,100,{//crea punts el voltant de tot
    sampleFactor: 0.25});
  var points_2 = Myfont.textToPoints('Ben',450,400,100,{//crea punts el voltant de tot
      sampleFactor: 0.25});

for (var i =0; i<points.length;i++){ //diuixo punts i que torniin lloc
  var pt = points[i];
  var pilota=new Pilotes(pt.x,pt.y);
  pilotes.push(pilota);//deso la informació
     // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
}
for (var i =0; i<points_1.length;i++){ //diuixo punts
  var pt = points_1[i];
  var pilota=new Pilotes(pt.x,pt.y);
  pilotes.push(pilota);
     // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
}
for (var i =0; i<points_2.length;i++){ //diuixo punts
  var pt = points_2[i];
  var pilota=new Pilotes(pt.x,pt.y);
  pilotes.push(pilota);
     // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
}

}
//a les seguentents crido unes funcions del js  que es diu Pilotes i despres el draw setup  de la seguent pantalla quan cliques i quan el bool es canvia

function draw() {
  if(!bool){
    background(51);
    for (var i=0;i<pilotes.length;i++){
      var p=pilotes[i];
      p.behaviors();
      p.update();
      p.show();
    }
  }
  else{
    stroke(0);
    strokeWeight(1);
    draw_2();
  }

}

function mouseClicked() {
  bool = true;
setup_2();}