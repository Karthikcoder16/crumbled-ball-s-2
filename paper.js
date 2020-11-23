class Paper {
    constructor(x, y,r) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, r, options);
      this.raidus= r ;
      this.x=x;
      this.y=y;
      this.image=loadImage("paper.png");
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      strokeWeight (4);
      stroke ("green");
      image(this.image,0,0,this.raidus,this.raidus);
      pop();
    }
  };  