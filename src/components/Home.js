import React, { Component }  from 'react';
import './Home.scss';
import Musculoso from './../images/fotohome.png';
import Nutricao from './../images/nutricao.png';
//import Mulher from './../images/foromulhercortada.png';
import Superior from './Superior';
import NavBar from './NavBar';

class Home extends Component{

    render(){
        return(
            <>
                <Superior></Superior>
                <NavBar cor="cinza"></NavBar>
                <section id="home">
                    <div id="frase" className="flex-item">
                        <span className="frase">STEP<br></br>INTO<br></br>GREAT-<br></br>NESS</span>
                        <div id="subfrase">
                            <span className="subfrase">FIND OUT EXACTLY WHAT DIET TRAINING IS BEST FOR YOU</span><br></br>
                        </div>
                        <span className="frase-calcular-dieta"><strong>DESEJA CALCULAR SUA DIETA?</strong></span><br></br>
                        <div className="container-button">
                            <button className="button-calcular">CALCULAR<i className="fas fa-arrow-right icone-button"></i></button>
                        </div>
                        
                    </div>
                    <div id="imagem" className="flex-item">
                        <img src={Nutricao} alt="homem musculoso" className="musculoso"/>
                    </div>
                    
                </section>
            </>
        );
    }
}

export default Home;
