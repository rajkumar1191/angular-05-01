import { Component, OnDestroy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  debounceTime, distinctUntilChanged, switchMap,
  tap, catchError, map, takeUntil,
  mergeMap,
  concatMap
} from 'rxjs/operators';
import { Subject, forkJoin, from, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rxjs-operator-demo',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  template: `
    <h2>RxJS Operators</h2>
    <input [formControl]="search" placeholder="Search user">
    <pre>{{ status }}</pre>
    <ul>
      <li *ngFor="let u of users">{{ u.name }}</li>
    </ul>

    <h2>mergeMap vs concatMap vs forkJoin</h2>
    <button (click)="merge()">mergeMap</button>
    <button (click)="concat()">concatMap</button>
    <button (click)="fork()">forkJoin</button>
    <pre>{{ log }}</pre>
  `
})
export class RxjsOperatorDemoComponent implements OnDestroy {

  log = '';
  ids = [1,2,3];

  search = new FormControl('');
  users: any[] = [];
  status = '';
  destroy$ = new Subject<void>();

  //switchMap, concatMap, mergeMap and exhaustMap example

  constructor(private http: HttpClient) {
    this.search.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(() => this.status = 'Loading...'),
      switchMap(term =>
        this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
          .pipe(
            map(list => list.filter(u =>
              u.name.toLowerCase().includes((term || '').toLowerCase())
            )),
            catchError(() => of([]))
          )
      ),
      takeUntil(this.destroy$)
    ).subscribe(data => {
      this.users = data;
      this.status = 'Completed';
    });
  }

  merge() {
    this.log = 'Parallel:\n';
    from(this.ids).pipe(
      mergeMap(id => this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .pipe(tap(() => this.log += `User ${id}\n`))
      )
    ).subscribe();
  }

  concat() {
    this.log = 'Sequential:\n';
    from(this.ids).pipe(
      concatMap(id => this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .pipe(tap(() => this.log += `User ${id}\n`))
      )
    ).subscribe();
  }

  fork() {
    this.log = 'Wait All:\n';
    forkJoin({
      a: this.http.get('https://jsonplaceholder.typicode.com/users/1'),
      b: this.http.get('https://jsonplaceholder.typicode.com/users/2'),
      c: this.http.get('https://jsonplaceholder.typicode.com/users/3')
    }).subscribe(() => this.log += 'All Completed\n');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
