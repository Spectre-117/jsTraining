// 6 situations converting to Boolean => output false
// 0, "", null, undefined, NaN, false
// all other values are converted to true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false 
console.log(Boolean(false)); // false 
//-------------------
// converting to String
console.log(String(123)); // explicit conversion to string "123"

console.log((123).toString()); // implicit conversion to string "123"
console.log(""+123); // implicit conversion to string "123"
console.log("Hello"+true); // implicit conversion to string "Hellotrue"
//-------------------
// converting to Number
let stringOne = "146fg";
let stringTwo = "123.48.76rd";
console.log(Number("123")); // explicit conversion to number 123
console.log(Number("123.48")); // explicit conversion to number 123.48
console.log(Number(stringOne)); // NaN - explicit conversion to number because of non numeric characters in string
console.log(Number(stringTwo)); // NaN - explicit conversion to number because of non numeric characters in string
console.log(parseInt(stringOne)); //  conversion to number 146
console.log(parseFloat(stringTwo)); //  conversion to number 123.48
//-------------------