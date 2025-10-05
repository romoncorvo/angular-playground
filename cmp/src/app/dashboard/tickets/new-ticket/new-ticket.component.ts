import {
  AfterViewInit,
  Component,
  // ElementRef,
  output,
  // viewChild,
} from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [ControlComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<{ title: string; text: string }>();

  newTicketForm = new FormGroup({
    title: new FormControl(''),
    text: new FormControl(''),
  });

  ngAfterViewInit(): void {
    // console.log(this.form().nativeElement);
  }
  onSubmit() {
    this.add.emit({
      title: this.newTicketForm.value.title!,
      text: this.newTicketForm.value.text!,
    });
    this.newTicketForm.patchValue({
      title: '',
      text: '',
    });
    // this.form().nativeElement.reset();
  }
}
