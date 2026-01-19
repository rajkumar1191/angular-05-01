import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DefaultComponent } from '../default/default.component';
import { OnpushComponent } from '../onpush/onpush.component';
import { CounterService } from '../../app/counter.service';
import { ChildSignalComponent } from "../child-signal/child-signal.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [DefaultComponent, OnpushComponent, ChildSignalComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {
  count = 0;
  data = { value: 0 };


  constructor(public store: CounterService) {}

  increase() {
    this.count++;
    this.data = { value: this.count }; // new object reference
  }

  mutate() {
    this.data.value++; // same object reference
  }
}
