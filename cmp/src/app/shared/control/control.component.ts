import {
  AfterContentInit,
  // afterNextRender,
  // afterEveryRender,
  Component,
  contentChild,
  ElementRef,
  // HostListener,
  inject,
  // HostBinding,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()', // Ugly syntax
  },
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick2() {
  //   console.log('click');
  // }
  // This can also be used instead of the host property, but it shouldn't be used

  label = input.required<string>();
  private el = inject(ElementRef);
  private control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input',
    );

  constructor() {
    // afterEveryRender(() => {
    //   console.log('afterRender');
    // });
    //
    // afterNextRender(() => {
    //   console.log('afterNextRender');
    // });
  }

  ngAfterContentInit() {
    // console.log(this.control().nativeElement);
  }
  onClick() {
    // console.log(this.el.nativeElement);
    // console.log(this.control().nativeElement);
    // console.log(this.el);
  }
}
