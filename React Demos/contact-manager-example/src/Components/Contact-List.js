import React from "react";
import { Link } from "react-router-dom";
import ImageComponent from "../ImageComponent";

let ContactList = ()=> {
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
            <section className="col-md-6 m-2 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ImageComponent url="/images/pic1.png"/>
                        </div>
                        <div className="col-md-6">
                            <input disabled className="form-control m-2" placeholder="Contact Name" value={'Phaniraj'}/>
                            <input disabled className="form-control m-2" placeholder="Contact Email" value={'phanirajbn@gmail.com'}/>
                            <input disabled className="form-control m-2" placeholder="Contact Phone" value={9945205684}/>
                        </div>
                        <div className="col-md-2">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link to={'/contacts/edit/:contactId'} className="btn btn-warning">
                                    <i className="fa fa-pen"/>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <button className="btn btn-danger">
                                    <i className="fa fa-trash"/>
                                    </button>
                                </li>
                                <li className="list-group-item">
                                    <Link to={'/contacts/view/:contactId'} className="btn btn-success">
                                    <i className="fa fa-eye"/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>            
        </div>
    </div>   
    </React.Fragment> 
    );   
}
export default ContactList;