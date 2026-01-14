import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signal-component',
  standalone: true,
  imports: [],
  templateUrl: './signal-component.component.html',
  styleUrl: './signal-component.component.css'
})
export class SignalComponentComponent {

  count = signal(0);

  doubleCount = computed(() => this.count() * 2);

  constructor() {
    //log whenever count changes
    effect(() => {
      console.log('Count changed to:', this.count());
    });
  }

  //update the signal values based on current value
  increment() {
    this.count.update(n => n + 1);
  }

  //update the signal values based on current value
  decrement() {
    this.count.update(n => n - 1);
  }

  //set the signal to a specific value
  reset() {
    this.count.set(0);
  }

}
