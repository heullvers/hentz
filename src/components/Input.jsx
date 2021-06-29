import React from "react";
import styled from "styled-components";


const Label = styled.div`

  position: relative;
  height: 48px;
  width: 220px;
  margin-bottom: 3rem;

  input {
      position: absolute;
      top: 0;
      left: 0;
      border: ${props => props.erroInput ? "2px solid red" : "2px solid black"};
      border-radius: 3rem;
      outline:none;
      padding: .75rem;
      background: #fff;
      z-index: 1;
  }

  p{
      margin-top: 60px;
      font-size: 14px;
      color: red;
  }

  input:-webkit-outer-spin-button,
  input:-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number]{
    -moz-appearance: textfield;
  }
  


`;

const Input = (props) => {
    return( 
        <Label>
            <input type={props.type} name={props.name} onKeyUp={props.onChange} placeholder={props.nome} />
            <p>{props.erro}</p>
        </Label>
    );
}
    


export default Input;