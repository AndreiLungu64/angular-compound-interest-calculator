import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ParsedSubmittedData, SubmittedData } from './user-input.types';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5'); //5% defaulte expected return rate
  duration = signal('10');
  submittedData = output<SubmittedData>();
  calculate = output<ParsedSubmittedData>();

  onSubmit() {
    this.submittedData.emit({
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration(),
    });
  }

  onClick() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    });
  }
}
