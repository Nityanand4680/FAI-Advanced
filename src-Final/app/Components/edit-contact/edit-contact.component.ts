import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/Models/contact';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  //to get the Id:
  id : any;
  selectedContact : Contact = {} as Contact;
  constructor(private cs : ContactService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map)=>{
      this.id = map.get("id");
      this.cs.getContact(this.id).subscribe((data)=>{
        this.selectedContact = data;
      })
    })
  }

  onSave(){
    
  }
}
