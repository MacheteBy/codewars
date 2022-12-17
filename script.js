"use strict";

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

console.log(goals(43, 10, 5));


function removeSmallest(numbers) {
    let min = Math.min(...numbers);
    let mass = numbers.slice(0);
    if (mass.length > 0) {
        for (let i = 0; i < mass.length; i++) {
            if (mass[i] == min) {
                let res = mass.splice(i, 1);
                return mass;
            }
        }
    } else {
        return numbers;
    }
}

console.log(removeSmallest([5, 3, 2, 1, 4]));


function countPositivesSumNegatives(input) {
    let max = 0;
    let min = 0;
    let resMass = [max, min];
    if (input.length > 1 && input.filter((num) => num > 0) && input.filter((num) => num < 0)) {
        max = input.filter((num) => num > 0).length;
        min = input.filter((num) => num < 0).reduce((first, second) => first + second);
        resMass = [max, min];
        return resMass;
    } else if (input == null) {
        return resMass;
    } else if (input.length > 1 && input.filter((num) => num > 0 && input.filter((num) => num < 0) == false)) {
        max = input.filter((num) => num > 0).length;
        resMass = [max, min];
        return resMass;
    }
}


console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


console.log(([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15].filter((num) => num < 0)).length > 0);







/////////////////////////////////


function squareDigits(num) {
    let str = num.toString();
    let res = "";
    for (let i = 0; i < str.length; i++) {
        res += str[i] * str[i];
    }
    return Number(res);
}


console.log(squareDigits(3212));



//next

function getAge(inputString) {
    return Number(inputString[0]);
}


console.log(getAge("1 year old"));


//next

function isTriangle(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        let max = Math.max(a, b, c);
        if (max == a) {
            return a < b + c;
        } else if (max == b) {
            return b < a + c;
        } else if (max == c) {
            return c < a + b;
        }
        return max;
    } else {
        return false;
    }
}

console.log(isTriangle(7, 2, 9));


//next

function findAverage(array) {
    if (array.length == 0) {
        return 0;
    } else {
        let res = array.reduce(function (first, second) {
            return first + second;
        }, 0);
        return res / array.length;
    }
}



console.log(findAverage([1, 2, 3, 4]));


//next


const quarterOf = (month) => {
    let res;
    if (month > 0 && month < 13) {
        switch (month) {
            case 1:
            case 2:
            case 3:
                res = 1;
                break;
            case 4:
            case 5:
            case 6:
                res = 2;
                break;
            case 7:
            case 8:
            case 9:
                res = 3;
                break;
            case 10:
            case 11:
            case 12:
                res = 4;
                break;
        }
    }
    return res;
};

console.log(quarterOf(5));



//next


function setAlarm(employed, vacation) {
    return employed !== false && vacation !== true;
}


console.log(setAlarm(true, false));

//next

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height;
    }
}




//next

function sumStr(a, b) {
    return String(Number(a) + Number(b));
}


console.log(sumStr("4", "5"));


//next

function otherAngle(a, b) {
    return 180 - (a + b);
}


console.log(otherAngle(60, 60));



//next

function friend(friends) {
    let result = friends.filter(word => word.length == 4);
    return result;
}


console.log(friend("Ryan", "Kieran", "Mark"));


//next

function calculateYears(principal, interest, tax, desired) {
    let res = 0;
    for (let i = principal; i < desired; i += res) {
        let P = ((principal + res) * interest);
        let T = P * tax;
        res += P - T;
        console.log(1);
    }
    return res;
}


function calculateYears(principal, interest, tax, desired) {
    // your code
    var years = 0;
    while (principal < desired) {
        principal += (principal * interest) * (1 - tax);
        years++;
    }
    return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));


//next

function longest(s1, s2) {
    let strFull = s1 + s2;
    let outStr = [...new Set(strFull)].join('');
    return outStr;
}



console.log(longest("aretheyhere", "yestheyarehere"));

//next
const reverseSeq = n => {
    let arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i);
    }
    return arr;
};


console.log(reverseSeq(5));


