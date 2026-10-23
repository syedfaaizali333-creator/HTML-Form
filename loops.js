// Q1: Write a program using a for loop to print numbers from 1 to 10.
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// Q2: Use a while loop to calculate the sum of the first N natural numbers.
var n = 5;
var sum = 0;
var j = 1;
while (j <= n) {
  sum = sum + j;
  j++;
}
console.log("Sum = " + sum);

// Q3: Print the multiplication table of a given number using a for loop.
var num = 2;
for (var k = 1; k <= 10; k++) {
  console.log(num + " x " + k + " = " + num * k);
}

// Q4: Write a program using a while loop to find the factorial of a given number.
var f = 5;
var fact = 1;
while (f > 0) {
  fact = fact * f;
  f--;
}
console.log("Factorial = " + fact);

// Q5: Print numbers from 10 down to 1 using a for loop.
for (var m = 10; m >= 1; m--) {
  console.log(m);
}

// Q6: Use a do-while loop to print all even numbers up to N.
var limit = 10;
var e = 2;
do {
  console.log(e);
  e = e + 2;
} while (e <= limit);

// Q7: Write a program using a while loop to calculate the sum of digits of a given number.
var digits = 123;
var total = 0;
while (digits > 0) {
  total = total + (digits % 10);
  digits = Math.floor(digits / 10);
}
console.log("Sum of digits = " + total);

// Q8: Generate the first 10 terms of the Fibonacci series using a for loop.
var first = 0;
var second = 1;
console.log(first);
console.log(second);
for (var p = 3; p <= 10; p++) {
  var third = first + second;
  console.log(third);
  first = second;
  second = third;
}

// Q9: Use a do-while loop to keep asking the user for a number until they guess the correct one.
var answer = 3;
var guess = 1;
do {
  console.log("Your guess is " + guess);
  guess++;
} while (guess <= answer);
console.log("Correct number is " + answer);

// Q10: Write a program using a for loop to check if a given number is prime.
var number = 7;
var prime = true;
for (var q = 2; q < number; q++) {
  if (number % q == 0) {
    prime = false;
  }
}
if (prime == true) {
  console.log(number + " is prime");
} else {
  console.log(number + " is not prime");
}
