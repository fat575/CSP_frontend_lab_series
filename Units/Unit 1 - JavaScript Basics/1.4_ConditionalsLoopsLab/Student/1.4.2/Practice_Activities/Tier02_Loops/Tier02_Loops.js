// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 2")

for (let i = 1; i <= 10; i++) {
  console.log(i);
}


let n = 10;

while (n >= 0) {
  console.log(n);
  n--;
}

console.log("Liftoff!");




let base = Number(prompt("Enter a base number:"));

if (Number.isNaN(base)) {
  console.log("Please enter a valid number.");
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(`${base} x ${i} = ${base * i}`);
  }
}



let limit = Number(prompt("Enter a positive integer:"));

if (Number.isNaN(limit) || limit <= 0 || !Number.isInteger(limit)) {
  console.log("Invalid input. Enter a positive whole number.");
} else {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    sum += i;
  }
  console.log(`Sum from 1 to ${limit} = ${sum}`);
}





const SECRET = "explorers";
let attempt;
let tries = 0;
let maxTries = 5;

do {
  attempt = prompt("Enter password:");
  tries++;

  if (attempt === SECRET) {
    console.log("Access granted.");
    break;
  } else {
    console.log("Wrong password.");
  }

} while (attempt !== SECRET && tries < maxTries);

if (tries === maxTries && attempt !== SECRET) {
  console.log("Locked out. Too many attempts.");
}




console.log("Exit Ticket: I kept forgetting to update loop counters, so I fixed it by checking conditions and making sure the variable changes inside the loop.");
