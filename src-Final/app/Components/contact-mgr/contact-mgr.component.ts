import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/Models/contact';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-contact-mgr',
  templateUrl: './contact-mgr.component.html',
  styleUrls: ['./contact-mgr.component.css']
})
export class ContactMgrComponent implements OnInit {
  //put the data here:
  contactList : Contact[] = [];
  constructor(private contactService : ContactService) { }

  ngOnInit(): void {
     this.contactService.getAllContacts().subscribe((data : Contact[])=>{
      this.contactList = data;
     })
  }
}
