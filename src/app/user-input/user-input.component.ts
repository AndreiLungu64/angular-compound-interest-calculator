import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubmittedData } from './user-input.types';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = signal('');
  annualInvestment = signal('');
  expectedReturn = signal('');
  duration = signal('');
  submittedData = output<SubmittedData>();

  onSubmit() {
    this.submittedData.emit({
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration(),
    });
  }
}
