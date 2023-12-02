// function summation(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// };

// This is O(n)



function summation(n) {
    return (n * (n + 1) / 2);
}

// The flow
// input = 4
// 4 * (4 + 1) / 2
// 4 * 5 / 2 
// 20 / 2
//10

// This is O(1) as this is executed only 1 time

console.log(summation(4));


for (i = 1; i <= n; i ++) {
    for (j = 1; j <= i; j++) {
        //some code
    }
}

for (i = 1; i <= n; i ++) {
    for (j = 1; j <= i; j++) {
        for (k = 1; k <= j; j++) {
            //some code
        }
    }
}