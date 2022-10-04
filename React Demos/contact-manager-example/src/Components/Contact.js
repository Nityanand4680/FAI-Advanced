import React from 'react'
import { Link } from 'react-router-dom'
import ImageComponent from '../ImageComponent'
export default function Contact(props) {
  return (
    <React.Fragment>
        <section className="col-md-6 m-2 bg-light">
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <ImageComponent url={props.contact.photo}/>
                </div>
                <div className="col-md-6">
                    <input disabled className="form-control m-2" placeholder="Contact Name" value={props.contact.name} />
                    <input disabled className="form-control m-2" placeholder="Contact Email" value={props.contact.email} />
                    <input disabled className="form-control m-2" placeholder="Contact Phone" value={props.contact.contactNo} />
                </div>
                <div className="col-md-2">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link to={'/contacts/edit/:contactId'} className="btn btn-warning">
                                <i className="fa fa-pen" />
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <button className="btn btn-danger">
                                <i className="fa fa-trash" />
                            </button>
                        </li>
                        <li className="list-group-item">
                            <Link to={'/contacts/view/:contactId'} className="btn btn-success">
                                <i className="fa fa-eye" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>    
            </section>
    </React.Fragment>
  )
}
