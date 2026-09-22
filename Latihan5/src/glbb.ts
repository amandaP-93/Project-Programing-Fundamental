import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (query: string): Promise<string> => {
    return new Promise((resolve) => rl.question(query, resolve));
};

async function main() {
    const v0 = parseFloat(await askQuestion("Enter the initial velocity of the object (Vo): "));
    const a = parseFloat(await askQuestion("Enter the acceleration of the object (a): "));
    const t = parseFloat(await askQuestion("Time traveled by the object (t): "));

    // Rumus Vt = Vo + a * t
    const vt = v0 + (a * t);

    // Rumus s = Vo * t + 0.5 * a * t^2
    const s = (v0 * t) + (0.5 * a * Math.pow(t, 2));

    console.log(`The velocity of the object (Vt) is ${vt.toFixed(1)} m/s`);
    console.log(`The distance traveled by the object (s) is ${s.toFixed(1)} m`);

    rl.close();
}

main();

export {};