//next
// complete the function
function solution(string) {
    // let indexElem = string.search(/[A-Z]/);
    // return string.slice(0, string.search(/[A-Z]/)) + " " + string.slice(5, string.length);
    let arr = string.split(/([A-Z])/);
    let res = [];
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == 1) {
            res.push(arr[i] + arr[i + 1]);
        } else if (arr[0] == arr[i]) {
            res.push(arr[0]);
        }
    }
    for (let i = 0; i < res.length; i++) {
        str += (res[i] + " ");
    }
    return str.substring(0, str.length - 1);
}


console.log(solution("leave"));



function solution(string) {
    return (string.replace(/([A-Z])/g, ' $1'));

}


console.log(solution("leaveFgSDdgd"));

//next

function addBinary(a, b) {
    return (a + b).toString(2);
}

console.log(addBinary(5, 4));

//next

function cockroachSpeed(s) {
    return Math.floor(s * 100000 / 3600);
}


console.log(cockroachSpeed(1.08));

//next
function minMax(arr) {
    let res = arr.sort((a, b) => a - b);
    let outRes = [res[0], res[res.length - 1]];
    return outRes;
}

console.log(minMax([1, 6, 3, 4, 1]));


//next

function findUniq(numbers) {
    const map = new Map(Array.from(new Set(numbers)).map(v => ([v, 0])));
    return Array.from(
        numbers.slice(0, 3).reduce((a, c) => {
            return map.set(c, map.get(c) + 1);
        }, map)
    ).find(([, v]) => v <= 1)[0];
}
console.log(findUniq([1, 0, 0]));

function findUniq(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr.sort((a, b) => a - b));
    console.log(arr[0] == arr[1] ? arr.pop() : arr[0]);
    return arr[0] == arr[1] ? arr.pop() : arr[0];
}


console.log(findUniq([1, 0, 0]));

//next

function oddOrEven(array) {
    let sumAllElem;
    if (array.length > 1) {
        sumAllElem = array.reduce(function (sum, element) {
            return sum + element;
        });
    } else if (sumAllElem == 0) {
        return 'even';
    }
    if (sumAllElem % 2 !== 0) {
        return 'odd';
    } else {
        return 'even';
    }
}

function oddOrEven(array) {
    let sumAllElem = 0;
    if (array.length >= 1) {
        sumAllElem = array.reduce(function (sum, element) {
            return sum + element;
        });
    }
    if (sumAllElem % 2 !== 0) {
        return 'odd';
    } else if (sumAllElem == 0) {
        return 'even';
    } else {
        return 'even';
    }
}

console.log(oddOrEven([]));


//next


function checkForFactor(base, factor) {
    return base % factor ? false : true;
}

console.log(checkForFactor(2453, 5));


//next
function checkForFactor(numbers) {
    const map = new Map(Array.from(new Set(numbers)).map(v => ([v, 0])));
    return Array.from(
        numbers.slice(0, 3).reduce((a, c) => {
            return map.set(c, map.get(c) + 1);
        }, map)
    ).find(([, v]) => v <= 1)[0];
}


function stray(numbers) {
    for (var i in numbers) {
        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
            return numbers[i];
        }
    }
}


//next


function greet(name, owner) {
    return name == owner ? 'Hello boss' : 'Hello guest';
}

console.log(greet('Daniel', 'Daniel'));


//next

function findShort(s) {
    let arr = s.split(" ");
    let arrNum = arr.map(function (item) {
        return item.length;
    });
    return Math.min(...arrNum);
}


function findShort(s) {
    return Math.min(...s.split(" ").map(s => s.length));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));


//next

