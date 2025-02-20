export interface InputData {
  initialInvestment: string;
  annualInvestment: string;
  expectedReturn: string;
  duration: string;
}

export interface ParsedInputData {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface AnnualData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
