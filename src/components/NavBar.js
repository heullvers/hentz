import styled from 'styled-components';

function NavBar(){
    return(
        <header>
            <Logo>HENTZ</Logo>
            <nav id="nav">
                <ul id="menu">
                    <li><SubMenu href="/calculadora">CALCULADORA</SubMenu></li>
                    <li><SubMenu href="/sobre">SOBRE</SubMenu></li>
                    <li><SubMenu href="/faq">FAQ</SubMenu></li>
                </ul>
            </nav>
        </header>
    );
}

const SubMenu = styled.a`
    color:black;
    text-decoration: none;
`;

const Logo = styled.a`
    color: black;
    text-decoration: none;
    font-size: 50px;
    font-weight: bold;
`;

export default NavBar;