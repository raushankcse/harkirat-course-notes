class Rectangle{
  constructor(height, width, color){
    this.height = height;
    this.width = width;
    this.color = color;
  }

  area(){
    return this.height *this.width;
  }

  paint(){
    console.log(`Painthing with color ${this.color}`);
    
  }

  
}



const rec = new Rectangle(2,3,"red");
const area = rec.area();
console.log(area);


rec.paint();





