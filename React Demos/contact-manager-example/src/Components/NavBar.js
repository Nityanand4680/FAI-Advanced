import React from "react";
import { Link } from 'react-router-dom'
let NavBar = ()=> {
 return(
    <React.Fragment>
         <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
             <div className="container">
                 <Link to={'/'} className="navbar-brand">
                     View
                     <i className="fa fa-mobile text-warning" />
                     <span className="text-warning">Contacts</span>
                 </Link>
             </div>
             <div className="container">
                 <Link to={'/contacts/add'} className="btn btn-success text-light">
                     <i className="fa fa-plus-circle text-warning"/>
                     Add New Contact
                 </Link>
             </div>
         </nav>
    </React.Fragment>
 );   
}
export default NavBar;