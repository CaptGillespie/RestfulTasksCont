import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  tasks = [];

  constructor(private _httpService: HttpService){
    this.getTasksFromService();
  }

  getTasksFromService(){
    let obs = this._httpService.getTasks();
    obs.subscribe((data) => {
      this.tasks = data;
      console.log(data);
      console.log(this.tasks);
    });
  }
}
