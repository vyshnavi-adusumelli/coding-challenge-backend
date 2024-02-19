const readlineSync = require('readline-sync');
const LoanConstants = require('./LoanConstants');

class BillGenerator {

  static generateLoanBillBreakdown(price) {
    const monthlyPrincipalAmount = price / LoanConstants.LOAN_TERM_YEARS / LoanConstants.ANNUAL_MONTHS;
    const loanAmount = monthlyPrincipalAmount / LoanConstants.LOAN_PRINCIPAL_RATIO;
    const interest = loanAmount * LoanConstants.LOAN_INTEREST_RATIO;
    const taxes = loanAmount * LoanConstants.LOAN_TAX_RATIO;
    const totalMonthlyPayment = loanAmount + interest + taxes;

    console.log("\nLoan Monthly Payment Details for Selected Property:");
    console.log(`Total Monthly Payment: $${totalMonthlyPayment.toFixed(2)}`);
    console.log(`Principal Payment: $${loanAmount.toFixed(2)}`);
    console.log(`Interest Payment: $${interest.toFixed(2)}`);
    console.log(`Taxes & Insurance Payment: $${taxes.toFixed(2)}`);

    console.log("\nLoan Lifetime Payment Details for Selected Property:");
    console.log(`Total Lifetime Payment: $${(totalMonthlyPayment * LoanConstants.ANNUAL_MONTHS * LoanConstants.LOAN_TERM_YEARS).toFixed(2)}`);
    console.log(`Principal Payment: $${(loanAmount * LoanConstants.ANNUAL_MONTHS * LoanConstants.LOAN_TERM_YEARS).toFixed(2)}`);
    console.log(`Interest Payment: $${(interest * LoanConstants.ANNUAL_MONTHS * LoanConstants.LOAN_TERM_YEARS).toFixed(2)}`);
    console.log(`Taxes & Insurance Payment: $${(taxes * LoanConstants.ANNUAL_MONTHS * LoanConstants.LOAN_TERM_YEARS).toFixed(2)} \n`);
  }

  static calculateMaxLoan(annualIncome) {
    const monthlyIncome = annualIncome / LoanConstants.ANNUAL_MONTHS;
    const maxMonthlyMortgage = monthlyIncome * LoanConstants.MAX_MONTHLY_MORTGAGE_RATIO;
    const loanPrincipal = maxMonthlyMortgage * LoanConstants.LOAN_PRINCIPAL_RATIO;
    const loanInterest = maxMonthlyMortgage * LoanConstants.LOAN_INTEREST_RATIO;
    const loanTax = maxMonthlyMortgage * LoanConstants.LOAN_TAX_RATIO;
    return loanPrincipal * LoanConstants.ANNUAL_MONTHS * LoanConstants.LOAN_TERM_YEARS;
  }

}

module.exports = BillGenerator;