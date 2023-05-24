import {Link} from 'react-router-dom'
import './MainProduct.scss'

const MainProduct = () => {
  return (
    <div className='main-products'>
      <div className='main-products__item main-products__item--1'>
        <img className='main-products__img1' src='/images/1.png' alt='column' />
        <div className='main-products__text-content'>
          <p className='main-products__title main-products__title--main'>ZX9 SPEAKER</p>
          <p className='main-products__description'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link className='button button--dark' to={'/sssss'}>
            See Product
          </Link>
        </div>
      </div>
      <div className='main-products__item main-products__item--2'>
        <div className='main-products__text-content'>
          <p className='main-products__title'>ZX7 SPEAKER</p>
          <Link className='button button--transparent' to={'/sssss'}>
            See Product
          </Link>
        </div>
        <img
          className='main-products__img2'
          src='/images/2.jpg'
          alt='column on the table'
        />
      </div>
      <div className='main-products__item main-products__item--3'>
        <img src='/images/3.jpg' alt='headphones' />
      </div>
      <div className='main-products__item main-products__item--4'>
        <div className='main-products__text-content'>
          <p className='main-products__title'>YX1 EARPHONES</p>
          <Link className='button button--transparent' to={'/sssss'}>
            See Product
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainProduct
