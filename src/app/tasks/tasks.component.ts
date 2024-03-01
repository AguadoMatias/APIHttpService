import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];  
  
  constructor(private httpService: HttpService){
    
  }
 
  getAllTasks() {
    this.httpService.getAllTask()
    .subscribe(tasks => {
      console.log(tasks);
    });
  }

  ngOnInit(): void {
    this.httpService
      .getAllTask()
      .subscribe((result: Task[]) => (this.tasks = result));
  }    

}
