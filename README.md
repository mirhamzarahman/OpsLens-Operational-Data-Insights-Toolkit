# 🔍 OpsLens — Operational Data Insights Toolkit

> Turning everyday operational data into meaningful insights through efficient algorithms and intelligent data processing.

![JavaScript](https://img.shields.io/badge/JavaScript-ES2022+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Ready-339933?style=flat-square&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Dependencies](https://img.shields.io/badge/Dependencies-Zero-brightgreen?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)

---

## 📌 Project Overview

**OpsLens** is a lightweight operational data analysis toolkit built with JavaScript. It helps organizations understand customer activity, analyze employee compensation, and improve the alignment of alternating resource assignments.

The project combines three practical data-processing capabilities:

- **Customer Activity Monitoring:** Detect customers who have not placed any orders.
- **Department Performance Analysis:** Identify the highest-paid employees in each department.
- **Workload Alignment:** Calculate the minimum number of swaps required to align resources with alternating slot requirements.

Rather than relying on unnecessary data processing, OpsLens uses efficient algorithms to produce clear and actionable results.

---

## 🌍 Real-World Conceptual Scenario

Imagine a growing company that wants to improve its operational visibility. The company faces three challenges:

1. **Customer Retention & Outreach:** Its customer database contains people who have never purchased anything. The marketing team wants to identify these customers for follow-up campaigns.
2. **Compensation & Equity Review:** Its HR department needs to identify the highest-paid employees in every department, including cases where multiple employees share the same salary.
3. **Resource Scheduling:** Its operations team uses alternating processing slots that require resources with matching even/odd identifiers. Some assignments are incorrect, and the team wants to correct them using the fewest possible swaps.

OpsLens provides a small collection of analytical tools to address these challenges.

---

## 🧠 Core Concepts

| Module | Algorithmic Concept | Practical Purpose |
| :--- | :--- | :--- |
| **Customer Monitor** | Set Lookup / Anti-Join | Find inactive customers |
| **Department Analyzer** | Hash Map / Grouped Aggregation | Find department salary leaders |
| **Alignment Engine** | Parity Mismatch Counting | Minimize assignment swaps |

---

## ⚙️ How the System Works

OpsLens processes structured data through three independent modules.

### 1. Customer Activity Monitor

- **Objective:** Identify customers who have never placed an order.
- **How it works:** The system collects customer IDs that appear in the order records and compares them against the complete customer list. Customers without a matching order are classified as inactive.
- **Algorithm:** Set-based Filtering (Anti-Join).

#### Step-by-step Logic
1. Read the customer dataset.
2. Extract customer IDs from all order records.
3. Store those IDs in a JavaScript `Set`.
4. Iterate through the customer list.
5. Return customers whose IDs are absent from the order set.

#### Example

**Input:**

```javascript
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
```

**Output:**

```javascript
[
  { id: 2, name: "Henry" },
  { id: 4, name: "Max" }
];
```

**Result:** `Henry` and `Max` have no recorded orders.

---

### 2. Department Performance Analyzer

- **Objective:** Find the highest-paid employees in every department.
- **How it works:** The system groups employee salaries by department, identifies the maximum salary, and returns every employee earning that amount.
- **Algorithm:** Hash Map + Grouped Maximum Aggregation.

#### Step-by-step Logic
1. Read employee and department records.
2. Create a mapping between department IDs and department names.
3. Calculate the maximum salary for each department.
4. Compare every employee's salary against their department's maximum.
5. Return all matching employees.
6. Preserve ties when multiple employees share the highest salary.

#### Example

**Input:**

```javascript
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
```

**Output:**

```javascript
[
  { Department: "IT", Employee: "Jim", Salary: 90000 },
  { Department: "Sales", Employee: "Henry", Salary: 80000 },
  { Department: "IT", Employee: "Max", Salary: 90000 }
];
```

**Result:**
- `Jim` and `Max` are the salary leaders in `IT`.
- `Henry` leads the `Sales` department.
- The algorithm preserves multiple employees when they share the highest salary.

---

### 3. Workload Alignment Engine

- **Objective:** Correct assignments in an alternating processing system with the minimum number of swaps.
- **How it works:** In this conceptual model, each processing slot has a parity requirement:
  - Even-numbered slots require resources with even identifiers.
  - Odd-numbered slots require resources with odd identifiers.
  The system identifies incorrect assignments and calculates the minimum swaps needed to correct them.
- **Algorithm:** Parity Mismatch Counting.

#### Step-by-step Logic
1. Iterate through the resource assignment array.
2. Compare each position's parity with its resource ID parity.
3. Count mismatches at even and odd positions to determine the minimum swaps required.
