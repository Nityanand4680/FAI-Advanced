using EmployeeWebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeWebApi.Controllers
{
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private MyDbContext _context = null;

        public EmployeeController(MyDbContext context)
        {
            _context = context;
        }

        [Route("Employees/All")]
        public List<Employee> GetAll() => _context.Employees.ToList();

        [Route("Employees/{id}")]
        public Employee GetEmp(int id) => _context.Employees.FirstOrDefault((e) => e.EmpId == id);

        [Route("Employees")]
        [HttpPost]
        public string AddNew(Employee emp)
        {
            _context.Employees.Add(emp);
            _context.SaveChanges();
            return "Employee added to the server";  
        }

        [Route("Employees")]
        [HttpPut]
        public string Update(Employee emp)
        {
            var selected = _context.Employees.FirstOrDefault((e) => e.EmpId == emp.EmpId);
            if (selected == null) return "Employee not found to update";
            selected.EmpName = emp.EmpName;
            selected.EmpSalary = emp.EmpSalary;
            selected.EmpAddress = emp.EmpAddress;
            selected.EmpImage = emp.EmpImage;
            _context.SaveChanges();
            return "Employee updated in the server";
        }

        [Route("Employees/{id}")]
        [HttpDelete]
        public string Delete(int id)
        {
            var foundRec = _context.Employees.FirstOrDefault((e) => e.EmpId == id);
            if (foundRec == null) return "Failed to delete as no record found";
            _context.Employees.Remove(foundRec);
            _context.SaveChanges();
            return "Employee deleted successfully";
        }
    }
}
