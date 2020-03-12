var tomImage = new Image();
tomImage.src = "images/tomas.jpg";


function Tom(){
    this.x = 100;
    this.y = 500;
    this.width = 50;
    this.height = 50;
    this.name = "Tom";
    this.vx = 3;
    this.vy = 3;
    this.tomCounter = 0;
    this.tomArray = [];

    this.tomRandomArray = [
        [Math.floor(Math.random() * canvas1.width), 0],
        [Math.floor(Math.random() * canvas1.width), canvas1.height],
        [0 ,Math.floor(Math.random() * canvas1.width)],
        [canvas1.height ,Math.floor(Math.random() * canvas1.width)]
    ];
}

Tom.prototype.displayRandomTom = function(){
    var index = Math.floor(Math.random() * this.tomRandomArray.length);
    return this.tomRandomArray[index];
}


Tom.prototype.createTom = function(valX, valY){
    if(lvl===1){
    this.tomArray.push({
        x: valX,
        y: valY,
        w: 50,
        h: 50,
        vx: 3,
        vy: 3
    });
    }


    if(lvl===2){
        this.tomArray.push({
            x: valX,
            y: valY,
            w: 50,
            h: 50,
            vx: 6,
            vy: 6
        });
    }


    if(lvl===3){
        this.tomArray.push({
            x: valX,
            y: valY,
            w: 50,
            h: 50,
            vx: 9,
            vy: 9
        });
    }


    this.tomCounter +=1;
  }


Tom.prototype.drawImage = function(cheese){
    ctx.drawImage(tomImage, cheese.x, cheese.y, 50, 50);   // исправле ния
}

Tom.prototype.draw = function(){
    this.tomArray.forEach(this.drawImage.bind(this));
}

Tom.prototype.move = function(){
    this.tomArray.forEach(function(tomTab){
        tomTab.x += tomTab.vx;
        tomTab.y += tomTab.vy;

        if(tomTab.y + tomTab.vy > canvas1.height || tomTab.y + tomTab.vy < 0){  // ищменения canvas1.height
            tomTab.vy *= -1;
        }
        if(tomTab.x + tomTab.vx > canvas1.width || tomTab.x + tomTab.vx < 0){
            tomTab.vx *= -1;
        }
    })
}


Tom.prototype.stop = function(){
    this.tomArray.forEach(function(tomspeed){
       tomspeed.vx = 0;
       tomspeed.vy = 0;
    })
    lvl=4;

};






