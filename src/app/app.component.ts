import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import {
  ParsedSubmittedData,
  SubmittedData,
} from './user-input/user-input.types';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent],
})
export class AppComponent {
  calculateInvestmentResults(data: ParsedSubmittedData) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      data;
    data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = (expectedReturn / 100) * (investmentValue + annualInvestment);
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
    console.log(annualData);
  }
}
