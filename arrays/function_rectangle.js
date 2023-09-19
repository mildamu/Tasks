const width1 = prompt("Enter width")
const height1 = prompt("Enter height")
function findArea(width, height) {
    return width * height;
 }

var width = width1;
var height = height1;

var area = findArea(width, height);

console.log("Area of rectangle: " + area);