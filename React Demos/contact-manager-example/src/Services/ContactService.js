import axios from "axios";
//axios is a external lib for interacting with RESTfull services from React. U can also use the fetch API from the React Core to do the same. 
export class ContactService{
    static baseUrl = "http://localhost:9000";

    static getAllContacts(){
        let getUrl = `${this.baseUrl}/contacts`;
        return axios.get(getUrl);
    }

    static getContact(contactId){
        let getUrl = `${this.baseUrl}/contacts/${contactId}`;
        return axios.get(getUrl);
    }

    static addContact(contact){
        let postUrl = `${this.baseUrl}/contacts`;
        return axios.post(postUrl, contact);
    }
}