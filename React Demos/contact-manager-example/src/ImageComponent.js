//import React from 'react';
import './index.css' //for the contact-img class

let ImageComponent = (props) => {
    return (
        <div>
            <img className='contact-img card-img' src={props.url} alt="display image" />
        </div>
    );
}

export default ImageComponent