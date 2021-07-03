import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #0B273A;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
      color: white;
      font-size: 14px;
    }
`;
/*
const Subscription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 24px;
    color: #fff;

    p:first-child{
      margin-bottom: 24px;
      font-size: 24px;
    }

    p{
      margin-bottom: 24px;
      font-size: 20px;
    }

    & > p {
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    }
`;

const Formulario = styled.form`
    input {
      padding: 8px 24px;
      border-radius: 2px;
      margin-right: 10px;
      outline: none;
      border: none;
      font-size: 18px;
      margin-bottom: 16px;
      border: 1px solid #fff;
    }

    button {
      font-family: 'Poppins', sans-serif;
      font-weight: 900;
      text-decoration: none;
      padding: 10px 30px;
      font-size: 16px;
      position: relative;
      background-color: #fff;
      color: #000;
      border-radius: 30px;
      cursor: pointer;
    }

    button:hover{
      background-color: #f0424e;
    }
`;
*/
const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    small {
      color: #fff;
      margin-bottom: 16px;
    }

`;

const SocialIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;

`;

const NavLink = styled(Link)`
    color: #fff;
    font-size: 24px;
`;

function Footer() {
  return (
    <Container>
      <SocialMedia>
        <SocialMediaWrap>
          <small>HENTZ © 2021</small>
          <SocialIcon>
            <BrowserRouter>
                <NavLink to='/' target='_blank' aria-label='Facebook'><FaFacebook /></NavLink>
                <NavLink to='/' target='_blank' aria-label='Instagram'><FaInstagram /></NavLink>
                <NavLink to='/' target='_blank' aria-label='Youtube'><FaYoutube /></NavLink>
            </BrowserRouter>
          </SocialIcon>
        </SocialMediaWrap>
      </SocialMedia>
      <p>Desenvolvido por @duxsystems</p>
    </Container>
  );
}

export default Footer;