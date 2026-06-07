"use strict";
// ===== Bài B3: Mini Game - Đoán Số =====

let secretNumber = 0;
let attempts = 0;
const maxAttempts = 7;
let guessedNumbers = [];
let gameActive = false;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessedNumbers = [];
    gameActive = true;
    
    console.log(`Game started! Secret number: ${secretNumber}`); // For debugging
    
    playGame();
}

function playGame() {
    while (gameActive && attempts < maxAttempts) {
        let input = prompt(`Đoán số từ 1-100 (Lần ${attempts + 1}/${maxAttempts}):`);
        
        // Nếu user nhấn Cancel
        if (input === null) {
            document.getElementById('result').innerHTML = 
                '<div class="result error">❌ Bạn đã hủy trò chơi</div>';
            gameActive = false;
            break;
        }
        
        // Validate input
        let guess = parseInt(input);
        
        // Kiểm tra input có phải số không
        if (isNaN(guess)) {
            alert("⚠️ Vui lòng nhập một số!");
            continue;
        }
        
        // Kiểm tra input trong range 1-100
        if (guess < 1 || guess > 100) {
            alert("⚠️ Số phải từ 1-100!");
            continue;
        }
        
        // Kiểm tra số đã đoán rồi hay chưa
        if (guessedNumbers.includes(guess)) {
            alert(`⚠️ Bạn đã đoán số ${guess} rồi!`);
            continue;
        }
        
        guessedNumbers.push(guess);
        attempts++;
        
        // So sánh
        if (guess === secretNumber) {
            // Thắng
            let resultDiv = document.getElementById('result');
            resultDiv.innerHTML = 
                `<div class="result correct">
                    ✅ Chúc mừng! Bạn đoán đúng số ${secretNumber} sau ${attempts} lần!
                </div>`;
            gameActive = false;
            document.getElementById('guessInfo').innerHTML = 
                `<p>Các số bạn đã đoán: ${guessedNumbers.join(', ')}</p>`;
            break;
        } else if (guess > secretNumber) {
            let resultDiv = document.getElementById('result');
            resultDiv.innerHTML = 
                `<div class="result lower">
                    📉 Số bạn đoán quá cao! Thử số nhỏ hơn.
                    <br><small>Còn ${maxAttempts - attempts} lần</small>
                </div>`;
        } else {
            let resultDiv = document.getElementById('result');
            resultDiv.innerHTML = 
                `<div class="result higher">
                    📈 Số bạn đoán quá thấp! Thử số lớn hơn.
                    <br><small>Còn ${maxAttempts - attempts} lần</small>
                </div>`;
        }
    }
    
    if (gameActive || (attempts >= maxAttempts && attempts > 0 && guessedNumbers[guessedNumbers.length - 1] !== secretNumber)) {
        let resultDiv = document.getElementById('result');
        resultDiv.innerHTML = 
            `<div class="result error">
                ❌ Hết lượt rồi! Đáp án là: ${secretNumber}
                <br><small>Bạn đã đoán ${attempts} lần</small>
            </div>`;
        document.getElementById('guessInfo').innerHTML = 
            `<p>Các số bạn đã đoán: ${guessedNumbers.join(', ')}</p>`;
        gameActive = false;
    }
}

// Version 2: Interactive prompt-based version
function startGameInteractive() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessedNumbers = [];
    gameActive = true;
    
    alert("🎮 Game bắt đầu!\nMáy đã chọn 1 số từ 1-100\nBạn có 7 lần để đoán!");
    
    while (gameActive && attempts < maxAttempts) {
        let input = prompt(
            `Đoán số từ 1-100\n(Lần ${attempts + 1}/${maxAttempts})\nSố đã đoán: ${guessedNumbers.length > 0 ? guessedNumbers.join(', ') : 'Chưa có'}`
        );
        
        if (input === null) {
            alert("❌ Bạn đã hủy trò chơi!");
            break;
        }
        
        let guess = parseInt(input);
        
        if (isNaN(guess)) {
            alert("⚠️ Vui lòng nhập một số hợp lệ!");
            continue;
        }
        
        if (guess < 1 || guess > 100) {
            alert("⚠️ Số phải từ 1-100!");
            continue;
        }
        
        if (guessedNumbers.includes(guess)) {
            alert(`⚠️ Bạn đã đoán số ${guess} rồi! Thử số khác!`);
            continue;
        }
        
        guessedNumbers.push(guess);
        attempts++;
        
        if (guess === secretNumber) {
            alert(`✅ Chúc mừng! Bạn đoán đúng số ${secretNumber} sau ${attempts} lần!\n\nCác số bạn đoán: ${guessedNumbers.join(', ')}`);
            gameActive = false;
        } else if (guess > secretNumber) {
            alert(`📉 Số bạn đoán quá cao!\nCòn ${maxAttempts - attempts} lần...`);
        } else {
            alert(`📈 Số bạn đoán quá thấp!\nCòn ${maxAttempts - attempts} lần...`);
        }
    }
    
    if (attempts >= maxAttempts && guessedNumbers[guessedNumbers.length - 1] !== secretNumber) {
        alert(`❌ Hết lượt rồi!\nĐáp án là: ${secretNumber}\nCác số bạn đã đoán: ${guessedNumbers.join(', ')}`);
    }
}
