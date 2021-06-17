import React, { useState} from "react";
import './NavBar.scss';

const NavBar = (props) => {

    const [menu, menuClick] = useState({
        menuzinho: false
    });

    function toggleMenu (){
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
        handleClick();
    }

    function handleClick () {
        menuClick({menuzinho: !menu.menuzinho});
        console.log(menu);
    }

    return(
        <header id="header" className={props.cor}>
            <a id="logo" href="/" className="logo">HENTZ</a>
            <nav id="nav">
                <button id="btn-mobile" onClick={toggleMenu}>
                    <span id="toggle"><i className={menu.menuzinho ? "fas fa-times":"fas fa-bars" }></i></span>
                </button>
                <ul id="menu">
                    <li><a href="calculadora" className="aba amobile">CALCULADORA</a></li>
                    <li><a href="sobre" className="aba amobile">SOBRE</a></li>
                    <li><a href="faq" className="aba amobile">FAQ</a></li>
                </ul>
            </nav>
        </header>
    );
}
    


export default NavBar;