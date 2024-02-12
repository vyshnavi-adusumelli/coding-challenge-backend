const readlineSync = require('readline-sync');
const User = require('./User');
const Loan = require('./Loan');

class App {
  start() {
    console.log('Welcome to the Real Estate Application!');
    const annualIncome = parseFloat(readlineSync.question('Please enter your annual income: '));

    const user = new User(annualIncome);

    const loan = new Loan(user);
    const maxLoan = loan.calculateMaxLoan();
    if (maxLoan < 50000) {
        console.log(`Based on your income, loan cannot be granted to you right now`);
    }
    else {
        console.log(`Based on your income, the maximum loan amount you can afford is: $${maxLoan.toFixed(2)}`);
    }

  }
}

const app = new App();
app.start();