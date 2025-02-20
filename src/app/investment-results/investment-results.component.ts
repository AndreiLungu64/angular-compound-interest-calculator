import { Component, input } from '@angular/core';
import { AnnualData } from '../../investment-input.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
    results = input<AnnualData[]>();
}
