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
    if(input.length > 1 && input.filter((num) => num > 0) && input.filter((num) => num < 0)){
        max = input.filter((num) => num > 0).length;
        min = input.filter((num) => num < 0).reduce((first, second) => first + second);
        resMass = [max, min];
        return resMass;
    } else if(input == null){
        return resMass;
    } else if(input.length > 1 && input.filter((num) => num > 0 && input.filter((num) => num < 0) == false)){
        max = input.filter((num) => num > 0).length;
        resMass = [max, min];
        return resMass;
    }
}


console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


console.log(([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15].filter((num) => num < 0)).length > 0);







/////////////////////////////////


function squareDigits(num){
    let str = num.toString();
    let res = "";
    for(let i = 0; i < str.length; i++){
        res += str[i] * str[i];
    }
    return Number(res);
  }


console.log(squareDigits(3212));



//next

function getAge(inputString){
    return Number(inputString[0]);
    }


    console.log(getAge("1 year old"));


//next

