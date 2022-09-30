using FinalWebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalWebApi.Controllers
{
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private ContactDbContext _context = null;
        public ContactsController(ContactDbContext context)
        {
            _context = context;
        }

        [Route("Contacts/All")]
        public List<Contact> AllContacts() => _context.Contacts.ToList();

        [Route("Contacts/{id}")]
        public Contact GetContact(int id) => _context.Contacts.FirstOrDefault((c) => c.ContactID == id);

        [Route("Contacts")]
        [HttpPost]
        public Contact AddNew(Contact contact)
        {
            _context.Contacts.Add(contact);
            _context.SaveChanges();
            return _context.Contacts.Last();//As this would the last contact that was added successfully
        }

        [Route("Contacts")]
        [HttpPut]
        public Contact Update(Contact contact)
        {
            var found = GetContact(contact.ContactID);
            _copy(found, contact);
            _context.SaveChanges();
            return found;
        }

        [Route("Contacts")]
        [HttpDelete]
        public Contact Delete(int id)
        {
            var found = GetContact(id);
            _context.Contacts.Remove(found);
            _context.SaveChanges();
            return found;
        }
        private Contact _copy(Contact contact, Contact c)
        {
            contact.EmailAddress = c.EmailAddress;
            contact.FullName = c.FullName;
            contact.PhoneNo = c.PhoneNo;
            contact.Photo = c.Photo;
            contact.ContactID = c.ContactID;
            return contact;
        }
    }
}
