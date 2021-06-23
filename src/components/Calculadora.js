import React from 'react';
import './Calculadora.scss';
import NavBar from './NavBar';
import Input from './Input';

import {useHistory} from 'react-router-dom';


const Calculadora = () => {
    let history = useHistory();
    
    const calcular = (param)=>{
        history.push({pathname:"/resultado"});
    }

    return(
        <>  
            <NavBar cor="vermelho"></NavBar>
            <div className="conteudo">
                <div className="calculadora">
                    <h1 className="titulo">CALCULADORA</h1>
                    <form>
                        <h3 className="campo"> Qual seu físico atual? </h3>
                        
                        <select name="fisico" className="select">
                            <option value="magro">Magro</option>
                            <option value="pesonormal">Peso normal</option>
                            <option value="sobrepeso">Sobrepeso</option>
                            <option value="obeso">Obeso</option>
                        </select>
                        <h3 className="campo"> SEXO </h3>
                        <div className="sexo">
                            <input type="radio" id="male" name="gender" value="male" className="gender"/>
                            <label>Masculino</label>
                            <input type="radio" id="female" name="gender" value="female" className="gender"/>
                            <label>Feminino</label>
                        </div>
                        
                        <h3 className="campo"> Parâmetros </h3>

                        <div className="divParams">
                            <Input nome="peso(kg)"></Input>
                            <Input nome="altura(cm)"></Input>
                            <Input nome="idade"></Input>
                        </div>

                        <h3 className="campo"> Nível de atividade </h3>
                        
                        <select name="fisico" className="select atividade">
                            <option value="sedentario">Sedentário</option>
                            <option value="leve">Exercício leve</option>
                            <option value="ativo">Moderadamente ativo</option>
                            <option value="muito">Muito Ativo</option>
                            <option value="muitoAtivo">Extremamente Ativo</option>
                        </select>

                        
                        <div className="calcular">
                            <button type="button" className="botao-calcular btn" onClick={calcular}>CALCULAR</button>
                        </div>
                        
                        
                    </form>
                </div>
            </div>
        </>
        
    );
}

export default Calculadora;