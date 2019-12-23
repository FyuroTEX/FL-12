let a, b, c;
a = +prompt('A');
b = +prompt('B');
c = +prompt('C');
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert('input values should be ONLY numbers ');
} else if (a <= 0 || b <= 0 || c <= 0) {
  alert('A triangle must have 3 sides with a positive definite length');
} else if (a + b > c && b + c > a && c + a > b) {
  if (a === b && b === c && c === a) {
    console.log('Equilateral triangle');
  } else if (a === b || a === c || b === c) {
    console.log('Isosceles triangle');
  } else {
    console.log('Scalene triangle');
  }
} else {
  alert('Triangle doesn’t exist');
  console.log('Triangle doesn’t exist');
}
