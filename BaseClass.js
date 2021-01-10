class BaseClass
{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("block1.png");
        World.add(world, this.body);
        //this.Visibility=255;
      }
      display(){
        //var angle = this.boxObject.angle;
        //push();
        //translate(this.boxObject.position.x, this.boxObject.position.y);
        //rotate(angle);
      
       // strokeWeight(1.5);
       // rectMode(CENTER);
       // rect(this.body.position.x,this.body.position.y, this.width, this.height);
        
      }

}