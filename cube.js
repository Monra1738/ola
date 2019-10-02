cube = function () {
    this.posX;
    this.posY;
    this.initPositionX;
    this.initPositionY;
    this.linePosX = this.initPositionX;
    this.linePosY = this.initPositionY;
    this.finsihed = false;
    this.col1;
    this.col2;
    this.col3;
    this.limitPos;
    this.makeRectFront=function(){
        fill(this.col1,this.col2,this.col3);
        rect(this.posX, this.posY, 50, 50);
    }
    this.show = function () {
        fill(0);
        rect(this.posX, this.posY, 50, 50);
        
    }
    this.update = function () {
        if (!this.finsihed) {
            this.posX += 1;
            this.posY -= 1;
        }
    }

    this.checkState = function () {
     
        if (this.posX >= this.initPositionX + this.limitPos) {
           
            this.finsihed = true;
            this.col1=random(0,255);
            this.col2=random(0,255);
            this.col3=random(0,255);
        }   
    }
}