import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

export type InvestmentData = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
