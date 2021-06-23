import React from "react";
import './Input.scss';

const Input = (props) => {

    return( 
        <label className="custom-field three">
            <input type="text" placeholder="&nbsp;" name="name"/>
            <span className="placeholder">{props.nome}</span>
            {/*errors.name && (<p className="error">{errors.name}</p>)*/}
        </label>
    );
}
    


export default Input;