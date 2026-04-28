function studentForm(name, age, course) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Course: ${course}`);
}

studentForm("Naveen", 22, "MERN");

function calc(a, b) {
  console.log(`Addition: ${a + b}`);
  console.log(`Subtraction: ${a - b}`);
  console.log(`Multiplication: ${a * b}`);
}

calc(10, 5);

function greet(user) {
  console.log(`Hello ${user}`);
}

greet("Kamal");
greet("Praveen");
greet("Sai");

function square(num) {
  return num * num;
}

console.log(square(5)); // 25

function scopeTest() {
  let secret = "javascript";
}

// console.log(secret); 
// Result: ReferenceError: secret is not defined

let boys = ["car", "bike"];
let girls = ["doll", "teddy"];

let combined = [...boys, ...girls];
console.log(combined); // ["car", "bike", "doll", "teddy"]

function sumAll(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

console.log(sumAll(10, 20, 30, 40)); // 100

let colors = ["red", "green", "blue"];
let [c1, c2, c3] = colors;

console.log(c1, c2, c3);

let emp = {
  name: "Naveen",
  role: "Developer",
  salary: "5LPA"
};

let { name, role } = emp;
console.log(name, role);

function* offerGenerator() {
  yield "10% cashback";
  yield "20% cashback";
  yield "50% cashback";
  return "Try again";
}

const offer = offerGenerator();

console.log(offer.next().value); // 10%
console.log(offer.next().value); // 20%
console.log(offer.next().value); // 50%
console.log(offer.next().value); // Try again
console.log(offer.next().done ? "No more offers" : ""); // No more offers

const add = (a) => (b) => (c) => a + b + c;

console.log(add(10)(20)(30)); // 60

function marks(...nums) {
  let total = nums.reduce((acc, val) => acc + val, 0);
  let average = total / nums.length;
  
  console.log(`Total = ${total}`);
  console.log(`Average = ${average}`);
}

marks(80, 90, 70, 60);

function register(name, role, ...skills) {
  console.log(`Name: ${name}`);
  console.log(`Role: ${role}`);
  console.log(`Skills: ${skills.join(" ")}`);
}

register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");