"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Masukkan Tarif Gaji per Hari (Rp): ", (inputTarif) => {
    rl.question("Masukkan Jumlah Hari Kerja: ", (inputHari) => {
        let tarif = Number(inputTarif);
        let jumlahHari = Number(inputHari);
        let tunjanganPerHari = 20000;
        let totalTunjangan = tunjanganPerHari * jumlahHari;
        let totalGaji = (tarif * jumlahHari) + totalTunjangan;
        console.log("\n--- RINCIAN GAJI PEGAWAI ---");
        console.log("Tarif per Hari: Rp " + tarif);
        console.log("Jumlah Hari Kerja: " + jumlahHari + " hari");
        console.log("Total Tunjangan (Rp 20.000/hari): Rp " + totalTunjangan);
        console.log("Total Gaji (Wage): Rp " + totalGaji);
        rl.close();
    });
});
//# sourceMappingURL=Gaji.js.map