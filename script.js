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


function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));


//next

function likes(names) {
    // TODO
  }

  console.log(likes('Peter'));