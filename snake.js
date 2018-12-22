 function Snake() {
   this.x = 0;
   this.y = 0;
   this.xSpeed = 1;
   this.ySpeed = 0;
   this.total = 0;
   this.tail = [];

   this.update = function() {

    console.log("TOTAL :" + this.total);
    console.log("TAIL :" + this.tail);

    if(this.total === this.tail.length){
      for(var i = 0; i < this.tail.length -1; i++){
        this.tail[i] = this.tail[i+1]
      }
    }
      this.tail[this.total-1] = createVector(this.x,this.y);

     this.x += this.xSpeed*scl;
     this.y += this.ySpeed*scl;

     if(this.x < 0 )
     {
       this.x = width;
     }
     else if (this.x > width - scl) {
       this.x = 0;
     }

     if(this.y < 0 ){
       this.y = height;
     }
     else if (this.y > height - scl) {
       this.y = 0;
     }

   }

   this.show = function () {
     fill(255);
     for(var i = 0; i <= this.tail.length - 1; i++){
       rect(this.tail[i].x,this.tail[i].y,scl,scl);
     }
     fill(77, 184, 255);
     rect(this.x,this.y,scl,scl);
   }

   this.change = function(x,y) {
     this.xSpeed = x;
     this.ySpeed = y;
   }

   this.eats = function(pos) {
     var distance = dist(this.x,this.y,pos.x,pos.y);
     if(distance < 1){
       this.total++;
       return true;
     }
     else {
       return false;
     }
   }

   this.death = function() {
     for(var i = 0; i < this.tail.length -1 ; i++){
       var distance = dist(this.x,this.y,this.tail[i].x,this.tail[i].y);
       if(distance < 1){
         noLoop();
       }
     }
   }
 }
