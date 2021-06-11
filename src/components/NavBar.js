import React, { Component } from "react";
import './NavBar.scss';

class NavBar extends Component{
    state = {menu: false};

    toggleMenu = () => {
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
        this.handleClick();
    }

    handleClick = () => {
        this.setState({menu: !this.state.menu});
    }

    render(){
        return(
            <header id="header">
                <a id="logo" href="#home">HENTZ</a>
                <nav id="nav">
                    <button id="btn-mobile" onClick={this.toggleMenu}>
                        <span id="toggle"><i className={this.state.menu ? "fas fa-times":"fas fa-bars" }></i></span>
                    </button>
                    <ul id="menu">
                        <li><a href="#calculadora">CALCULADORA</a></li>
                        <li><a href="#sobre">SOBRE</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
    
}

export default NavBar;