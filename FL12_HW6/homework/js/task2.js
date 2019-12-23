let a, b, c, s, p, preS, d = 2;
a = +prompt('A','');
b = +prompt('B','');
c = +prompt('C','');
p = (a + b + c) / d;
preS = p * (p - a) * (p - b) * (p - c);
s = Math.sqrt(preS);
if (isNaN(p)) {
  alert('input values should be ONLY numbers ');
 }else if (a <= 0 || b <= 0 || c <= 0) {
  alert('A triangle must have 3 sides with a positive definite length');
}else if (preS < 0 || s === 0) {
  alert('Triangle doesn’t exist');
  console.log('Triangle doesn’t exist');
} else if (a === b && b === c && c === a) {
  console.log('Eequivalent triangle');
} else if (a === b || b === c || c === a) {
  console.log('Isosceles triangle');
} else {
  console.log('Scalene triangle');
}
