import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Hola Mundo';
  message = 'Nuestra primer App en Angular en la Academia Bromus';

}


