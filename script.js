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