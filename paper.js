class Paper{
    constructor(x, y, radius) {
      var options = {
        'friction':0.5,
        'density':1.2,
        'restitution':0.3,
        'isStatic':false
          
          
      }
      this.body = Bodies.circle(x, y, radius, options );
      this.radius = radius
      
      this.image = loadImage("paper.png")
      
      World.add(world, this.body);  
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4)
      stroke("green")
      fill(255);
      ellipse(0, 0, this.radius);
      pop();
      
     
    }
  };