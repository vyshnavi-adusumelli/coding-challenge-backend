class Loan {
  constructor(user) {
    this.user = user;
    this.loanTermYears = 30;
  }

  calculateMaxLoan() {
    const monthlyIncome = this.user.annualIncome / 12;
    const maxMonthlyMortgage = monthlyIncome / 3;
    const loanPrincipal = maxMonthlyMortgage * 0.5;
    const loanInterest = maxMonthlyMortgage * 0.3;
    const loanTax = maxMonthlyMortgage * 0.2;
    return loanPrincipal * 12 * this.loanTermYears;
  }
}

module.exports = Loan;
