class LoanConstants {

  //Loan Calculations
  static LOAN_TERM_YEARS = 30;
  static MAX_MONTHLY_MORTGAGE_RATIO = 1 / 3;
  static LOAN_PRINCIPAL_RATIO = 0.5;
  static LOAN_INTEREST_RATIO = 0.3;
  static LOAN_TAX_RATIO = 0.2;
  static ANNUAL_MONTHS = 12;

  //Property Restrictions
  static MIN_SQUARE_FEET = 250;
  static MIN_LOAN = 50000;
  static MAX_SQUARE_FEET_RATE = 0.0125;
  static BEDROOM_PER_SQUARE_FEET = 400;
  static MIN_LISTINGS = 2;
  static MAX_LISTINGS = 12;

  static ADJUSTMENT_FACTOR = 7;
  static ADJUSTMENT_RATE = 0.02;
}

module.exports = LoanConstants;