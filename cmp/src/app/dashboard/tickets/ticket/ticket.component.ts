import { Component, input, output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticket = input.required<Ticket>({});
  closeTicket = output();
  detailsVisible = signal(false);

  onMarkAsCompleted() {
    this.closeTicket.emit();
  }
  onToggleDetails() {
    this.detailsVisible.update((x) => !x);
  }
}
