

function Pilotes(x, y){//inicialitzar particules
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x, y); 
    this.vel= p5.Vector.random2D();//crea la velocitat a vertir d un vector aleatori
    this.acc= createVector();
    this.r=8;
    this.maxspeed=5;
    this.maxforce=0.3;
}
Pilotes.prototype.behaviors=function(){//passar per sobre moure i per colocar
    var arrive=this.arrive(this.target);
    var mouse = createVector(mouseX, mouseY);
    var flee = this.flee(mouse);
  
    arrive.mult(1);
    flee.mult(5);
  
    this.applyForce(arrive);
    this.applyForce(flee);
}
Pilotes.prototype.applyForce=function(f){
    this.acc.add(f);
}

Pilotes.prototype.update=function(){//les poses totes el i les inicialitza `posicopo inicial
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
}
Pilotes.prototype.show=function(){
    stroke(255);
    strokeWeight(8);
    point (this.pos.x,this.pos.y);
}
Pilotes.prototype.arrive=function (target) { 
    var desired=p5.Vector.sub(target,this.pos);
    var d=desired.mag();
    var speed=this.maxspeed;
    if(d<100){
        speed=map(d,0,100,0,this.maxspeed);//agafem els valors del rang
    }
    desired.setMag(speed);//et doble el valor
    var steer=p5.Vector.sub(desired,this.vel);
    steer.limit(this.maxforce); //limita el maxim que fara sera la maxforce 
    return steer;
 }
Pilotes.prototype.flee = function(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();//	agafa la  magnitud o longitud
    if (d < 50) {
      desired.setMag(this.maxspeed);//definim el valor maxim que pot arrviar
      desired.mult(-1);
      var steer = p5.Vector.sub(desired, this.vel);//restem el valor i posem el valor nou
      steer.limit(this.maxforce);// posem el limit perque les voles no passin
      return steer;
    } else {
      return createVector(0, 0);
    }
  }