let a, b, c, result, x1, x2, minus = -1, two = 2, four = 4;
a = +prompt('A');
b = +prompt('B');
c = +prompt('C');
result = b * b - four * a * c;
if ( isNaN(a) || isNaN(b) || isNaN(c) ) {
    console.log('Invalid input data');
} else if (result === 0) {
    console.log(`x = ${result}`);
} else if (result > 0) {
    x1 = (minus * b + Math.sqrt(result)) / (a * two);
    x2 = (minus * b - Math.sqrt(result)) / (a * two);
    console.log(`x1 = ${x1}, x2 = ${x2}`);
} else {
    console.log(`No solution`);
}

