
/**
 * OpsLens - Operational Data Insights Toolkit
 *
 * A collection of reusable algorithms for operational
 * data analysis and resource alignment.
 */

/**
 * Identifies customers who have never placed an order.
 *
 * @param {Array} customers - Customer records.
 * @param {Array} orders - Order records.
 * @returns {Array} Customers without any recorded orders.
 */
export function findInactiveCustomers(customers, orders) {
    const activeCustomerIds = new Set(
        orders.map(order => order.customerId)
    );

    return customers.filter(
        customer => !activeCustomerIds.has(customer.id)
    );
}

/**
 * Finds the highest-paid employee(s) in each department.
 * Multiple employees with the same maximum salary are preserved.
 *
 * @param {Array} employees - Employee records.
 * @param {Array} departments - Department records.
 * @returns {Array} Department salary leaders.
 */
export function findDepartmentSalaryLeaders(
    employees,
    departments
) {
    const departmentNames = new Map(
        departments.map(department => [
            department.id,
            department.name
        ])
    );

    const highestSalaries = new Map();

    // Determine the maximum salary for every department.
    for (const employee of employees) {
        const departmentId = employee.departmentId;
        const currentMaximum = highestSalaries.get(departmentId);

        if (
            currentMaximum === undefined ||
            employee.salary > currentMaximum
        ) {
            highestSalaries.set(
                departmentId,
                employee.salary
            );
        }
    }

    // Return every employee matching their department maximum.
    return employees
        .filter(employee =>
            employee.salary === highestSalaries.get(
                employee.departmentId
            )
        )
        .map(employee => ({
            Department: departmentNames.get(
                employee.departmentId
            ),
            Employee: employee.name,
            Salary: employee.salary
        }));
}

/**
 * Calculates the minimum swaps required to align
 * resource identifiers with alternating slot parity.
 *
 * Even positions require even identifiers.
 * Odd positions require odd identifiers.
 *
 * @param {number[]} assignments - Resource identifiers.
 * @returns {number} Minimum swaps, or -1 if impossible.
 */
export function calculateMinimumAlignmentSwaps(assignments) {
    let evenPositionMismatches = 0;
    let oddPositionMismatches = 0;

    for (let index = 0; index < assignments.length; index++) {
        const resourceId = assignments[index];

        if (
            !Number.isSafeInteger(resourceId) ||
            resourceId < 0
        ) {
            throw new TypeError(
                "Resource identifiers must be non-negative integers."
            );
        }

        // Check whether the slot and resource have matching parity.
        if (index % 2 !== resourceId % 2) {
            if (index % 2 === 0) {
                evenPositionMismatches++;
            } else {
                oddPositionMismatches++;
            }
        }
    }

    // Every incorrect even slot must pair with an
    // incorrect odd slot for a valid swap.
    if (evenPositionMismatches !== oddPositionMismatches) {
        return -1;
    }

    return evenPositionMismatches;
}
