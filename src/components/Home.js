import React  from 'react';
import './Home.scss';
import Nutricao from './../images/nutricao.png';
//import Mulher from './../images/foromulhercortada.png';
import Superior from './Superior';
import NavBar from './NavBar';

import {useHistory} from 'react-router-dom';


const Home = (props) => {
    let history = useHistory();
    function calcular (){
        history.push({pathname:"/calculadora"});
    };

    return(
        <>
            <Superior></Superior>
            <NavBar cor="cinza"></NavBar>
            <section id="home">
                <div id="frase" className="flex-item">
                    <span className="frase">Step<br></br>into<br></br>great-<br></br>ness</span>
                    <div id="subfrase">
                        <span className="subfrase">Find out Exactly what diet training is best for you</span><br></br>
                    </div>
                    <span className="frase-calcular-dieta"><strong>DESEJA CALCULAR SUA DIETA?</strong></span><br></br>
                    <div className="container-button">
                        <button onClick={calcular} className="button-calcular">CALCULAR<i className="fas fa-arrow-right icone-button"></i></button>
                    </div>
                    
                </div>
                <div id="imagem" className="flex-item">
                    <img src={Nutricao} alt="homem musculoso" className="musculoso"/>
                </div>
                
            </section>
        </>
    );
};    

export default Home;
