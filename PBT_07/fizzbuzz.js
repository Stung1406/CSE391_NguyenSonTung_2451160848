"use strict";
// ===== Bài B4: FizzBuzz nâng cao =====

console.log("=== VERSION 1: CLASSIC FIZZBUZZ (1-100) ===\n");

for (let i = 1; i <= 100; i++) {
    let output = "";
    
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    
    console.log(output || i);
}

console.log("\n=== VERSION 2: CUSTOM FIZZBUZZ ===\n");

function customFizzBuzz(n, rules) {
    for (let i = 1; i <= n; i++) {
        let output = "";
        
        // Kiểm tra từng rule
        for (let j = 0; j < rules.length; j++) {
            if (i % rules[j].divisor === 0) {
                output += rules[j].word;
            }
        }
        
        console.log(output || i);
    }
}

console.log("Test 1: n=30, rules = [3:'Fizz', 5:'Buzz', 7:'Jazz']\n");
customFizzBuzz(30, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);

console.log("\n\nTest 2: n=15, rules = [2:'Even', 3:'Tri', 5:'Penta']\n");
customFizzBuzz(15, [
    { divisor: 2, word: "Even" },
    { divisor: 3, word: "Tri" },
    { divisor: 5, word: "Penta" }
]);

console.log("\n\nTest 3: n=20, rules = [4:'Four', 6:'Six']\n");
customFizzBuzz(20, [
    { divisor: 4, word: "Four" },
    { divisor: 6, word: "Six" }
]);

function customFizzBuzzArray(n, rules) {
    let result = [];
    
    for (let i = 1; i <= n; i++) {
        let output = "";
        
        for (let j = 0; j < rules.length; j++) {
            if (i % rules[j].divisor === 0) {
                output += rules[j].word;
            }
        }
        
        result.push(output || i);
    }
    
    return result;
}

console.log("\n\n=== VERSION 3: RETURN ARRAY ===\n");
let fizzBuzzResult = customFizzBuzzArray(30, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);

console.log("Kết quả FizzBuzz với n=30:");
console.log(fizzBuzzResult.join(", "));

console.log("\n\nCác giá trị đặc biệt:");
console.log("21 =", fizzBuzzResult[20]); // FizzJazz
console.log("15 =", fizzBuzzResult[14]); // FizzBuzz
console.log("35 =", fizzBuzzResult[34]); // BuzzJazz
console.log("105 =", fizzBuzzResult[104]); // FizzBuzzJazz (nếu n > 105)
