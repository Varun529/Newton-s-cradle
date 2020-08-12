class Bob{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density:0.1
        }
        this.body= Bodies.circle(x,y,60,options);
        //this.width=25;
        //this.height=25;
        
        World.add(world,this.body);
        
    }
    display(){
       
       var pos =this.body.position; 
       rectMode(CENTER);
       fill("red");
        //rect(pos.x, pos.y, this.width, this.height);
        circle(pos.x,pos.y,60)
        push();
        translate(this.body.position.x, this.body.position.y);
        
        pop();
        
    }
}