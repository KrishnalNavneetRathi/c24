class Log extends BasceClass {
    constructor(x, y, height, angle) {
     super(x,y,20,height,angle);
     this.image=lodeImage("sprites/wood2.png");
     Matter.Body.setAngle(this.body, angle);
    }
  };
  