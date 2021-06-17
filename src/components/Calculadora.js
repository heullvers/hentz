import React, { Component } from 'react';
import './Calculadora.scss';
import NavBar from './NavBar'

class Calculadora extends Component{
    render(){
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
                                <div className="age-weight-height">
                                    <label className="custom-field">
                                        <input className="input-age-weight-height" type="number" placeholder="Idade" name="age"/>                      
                                    </label>
                                </div>

                                <div className="age-weight-height">
                                    <label className="custom-field">
                                        <input className="input-age-weight-height" type="number" placeholder="Peso(kg)" name="weight"/>                      
                                    </label>
                                </div>

                                <div className="age-weight-height">
                                    <label className="custom-field">
                                        <input className="input-age-weight-height" type="number" placeholder="Altura(cm)" name="height"/>                      
                                    </label>
                                </div>
                            </div>
                            
                            <div className="calcular">
                                <button className="botao-calcular btn">CALCULAR</button>
                            </div>
                            
                            
                        </form>
                    </div>
                </div>
            </>
            
        );
    }
}

export default Calculadora;