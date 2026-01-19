import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterService } from '../../app/counter.service';

@Component({
  selector: 'app-child-signal',
  standalone: true,
  imports: [],
  templateUrl: './child-signal.component.html',
  styleUrl: './child-signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildSignalComponent {

  constructor(public store: CounterService) {}
}
