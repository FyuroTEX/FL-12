function countNumbers(str) {
    let types = str.match(/\d/g);
    let countArr = {};
    for (let i = 0; i < types.length; i++) {
        if (countArr[types[i]]) {
            countArr[types[i]] += 1;
        } else {
            countArr[types[i]] = 1;
        }
    }
    return countArr;
}
console.log(countNumbers('erer384jj4444666888jfd123'));
console.log(countNumbers('jdjjka000466588kkkfs662555'));