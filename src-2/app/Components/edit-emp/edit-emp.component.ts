import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  foundEmp : Employee = {} as Employee;
  empId : any;
  constructor(private empService : EmployeeService, private activatedRoute : ActivatedRoute) { }

  //Find the matching record and display it in the View
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map)=>{
      this.empId = map.get("id");
      this.empService.getEmployee(parseInt(this.empId)).subscribe((data : Employee)=>{
        this.foundEmp = data;
      })
    })
  }

  //Event handler for the Submit button that is clicked after the changes are made by the user.
  onSubmit(): void{
    this.empService.updateEmployee(this.foundEmp).subscribe((data)=>{
      alert(data);
    })
  }
}
