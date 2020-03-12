var toffiImage = new Image();
toffiImage.src = "images/toffi.png"



var toffi = new Jerry();

toffi.y = canvas1.height - 200;

toffi.draw = function(){
    ctx.drawImage(toffiImage, this.x, this.y, this.width, this.height);
}


toffi.move = function(edit){
    if(edit === "W"){
        this.y -= this.speedY; 
    } else if(edit === "S"){
        this.y += this.speedY;  //speed Y
    } else if( edit === "A"){
        this.x -= this.speedX;
    } else if( edit === "D"){
        this.x += this.speedX;
    }

    this.x = Math.min(canvas1.width - this.width, Math.max(0, this.x));
    this.y = Math.min(canvas1.height - this.height, Math.max(0, this.y));
};
