// Question 1: circle area and perimeter
let radius = 5.5
let circlePerimiter = 2*radius*Math.PI
let circleArea = radius*radius*Math.PI
console.log("Circle Perimeter: "+circlePerimiter+" Circle Area: "+circleArea)
// Question 2: rectangle area and perimeter
let width = 4.5
let height = 7.9
let rectanglePerimeter = width*2+height*2
let rectangleArea = width*height
console.log("Rectangle Perimeter: "+rectanglePerimeter+" Rectangle Area: "+rectangleArea)
// Question 3: area and volume of cylinder
let response = prompt("Enter radius and length of cylinder: ")
let radiusCylinder = response.split(" ")[0]
let lengthCylinder = response.split(" ")[1]
let cylinderArea = radiusCylinder*radiusCylinder*Math.PI
let cylinderVolume = cylinderArea*lengthCylinder
console.log("The area is "+cylinderArea)
console.log("The volume is "+cylinderVolume)
// Question 4
let response2 = prompt("Enter the subtotal and gratuity rate: ")
let subtotal = Number(response2.split(" ")[0])
let gratuity = Number(response2.split(" ")[1])/100
let tip = subtotal*gratuity
let total = tip+subtotal
console.log("The gratuity is $"+tip+" and total is $"+total)