class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.catapultRightSide = loadImage("sprites/sling1.png");
        this.catapultLeftSide = loadImage("sprites/sling2.png"); 
        this.cushionBehindBird = loadImage("sprites/sling3.png"); 
    }

    fly() {
        this.sling.bodyA = null;
    }

    display(){
        image(this.catapultRightSide, 200, 20); 
        image(this.catapultLeftSide, 170, 20); 

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

        if (pointA.x <= 220) {
            strokeWeight(10);
            stroke(48, 22, 8); 
            line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.cushionBehindBird, pointA.x - 30, pointA.y - 10, 15, 30); 
        }

        else {
            strokeWeight(5);
            stroke(48, 22, 8); 
            line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.cushionBehindBird, pointA.x + 25, pointA.y - 10, 15, 30); 
        }
        }
    }
    
}