import React from 'react';
import NavBar from './NavBar';
import Input from './Input';
import styled from 'styled-components';
import { Formik, Field , Form} from 'formik';
import schema from './schema';

import {useHistory} from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    background-color: #f1f4f5;
`;

const Calculator = styled.div`
    width: 50%;
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

const Formulario = styled(Form)`

    p {
        font-size: 14px;
        color: red;
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
    width: 100%;
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

    function onSubmit(values, actions){
        history.push({pathname:"/resultado"});

    }

    return(
        <>  
            <NavBar cor="vermelho"></NavBar>
            <Container>
                <Calculator>
                    <h1>CALCULADORA</h1>
                    <Formik
                    onSubmit={onSubmit}
                    validationSchema={schema}
                    initialValues={{
                        fisico: 'magro',
                        gender: '',
                        peso: '',
                        altura: '',
                        idade: '',
                        atividade: 'sedentario'
                    }}
                    render={({values, errors}) => (
                        <Formulario>
                            <h3> Qual seu físico atual? </h3>
                            {errors.fisico && (
                                <p>{errors.fisico}</p>
                            )}
                            <Field as={Options} name="fisico">
                                <option value="magro">Magro</option>
                                <option value="pesonormal">Peso normal</option>
                                <option value="sobrepeso">Sobrepeso</option>
                                <option value="obeso">Obeso</option>
                            </Field>
                            {errors.gender && (
                                <p>{errors.gender}</p>
                            )}
                            <h3> SEXO </h3>
                            <Field as={Gender}>
                                <input type="radio" id="male" name="gender" value="male"/>
                                <label>Masculino</label>
                                <input type="radio" id="female" name="gender" value="female"/>
                                <label>Feminino</label>
                            </Field>
                            <h3> Parâmetros </h3>
                            <Parametros>
                                <Field as={Input} nome="peso(kg)" name="peso" type="number" erro={errors.peso} ></Field>
                                <Field as={Input} nome="altura(cm)" name="altura" type="number" erro={errors.altura}></Field>
                                <Field as={Input} nome="idade" name="idade" type="number" erro={errors.idade}></Field>
                            </Parametros>
                            <h3> Nível de atividade </h3>
                            <Field as={Options} name="atividade">
                                <option value="sedentario">Sedentário</option>
                                <option value="leve">Exercício leve</option>
                                <option value="ativo">Moderadamente ativo</option>
                                <option value="muito">Muito Ativo</option>
                                <option value="muitoAtivo">Extremamente Ativo</option>
                            </Field>

                            <ContainerButton>
                                <Botao type="submit" className="botao-calcular btn">CALCULAR</Botao>
                            </ContainerButton>
                        </Formulario>
                    )}
                    >

                    </Formik>
                    
            
                </Calculator>
            </Container>
        </>
        
    );
}

export default Calculadora;