import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';
/*
Tasks:
create the variables for storing the data
*/ 
@Component({
  selector: 'app-emp-mgr',
  templateUrl: './emp-mgr.component.html',
  styleUrls: ['./emp-mgr.component.css']
})
export class EmpMgrComponent implements OnInit {
  empList: Employee[] = [];
  constructor(private empService : EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployeesFromServer();
  }
  //private function that gets the data by calling the getAllEmployees function of the service. 
  getAllEmployeesFromServer(){
    this.empService.getAllEmployees().subscribe((data : Employee[])=>{
      this.empList = data
    })
  }
}
