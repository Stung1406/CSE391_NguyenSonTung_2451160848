

function calculate(num1, operator, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Lỗi: Input không phải số";
    }
    
    const validOperators = ["+", "-", "*", "/", "%", "**"];
    if (!validOperators.includes(operator)) {
        return `Lỗi: Operator '${operator}' không hợp lệ`;
    }
    
    if (operator === "/" && num2 === 0) {
        return "Lỗi: Không thể chia cho 0";
    }
    
    let result;
    switch(operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        case "**":
            result = num1 ** num2;
            break;
    }
    
    return result;
}

console.log("=== CALCULATOR TESTS ===");
console.log(calculate(10, "+", 5));           // → 15
console.log(calculate(10, "/", 0));           // → "Lỗi: Không thể chia cho 0"
console.log(calculate(10, "^", 5));           // → "Lỗi: Operator '^' không hợp lệ"
console.log(calculate("abc", "+", 5));        // → "Lỗi: Input không phải số"
console.log(calculate(2, "**", 10));          // → 1024
console.log(calculate(20, "-", 8));           // → 12
console.log(calculate(100, "*", 2));          // → 200
console.log(calculate(17, "%", 5));           // → 2
