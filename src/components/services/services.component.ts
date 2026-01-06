import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  @Output() serviceList: EventEmitter<string[]> = new EventEmitter<string[]>();

  

  handleClick() {
    const services = ['Web Development', 'App Development', 'SEO Optimization'];
    this.serviceList.emit(services);
  }


}