function likes(names) {
    let col = names.length;
    if (col == 1) {
        return `${names[0]} likes this`;
    } else if (col == 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (col == 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (col > 3) {
        return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
    } else if (col == 0) {
        return `no one likes this`;
    }
    return col;
}

console.log(likes([]));

//next

function isPangram(string) {
    let allSumbol = "abcdefghijklmnopqrstuvwxyz";
    let regex = (/[^\w\s]+/g);
    let lowercase = string.toLowerCase().replace(regex, "");
    for (let i = 0; i < allSumbol.length; i++) {
        if (lowercase.indexOf(allSumbol[i]) === -1) {
            return false;
        }
    }
    return true;
}

console.log(isPangram("This is not a pangram."));

//next

function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}


console.log(rowSumOddNumbers(42));

//next

function sortArray(array) {
    let ressArr = array.filter(x => x % 2).sort((a, b) => a - b);
    return array.map(x => x % 2 ? ressArr.shift() : x);
}



console.log(sortArray([5, 3, 2, 8, 1, 4]));

//next
function SeriesSum(n) {
    let start = 1;
    let res = 1;
    if (n === 0) {
        return (0).toFixed(2);
    } else {
        for (let i = 1; i <= n; i++) {
            res += 1 / start;
            start += 3;
        }
        return (res - 1).toFixed(2);
    }
}

console.log(SeriesSum(0));



//next

function sumTwoSmallestNumbers(numbers) {
    let sort = numbers.sort((a, b) => a - b);
    return sort[0] + sort[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

//next

function past(h, m, s) {
    return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000);
}

console.log(past(1, 0, 1));


//next

function highAndLow(numbers) {
    let arr = numbers.split(" ");
    arr.sort((a, b) => a - b);
    return `${arr.slice(-1)} ${arr[0]}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));


//next

function validatePIN(pin) {
    return (pin.length == 4 || pin.length == 6) && (/^\d+$/.test(pin)) ? true : false;
}


console.log(validatePIN('0000'));

//next

function findOdd(A) {
    for (let i = 0; i < A.length; i++) {
        let col = 0;
        for (let j = 0; j < A.length; j++) {
            if (A[i] == A[j]) {
                col++;
            }
        }
        if (col % 2 !== 0) {
            return A[i];
        }
    }
}



console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));


//next

function correct(string) {
    return string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");
}

console.log(correct("L0ND0N"));

//next

function switchItUp(number) {
    let res = "";
    switch (number) {
        case 0:
            res = "Zero";
            break;
        case 1:
            res = "One";
            break;
        case 2:
            res = "Two";
            break;
        case 3:
            res = "Three";
            break;
        case 4:
            res = "Four";
            break;
        case 5:
            res = "Five";
            break;
        case 6:
            res = "Six";
            break;
        case 7:
            res = "Seven";
            break;
        case 8:
            res = "Eight";
            break;
        case 9:
            res = "Nine";
            break;
    }
    return res;
}

console.log(switchItUp(5));


//next

function hoopCount(n) {
    if (n >= 10) {
        return "Great, now move on to tricks";
    } else {
        return "Keep at it until you get it";
    }
}

console.log(hoopCount(3));


//next

function opposite(number) {
    return -number;
}

console.log(opposite(1));




//next

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(function (elem) {
        return elem == true;
    }).length;
}

console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
]));



//next


function between(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}


console.log(between(1, 4));


//next

function removeExclamationMarks(s) {
    return s.replace(/[!]/gi, '');
}


console.log(removeExclamationMarks("xIctVKMGIA!IWTfzYBsvx RtdyThYWSd!VKfTjVigrK"));


//next
function litres(time) {
    return Math.floor(time * 0.5);
}


console.log(litres(1.4));


//next

var humanYearsCatYearsDogYears = function (humanYears) {
    let catYears = 0;
    let dogYears = 0;
    if (humanYears == 1) {
        catYears = 15;
        dogYears = 15;
    } else if (humanYears == 2) {
        catYears = 15 + 9;
        dogYears = 15 + 9;
    } else if (humanYears >= 3) {
        catYears = 24 + ((humanYears - 2) * 5);
        dogYears = 24 + ((humanYears - 2) * 4);
    }
    return [humanYears, dogYears, catYears];
};



console.log(humanYearsCatYearsDogYears(10));


//next
var uniqueInOrder = function (iterable) {
    let res = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) {
            res.push(iterable[i]);
        }
    }
    return res;
};

//v2
var uniqueInOrder = function (iterable) {
    return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};


console.log(uniqueInOrder('AAAABBBCCDAABBB'));




//next
function removeEveryOther(arr) {
    return arr.filter((a, b) => !(b % 2));
}


console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



//next

function grow(x) {
    return x.reduce((a, b) => a * b);
}

console.log(grow([1, 2, 3]));

//next
function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100;
    } else if (exam > 75 && projects >= 5) {
        return 90;
    } else if (exam > 50 && projects >= 2) {
        return 75;
    }
    return 0;
}

console.log(finalGrade(0, 3));


//next

function getDivisorsCnt(n) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
            count++;
        }
    }
    return count;
}

console.log(getDivisorsCnt(10));

console.log(10 % 9);


//next

function persistence(num) {
    let str = num.toString();
    if (str.length == 1) {
        return 0;
    }
    let next = str.split('').reduce((a, b) => a * b, 1);
    return persistence(next) + 1;
}

console.log(persistence(39));

//next

function getGrade(s1, s2, s3) {
    let score = (s1 + s2 + s3) / 3;
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(getGrade(84, 79, 85));

//next
function squareSum(numbers) {
    return numbers.reduce((a, b) => a + b * b, 0);
}

console.log(squareSum([3, 4, 5]));


//next
function solution(str) {
    return str.split("").reverse().join("");
}

console.log(solution('world'));


//next
function boolToWord(bool) {
    return bool == true ? 'Yes' : 'No';
}

console.log(boolToWord(true));


//next
function countBy(x, n) {
    let z = [x];
    for (let i = 0; i < n - 1; i++) {
        z.push(z[i] + x);
    }
    return z;
}

console.log(countBy(2, 5));

//next
const sequenceSum = (begin, end, step) => {
    let count = 0;
    for (let i = begin; i <= end; i += step) {
        count += i;
    }
    return count;
};

console.log(sequenceSum(2, 6, 2));

//next

function square(num) {
    return Math.pow(num, 2);
}

console.log(square(3));


//next
function removeChar(str) {
    return str.slice(1, -1);
}

console.log(removeChar('eloquent'));

//next

function invert(array) {
    return array.map(item => -item);
}
console.log(invert([1, 2, 3, 4, 5]));

//next

function digitize(n) {
    let res = n.toString().split('').reverse();
    for (let i = 0; i < res.length; i++) {
        res[i] = Number(res[i]);
    }
    return res;
}

console.log(digitize(35231));


//next
function roundToNext5(n) {
    return Math.ceil(n / 5) * 5;
}

console.log(roundToNext5(16));

//next
function expandedForm(num) {
    return num.toString().split("").reverse().map((a, b) => a * Math.pow(10, b)).reverse().filter(a => a > 0).join(' + ');
}

console.log(expandedForm(70304));


//next
function feast(beast, dish) {
    return beast.slice(0, 1) == dish.slice(0, 1) && beast.slice(-1) == dish.slice(-1) ? true : false;
}

console.log(feast("brown bear", "bear claw"));


//next
var countSheep = function (num) {
    let strRes = "";
    for (let i = 1; i <= num; i++) {
        strRes += `${i} sheep...`;
    }
    return strRes;
};

console.log(countSheep(3));

//next
function zero(func) {
    return func ? func(0) : 0;
}

function one(func) {
    return func ? func(1) : 1;
}

function two(func) {
    return func ? func(2) : 2;
}

function three(func) {
    return func ? func(3) : 3;
}

function four(func) {
    return func ? func(4) : 4;
}

function five(func) {
    return func ? func(5) : 5;
}

function six(func) {
    return func ? func(6) : 6;
}

function seven(func) {
    return func ? func(7) : 7;
}

function eight(func) {
    return func ? func(8) : 8;
}

function nine(func) {
    return func ? func(9) : 9;
}

function plus(b) {
    return function (a) {
        return a + b;
    };
}

function minus(b) {
    return function (a) {
        return a - b;
    };
}

function times(b) {
    return function (a) {
        return a * b;
    };
}

function dividedBy(b) {
    return function (a) {
        return Math.floor(a / b);
    };
}

console.log(seven(times(five())));


//next
function lovefunc(flower1, flower2) {
    let Timmy = flower1 % 2;
    let Sarah = flower2 % 2;
    if ((flower1 % 2 == 0 && flower2 % 2 == 1) || flower1 % 2 == 1 && flower2 % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(lovefunc(2, 1));

//next
function move(position, roll) {
    return position + roll * 2;
}

console.log(move(3, 6));


//next
function getMiddle(s) {
    if (s.length % 2 == 0) {
        return s.slice(Math.floor(s.length / 2 - 1), Math.floor(s.length / 2 + 1));
    } else {
        return s.slice(Math.floor(s.length / 2), Math.floor(s.length / 2 + 1));
    }
}

console.log(getMiddle("middle"));

console.log(Math.floor(4 / 2));


//next
function points(games) {
    let totalPoint = 0;
    for (let i = 0; i < games.length; i++) {
        if (games[i][0] > games[i][2]) {
            totalPoint += 3;
        } else if (games[i][0] < games[i][2]) {
            totalPoint += 0;
        } else if (games[i][0] == games[i][2]) {
            totalPoint += 1;
        }
    }
    return totalPoint;
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));


//next
function makeNegative(num) {
    return num > 0 ? -num : num;
}

console.log(makeNegative(-9));


//next
function sayHello(name) {
    return `Hello, ${name}`;
}

console.log(sayHello('Mr. Spock'));


//next
function isUpperCase(str) {
    return str === str.toUpperCase() ? true : false;
}

console.log(isUpperCase("hello I AM DONALD"));

//next
function getRealFloor(n) {
    return n > 13 ? n - 2 : (n > 0 ? n - 1 : n);
}

console.log(getRealFloor(-3));

//next
var min = function (list) {

    return Math.min(...list);
}

var max = function (list) {

    return Math.max(...list);
}

console.log(Number([-52, 56, 30, 29, -54, 0, -110].sort().slice(-1)));


//next
function repeatStr(n, s) {
    let str = "";
    for (let i = 0; i < n; i++) {
        str += s;
    }
    return str;
}


console.log(repeatStr(5, "#"));

//next
function bmi(weight, height) {
    if (weight / (height * height) <= 18.5) {
        return "Underweight";
    } else if (weight / (height * height) <= 25) {
        return "Normal";
    } else if (weight / (height * height) <= 30) {
        return "Overweight";
    } else if (weight / (height * height) > 30) {
        return "Obese";
    }
}

console.log(bmi(80, 1.80));


//next
function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Beg", "Life", "I", "To"]));


//next
function abbrevName(name) {
    let arr = name.split(' ');
    return `${arr[0][0]}.${arr[1][0]}`.toUpperCase();
}

console.log(abbrevName("sam harris"));


//next
function noSpace(x) {
    return x.replace(/([ ])/g, "");
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

//next
function unusualFive() {
    return "qwert".length;
}

console.log(unusualFive());

//next
function reverseList(list) {
    return list.reverse();
}
console.log(reverseList([1, 2, 3, 4]));


//next
function enough(cap, on, wait) {
    return cap > on + wait ? 0 : (on + wait) - cap;
}

console.log(enough(10, 15, 5));


//next
function findDifference(a, b) {
    return Math.abs(a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b));
}

console.log(findDifference([1, 4, 4], [3, 2, 5]));


//next
function testEven(n) {
    return n % 2 == 0 ? true : false;
}

console.log(testEven(0));

//next
var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

//next
function maps(x) {
    let resArr = [];
    for (let i = 0; i < x.length; i++) {
        resArr[i] = x[i] + x[i];
    }
    return resArr;
}

console.log(maps([2, 2, 2, 2, 2, 2]));

//next
function domainName(url) {
    return url.replace("https://", '').replace("http://", '').replace("www.", '').split('.')[0];
}


console.log(domainName("www.xakep.ru"));



//next

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

console.log(findSmallestInt([78, 56, 232, 12, 8]));


//next

function helloWorld() {
    let str = "Hello World!";
    return console.log(str);
}

console.log(helloWorld());


//next
function fakeBin(x) {
    let arr = x.split('');
    let strRes = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 5) {
            strRes += 0;
        } else if (arr[i] >= 5) {
            strRes += 1;
        }
    }
    return strRes;
}


console.log(fakeBin('45385593107843568'));


//next

function XO(str) {
    let x = 0;
    let o = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'x' || str[i] == 'X') {
            x++;
        } else if (str[i] == 'o' || str[i] == 'O') {
            o++;
        }
    }
    return x == o ? true : false;
}

console.log(XO('xoO'));


//next
function filter_list(l) {
    return l.filter(value => typeof (value) == "number");
}


console.log(filter_list([1, 2, 'a', 'b']));

//next
var summation = function (num) {
    let res = 0;
    for (let i = 1; i <= num; i++) {
        res += i;
    }
    return res;
}

console.log(summation(8));


//next
function removeUrlAnchor(url) {
    return url.split('#')[0];
}

console.log(removeUrlAnchor('www.codewars.com#about'));

//next
var isSquare = function (n) {
    if (n == 0) {
        return true;
    } else {
        return n > 0 && Math.sqrt(n) % 1 == 0;
    }
};

console.log(isSquare(25));



//next
function addFive(num) {
    return num + 5;
}

console.log(addFive(5));

//next
function pipeFix(numbers) {
    let arr = numbers.sort((a, b) => a - b);
    let res = [];
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        res.push(i);
    }
    return res;
}

console.log(pipeFix([1, 2, 12, 5, 6, 8, 9]));


//next
function combat(health, damage) {
    return health - damage > 0 ? health - damage : 0;
}

console.log(combat(100, 110));


//next
function arrayDiff(a, b) {
    return a.filter(value => !b.includes(value));
}

console.log(arrayDiff([1, 2, 3], [1, 2]));


//next
function problem(x) {
    return typeof (x) == 'number' ? x * 50 + 6 : 'Error';
}

console.log(problem(1));

//next
function rentalCarCost(d) {
    if (d < 3) {
        return d * 40;
    } else if (d >= 3 && d < 7) {
        return (d * 40) - 20;
    } else if (d >= 7) {
        return (d * 40) - 50;
    }
}

console.log(rentalCarCost(8));


//next
const arr = N => Array.from({
    length: N
}, (elem, index) => elem = index);


//next
function towerBuilder(nFloors) {
    let space, block, tower = [];
    for (let i = 1; i <= nFloors; i++) {
        space = " ".repeat(nFloors - i);
        block = "*".repeat((2 * i) - 1);
        tower.push(`${space}${block}${space}`);
    }
    return tower;
}


console.log(towerBuilder(2));

//next
function index(array, n) {
    return array[n] == undefined ? -1 : Math.pow(array.find((element) => element == array[n]), n);
}

console.log(index([1, 3, 10, 100], 3));


//next

function hello(name) {
    let hi = "Hello, ";
    let world = "World";
    let sign = "!";
    if (name.length > 0) {
        return hi + name[0].toUpperCase() + name.slice(1).toLowerCase() + sign;
    } else {
        return hi + world + sign;
    }
    // return name.length > 0 ? "Hello, " + name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase() + "!" : "Hello, World!";
}

console.log(hello('johN'));


//next
function mergeArrays(arr1, arr2) {
    let arr = arr1.concat(arr2).sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(mergeArrays());


//next
function sumDigits(number) {
    let arr = Math.abs(number).toString().split('');
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += +arr[i];
    return sum;
}

console.log(sumDigits(99));

//next
function factorial(n) {
    if (n > 12 || n < 0) {
        throw error;
    } else if (n < 1) {
        return 1;
    } else {
        return n * factorial(--n);
    }
}

console.log(factorial(0));

//next
function saleHotdogs(n) {
    if (n < 5) {
        return n * 100;
    } else if (n >= 5 && n < 10) {
        return n * 95;
    } else if (n >= 10) {
        return n * 90;
    }
}

console.log(saleHotdogs(5));

//next
function reverse(string) {
    return (string.split(' ').reverse()).toString().replace(/([,])/g, ' ');
}

console.log(reverse('no one cares'));

//next
function binToDec(bin) {
    return parseInt(bin, 2);
}

console.log(binToDec("1001001"));


//next
function reverseLetter(str) {
    return str.replace(/[^a-zа-яё]/gi, '').split('').reverse().join('');
}

console.log(reverseLetter("ultr53o?n"));

//next
var capitals = function (word) {
    var res = [];
    for (var i = 0; i < word.length; i++) {
        if (word[i] == word[i].toUpperCase()) {
            res.push(word.indexOf(word[i]))
        }
    }
    return res;
};

console.log(capitals('CodEWaRs'));



//next