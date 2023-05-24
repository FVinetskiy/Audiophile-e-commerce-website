import {FC} from 'react'
import './MainBanner.scss'
import {Link} from 'react-router-dom'

const MainBanner: FC = () => {
  return (
    <section className='main-banner'>
      <div className='container'>
        <div className='main-banner__content'>
          <div className='main-banner__wrap-text'>
            <p className='main-banner__text'>NEW PRODUCT</p>
            <h1 className='main-banner__title'>XX99 Mark II Headphones</h1>
            <p className='main-banner__description'>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link className='button' to={'/product/1'}>
              See Product
            </Link>
          </div>
          <img
            className='main-banner__back'
            src='/images/Bitmap.png'
            alt='bitmap'
          />
        </div>
      </div>
    </section>
  )
}

export default MainBanner
