import { Injectable, signal, computed } from '@angular/core';
import { AnnualData, ParsedInputData } from '../../investment-input.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  resultsData = signal<AnnualData[]>([]);

  //prettier-ignore
  public calculateInvestmentResults(data: ParsedInputData) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
    const annualData: AnnualData[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        (expectedReturn / 100) * (investmentValue + annualInvestment);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = interestEarnedInYear * year;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.resultsData.set(annualData);
  }

  validateData() {
    return this.resultsData().every((result) =>
      Object.values(result).every(
        (value) => typeof value === 'number' && value > 0
      )
    );
  }
}
