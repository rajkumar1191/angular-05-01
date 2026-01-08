import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { ServicesComponent } from '../components/services/services.component';
import { ContactComponent } from '../components/contact/contact.component';
import { CommonModule } from '@angular/common';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { TempConverterPipe } from './temp-converter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    CustomDirectiveDirective,
    TempConverterPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
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
  

  /*
     ngModule 
     standalone: true

     Binding Components in Angular Applications
     1. property binding
     2. event binding
     3. two-way binding

     @Input()  --> property binding - passing data from parent to child
     @Output() --> event binding - passing data from child to parent


     lifecycle hooks
     1. ngOnChanges() - 
     2. ngOnInit()
     3. ngDoCheck()
     4. ngAfterContentInit()
     5. ngAfterContentChecked()
     6. ngAfterViewInit()
     7. ngAfterViewChecked()
     8. ngOnDestroy()


     Pipes in Angular - take data as input and transform it to a desired output
     1. built-in pipes
        a. DatePipe
        b. UpperCasePipe
        c. LowerCasePipe
        d. CurrencyPipe
        e. DecimalPipe
        f. PercentPipe
        g. JsonPipe
        h. SlicePipe
      2. custom pipes
  */

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
