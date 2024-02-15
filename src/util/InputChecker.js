const readlineSync = require('readline-sync');

class InputChecker {

  static getNumericInput(promptMessage) {
    let isValidInput = false;
    let input;

    while (!isValidInput) {
        input = readlineSync.question(promptMessage);
        if (!isNaN(parseFloat(input)) && isFinite(input)) {
            isValidInput = true;
        } else {
            console.log("Invalid input. Please enter a numeric value.");
        }
    }

    return parseFloat(input);
  }

}

module.exports = InputChecker;