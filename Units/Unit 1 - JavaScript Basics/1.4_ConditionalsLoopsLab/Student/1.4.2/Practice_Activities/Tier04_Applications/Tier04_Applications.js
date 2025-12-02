// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 4")

const STORED_USERNAME = "admin";
const STORED_PASSWORD = "1234";

let inputUser = prompt("Username:");
let inputPass = prompt("Password:");

if (inputUser === STORED_USERNAME && inputPass === STORED_PASSWORD) {
  console.log("Welcome!");
} else {
  console.log("Invalid credentials.");
}




let weather = prompt("What is the weather? (sunny/rainy/cold)").toLowerCase();

if (weather === "sunny") {
  console.log("Wear a t-shirt, shorts, and sunglasses.");
} else if (weather === "rainy") {
  console.log("Wear a raincoat and bring an umbrella.");
} else if (weather === "cold") {
  console.log("Wear a jacket, long pants, and maybe a hoodie.");
} else {
  console.log("I don't recognize that weather. Just dress comfortably.");
}








let balance = 100;
let running = true;

while (running) {
  let choice = prompt(
    "ATM Menu:\n1) Check balance\n2) Deposit\n3) Withdraw\n4) Exit\nEnter choice (1-4):"
  );

  if (choice === null) {
    console.log("Session ended.");
    break;
  }

  if (choice === "1") {
    console.log(`Current balance: $${balance.toFixed(2)}`);
  } else if (choice === "2") {
    let deposit = Number(prompt("Enter amount to deposit:"));
    if (Number.isNaN(deposit) || deposit <= 0) {
      console.log("Invalid deposit amount.");
    } else {
      balance += deposit;
      console.log(`Deposited $${deposit.toFixed(2)}. New balance: $${balance.toFixed(2)}`);
    }
  } else if (choice === "3") {
    let withdraw = Number(prompt("Enter amount to withdraw:"));
    if (Number.isNaN(withdraw) || withdraw <= 0) {
      console.log("Invalid withdrawal amount.");
    } else if (withdraw > balance) {
      console.log("Insufficient funds. Transaction cancelled.");
    } else {
      balance -= withdraw;
      console.log(`Withdrew $${withdraw.toFixed(2)}. New balance: $${balance.toFixed(2)}`);
    }
  } else if (choice === "4") {
    console.log("Exiting ATM. Goodbye.");
    running = false;
  } else {
    console.log("Invalid choice. Please select 1–4.");
  }
}






let doublesCount = 0;

for (let i = 1; i <= 10; i++) {
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;

  if (die1 === die2) {
    console.log(`Roll ${i}: ${die1} & ${die2} → DOUBLES!`);
    doublesCount++;
  } else {
    console.log(`Roll ${i}: ${die1} & ${die2}`);
  }
}

console.log(`Total doubles in 10 rolls: ${doublesCount}`);






const questions = [
  "What is the capital of France?",
  "What is 5 * 6?",
  "Which language runs in the browser: Java or JavaScript?"
];

const answers = [
  "paris",
  "30",
  "javascript"
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
  let userAnswer = prompt(questions[i]);

  if (userAnswer === null) {
    console.log("Quiz cancelled.");
    break;
  }

  if (userAnswer.trim().toLowerCase() === answers[i]) {
    console.log("Correct!");
    score++;
  } else {
    console.log(`Wrong. Correct answer: ${answers[i]}`);
  }
}

let totalQuestions = questions.length;
let percentage = (score / totalQuestions) * 100;
console.log(`You scored ${score}/${totalQuestions} (${percentage.toFixed(1)}%).`);







console.log(
  "Exit Ticket: I used to ignore invalid user input, but I fixed it by adding guardrails with Number.isNaN checks and simple range validation."
);
