import React from "react";
import styled from "styled-components";


const Label = styled.label`
    position: relative;
    font-size: 14px;
    border-top: 20px solid transparent;
    margin-bottom: 5px;
    --field-padding: 12px;

    input {
        border: 2px solid black;
        background: #fff;
        padding: var(--field-padding);
        border-radius: 3px;
        width: 200px;
        outline: none;
        font-size: 14px;
        border-radius: 20px;
    }

    span {
        position: absolute;
        left: var(--field-padding);
        width: calc(100% - (var(--field-padding) * 2));
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        top: 22px;
        line-height: 100%;
        transform: translateY(-50%);
        color: grey;
        transition: 
        top 0.3s ease,
        color 0.3s ease,
        font-size 0.3s ease;
    }

    input:focus + span{
        top: -10px;
        font-size: 10px;
        color: #222;
    }
`;

const Input = (props) => {
    return( 
        <Label className="custom-field three">
            <input type="text" placeholder="&nbsp;" name="name"/>
            <span className="placeholder">{props.nome}</span>
        </Label>
    );
}
    


export default Input;