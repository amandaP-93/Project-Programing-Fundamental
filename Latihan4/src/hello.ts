import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan nama Anda: ", (nama: string) => {
  rl.question("Masukkan usia Anda: ", (inputUsia: string) => {
    let usia: number = Number(inputUsia);
    rl.question("Masukkan kota asal Anda: ", (kota: string) => {
      console.log("Halo, " + nama);
      console.log("Usia saya, " + usia);
      console.log("kota asal saya, " + kota);
      rl.close();
    });
  });
});