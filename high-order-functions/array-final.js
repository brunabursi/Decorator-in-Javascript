// Even more abstracted with high order function

const arr1 = [1, 2, 3]
const arr2 = arr1.map(item => item * 2)

console.log(arr2)

const birthYear = [1993, 1996, 1998, 2001]

const age = birthYear.map(year => 2019 - year)

console.log(age)