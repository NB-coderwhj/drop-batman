class Drop{
    constructor(x,y){
        var options = {
            isStatic : false,
            friction:0.1
        }
        this.body = Bodies.circle(x,y,5,options);
        World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      fill("skyblue");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,5,5);  
    }
}