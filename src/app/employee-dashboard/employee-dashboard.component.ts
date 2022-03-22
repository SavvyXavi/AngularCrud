import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from './models/employee-model';

import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  formValue!: FormGroup;
  employeeModelObj: Employee = new Employee();
  employeeList !:Employee[];
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [''],
      salary: ['']
    })

    this.getEmployeeList();
  }

  // get f() {
  //   return this.formValue.controls;
  // }

  createEmployee() {
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.phoneNumber = this.formValue.value.phoneNumber;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.api.postEmployee(this.employeeModelObj)
    .subscribe(res => {
      console.log(res);
      alert("Employee Added Successfully")
      let cancelInfo = document.getElementById('cancel');
      cancelInfo?.click();
      this.formValue.reset();
      this.getEmployeeList();
    },
    err=>{
      alert("Something went wrong!")
    }
    )
  }


  getEmployeeList(){
    this.api.getEmployee()
    .subscribe(res => {
      this.employeeList = res
    })
  }

  deleteEmployee(id: number) {
    this.api.deleteEmployee(id)
    .subscribe(res => {
      alert("Employee deleted")
    })
  }
}
