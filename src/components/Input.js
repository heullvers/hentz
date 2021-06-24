import React from "react";
import './Input.scss';
import styled from "styled-components";


const Label = styled.label`
    position: relative;
    font-size: 14px;
    border-top: 20px solid transparent;
    margin-bottom: 5px;
    --field-padding: 12px;
`;

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