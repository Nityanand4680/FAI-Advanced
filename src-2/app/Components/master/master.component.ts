import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
 //Members of the component:
  empList : Employee[] = []
  selectedEmp : Employee = {} as Employee//Typecast it to treat the obj as Employee
  searchValue : string = ""; //Contain the name to search...
  constructor() { }

  ngOnInit(): void {
    //This is the place to initialize UR data...
    this.empList.push({ empId : 1, empName : "Phaniraj", empAddress: "Bangalore", empSalary : 56000, empImage : './assets/images/pic1.png'})
    this.empList.push({ empId : 2, empName : "Vinod", empAddress: "Shimoga", empSalary : 56000, empImage : './assets/images/pic2.png'})
    this.empList.push({ empId : 3, empName : "Sudharshan", empAddress: "Tumkur", empSalary : 56000, empImage : './assets/images/pic3.png'})
    this.empList.push({ empId : 4, empName : "Jenny", empAddress: "New York", empSalary : 56000, empImage : './assets/images/pic4.png'})
    this.empList.push({ empId : 5, empName : "Flora", empAddress: "Kansas City", empSalary : 56000, empImage : './assets/images/pic5.png'})
    this.empList.push({ empId : 6, empName : "Daniel", empAddress: "Santa Clara", empSalary : 56000, empImage : './assets/images/pic6.png'})
    this.empList.push({ empId : 7, empName : "Venus", empAddress: "San Francisco", empSalary : 56000, empImage : './assets/images/pic7.png'})
    this.empList.push({ empId : 8, empName : "Chris Evert", empAddress: "New York", empSalary : 56000, empImage : './assets/images/pic8.png'})
    this.empList.push({ empId : 9, empName : "Tom Harris", empAddress: "Los Angeles", empSalary : 56000, empImage : './assets/images/pic9.png'})
    this.empList.push({ empId : 10, empName : "Arnold", empAddress: "Chicago", empSalary : 56000, empImage : './assets/images/pic10.png'})
  }
//creating a function that takes an arg of the type Employee
  onDetailClick(emp : Employee){
    this.selectedEmp = emp;
  }
 //Event handler for the emitter event of the add-emp Component.
  onAddNew(emp : Employee){
    debugger;
    this.empList.push(emp);
    alert("Employee added to database");
  }
}
