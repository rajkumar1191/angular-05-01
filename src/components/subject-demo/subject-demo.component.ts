import { Component } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-subject-demo',
  standalone: true,
  template: `
    <h2>Subjects Demo</h2>
    <button (click)="emit()">Emit Value</button>
    <pre>{{ log }}</pre>
  `
})
export class SubjectDemoComponent {

  log = '';

  subject$ = new Subject<number>();
  behavior$ = new BehaviorSubject<number>(0);
  replay$ = new ReplaySubject<number>(2);
  async$ = new AsyncSubject<number>();

  emit() {
    const v = Math.floor(Math.random() * 100);

    this.log += `Emit: ${v}\n`;

    this.subject$.next(v);
    this.behavior$.next(v);
    this.replay$.next(v);
    this.async$.next(v);

    this.subject$.subscribe(x => this.log += `Subject: ${x}\n`);
    this.behavior$.subscribe(x => this.log += `Behavior: ${x}\n`);
    this.replay$.subscribe(x => this.log += `Replay: ${x}\n`);
    this.async$.subscribe(x => this.log += `Async: ${x}\n`);

    this.async$.complete();
  }
}
