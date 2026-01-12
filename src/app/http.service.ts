import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient);
  constructor() {}

  baseUrl: string = 'https://jsonplaceholder.typicode.com';

  // Example method to demonstrate functionality
  //get, post, put, delete methods can be added here
  // generic methods for HTTP operations can be implemented

  getData(endpoint: string) {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.get(url);
  }

  postData(endpoint: string, data: any) {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.post(url, data);
  }

  updateData(endpoint: string, data: any) {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.put(url, data);
  }

  deleteData(endpoint: string) {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.delete(url);
  }
}
