// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

for (let i = 0; i < 10; i++) {
    // console.log(i);
}

// ⭐⭐ print 1 to 10 table
y = []
for (let i = 1; i <= 10; i++) {
    x = []
    for (let j = 1; j <= 10; j++) {
        x[j] = `${i}*${j} = ${i*j}`
    }
    y[i] = x
}