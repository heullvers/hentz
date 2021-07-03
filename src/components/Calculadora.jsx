import React from 'react';
import NavBar from './NavBar';
import Input from './Input';
import styled from 'styled-components';
import { Formik, Field , Form} from 'formik';
import schema from './schema';

import {useHistory} from 'react-router-dom';

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

    span{
        margin-left: 10px;
        font-size: 12px;
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

    const calculateIMC = (weight, height) => {
        
        return weight / (height * height);

    }

    const calculateWater = (weight) => {
        
        return weight * 0.035;

    }

    const calculateHarris = (age, weight, height, gender) => {
        let basal = 0;
        if(gender){ //homem
            basal += 66.5 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
        }
        else{ //mulher
            basal += 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
        }

        return basal;
    }

    const calculateMifflin = (age, weight, height, gender) => {
        let basal = 0;
        if(gender){ //homem
            basal += (10 * weight) + (6.25 * height) - (5 * age) + 5;
        }
        else{ //mulher
            basal += (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }

        return basal;
    }

    const calculateGet = (basal, activity) => {
        let get = 0;
        if(activity === "1"){
            get = basal * 1.2;
        }
        else if(activity === "2"){
            get = basal * 1.375;
        }
        else if(activity === "3"){
            get = basal * 1.52;
        }
        else if(activity === "4"){
            get = basal * 1.7;
        }
        else{
            get = basal * 1.9;
        }

        return get;
    }

    function selectAlterado(e){
        if(e.target.value === "1"){
            document.getElementById("explicacaoAtividade").innerHTML = "pouco ou nenhum exercício";
        }
        else if(e.target.value === "2"){
            document.getElementById("explicacaoAtividade").innerHTML = "1-3 dias por semana";
        }   
        else if(e.target.value === "3"){
            document.getElementById("explicacaoAtividade").innerHTML = "3-5 dias por semana";
        }
        else if(e.target.value === "4"){
            document.getElementById("explicacaoAtividade").innerHTML = "6-7 dias por semana";
        }
        else if (e.target.value === "5"){
            //5
            document.getElementById("explicacaoAtividade").innerHTML = "2x por dia 6-7 dias por semana";
        }
        
    }

    function onSubmit(values, actions){
        let physique = values.fisico;
        let gender = values.gender;
        let weight = values.peso;
        let height = values.altura;
        let age = values.idade;
        let activity = values.atividade;
        let goal = values.objetivo;


        //calculo basal
        let basal = 0;
        if(physique !== "obeso"){
            //magro, normal e sobrepeso
            basal = calculateHarris(age, weight, height, gender);
        }
        else{
            //obeso
            basal = calculateMifflin(age, weight, height, gender);
        }

        let manutencao = calculateGet(basal, activity);

        let objetivoPerder = manutencao - 500;
        let objetivoManter = manutencao;
        let objetivoGanhar = manutencao + 500;

        //calculo imc
        let imc = calculateIMC(weight, height/100);
        let imcChoice = 0;

        if(imc <= 18.5){
            imcChoice = "1";
        }
        else
        if (imc <= 24.99) {
            imcChoice = "2";
        }
        else
        if (imc <= 29.99) {
            imcChoice = "3";
        }
        else{
            imcChoice = "4";
        }
        
        //calculo água
        let water = calculateWater(weight);

        history.push({pathname:"/resultado", state: {manutencao, basal, activity, objetivoPerder, objetivoManter, objetivoGanhar, imcChoice, goal, water}});

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
                        fisico: '',
                        gender: '',
                        peso: '',
                        altura: '',
                        idade: '',
                        atividade: '',
                        objetivo: ''
                    }}
                    render={({values, errors}) => (
                        <Formulario>
                            <h3> Qual seu físico atual? </h3>
                            <Field as={Options} name="fisico">
                                <option hidden>Selecione</option>
                                <option value="1">Magro</option>
                                <option value="2">Peso normal</option>
                                <option value="3">Sobrepeso</option>
                                <option value="4">Obeso</option>
                            </Field>
                            {errors.fisico && (
                                <p>{errors.fisico}</p>
                            )}
                            <h3> Nível de atividade </h3>
                            <Field as={Options} name="atividade" onClick={selectAlterado}>
                                <option hidden>Selecione</option>
                                <option value="1">Sedentário</option>
                                <option value="2">Levemente ativo</option>
                                <option value="3">Moderadamente ativo</option>
                                <option value="4">Muito Ativo</option>
                                <option value="5">Extremamente Ativo</option>
                            </Field>
                            <span id="explicacaoAtividade"></span>
                            {errors.atividade && (
                                <p>{errors.atividade}</p>
                            )}

                            <h3> Objetivo </h3>
                            <Field as={Options} name="objetivo">
                                <option hidden>Selecione</option>
                                <option value="2">Emagrecer</option>
                                <option value="3">Manter</option>
                                <option value="4">Ganhar</option>
                            </Field>
                            {errors.objetivo && (
                                <p>{errors.objetivo}</p>
                            )}
                            <h3> SEXO </h3>
                            <Field as={Gender}>
                                <input type="radio" id="male" name="gender" value="1"/>
                                <label>Masculino</label>
                                <input type="radio" id="female" name="gender" value="0"/>
                                <label>Feminino</label>
                            </Field>
                            {errors.gender && (
                                <p>{errors.gender}</p>
                            )}
                            <h3> Parâmetros </h3>
                            <Parametros>
                                <Field as={Input} nome="peso(kg)" name="peso" type="number" erro={errors.peso} ></Field>
                                <Field as={Input} nome="altura(cm)" name="altura" type="number" erro={errors.altura}></Field>
                                <Field as={Input} nome="idade" name="idade" type="number" erro={errors.idade}></Field>
                            </Parametros>

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