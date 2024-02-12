const readlineSync = require('readline-sync');
const User = require('./User');
const Loan = require('./Loan');
const ListingGenerator = require('./ListingGenerator');

class App {
  start() {
    console.log('Welcome to the Real Estate Application!');
    const annualIncome = parseFloat(readlineSync.question('Please enter your annual income: '));

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

    const squareFeet = readlineSync.question('Minimum square footage: ');
    const bedrooms = readlineSync.question('Minimum number of bedrooms: ');
    const bathrooms = readlineSync.question('Minimum number of bathrooms: ');
    user.setRequirements(squareFeet, bedrooms, bathrooms);

    console.log("\nGenerating listings based on your requirements...");
    const listings = ListingGenerator.generateListings(maxLoan, user.requirements);
    listings.forEach((listing) => {
        console.log(`${listing.index}: Price $${listing.price.toFixed(2)}, Size: ${listing.squareFeet} sqft, $${listing.pricePerSquareFeet.toFixed(2)} price/sqft, ${listing.bedrooms} bed, ${listing.bathrooms} bath`);
    });
  }
}

const app = new App();
app.start();