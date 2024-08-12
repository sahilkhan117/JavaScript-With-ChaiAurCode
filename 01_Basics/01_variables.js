const accountId = 7870954
let accountEmail = "sahil@MS.com"
var accountPassword = "12345"
accountCity = "Sagar"


console.table([accountId, accountEmail, accountPassword, accountCity])
// output
// ┌─────────┬────────────────┐
// │ (index) │ Values         │
// ├─────────┼────────────────┤
// │ 0       │ 7870954        │
// │ 1       │ 'sahil@MS.com' │
// │ 2       │ '12345'        │
// │ 3       │ 'Sagar'        │
// └─────────┴────────────────┘

// accountId = 67565454 // : Not allowed because constant
accountEmail = "sahil2@MS.com"
accountPassword = "98765"
accountCity = "Damoh"

console.table([accountId, accountEmail, accountPassword, accountCity])
// output
// ┌─────────┬─────────────────┐
// │ (index) │ Values          │
// ├─────────┼─────────────────┤
// │ 0       │ 7870954         │
// │ 1       │ 'sahil2@MS.com' │
// │ 2       │ '98765'         │
// │ 3       │ 'Damoh'         │
// └─────────┴─────────────────┘

