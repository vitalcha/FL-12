let desc;
let two = 2;
let four = 4;
let a = parseFloat(prompt('Please enter variable a'));
let b = parseFloat(prompt('Please enter variable b'));
let c = parseFloat(prompt('Please enter variable c'));
if (a === 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log('Invalid input data');
} else {
  desc = Math.pow(b, two) - four * a * c;
  let x = -(b / (two * a));
  let x1 = Math.round((-b + Math.sqrt(desc)) / (two * a));
  let x2 = Math.round((-b - Math.sqrt(desc)) / (two * a));
  console.log('Discriminant :', desc);
  if (desc > 0) {
    console.log('x1 :', x1);
    console.log('x2 :', x2);
  } else if (desc === 0) {
    console.log('x :', x);
  } else {
    console.log('no solution');
  }
}
