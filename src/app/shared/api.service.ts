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
    return this.http.post<Employee>("http://localhost:3000/employees", data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  getEmployees() {
    return this.http.get("http://localhost:3000/employees")
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  editEmployee(data: Employee){
    return this.http.put("http://localhost:3000/employees/", data);
  }

  deleteEmployee(id: string){
    return this.http.delete("http://localhost:3000/employees/" + id)
  }
}

