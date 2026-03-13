// dataTypes.js
// string‑type variables demonstrating some of the built‑in
// String.prototype methods

// basic properties
let msg = "  Hello, world!  ";

console.log(msg.length);              // 16 (includes spaces)
console.log(msg.charAt(0));           // " " (space at start)
console.log(msg[2]);                  // "H"

// searching
console.log(msg.indexOf("world"));    // 9
console.log(msg.lastIndexOf("l"));    // 12
console.log(msg.includes("lo"));      // true
console.log(msg.startsWith("  He"));  // true
console.log(msg.endsWith("!  "));     // true

// slicing / extracting
console.log(msg.slice(2, 7));         // "Hello"
console.log(msg.substring(2, 7));     // "Hello"
console.log(msg.substring(7, 2));     // "Hello"
console.log(msg.substr(2, 5));        // "Hello"

// casing
console.log(msg.toUpperCase());       // "  HELLO, WORLD!  "
console.log(msg.toLowerCase());       // "  hello, world!  "

// trimming
console.log(msg.trim());              // "Hello, world!"
console.log(msg.trimStart());         // "Hello, world!  "
console.log(msg.trimEnd());           // "  Hello, world!"

// replacement / regex
console.log(msg.replace("world", "universe")); // "  Hello, universe!  "
console.log(msg.replace(/l/g, "*"));            // "  He**o, wor*d!  "

let NewString = "sfsdf sddsf435345 FGvfv 454 5.46*()";
console.log("all Non white space string"+NewString.match(/[^\s]+/g));
console.log("replace all Non white space with *: "+NewString.replace(/[\S]/g,"*"));
console.log("replace all white space with *: "+NewString.replace(/[\s]/g,"*"));
console.log("replace all digits with *: "+NewString.replace(/[\d]/g,"*"));
console.log("array of numbers:"+NewString.match(/[\d.]+/g));
console.log("replace all white spaces and  letters with *: "+NewString.replace(/[a-zA-Z\s()]/g,"*"));


// splitting
console.log(msg.trim().split(", "));  // [ "Hello", "world!" ]

// repetition / padding
let short = "abc";
console.log(short.repeat(3));         // "abcabcabc"
console.log(short.padStart(5, "0"));  // "00abc"
console.log(short.padEnd(6, "-"));    // "abc---"

// conversion to primitive
console.log(String(123));             // "123"
console.log((123).toString());        // "123"
