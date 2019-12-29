function isLeapYear(date) {
    let time = new Date(date);
    let fullYear = time.getFullYear();
    if (fullYear % 4 === 0 && fullYear % 100 !== 0 && fullYear % 400 !== 0) {
        return `'${fullYear} is a leap year'`;
    } else if (fullYear % 4 === 0 && fullYear % 100 === 0 && fullYear % 400 === 0) {
        return `'${fullYear} is a leap year'`;
    } else if (isNaN(fullYear)) {
        return `'Invalid Date'`;
    } else {
        return `'${fullYear} is not a leap year'`;
    }

}
console.log(isLeapYear('2020-01-01 00:00:00'));
console.log(isLeapYear('2020-01-01 00:00:00777'));
console.log(isLeapYear('2021-01-15 13:00:00'));
console.log(isLeapYear('2200-01-15 13:00:00'));
console.log(isLeapYear(1213131313135465656654564646542132132131));
console.log(isLeapYear(1213131313));