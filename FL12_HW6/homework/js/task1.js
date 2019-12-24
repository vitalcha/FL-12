// Your code goes here
// ⦁	User input 3 values (a, b, c) for quadratic equation (ax2 + bx + c = 0).
// ⦁	If input data not valid show message in console (‘Invalid input data’). 
// ⦁	If possible, find Discriminant.
// ⦁	Use console.log to show result, variants:
// ⦁	x = 0;
// ⦁	x1 = ‘value1’ and x2 = ‘value2’;
// ⦁	no solution (when Discriminant < 0);

let desc;
let two = 2;
let four = 4;

let a = prompt('Write a');
let b = prompt('Write b');
let c = prompt('Write c');
if(isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log('Invalid input data');
} 
  desc = Math.pow(b, two) - four*a*c;
  let x = -(b/(two*a));
  let x1 = (-b + Math.sqrt(desc))/two*a;
  let x2 = (-b - Math.sqrt(desc))/two*a;

if(a !== 0){
  console.log('desc=', desc)
} if(desc < 0){
  console.log('x1=', x1)
  console.log('x2=', x2)
} if(desc === 0) {
  console.log('x=', x)
} if(desc > 0){
  console.log('no solution')
}