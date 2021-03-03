
class Allshape{
    constructor(){

    }
    area()
    {
        return ''
    }

}

class circle extends Allshape{
    constructor(a){
        super()
        this.radius=a
    }
    area()
    {
        return 3.14*this.radius*this.radius 
    }
}

class square extends Allshape{
    constructor(areaOfSquare){
        super()
        this.squareLength=areaOfSquare

    }
    area(){
        return this.squareLength*this.squareLength
    }
}

class rectangle extends Allshape{
    constructor(a,b){
        super()
        this.b=a
        this.r=b
    }
    area(){
        return this.r*this.r
    }
}

class triangle extends Allshape{
    constructor(a,b){
        super()
        this.b=a
        this.h=b
    }
    area()
    {
        return 1/2*this.h*this.b  
    }
}



var shapes=[new circle(6),new square(4),new rectangle(8,9),new triangle(4,6)]

function Sumallshapes(Number){
    var totalarea=0

    Number.forEach(item =>{
        console.log(item.area())
        totalarea=totalarea+item.area()
    })
    return totalarea
}
    var Calculate= Sumallshapes(shapes)

    console.log(Calculate, "Here is total area")
    var c= new square(7)
    console.log(c.area())
