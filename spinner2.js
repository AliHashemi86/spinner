process.stdout.write('hello from spinner2.js... \rheyyy\n');

const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 0;
for (const spin of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${spin}   `);
  }, delay);
  delay += 200;
}
