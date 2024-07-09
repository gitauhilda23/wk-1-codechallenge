// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deductions
    const KRA_RATE = 0.3;
    const NHIF_RATE = 0.025;
    const NSSF_RATE = 0.06;

    let grossSalary = basicSalary + benefits;

    let tax = grossSalary * KRA_RATE;
    let nhifDeduction = grossSalary * NHIF_RATE;
    let nssfDeduction = grossSalary * NSSF_RATE;

    let netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

    return {
        grossSalary: grossSalary,
        netSalary: netSalary,
        tax: tax,
        nhif: nhifDeduction,
        nssf: nssfDeduction
    };
}

// Example usage:
let basic = prompt("Enter basic salary:");
let benefits = prompt("Enter benefits:");

basic = parseFloat(basic);
benefits = parseFloat(benefits);

if (!isNaN(basic) && !isNaN(benefits)) {
    let salaryDetails = calculateNetSalary(basic, benefits);
    console.log("Salary Details:");
    console.log(`Gross Salary: ${salaryDetails.grossSalary}`);
    console.log(`Tax: ${salaryDetails.tax}`);
    console.log(`NHIF Deduction: ${salaryDetails.nhif}`);
    console.log(`NSSF Deduction: ${salaryDetails.nssf}`);
    console.log(`Net Salary: ${salaryDetails.netSalary}`);
} else {
    console.log("Please enter valid numbers for salary and benefits.");
}
