import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css',
})
export class DefaultComponent {
  @Input() data: { value: number } = { value: 0 };
}
