import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Employee } from '../employee-dashboard/models/employee-model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postEmployee(data: Employee) {
    return this.http.post<Employee>("http://localhost:3000/posts", data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  getEmployee() {
    return this.http.get("http://localhost:3000/posts")
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  editEmployee(data: Employee){
    return this.http.put("https://localhost:3000/posts", data);
  }

  deleteEmployee(data: number){
    return this.http.delete("https://localhost:3000/posts")
  }
}
