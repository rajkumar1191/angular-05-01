import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
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

      Forms in Angular
      1. template-driven forms
        - use FormsModule
      2. reactive forms
      - use ReactiveFormsModule


      services and dependency injection
      - @Injectable()
      - providedIn: 'root'
      - constructor(private serviceName: ServiceType)
      - allow us to write reusable, maintainable, and testable code
  */

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
