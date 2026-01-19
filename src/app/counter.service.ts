import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private _count = signal(0);

  //readonly signal to expose count value
  count = this._count.asReadonly();

  increment() {
    this._count.update((n) => n + 1);
  }

  reset() {
    this._count.set(0);
  }
}
