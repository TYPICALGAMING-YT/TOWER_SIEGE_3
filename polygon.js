class polygon
{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            
        }

        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.r=r;
        this.image=loadImage("polygon.png")
    }

    display()
    {
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
    }

}