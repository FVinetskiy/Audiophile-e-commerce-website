import {FC, useState} from 'react'
import {Logo} from '../icons/Logo'
import {Basket} from '../icons/Basket'
import {Link} from 'react-router-dom'
import './Header.scss'
import Modal from '../Modals/Modal'
import BasketContent from '../BasketContent/BasketContent'

const navigation = [
  {
    id: 1,
    name: 'home',
    path: '',
  },
  {
    id: 2,
    name: 'headphones',
    path: 'headphones',
  },
  {
    id: 3,
    name: 'speakers',
    path: 'speakers',
  },
  {
    id: 4,
    name: 'earphones',
    path: 'earphones',
  },
]

const Header: FC = () => {
  const [BasketActive, setBasketActive] = useState(false)

  const openModal = () => {
    setBasketActive(!BasketActive)
  }

  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='header__content'>
            <Logo />
            <nav>
              <ul className='navigation'>
                {navigation.map((link) => (
                  <li key={link.id} className='navigation__item'>
                    <Link to={`/${link.path}`}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button onClick={openModal} className='header__basket'>
              <Basket />
            </button>
          </div>
        </div>
      </header>

      <Modal active={BasketActive} setActive={setBasketActive}>
        <BasketContent />
      </Modal>
    </>
  )
}

export default Header
