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

    if(input.length > 0){
        for(let i = 0; i < input.length; i++){

            if(input[i] > 0){
                max += input[i];
                i++;
            }else{
                min += input[i];
                i++;
            }
            
        }
    }else{
        return input;
    }
    console.log(input.length);
    return resMass;
  }

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));