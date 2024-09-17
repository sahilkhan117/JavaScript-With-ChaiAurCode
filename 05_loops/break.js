// Braek : end the entire loop

for (let i = 0; i < 10; i++) {
    
    if (i == 5) {
        console.log('found 5');
        break // break when this condition true
    }
    console.log(i);
}
// OUTPUT
// 0
// 1
// 2
// 3
// 4
// found 5


// continue : move to next ittration

for (let i = 0; i < 10; i++) {
    
    if (i == 5) {
        console.log('found 5');
        continue // if five so continue
    }
    console.log(i);
}