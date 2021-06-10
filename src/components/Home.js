import React, { Component }  from 'react';
import './Home.scss';
import Musculoso from './../images/fotohome.png';

class Home extends Component{

    render(){
        return(
            <section id="home">
                <img src={Musculoso} alt="homem musculoso" className="musculoso"/>
            </section>
        );
    }
}

export default Home;
