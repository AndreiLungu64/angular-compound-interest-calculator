import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { ParsedInputData, InputData } from '../../investment-input.model';

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
  expectedReturn = signal('5'); //5% default expected return rate
  duration = signal('10'); //10% default duration
  submittedData = output<ParsedInputData>();

  onSubmit() {
    this.submittedData.emit({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    });
  }
}
