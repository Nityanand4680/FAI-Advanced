using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FinalWebApi.Models
{
    public class Contact
    {
        [Key]
        public int ContactID { get; set; }
        public string FullName { get; set; }
        public long PhoneNo { get; set; }
        public string Photo { get; set; }
        public string EmailAddress { get; set; }
    }

    public class ContactDbContext: DbContext
    {
        public ContactDbContext(DbContextOptions<ContactDbContext> options) : base(options)
        {

        }
        public DbSet<Contact> Contacts { get; set; }
    }
}
