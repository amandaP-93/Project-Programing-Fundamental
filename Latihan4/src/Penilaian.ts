import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan Nilai UTS: ", (inputUTS: string) => {
  rl.question("Masukkan Nilai UAS: ", (inputUAS: string) => {
    rl.question("Masukkan Nilai UKK: ", (inputUKK: string) => {
      let uts: number = Number(inputUTS);
      let uas: number = Number(inputUAS);
      let ukk: number = Number(inputUKK);

      let nilaiAkhir: number = (uts * 0.15) + (uas * 0.15) + (ukk * 0.70);

      console.log("\n--- HASIL PENILAIAN ---");
      console.log("Nilai UTS (15%): " + (uts * 0.15));
      console.log("Nilai UAS (15%): " + (uas * 0.15));
      console.log("Nilai UKK (70%): " + (ukk * 0.70));
      console.log("Nilai Akhir: " + nilaiAkhir);

      rl.close();
    });
  });
});