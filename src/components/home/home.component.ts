import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomDirectiveDirective } from '../../app/custom-directive.directive';
import { TempConverterPipe } from '../../app/temp-converter.pipe';
import { SignalComponentComponent } from '../signal-component/signal-component.component';
import { ParentComponent } from '../parent/parent.component';
import { RxjsOperatorDemoComponent } from '../rxjs-operator-demo/rxjs-operator-demo.component';
import { SubjectDemoComponent } from '../subject-demo/subject-demo.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CustomDirectiveDirective,
    TempConverterPipe,
    SignalComponentComponent,
    ParentComponent,
    RxjsOperatorDemoComponent,
    SubjectDemoComponent,
    UserComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'angular-tutorial';
  srcpath = 'https://angular.io/assets/images/logos/angular/angular.png';
  name = '';
  course = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular'];
  day = 'Monday';
  date = new Date();
  price = 1500;
  decimalNumber = 0.75344343435;
  percentage = 0.25;
  jsonData = { name: 'Angular', version: '12' };

  handleClick() {
    alert('Welcome to Angular Tutorial');
  }

  handleInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.name = inputElement.value;
  }

  handleServiceList(services: string[]) {
    console.log('Received services from ServicesComponent:', services);
  }
}
