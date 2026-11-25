
import {
    findInactiveCustomers,
    findDepartmentSalaryLeaders,
    calculateMinimumAlignmentSwaps
} from "../src/index.js";

// 1. Customer activity monitoring
const customers = [
    { id: 1, name: "Joe" },
    { id: 2, name: "Henry" },
    { id: 3, name: "Sam" },
    { id: 4, name: "Max" }
];

const orders = [
    { id: 1, customerId: 3 },
    { id: 2, customerId: 1 }
];

console.log("Inactive Customers:");
console.log(findInactiveCustomers(customers, orders));

// 2. Department salary analysis
const departments = [
    { id: 1, name: "IT" },
    { id: 2, name: "Sales" }
];

const employees = [
    { id: 1, name: "Joe", salary: 70000, departmentId: 1 },
    { id: 2, name: "Jim", salary: 90000, departmentId: 1 },
    { id: 3, name: "Henry", salary: 80000, departmentId: 2 },
    { id: 4, name: "Sam", salary: 60000, departmentId: 2 },
    { id: 5, name: "Max", salary: 90000, departmentId: 1 }
];

console.log("\nDepartment Salary Leaders:");
console.log(
    findDepartmentSalaryLeaders(employees, departments)
);

// 3. Resource alignment
const assignments = [3, 2, 7, 6];

console.log("\nMinimum Alignment Swaps:");
console.log(
    calculateMinimumAlignmentSwaps(assignments)
);
