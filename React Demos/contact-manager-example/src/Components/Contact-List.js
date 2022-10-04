import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImageComponent from "../ImageComponent";
import { ContactService } from '../Services/ContactService';
import Contact from "./Contact";
let ContactList = ()=> {

//define the data for UR Component
 let [state, setState] = useState({
    contacts : [],
    errorMsg : ''
 });

 //State has to retrive the data. 
 useEffect(()=>{
    async function fetchData(){
        const response = await ContactService.getAllContacts();//API call....
        setState({...state, contacts : response.data});
    }
    fetchData()
 }, []);
 
 let { contacts, errorMsg} = state;

 ///////////////////////////V-DOM Section////////////////////////////////////////////////////////   
 return(
    <React.Fragment>
        <div className="container">
        <div className="row">
            <div className="col-md-8 m-2">
                <div className="container">
                    <div className="row">
                        <div className="col">
                           <input type={'search'} className="form-control" placeholder="Search For Name"/>
                        </div>
                        <div className="col">
                           <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>  
                
            </div>
        </div>
        <hr />
        <div className="row">
            {
                contacts.map(c => {
                    return (
                        <Contact contact= {c}/> 
                    );
                })   
            }            
        </div>
    </div>   
    </React.Fragment> 
    );   
}
export default ContactList;