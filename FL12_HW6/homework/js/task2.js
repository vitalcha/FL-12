// 'use strict'
let sideA = prompt('Please enter length of triangles side A', ''),
  sideB = prompt('Please enter length of triangles side B', ''),
  sideC = prompt('Please enter length of triangles side C', '');
if (
  sideA === '' || sideA === null || sideA === undefined ||
  sideB === '' || sideB === null || sideB === undefined ||
  sideC === '' || sideC === null || sideC === undefined
) {
  alert('input values should be ONLY numbers')
} else {
  const a = parseInt(sideA)
  const b = parseInt(sideB)
  const c = parseInt(sideC)

  if (a === 0 || b === 0 || c === 0) {
    alert('A triangle must have 3 sides with a positive definite length')
  } else if (a + b <= c || a + c <= b || b + c <= a) {
    alert("Triangle doesn't exist")
    console.log("Triangle doesn't exist")
  } else {
    if (a === b && b === c) {
      console.log('Equilateral triangle')
    } else if (a === b || a === c || b === c) {
      console.log('Isosceles triangle')
    } else {
      console.log('Scalene triangle')
    }
  }
}