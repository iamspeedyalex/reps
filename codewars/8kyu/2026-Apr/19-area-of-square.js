/* had to really look up these simple math formulas. been far too long 
A = (pi * r) / 2 then rearranged to find the side
first by multiplying both sides by 2, then dividing both sides by pi.*/

function squareArea(A) {
    let side = (2 * A) / Math.PI;
    return side * side;
}