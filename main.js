let array = [10, 20, 30, 40, 50]; // Massivni yaratamiz

// 'for' loop yordamida massiv elementlarini chiqaramiz
for (let i = 0; i < array.length; i++) {
    console.log(array[i]); // Har bir elementni konsolga chiqaramiz
}

// 1 dan 50 gacha bo'lgan juft sonlarni chiqarish
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i); // Juft sonlarni konsolga chiqarish
    }
}

// Faktorialni hisoblaydigan funksiya
function faktorial(N) {
    let result = 1; // Natija uchun boshlang'ich qiymat

    // 1 dan boshlab N gacha ko'paytirib chiqamiz
    for (let i = 1; i <= N; i++) {
        result *= i; // result = result * i
    }

    return result; // Faktorialni qaytarish
}

// Masalan N = 5 bo'lsa
let N = 5;
console.log(N + "! = " + faktorial(N)); // 5! ni chiqarish

// Arifmetik progressiya yig'indisini hisoblaydigan funksiya
function arifmetikProgressiyaYigindisi(a, d, n) {
    // Yig'indini hisoblash
    let sum = (n / 2) * (2 * a + (n - 1) * d);
    return sum;
}

// Parametrlar
let a = 2;  // Boshlang'ich son
let d = 3;  // Qadam
let n = 10; // Elementlar soni

// Yig'indini hisoblash
let yigindi = arifmetikProgressiyaYigindisi(a, d, n);

// Natijani konsolga chiqarish
console.log("Yig'indi: " + yigindi);

// Foydalanuvchidan matnni olish
let matn = prompt("Matn kiriting:");

// Bo'sh natija o'zgaruvchisini yaratamiz
let natija = "";

// Matndagi har bir harfni 3 marta takrorlash
for (let i = 0; i < matn.length; i++) {
    natija += matn[i].repeat(3); // Har bir harfni 3 marta takrorlaymiz
}

// Natijani konsolga chiqarish
console.log(natija);

// 1 dan 10 gacha bo'lgan sonlarning kvadratlarini chiqarish
for (let i = 1; i <= 10; i++) {
    console.log(i + " ning kvadrati = " + i * i);
}

// 20 dan 1 gacha bo'lgan sonlarni teskari tartibda chiqarish
for (let i = 20; i >= 1; i--) {
    console.log(i);
}

let numbers = [3, 7, 2, 10, 6]; // Sonlardan iborat massiv

// Eng katta sonni saqlash uchun boshlang'ich qiymat
let max = numbers[0]; // Birinchi elementni eng katta deb olamiz

// For loop yordamida har bir elementni tekshiramiz
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) { // Agar hozirgi element eng katta bo'lsa
        max = numbers[i];   // Uni max ga yozamiz
    }
}

// Natijani konsolga chiqarish
console.log("Eng katta son: " + max);

let text = "assalamu alaykum"; // Matn
let count = 0; // "a" harflarini sanash uchun hisoblagich

// Matndagi har bir belgi ustidan o'tish
for (let i = 0; i < text.length; i++) {
    if (text[i] === 'a') { // Agar belgi "a" ga teng bo'lsa
        count++; // Hisoblagichni oshiramiz
    }
}

// Natijani konsolga chiqarish
console.log('Matnda "a" harfi soni: ' + count);