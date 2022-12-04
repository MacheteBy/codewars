function findOdd(A) {
    for (let i = 0; i < A.length; i++) {
        let count = 0;
        for (let j = 0; j < A.length; i++) {
            if (A[i] == A[j]) {
                count++;
            }
        }
        if (count % 2 != 0) {
            return A[i];
        }
    }
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));