import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-onpush',
  standalone: true,
  imports: [],
  templateUrl: './onpush.component.html',
  styleUrl: './onpush.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushComponent {
  @Input() data: { value: number } = { value: 0 };
}
