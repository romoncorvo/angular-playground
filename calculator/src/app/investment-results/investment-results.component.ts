import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { InvestmentData } from '../app';

@Component({
  selector: 'app-investment-results',
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input() investmentResults?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];
}
