let students = [
 {id:1, name:"Naveen", mark:85, course:"MERN"},
 {id:2, name:"John", mark:45, course:"Python"},
 {id:3, name:"Priya", mark:72, course:"Java"},
 {id:4, name:"Arun", mark:95, course:"React"}
];

// 📌 Task 1: Print All Students
console.log("--- Task 1: Student List ---");
students.forEach(s => console.log(`${s.id} ${s.name} ${s.mark} ${s.course}`));

// 📌 Task 2: Pass / Fail
console.log("\n--- Task 2: Status ---");
students.forEach(s => {
    let status = s.mark >= 50 ? "Pass" : "Fail";
    console.log(`${s.name} - ${status}`);
});

// 📌 Task 3: Grade System
console.log("\n--- Task 3: Grading ---");
students.forEach(s => {
    let grade;
    if (s.mark >= 90) grade = "A Grade";
    else if (s.mark >= 75) grade = "B Grade";
    else if (s.mark >= 50) grade = "C Grade";
    else grade = "Fail";
    console.log(`${s.name}: ${grade}`);
});

// 📌 Task 4: Topper Student
console.log("\n--- Task 4: Topper ---");
let topper = students.reduce((prev, current) => (prev.mark > current.mark) ? prev : current);
console.log(`Topper is ${topper.name} - ${topper.mark}`);

// 📌 Task 5: Course Search
console.log("\n--- Task 5: Search (React) ---");
let search = students.filter(s => s.course === "React");
search.forEach(s => console.log(`${s.id} ${s.name} ${s.mark} ${s.course}`));

// 📌 Task 6: Add New Student
console.log("\n--- Task 6: Add Student & Print ---");
students.push({id:5, name:"Rahul", mark:88, course:"Node JS"});
students.forEach(s => console.log(`${s.id} ${s.name} ${s.mark} ${s.course}`));

// 📌 Task 7: Attendance System
console.log("\n--- Task 7: Attendance ---");
let status = "present"; 
switch(status) {
    case "present": console.log("Welcome"); break;
    case "absent": console.log("Mark Absent"); break;
    case "leave": console.log("Approved Leave"); break;
    default: console.log("Invalid Status");
}

// 📌 Task 8: Login System
console.log("\n--- Task 8: Login ---");
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Success");
} else {
    console.log("Invalid User");
}