import React, { useEffect, useState }  from 'react';
import { Link, useParams } from "react-router-dom";
import { ContactService } from '../Services/ContactService';
import  Contact  from "./Contact";

let EditContact = ()=> {
    let { contactId } = useParams();
    let [state, setState] = useState({
        selected :{}
    })

    useEffect(()=>{
        async function getRec(){
            let response = await ContactService.getContact(contactId)
            setState({selected : response.data})
        }
        getRec();
    },[contactId]);

    let {selected } = state
    ////////////////////////V-DOM Area////////////////////////////////////
    return(
       <React.Fragment>
           <div className='container'>
            <Contact contact = {selected} disabled= {false}/>
           </div>
           <button className='btn btn-danger m-2'>Save</button>
           <Link to={'/contacts/list'} className="btn btn-dark text-light">Back</Link>
       </React.Fragment>
    );   
   }
   export default EditContact;