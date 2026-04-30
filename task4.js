// Task 1: Accessing Elements
let arr1 = [10, 20, 30, 40, 50];
console.log(arr1[0]);                   // First: 10
console.log(arr1[arr1.length - 1]);     // Last: 50
console.log(arr1.length);               // Length: 5

// Task 2: Push & Pop
let arr2 = [1, 2, 3];
arr2.push(4, 5);                        // [1, 2, 3, 4, 5]
arr2.pop();                             // Removes 5
console.log(arr2);                      // [1, 2, 3, 4]

// Task 3: Includes Check
let arr3 = ["html", "css", "javascript", "react"];
console.log(arr3.includes("javascript")); // true

let emp = [
  { name: "A", salary: 10000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 30000 }
];

// Task 4: Filter
const highEarners = emp.filter(e => e.salary > 20000);

// Task 5: Map
const namesOnly = emp.map(e => e.name);

// Task 6: Reduce
const totalSalary = emp.reduce((acc, curr) => acc + curr.salary, 0);

// Task 7: Remove Duplicates
let dupArr = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(dupArr)];

// Task 8: Find Largest Number
let nums = [10, 200, 5, 90];
let largest = Math.max(...nums);

// Task 9: Reverse String without .reverse()
let str = "hello";
let reversed = "";
for (let char of str) {
  reversed = char + reversed;
}

// Task 10: Group by Salary
let empGroup = [{name:"A", salary:10000}, {name:"B", salary:50000}, {name:"C", salary:10000}];
let grouped = empGroup.reduce((acc, curr) => {
  acc[curr.salary] = acc[curr.salary] || [];
  acc[curr.salary].push(curr.name);
  return acc;
}, {});

// Task 11: Flatten Array (Recursive)
let nested = [1, [2, [3, [4]]]];
function flatten(arr) {
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}

// Task 12: Custom Sort (Descending)
let sortArr = [5, 2, 9, 1];
sortArr.sort((a, b) => b - a);

// Task 13: Second Largest
let arrBonus = [10, 50, 20, 40];
let secondLargest = arrBonus.sort((a, b) => b - a)[1];

// Task 14: Count Characters
let strCount = "aabbccdde";
let counts = {};
for (let char of strCount) {
  counts[char] = (counts[char] || 0) + 1;
}
console.log(counts);