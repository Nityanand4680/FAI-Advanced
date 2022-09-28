import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../Models/employee';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(inputData: Employee[], args: string): Employee[] {
    if(args == "")
      return inputData;
    else
      return inputData.filter((e)=>e.empName.toUpperCase(). includes(args.toUpperCase()));
  }
}
/*
CLI Command: ng g p Pipes/pipeName --skip-tests= true
Pipe is used to transform the data to be displayed on the User interface. 
Ang has its own set of pipes that users can use:
Currency, Date, Uppercase, lowercase
*/
