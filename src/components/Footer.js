import React from 'react';
import './Footer.scss';
import { Link, BrowserRouter } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Seja membro exclusivo para receber novidades!
        </p>
        <p className='footer-subscription-text'>
          Você pode se desinscrever a qualquer momento.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Digite seu email'
            />
            <button className="inscricao">Inscrever-se</button>
          </form>
        </div>
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>HENTZ © 2021</small>
          <div className='social-icons'>
            <BrowserRouter>
                <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Facebook'
                >
                <FaFacebook />
                </Link>
                <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Instagram'
                >
                <FaInstagram />
                </Link>
                <Link
                className='social-icon-link'
                to={
                    '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                }
                target='_blank'
                aria-label='Youtube'
                >
                <FaYoutube />
                </Link>
            </BrowserRouter>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;