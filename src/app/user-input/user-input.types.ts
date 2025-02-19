export interface SubmittedData {
  initialInvestment: string;
  annualInvestment: string;
  expectedReturn: string;
  duration: string;
}

export interface ParsedSubmittedData{
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}

