import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee';

//Injectable makes this class singleton object and will be able to inject it into any Component of this module. 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url :string = "http://localhost:61648/Employees/All";//Url of the Web API that U R trying to access. 

  //Inject the injectable objects into a component, class, service, using constructor. 
  constructor(private httpClient : HttpClient) {
    //Here httpClient is a singleton object that is injected by angular when U consume the Employee Service object. 
  }
  /*
  http://localhost:61648/Employees/All ==> for GetAll
  http://localhost:61648/Employees/{id} ===> for Getting single Employee
  http://localhost:61648/Employees ==> For adding and updating
  http://localhost:61648/Employees/{id} ==> For Deleting...
  */
  //We will create functions that can be called by all our components of this application. 
  public getAllEmployees() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.url);
  }

  public getEmployee(id : number) : Observable<Employee>{
    const tempUrl = 'http://localhost:61648/Employees/' + id;
    return this.httpClient.get<Employee>(tempUrl);
  }

  public updateEmployee(emp : Employee) : Observable<string>{
    const tempUrl = "http://localhost:61648/Employees"
    return this.httpClient.put<string>(tempUrl, emp);
  } 

  public addEmployee(emp : Employee) :Observable<string>{
    const tempUrl = "http://localhost:61648/Employees"
    return this.httpClient.post<string>(tempUrl, emp);
  }
}
