import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  getData() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos');
  }

  getDataId(id) {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/'+id);
  }

}
