import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
//Input directive allows the Container component to send inputs to this component. 
export class EmpDetailComponent implements OnInit {
  @Input() empDetails : Employee = {} as Employee
  constructor() { }

  ngOnInit(): void {
  }

}
