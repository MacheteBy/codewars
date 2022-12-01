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


function setAlarm(employed, vacation){
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

function sumStr(a,b) {
  return String(Number(a) + Number(b));
}


console.log(sumStr("4","5"));


//next

function otherAngle(a, b) {
    return 180 - (a + b);
  }


console.log(otherAngle(60, 60));



//next

function friend(friends){
    let result = friends.filter(word => word.length == 4);
    return result;
  }


  console.log(friend("Ryan", "Kieran", "Mark"));


//next

function calculateYears(principal, interest, tax, desired) {
    let res = 0;
    for(let i = principal; i < desired; i+=res){
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
    while(principal < desired){
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