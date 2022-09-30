using System;
using System.Collections.Generic;

namespace MyMvcCoreWebApp.Models
{
    public partial class EmployeeTable
    {
        public int EmpId { get; set; }
        public string EmpName { get; set; }
        public string EmpAddress { get; set; }
        public double EmpSalary { get; set; }
        public string EmpImage { get; set; }
    }
}
