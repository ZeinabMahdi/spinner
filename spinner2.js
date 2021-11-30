process.stdout.write('hello from spinner2.js... \rheyyy\n');

const spins = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let timeOut = 0;
for (let spin of spins) {
  if (timeOut < 2000){
    setTimeout(() => {
    process.stdout.write(spin);
    }, timeOut += 200);
  } 
}
