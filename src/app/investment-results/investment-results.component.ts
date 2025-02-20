import { Component, computed, input } from '@angular/core';
import { AnnualData } from '../../investment-input.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  results = input<AnnualData[]>([]);
  isDataValid = computed<boolean>(() =>
    this.results().every((result) =>
      Object.values(result).every(
        (value) => typeof value === 'number' && value > 0
      )
    )
  );
}
