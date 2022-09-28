//In Typescript, any class if it has to be used in another file, it should be exported. Interface is used here to represent data but will not contain any functions in it. The data that we represent in our App will have only fields, no methods, so it is good to create it as an interface object.

//ng g i Models/Employee
export interface Employee {
    empId: number
    empName: string
    empAddress: string
    empSalary : number
    empImage: string//Will be the Url of the Image.
}
