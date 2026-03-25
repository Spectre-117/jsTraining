const primeLimit = 40;
let primeArray = [];
let isPrime;
for (let i=2; i<=primeLimit; i++) {
    isPrime = true;
    for (let j=2; j<i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primeArray.push(i);
    }
}
console.log(primeArray);

// count number of digits in password and check if it's strong enough (at least 2 digits)
console.log('------------------');
const password ='qaTest1';
let digitCount = 0;
for (let i=0; i<password.length; i++) {
    if (password.charAt(i).match(/\d/)) {
        digitCount++;
    }
}
if (digitCount >= 2) {
    console.log(`Password is strong. It contains ${digitCount} digits`);
} else {
    console.log('Password is weak. Digits count should be at least 2');
}
console.log('------------------');
// second variant
const passwordVariantTwo ='qaTest132';
let digitCount2 = 0;
const possibleDigits = '0123456789';
for (let i=0; i<passwordVariantTwo.length; i++) {
    let currentChar = passwordVariantTwo.charAt(i);
    if (possibleDigits.includes(currentChar)) {
        digitCount2++;
    }
}
if (digitCount2 >= 2) {
    console.log(`Password is strong. It contains ${digitCount2} digits`);
} else {
    console.log('Password is weak. Digits count should be at least 2');
}
//------------------

let num = -62343545.897;
let num2 = Math.abs(num);

console.log(num2%10);
let count = 0;
while(num2 > 0) {
    num2 = Math.floor(num2/10);
    count++;
}
console.log(`Number of digits in ${num} is ${count}`);

let numStr = '-62343545.897dfbfgb';
let numStrDigitsOnly  = numStr.replace(/\D/g,'');-
console.log(numStrDigitsOnly);