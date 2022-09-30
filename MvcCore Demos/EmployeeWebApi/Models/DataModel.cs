using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeWebApi.Models
{
    [Table("EmployeeTable")]
    public class Employee
    {
        [Key]
        public int EmpId { get; set; }
        public string EmpName { get; set; }
        public string EmpAddress { get; set; }
        public double EmpSalary { get; set; }
        public string EmpImage { get; set; }
    }

    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {

        }

        public DbSet<Employee> Employees { get; set; }

        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Employee>().HasData(
                new Employee { EmpId = 111, EmpAddress ="Bangalore", EmpName ="Phaniraj", EmpSalary = 56000 },
                new Employee { EmpId = 112, EmpAddress = "Bangalore", EmpName = "Govardhan", EmpSalary = 36000 }
            );
        }
    }
}
