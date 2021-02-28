class Bob {
    constructor(x,y,radius) {
        var options = {
            friction: 0,
            restitution: 1,
            isStatic: true,
            density: 0.8
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius = radius;
        
    }
    display() {
        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill(255,0,255);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

}