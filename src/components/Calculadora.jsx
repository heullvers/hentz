import React from 'react';
import NavBar from './NavBar';
import Input from './Input';
import styled from 'styled-components';

import {useHistory} from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    background-color: #f1f4f5;
`;

const Calculator = styled.div`
    width: 40%;
    min-height: 620px;

    h1{
        text-align: center;
    }

    @media (min-width: 760px) {
        h1{
            margin-bottom: 100px;
        }
    }

    h3{
        font-weight: 100;
    }

    @media (max-width: 760px) {
        &{
            width: 100%;
            padding: 10px; 
        }
    }


`;

const Options = styled.select`
    width: 200px;
    background: #fff;
    padding: 12px;
    border-radius: 20px;
    outline: none;
    color: #000;
    font-size: 14px;
    border: 2px solid #000;

`;

const Gender = styled.div`
    input{
        margin: 10px;
        cursor: pointer;
    }

`;

const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
`;


const Parametros = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Botao = styled.button`
    padding: 10px;
    width: 220px;
    border-radius: 20px;
    cursor: pointer;
    background: #000;
    color: #fff;
    font-weight: 900;

    
    @media (min-width: 760px) {
        &{
            margin-top: 30px;
        }
    }

    @media (max-width: 760px) {
        &{
            margin-top: 30px;
        }
    }

`;


const Calculadora = () => {
    let history = useHistory();
    
    const calcular = (param)=>{
        history.push({pathname:"/resultado"});
    }

    return(
        <>  
            <NavBar cor="vermelho"></NavBar>
            <Container>
                <Calculator>
                    <h1>CALCULADORA</h1>
                    <form>
                        <h3> Qual seu físico atual? </h3>
                        <Options name="fisico">
                            <option value="magro">Magro</option>
                            <option value="pesonormal">Peso normal</option>
                            <option value="sobrepeso">Sobrepeso</option>
                            <option value="obeso">Obeso</option>
                        </Options>
                        <h3> SEXO </h3>
                        <Gender>
                            <input type="radio" id="male" name="gender" value="male"/>
                            <label>Masculino</label>
                            <input type="radio" id="female" name="gender" value="female"/>
                            <label>Feminino</label>
                        </Gender>
                        <h3> Parâmetros </h3>
                        <Parametros>
                            <Input nome="peso(kg)"></Input>
                            <Input nome="altura(cm)"></Input>
                            <Input nome="idade"></Input>
                        </Parametros>
                        <h3> Nível de atividade </h3>
                        <Options name="fisico">
                            <option value="sedentario">Sedentário</option>
                            <option value="leve">Exercício leve</option>
                            <option value="ativo">Moderadamente ativo</option>
                            <option value="muito">Muito Ativo</option>
                            <option value="muitoAtivo">Extremamente Ativo</option>
                        </Options>
                        <ContainerButton>
                            <Botao type="button" className="botao-calcular btn" onClick={calcular}>CALCULAR</Botao>
                        </ContainerButton>
                    </form>
                </Calculator>
            </Container>
        </>
        
    );
}

export default Calculadora;