// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 3")


for (let i = 1; i <= 50; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}




function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

for (let n = 1; n <= 20; n++) {
  if (isPrime(n)) {
    console.log(`${n} → prime`);
  } else if (n % 2 === 0) {
    console.log(`${n} → even`);
  } else {
    console.log(`${n} → odd`);
  }
}






const secret = Math.floor(Math.random() * 10) + 1;
let guess;

while (guess !== secret) {
  guess = Number(prompt("Guess the number (1–10):"));

  if (Number.isNaN(guess)) {
    console.log("Enter a valid number.");
    continue;
  }

  if (guess < secret) {
    console.log("Too low.");
  } else if (guess > secret) {
    console.log("Too high.");
  } else {
    console.log("Correct! The secret number was " + secret);
  }
}






for (let row = 1; row <= 4; row++) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    line += "*";
  }
  console.log(line);
}




const arr = [12, 65, 34, 99, 81, 50];
const greaterThan50 = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 50) {
    console.log(arr[i]);
    greaterThan50.push(arr[i]);
  }
}

console.log("Numbers > 50:", greaterThan50);







console.log(
  "Exit Ticket: I used to forget to update my loop conditions, but I fixed it by checking each loop’s start/end and making sure the control variable actually changes inside the loop."
);