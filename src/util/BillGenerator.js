const readlineSync = require('readline-sync');

class BillGenerator {

  static generateLoanBillBreakdown(price) {
    const monthlyPrincipalAmount = price / 30 / 12;
    const loanAmount = monthlyPrincipalAmount * 2;
    const interest = loanAmount * 0.3;
    const taxes = loanAmount * 0.2;
    const totalMonthlyPayment = loanAmount + interest + taxes;

    console.log("\nLoan Monthly Payment Details for Selected Property:");
    console.log(`Total Monthly Payment: $${totalMonthlyPayment.toFixed(2)}`);
    console.log(`Principal Payment: $${loanAmount.toFixed(2)}`);
    console.log(`Interest Payment: $${interest.toFixed(2)}`);
    console.log(`Taxes & Insurance Payment: $${taxes.toFixed(2)}`);

    console.log("\nLoan Lifetime Payment Details for Selected Property:");
    console.log(`Total Lifetime Payment: $${(totalMonthlyPayment * 12 * 30).toFixed(2)}`);
    console.log(`Principal Payment: $${(loanAmount * 12 * 30).toFixed(2)}`);
    console.log(`Interest Payment: $${(interest * 12 * 30).toFixed(2)}`);
    console.log(`Taxes & Insurance Payment: $${(taxes * 12 * 30).toFixed(2)} \n`);

  }

}

module.exports = BillGenerator;