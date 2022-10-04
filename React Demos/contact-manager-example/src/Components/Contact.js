import React from 'react'
import ImageComponent from '../ImageComponent'
import { Navigation } from './Navigation'
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
                    <input disabled={props.disabled} className="form-control m-2" placeholder="Contact Name" value={props.contact.name} />
                    <input disabled={props.disabled} className="form-control m-2" placeholder="Contact Email" value={props.contact.email} />
                    <input disabled={props.disabled} className="form-control m-2" placeholder="Contact Phone" value={props.contact.contactNo} />
                </div>
                <Navigation id={props.contact.id}/>                
            </div>
        </div>    
            </section>
    </React.Fragment>
  )
}
