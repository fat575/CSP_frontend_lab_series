// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 1")

 let n = Number(prompt("Enter a number:"));

if (Number.isNaN(n)) {
  console.log("Please enter a number.");
} else if (n % 2 === 0) {
  console.log("EVEN");
} else {
  console.log("ODD");
}




let score = Number(prompt("Enter a score (0–100):"));

if (Number.isNaN(score)) {
  console.log("Not a number.");
} else if (score < 0 || score > 100) {
  console.log("Score out of range.");
} else if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}



let age = Number(prompt("Enter your age:"));

if (Number.isNaN(age)) {
  console.log("Enter a valid age.");
} else if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("Not eligible yet.");
}


let temp = Number(prompt("Enter Fahrenheit temperature:"));

if (Number.isNaN(temp)) {
  console.log("Enter a valid number.");
} else if (temp > 90) {
  console.log("Too hot!");
} else if (temp < 60) {
  console.log("Too cold!");
} else {
  console.log("Just right!");
}



let light = prompt("Traffic light color:").toLowerCase();

if (light === "red") {
  console.log("Stop.");
} else if (light === "yellow") {
  console.log("Slow down.");
} else if (light === "green") {
  console.log("Go.");
} else {
  console.log("Invalid light color.");
}


console.log("Exit Ticket: One mistake I made today was forgetting input validation. I fixed it by adding Number.isNaN checks before running my conditions.");
