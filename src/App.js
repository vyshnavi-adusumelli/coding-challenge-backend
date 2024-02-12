const readlineSync = require('readline-sync');
const User = require('./model/User');
const Loan = require('./model/Loan');
const ListingGenerator = require('./util/ListingGenerator');
const BillGenerator = require('./util/BillGenerator');

class App {
  start() {
    console.log('\nWelcome to the Real Estate Application!');
    const annualIncome = parseFloat(readlineSync.question('\nPlease enter your annual income: '));

    const user = new User(annualIncome);

    const loan = new Loan(user);
    const maxLoan = loan.calculateMaxLoan();
    if (maxLoan < 50000) {
        console.log(`Based on your income, loan cannot be granted to you right now`);
        process.exit();
    }
    else {
        console.log(`Based on your income, the maximum loan amount you can afford is: $${maxLoan.toFixed(2)}`);
    }

    console.log("\nPlease enter the following details of your choice")
    const squareFeet = readlineSync.question('Minimum square footage: ');
    const bedrooms = readlineSync.question('Minimum number of bedrooms: ');
    const bathrooms = readlineSync.question('Minimum number of bathrooms: ');
    user.setRequirements(squareFeet, bedrooms, bathrooms);

    console.log("\nGenerating listings based on your requirements...");
    const listings = ListingGenerator.generateListings(maxLoan, user.requirements);
    listings.forEach((listing, index) => {
        console.log(`${index + 1}: Price $${listing.price.toFixed(2)}, Size: ${listing.squareFeet} sqft, $${listing.pricePerSquareFeet.toFixed(2)} price/sqft, ${listing.bedrooms} bed, ${listing.bathrooms} bath`);
    });

    const choice = readlineSync.question('\nEnter the number of the property you wish to purchase, or 0 to exit: ');
    const index = parseInt(choice);
    if (index === 0)
        process.exit();
    else {
        BillGenerator.generateLoanBillBreakdown(listings[index].price);
    }
  }
}

const app = new App();
app.start();