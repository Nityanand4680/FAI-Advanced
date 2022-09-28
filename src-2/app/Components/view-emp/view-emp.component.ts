import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {
  //data of the Component...
  empId : any;
  selected : Employee = {} as Employee
  constructor(private empService : EmployeeService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    //get the parameters from the Url using paramMap function of the activatedRoute. 
    this.activatedRoute.paramMap.subscribe((map)=>{
      //Get the id from the Map(Map is JS's version of dictionary)
      this.empId = map.get("id");//Get the value of the key called id....
      if(this.empId != null){//if not null call the service method....
        this.empService.getEmployee(parseInt(this.empId)).subscribe((data)=>{
          this.selected = data as Employee;//set the foundEmp object to the member. 
        })
      }
    })
  }
}
