import {FC} from 'react'
import './Bringing.scss'

const Bringing: FC = () => {
  return (
    <div className='bringing'>
      <div className='bringing__content'>
        <h5 className='bringing__title'>
          Bringing you the <span>best</span> audio gear
        </h5>
        <p className='bringing__text'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img src='/images/Bitmap.jpg' alt='man in headphones' />
    </div>
  )
}

export default Bringing
