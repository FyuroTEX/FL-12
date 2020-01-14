function convert(...params) {
    let afterConvert = [];
    for (let i = 0; i < params.length; i++) {
        if (typeof params[i] === 'number') {
            afterConvert.push(params[i] + '');
        } else {
            afterConvert.push(+params[i]);
        }
    }
    return afterConvert;
}


function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function mapArray(arr, func) {
    let array = [];
    executeforEach(arr, el => {
        array.push(func(+el));
    });
    return array;
}

function filterArray(arr, func) {
    let array = [];
    executeforEach(arr, el => {
        if (func(el)) {
            array.push(el);
        }
    });
    return array;
}

function flipOver(str) {
    let flipped = '';
    for (let i = 0; i < str.length; i++) {
        flipped += str[i];
    }
    return flipped;
}

function makeListFromRange(range) {
    let rangeList = [];
    for (let i = range[0]; i <= range[1]; i++) {
        rangeList = [...rangeList, i];
    }
    return rangeList;
}

const actors = [
    {
        name: 'tommy',
        age: 36
    },
    {
        name: 'lee',
        age: 28
    }
];

function getArrayOfKeys(arr, needKey) {
    let arrKeys = [];
    for (const key in arr) {
        if (arr[key].hasOwnProperty(needKey)) {
            arrKeys = [...arrKeys, arr[key][needKey]];
        }
    }
    return arrKeys;
}

function substitute(arr) {
let afterFiltering = [];
    for (let value of arr) {
        const MAX_VALUE = 30;
        value <= MAX_VALUE ? afterFiltering.push('*') : afterFiltering.push(value);
    }
    return afterFiltering;
}

const POINT_YEAR = 2019;
const POINT_MONTHS = 0;
const POINT_DAY = 2;
const date = new Date(POINT_YEAR, POINT_MONTHS, POINT_DAY);
function getPastDay(date, deteBeforeDays) {
    const msInDay = 86400000;
    let beforeDaysConvert = deteBeforeDays * msInDay;
    let searchDate = new Date(date.getTime() - beforeDaysConvert);
    let searchMonth = searchDate.toLocaleDateString('en-GB', { month: 'short'});
    return `${deteBeforeDays}, (${searchDate.getDate()} ${searchMonth} ${searchDate.getFullYear()})`;
}

function formatDate(date) {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}
