import React,{Fragment} from 'react';
import './form-field.css';

const FormField=({onLabelChange,fieldName,value})=>{
    return (<Fragment>
            <label className='field-label' htmlFor={fieldName}>{fieldName}*</label>
            <input value={value} onChange={onLabelChange} type="text" id={fieldName}></input>
        </Fragment>);
}
export default FormField;