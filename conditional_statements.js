// Q1: Write a program that checks if a number is positive, negative, or zero.
var a = 5;
if (a > 0) {
  console.log("Positive");
} else if (a < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// Q2: Using an if-else statement, determine whether a given integer is even or odd.
var b = 8;
if (b % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Q3: Write a program that takes two numbers and prints the larger one using conditional statements.
var n1 = 10;
var n2 = 20;
if (n1 > n2) {
  console.log("Larger number is " + n1);
} else {
  console.log("Larger number is " + n2);
}

// Q4: Using if-else-if, assign grades (A, B, C, D, F) based on a student's percentage score.
var score = 85;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else if (score >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}

// Q5: Write a program that checks if a given year is a leap year using conditional statements.
var year = 2024;
if (year % 4 == 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}

// Q6: Use a switch-case to print the name of the day when given a number (1 = Monday, 2 = Tuesday, ... 7 = Sunday).
var day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Please enter 1 to 7");
}

// Q7: Create a simple calculator using switch-case that performs addition, subtraction, multiplication, or division based on user input.
var x = 10;
var y = 5;
var op = "+";
switch (op) {
  case "+":
    console.log(x + y);
    break;
  case "-":
    console.log(x - y);
    break;
  case "*":
    console.log(x * y);
    break;
  case "/":
    console.log(x / y);
    break;
  default:
    console.log("Wrong operator");
}

// Q8: Write a program that checks whether a given character is a vowel or consonant using switch-case.
var ch = "a";
switch (ch) {
  case "a":
    console.log("Vowel");
    break;
  case "e":
    console.log("Vowel");
    break;
  case "i":
    console.log("Vowel");
    break;
  case "o":
    console.log("Vowel");
    break;
  case "u":
    console.log("Vowel");
    break;
  default:
    console.log("Consonant");
}

// Q9: Using switch-case, print instructions based on traffic light color (Red = Stop, Yellow = Wait, Green = Go).
var color = "red";
switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Wait");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Wrong color");
}

// Q10: Write a program using switch-case where the user selects from a menu (e.g., 1 = Check Balance, 2 = Deposit, 3 = Withdraw, 4 = Exit).
var balance = 1000;
var choice = 1;
switch (choice) {
  case 1:
    console.log("Your balance is " + balance);
    break;
  case 2:
    console.log("Deposit money");
    break;
  case 3:
    console.log("Withdraw money");
    break;
  case 4:
    console.log("Exit");
    break;
  default:
    console.log("Wrong choice");
}
