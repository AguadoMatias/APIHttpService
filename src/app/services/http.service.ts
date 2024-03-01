import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
  private url='https://jsonplaceholder.typicode.com';  
  
  constructor(private http: HttpClient) { }

  getAllTask(){
   const path = `${this.url}/todos/`
    return this.http.get<Task[]>(path);
 }
}

