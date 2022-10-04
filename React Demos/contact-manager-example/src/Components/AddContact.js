import React, { useState } from "react";
import { ContactService } from "../Services/ContactService";
import { useNavigate } from 'react-router-dom'

let AddContact = ()=> {
    let navigate = useNavigate();
    let [state, setState] = useState({
        contact : {
            "id": 0,
            "name": "",
            "email": "",
            "contactNo": 0,
            "photo": ""
        }
    })
    let updateInput = (event)=>{
        setState({
            ...state, 
            contact : {
                ...state.contact, 
                [event.target.name] : event.target.value
            }
        })
    }

    let { contact } = state;

    let onSubmit = (event)=>{
        event.preventDefault();
        ContactService.addContact(contact).then((res)=>{
            alert("Added successfully");
            navigate('/contacts/list', { replace :true});
        })

    }
    ///////////////////////////////////////////V-DOM//////////////////////////////////
 return(
    <React.Fragment>
        <pre>{JSON.stringify(contact)}</pre>
        <h2>AddContact</h2>
        <hr />
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={onSubmit}>
                    <p>
                        <input name="id" value={contact.id} onChange={updateInput} className="form-control" placeholder="Enter the Id"/>
                    </p>
                    <p>
                        <input onChange={updateInput} className="form-control" value={contact.name} name="name" placeholder="Enter the Contact Name"/>
                    </p>
                    <p>
                        <input onChange={updateInput} className="form-control" value={contact.email} name="email" placeholder="Enter the EMail"/>
                    </p>
                    <p>
                        <input onChange={updateInput} className="form-control" value={contact.contactNo} name="contactNo" placeholder="Enter the Contact No"/>
                    </p>
                    <p>
                        <input onChange={updateInput} className="form-control" value={contact.photo} name="photo" placeholder="Enter the FileName"/>
                    </p>
                    <p>
                        <button className="btn btn-success">Save Record</button>
                    </p>
                    </form>
                </div>
            </div>
        </div>
    </React.Fragment>
 );   
}
export default AddContact;