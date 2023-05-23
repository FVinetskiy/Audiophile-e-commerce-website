import {Link} from 'react-router-dom'
import {Logo} from '../icons/Logo'
import './Footer.scss'
import {Facebook} from '../icons/Facebook'
import {Twitter} from '../icons/Twitter'
import {FC} from 'react'
import {Instagram} from '../icons/Instagram'

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__content'>
          <div className='footer__header'>
            <Logo />
            <ul className='footer-navigation'>
              <li className='footer-navigation__item'>
                <Link to={'/'}>Home</Link>
              </li>
              <li className='footer-navigation__item'>
                <Link to={'/'}>HEADPHONES</Link>
              </li>
              <li className='footer-navigation__item'>
                <Link to={'/'}>SPEAKERS</Link>
              </li>
              <li className='footer-navigation__item'>
                <Link to={'/'}>EARPHONES</Link>
              </li>
            </ul>
          </div>
          <div className='footer__main'>
            <p className='footer__text'>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className='footer__wrap-icon'>
              <ul className='social'>
                <li className='social__item'>
                  <a className='social__link' href='#!'>
                    <Facebook />
                  </a>
                </li>
                <li className='social__item'>
                  <a className='social__link' href='#!'>
                    <Twitter />
                  </a>
                </li>
                <li className='social__item'>
                  <a className='social__link' href='#!'>
                    <Instagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className='footer__copyright'>
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
