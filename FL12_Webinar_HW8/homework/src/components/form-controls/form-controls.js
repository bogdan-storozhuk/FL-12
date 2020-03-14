import React from 'react';
import {Link} from 'react-router-dom';
import './form-controls.css'

const FormControls = ({onSubmit}) => {
    return (<div className='form-controls'>
                <Link to='/'><button onClick={onSubmit}>Save</button></Link>
                <Link to='/'><button>Cancel</button></Link>  
            </div>);
}
export default FormControls;