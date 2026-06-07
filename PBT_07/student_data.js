"use strict";

const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

function calculateAverage(math, physics, cs) {
    return math * 0.4 + physics * 0.3 + cs * 0.3;
}

function getGrade(average) {
    if (average >= 8.0) return "Giỏi";
    if (average >= 6.5) return "Khá";
    if (average >= 5.0) return "Trung bình";
    return "Yếu";
}

console.log("=== BẢNG ĐIỂM LỚP ===\n");

let studentResults = [];
for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let average = calculateAverage(student.math, student.physics, student.cs);
    let grade = getGrade(average);
    
    studentResults.push({
        ...student,
        average: average.toFixed(1),
        grade: grade
    });
}

console.log("| STT | Tên    | Toán | Lý  | CNPM | TB   | Xếp loại    |");
console.log("|-----|--------|------|-----|------|------|-------------|");

for (let i = 0; i < studentResults.length; i++) {
    let result = studentResults[i];
    let stt = String(i + 1).padEnd(3);
    let name = result.name.padEnd(6);
    let math = String(result.math).padEnd(4);
    let physics = String(result.physics).padEnd(3);
    let cs = String(result.cs).padEnd(4);
    let avg = String(result.average).padEnd(4);
    let gr = result.grade;
    
    console.log(`| ${stt} | ${name} | ${math} | ${physics} | ${cs} | ${avg} | ${gr.padEnd(11)} |`);
}

console.log("\n");


let gradeCount = {
    "Giỏi": 0,
    "Khá": 0,
    "Trung bình": 0,
    "Yếu": 0
};

for (let i = 0; i < studentResults.length; i++) {
    gradeCount[studentResults[i].grade]++;
}

console.log("=== THỐNG KÊ XẾP LOẠI ===");
for (let grade in gradeCount) {
    console.log(`${grade}: ${gradeCount[grade]} sinh viên`);
}
console.log("");


let maxStudent = studentResults[0];
let minStudent = studentResults[0];

for (let i = 1; i < studentResults.length; i++) {
    if (parseFloat(studentResults[i].average) > parseFloat(maxStudent.average)) {
        maxStudent = studentResults[i];
    }
    if (parseFloat(studentResults[i].average) < parseFloat(minStudent.average)) {
        minStudent = studentResults[i];
    }
}

console.log("=== SV NỔI TRỘI ===");
console.log(`Điểm cao nhất: ${maxStudent.name} (${maxStudent.average})`);
console.log(`Điểm thấp nhất: ${minStudent.name} (${minStudent.average})`);
console.log("");

let totalMath = 0, totalPhysics = 0, totalCS = 0;

for (let i = 0; i < students.length; i++) {
    totalMath += students[i].math;
    totalPhysics += students[i].physics;
    totalCS += students[i].cs;
}

let avgMath = totalMath / students.length;
let avgPhysics = totalPhysics / students.length;
let avgCS = totalCS / students.length;

console.log("=== ĐIỂM TB MỖI MÔN ===");
console.log(`Toán: ${avgMath.toFixed(2)}`);
console.log(`Lý: ${avgPhysics.toFixed(2)}`);
console.log(`CNPM: ${avgCS.toFixed(2)}`);
console.log("");

let maleCount = 0, femaleCount = 0;
let maleTotalAvg = 0, femaleTotalAvg = 0;

for (let i = 0; i < studentResults.length; i++) {
    let result = studentResults[i];
    if (result.gender === "M") {
        maleCount++;
        maleTotalAvg += parseFloat(result.average);
    } else {
        femaleCount++;
        femaleTotalAvg += parseFloat(result.average);
    }
}

console.log("=== ĐIỂM TB THEO GIỚI TÍNH ===");
console.log(`Nam (${maleCount} người): ${(maleTotalAvg / maleCount).toFixed(2)}`);
console.log(`Nữ (${femaleCount} người): ${(femaleTotalAvg / femaleCount).toFixed(2)}`);
