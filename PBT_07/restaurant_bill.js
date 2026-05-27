let menu = [
    { ten: "Phở bò", gia: 65000, soLuong: 2 },
    { ten: "Trà đá", gia: 5000, soLuong: 3 },
    { ten: "Bún chả", gia: 55000, soLuong: 1 }
];

let tong = 0;

for (let i = 0; i < menu.length; i++) {
    tong += menu[i].gia * menu[i].soLuong;
}

let giam = 0;

if (tong > 1000000) {
    giam = tong * 0.15;
} else if (tong > 500000) {
    giam = tong * 0.10;
}

let today = new Date().getDay();

if (today === 3) {
    giam += tong * 0.05;
}

let sauGiam = tong - giam;

let vat = sauGiam * 0.08;

let coTip = true;

let tip = 0;

if (coTip) {
    tip = sauGiam * 0.05;
}

let thanhToan = sauGiam + vat + tip;

console.log("╔══════════════════════════════════════╗");
console.log("║         HÓA ĐƠN NHÀ HÀNG            ║");
console.log("╠══════════════════════════════════════╣");

for (let i = 0; i < menu.length; i++) {
    let mon = menu[i];
    let thanhTien = mon.gia * mon.soLuong;

    console.log(
        `║ ${i + 1}. ${mon.ten} x${mon.soLuong} = ${thanhTien.toLocaleString()}đ`
    );
}

console.log("╠══════════════════════════════════════╣");
console.log(`║ Tổng cộng: ${tong.toLocaleString()}đ`);
console.log(`║ Giảm giá: ${Math.round(giam).toLocaleString()}đ`);
console.log(`║ VAT (8%): ${Math.round(vat).toLocaleString()}đ`);
console.log(`║ Tip (5%): ${Math.round(tip).toLocaleString()}đ`);
console.log("╠══════════════════════════════════════╣");
console.log(`║ THANH TOÁN: ${Math.round(thanhToan).toLocaleString()}đ`);
console.log("╚══════════════════════════════════════╝");