const readlineSync = require('readline-sync');

function gatherIncomeData() {
  const annualIncome = readlineSync.question('Please enter your annual income: ');
  return parseFloat(annualIncome);
}

function main() {
  console.log('Welcome to the Real Estate Application!');
  const annualIncome = gatherIncomeData();
  if (isNaN(annualIncome) || annualIncome <= 0) {
    console.log('Invalid income entered. Please restart the application and enter a valid number.');
    return;
  }
}

main();