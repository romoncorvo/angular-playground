import { Component, linkedSignal, signal } from '@angular/core';

interface ShippingMethod {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  template: ``,
})
export class App {
  constructor() {
    this.changeShipping(2);
    this.changeShippingOptions();
    console.log(this.selectedOption());
  }

  shippingOptions = signal<ShippingMethod[]>([
    { id: 0, name: 'Ground' },
    { id: 1, name: 'Air' },
    { id: 2, name: 'Sea' },
  ]);

  selectedOption = linkedSignal<ShippingMethod[], ShippingMethod>({
    source: this.shippingOptions,
    computation: (newOptions, previous) => {
      return (
        newOptions.find((opt) => opt.name === previous?.value.name) ??
        newOptions[0]
      );
    },
  });

  changeShipping(index: number) {
    this.selectedOption.set(this.shippingOptions()[index]);
  }

  changeShippingOptions() {
    this.shippingOptions.set([
      { id: 0, name: 'Email' },
      { id: 1, name: 'Sea' },
      { id: 2, name: 'Postal Service' },
    ]);
  }
}
