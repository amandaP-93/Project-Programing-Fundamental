let a: number = 20, b: number = 30, c: number = 3, d: number = 5;

console.log("=== 1. Arithmetic ===");
console.log("d = a * b + c :", a * b + c);
console.log("d = a * (b + c) :", a * (b + c));
console.log("d = a + b / b - a :", a + b / b - a);
console.log("d = a % c :", a % c);

console.log("\n=== 2. Increment & Decrement ===");
b = 30; console.log("d = b++ + 10 :", b++ + 10);
b = 30; console.log("d = ++b + 10 :", ++b + 10);
b = 30; console.log("d = b-- + 10 :", b-- + 10);
b = 30; console.log("d = --b + 10 :", --b + 10);

console.log("\n=== 3. Bitwise ===");
b = 30; c = 3;
console.log("d = b & c :", b & c);
console.log("d = b | c :", b | c);
console.log("d = b >> 1 :", b >> 1);
console.log("d = b << 2 :", b << 2);

console.log("\n=== 4. Compound Assignment ===");
d = 5; console.log("d += 2 :", d += 2);
d = 5; console.log("d *= 2 :", d *= 2);
d = 5; console.log("d &= 2 :", d &= 2);

console.log("\n=== 5. Assignment ===");
console.log("d = 20 :", d = 20);
console.log("d = 9 :", d = 9);

console.log("\n=== 6. Condition ===");
a = 20; b = 30;
console.log("d = a < b ? a : b :", a < b ? a : b);
console.log("d = a > b ? a : b :", a > b ? a : b);

console.log("\n=== 7 & 8. Relational & Logical ===");
let dB: boolean = false;
console.log("d = 12 > 3 :", dB = 12 > 3);
console.log("d = 12 < 3 :", dB = 12 < 3);
console.log("(a < 15) && (a > 25) :", (a < 15) && (a > 25));
console.log("(b < 15) || (b > 25) :", (b < 15) || (b > 25));
console.log("(a < 15) ^ (a > 25) :", (a < 15) ^ (a > 25));