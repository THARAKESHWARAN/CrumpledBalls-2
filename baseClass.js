class BaseClass{

    constructor(x, y, width, height, col){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color = col;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill(this.color);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}