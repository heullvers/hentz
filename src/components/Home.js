import React, { Component }  from 'react';
import './Home.scss';
import Musculoso from './../images/fotohome.png';

class Home extends Component{

    render(){
        return(
            <section id="home">
                <div id="frase">
                    <span className="frase">STEP<br></br>INTO<br></br>GREAT-<br></br>NESS</span>
                    <div id="subfrase">
                        <span className="subfrase">FIND OUT EXACTLY WHAT DIET TRAINING IS BEST FOR YOU</span><br></br>
                    </div>
                    <span className="frase-calcular-dieta"><strong>DESEJA CALCULAR SUA DIETA?</strong></span><br></br>
                    <div className="container-button">
                        <button className="button-calcular">CALCULAR<i className="fas fa-arrow-right icone-button"></i></button>
                    </div>
                    
                </div>
                <div id="imagem">
                    <img src={Musculoso} alt="homem musculoso" className="musculoso"/>
                </div>
                
            </section>
        );
    }
}

export default Home;
