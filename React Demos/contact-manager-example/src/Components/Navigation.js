import React from 'react'
import { Link } from 'react-router-dom'
export const Navigation = (props) => {
  return (
    <React.Fragment>
        <div className="col-md-2">
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to={`/contacts/edit/${props.id}`} className="btn btn-warning">
                        <i className="fa fa-pen" />
                    </Link>
                </li>
                <li className="list-group-item">
                    <button className="btn btn-danger">
                        <i className="fa fa-trash" />
                    </button>
                </li>
                <li className="list-group-item">
                    <Link to={`/contacts/view/${props.id}`} className="btn btn-success">
                        <i className="fa fa-eye" />
                    </Link>
                </li>
            </ul>
        </div>
    </React.Fragment>
  )
}
