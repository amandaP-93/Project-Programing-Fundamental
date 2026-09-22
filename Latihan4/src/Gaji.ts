import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan Tarif Gaji per Hari (Rp): ", (inputTarif: string) => {
  rl.question("Masukkan Jumlah Hari Kerja: ", (inputHari: string) => {
    let tarif: number = Number(inputTarif);
    let jumlahHari: number = Number(inputHari);
    let tunjanganPerHari: number = 20000;

    let totalTunjangan: number = tunjanganPerHari * jumlahHari;
    let totalGaji: number = (tarif * jumlahHari) + totalTunjangan;

    console.log("\n--- RINCIAN GAJI PEGAWAI ---");
    console.log("Tarif per Hari: Rp " + tarif);
    console.log("Jumlah Hari Kerja: " + jumlahHari + " hari");
    console.log("Total Tunjangan (Rp 20.000/hari): Rp " + totalTunjangan);
    console.log("Total Gaji (Wage): Rp " + totalGaji);

    rl.close();
  });
});