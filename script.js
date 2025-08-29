// ================================
// Part 1: Variables and Conditionals
// ================================
let userName = "Anna";
let userAge = 20;

if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// ================================
// Part 2: Functions
// ================================
// Function 1: Calculate total price with tax
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

// Function 2: Format a greeting
function greetUser(name) {
  return "Hello, " + name + "! Welcome to JavaScript.";
}

console.log(calculateTotal(100, 0.15));
console.log(greetUser(userName));

// ================================
// Part 3: Loops
// ================================
let numbers = [1, 2, 3, 4, 5];

// Loop 1: for loop
for (let i = 0; i < numbers.length; i++) {
  console.log("Number:", numbers[i]);
}

// Loop 2: while loop (countdown)
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}

// ================================
// Part 4: DOM Manipulation
// ================================

// DOM Interaction 1: Toggle intro text
document.getElementById("toggleBtn").addEventListener("click", function() {
  let intro = document.getElementById("intro");
  if (intro.style.display === "none") {
    intro.style.display = "block";
  } else {
    intro.style.display = "none";
  }
});

// DOM Interaction 2: Change background color
document.getElementById("changeColorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightblue" ? "#f4f4f9" : "lightblue";
});

// DOM Interaction 3: Add new item to the list
document.getElementById("addItemBtn").addEventListener("click", function() {
  let li = document.createElement("li");
  li.textContent = "New Item " + (document.getElementById("itemList").children.length + 1);
  document.getElementById("itemList").appendChild(li);
});
