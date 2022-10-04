//import React from 'react';
import './index.css'
let ImageComponent = (props) => {
    return (
        <div>
            <img className='contact-img' src={props.url} alt="display image" />
        </div>
    );
}

export default ImageComponent