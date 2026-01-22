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


      signals - a new reactivity model in Angular used to manage state and handle change detection more efficiently
      core concepts:
      - signal creation - signal(), computed(), effect()
      - reading signals - use the signal as a function to get its current value
      - updating signals - use set(), update(), or mutating methods for arrays and objects
      - change detection - Angular automatically tracks signal dependencies and updates the UI when signals change


      RXJS in Angular
      - Reactive Extensions for JavaScript - a library for composing asynchronous and event-based programs using observable sequences
      - Observables - represent a stream of data that can be observed over time
      - Operators - functions that enable functional programming with observables (map, filter, reduce, mergeMap, concatMap, switchMap, etc.)
      - Subjects - special type of observable that allows values to be multicasted to multiple observers (Subject, BehaviorSubject, ReplaySubject, AsyncSubject)
      - Subscriptions - represent the execution of an observable and allow you to unsubscribe when no longer needed to prevent memory leaks


      ngRx - a state management library for Angular applications based on Redux principles and RxJS
      
      core concepts:
      - Store - a single source of truth for the application state
      - Actions - events that describe state changes
      - Reducers - pure functions that take the current state and an action to return a new state
      - Selectors - functions that extract specific pieces of state from the store
      - Effects - handle side effects like API calls and interact with the store


      component -> dispatch action -> effect (API call) -> reducer -> store -> selector -> component
  */

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
