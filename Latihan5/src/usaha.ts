import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (query: string): Promise<string> => {
    return new Promise((resolve) => rl.question(query, resolve));
};

async function main() {
    const m = parseFloat(await askQuestion("Enter the mass of the object (m): "));
    const F = parseFloat(await askQuestion("Enter the force on the object (F): "));
    const s = parseFloat(await askQuestion("Enter the displacement of the object (s): "));
    const alphaDegrees = parseFloat(await askQuestion("Enter the angle between the displacement and the force (a): "));

    // Konversi derajat ke radian untuk Math.cos
    const alphaRadians = alphaDegrees * (Math.PI / 180);

    // Rumus W = F * cos(a) * s
    const W = F * Math.cos(alphaRadians) * s;

    console.log(`The value of work (W) is ${W.toFixed(1)} Joules`);

    rl.close();
}

main();