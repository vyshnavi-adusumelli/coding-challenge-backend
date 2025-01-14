const readlineSync = require('readline-sync');
const User = require('./model/User');
const ListingGenerator = require('./util/ListingGenerator');
const BillGenerator = require('./util/BillGenerator');
const LoanConstants = require('./util/LoanConstants');
const InputChecker = require('./util/InputChecker');

class App {
  start() {
    console.log('\nWelcome to the Real Estate Application!');
    const annualIncome = InputChecker.getNumericInput('\nPlease enter your annual income: ');

    const user = new User().setAnnualIncome(annualIncome);

    const maxLoan = BillGenerator.calculateMaxLoan(user.annualIncome);
    user.setMaxLoan(maxLoan);
    if (maxLoan < LoanConstants.MIN_LOAN) {
        console.log(`Based on your income, loan cannot be granted to you right now`);
        process.exit();
    }
    console.log(`Based on your income, the maximum loan amount you can afford is: $${user.maxLoan.toFixed(2)}`);

    console.log("\nPlease enter the following details of your choice")
    const squareFeet = InputChecker.getNumericInput('Minimum square footage: ');
    const bedrooms = InputChecker.getNumericInput('Minimum number of bedrooms: ');
    const bathrooms = InputChecker.getNumericInput('Minimum number of bathrooms: ');
    user.setRequirements(squareFeet, bedrooms, bathrooms);

    console.log("\nGenerating listings based on your requirements...");

    const listings = ListingGenerator.generateListings(maxLoan, user.requirements);

    while (true) {
        listings.forEach((listing, index) => {
            console.log(`${index + 1}: Price $${listing.price.toFixed(2)}, Size: ${listing.squareFeet} sqft, $${listing.pricePerSquareFeet.toFixed(2)} price/sqft, ${listing.bedrooms} bed, ${listing.bathrooms} bath`);
        });

        const choice = readlineSync.question('\nEnter the number of the property you wish to purchase, or 0 to exit: ');
        const index = parseInt(choice);
        if (index === 0)
            process.exit();
        else {
            BillGenerator.generateLoanBillBreakdown(listings[index - 1].price);
        }
    }
  }
}

const app = new App();
app.start();