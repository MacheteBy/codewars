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