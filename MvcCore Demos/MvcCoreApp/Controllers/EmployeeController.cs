using Microsoft.AspNetCore.Mvc;
using MyMvcCoreWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyMvcCoreWebApp.Controllers
{
    public class EmployeeController : Controller
    {
        public IActionResult Index()
        {
            FaiTrainingContext _context = new FaiTrainingContext();
            var model = _context.EmployeeTable.ToList();
            return View(model);
        }

        public IActionResult Edit(string id)
        {
            if (string.IsNullOrEmpty(id))
                throw new Exception("Id must be set");
            int eId = int.Parse(id);
            FaiTrainingContext context = new FaiTrainingContext();
            var model = context.EmployeeTable.FirstOrDefault((e) => e.EmpId == eId);
            if (model == null) throw new Exception("Employee not found!!!");
            return View(model);
        }

        [HttpPost]
        public IActionResult Edit(EmployeeTable model)
        {
            FaiTrainingContext context = new FaiTrainingContext();
            var selected = context.EmployeeTable.FirstOrDefault((e) => e.EmpId == model.EmpId);
            if (selected == null) throw new Exception("Failed to get the Employee details");
            if(!string.IsNullOrEmpty(model.EmpImage))
                selected.EmpImage = model.EmpImage;
            selected.EmpName = model.EmpName;
            selected.EmpAddress = model.EmpAddress;
            selected.EmpSalary = model.EmpSalary;
            context.SaveChanges();
            return RedirectToAction("Index");

        }

        public IActionResult AddNew()
        {
            return View(new EmployeeTable());
        }

        [HttpPost]
        public IActionResult AddNew(EmployeeTable model)
        {
            FaiTrainingContext context = new FaiTrainingContext();
            context.EmployeeTable.Add(model);
            context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
