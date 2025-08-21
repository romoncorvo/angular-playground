import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../InvestmentService';

@Component({
  selector: 'app-investment-results',
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);
  investmentResults = computed(() => this.investmentService.resultsData());
}
