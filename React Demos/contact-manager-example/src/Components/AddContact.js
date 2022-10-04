import React, { useState } from "react";

let AddContact = ()=> {
    let [state, setState] = useState({
        contact : {
            "id": 0,
            "name": "",
            "email": "",
            "contactNo": 0,
            "photo": ""
        }
    })

    let { contact } = state;
    ///////////////////////////////////////////V-DOM//////////////////////////////////
 return(
    <React.Fragment>
        <pre>{JSON.stringify(contact)}</pre>
        <h2>AddContact</h2>
        <hr />
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <p>
                        <input name="id" value={contact.id} className="form-control" placeholder="Enter the Id"/>
                    </p>
                    <p>
                        <input className="form-control" placeholder="Enter the Contact Name"/>
                    </p>
                    <p>
                        <input className="form-control" placeholder="Enter the EMail"/>
                    </p>
                    <p>
                        <input className="form-control" placeholder="Enter the Contact No"/>
                    </p>
                    <p>
                        <input className="form-control" placeholder="Enter the FileName"/>
                    </p>
                    <p>
                        <button className="btn btn-success">Save Record</button>
                    </p>
                </div>
            </div>
        </div>
    </React.Fragment>
 );   
}
export default AddContact;