import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})

//EventEmitter is an Ang-class that is used as a delegate functionality in Ang
export class AddEmpComponent implements OnInit {
  //Output directive will trigger an Event when the User clicks the add button of the component. 
  @Output() emitter : EventEmitter<Employee> = new EventEmitter<Employee>();
  newEmp : Employee = {} as Employee; //represents the Emp to return to the Master.
  url : any;
  constructor() { }

  ngOnInit(): void {
  }
  //for handling File upload feature for the images. 
  onChange(event : any){
    if(event.target.files && event.target.files.length){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_ev)=>{
        this.url = reader.result;
      }
    }else{
      alert("No file has been selected");
    }
  }
  onAddClick(){
    debugger;
    this.newEmp.empImage = this.url as string;
    this.emitter.emit(this.newEmp);//emit takes the arg of which object U R returning. 
  }
}
