import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData } from '../app';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentData>();
  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration,
    } as InvestmentData);
  }
}
