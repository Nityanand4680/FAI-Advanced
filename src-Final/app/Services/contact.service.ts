import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../Models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseUrl : string = "http://localhost:64013/Contacts";
  //Function returns Observable<Contact[]> which will make it a Async Function. 
  getAllContacts() : Observable<Contact[]> {
    let tempUrl = this.baseUrl + "/All";
    return this.httpClient.get<Contact[]>(tempUrl);
  }

  getContact  = (id:number) : Observable<Contact> =>{
    let tempUrl = this.baseUrl + "/" + id;
    return this.httpClient.get<Contact>(tempUrl);
  }

  addContact  = (contact : Contact) : Observable<Contact> =>{
      return this.httpClient.post<Contact>(this.baseUrl, contact);
  }

  constructor(private httpClient : HttpClient) { }
}
