import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient){
  }

  getTasks(){
    return this._http.get('/tasks');
  }


  getOneTask(id){
    let tempObservable = this._http.get(`/tasks/${id}`);
  }

  createTask(newTask) {
    let tempObservable = this._http.post('/tasks', newTask);
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Created a task!!", data));
  }

  updateTask(id, updatedTask){
    let tempObservable = this._http.put(`/tasks/${id}`, updatedTask);
    tempObservable.subscribe(data => console.log("Updating a task!!", data));
  }

  deleteTask(id){
    let tempObservable = this._http.delete(`/tasks/${id}`);
  }
}


