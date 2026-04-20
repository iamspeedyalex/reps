/* had to really look up these simple math formulas. been far too long 
A = (pi * r) / 2 then rearranged to find the side
first by multiplying both sides by 2, then dividing both sides by pi.*/

function squareArea(A) {
    let side = (2 * A) / Math.PI;
    return side * side;
}

/* Best practices note #1: 
const squareArea = A => (2 * A / Math.PI) ** 2
a side of the square to the power of 2
*/

/* Best practices note #2: 
function squareArea(A){
  return Math.pow(2 * A/Math.PI, 2)
} 
  Math.pow(base, exponent)
*/