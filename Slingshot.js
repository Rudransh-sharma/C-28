class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB 
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
fly(){
this.sling.bodyA = null
//bird is free from the constrainted = null


}
  
display(){
 if(this.sling.bodyA){
//After fly function we want to display the function but it was not working
// If bodyA (bird)is present than only display function is executed
//It will check bodyA is null or not 

 
    var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}